angular.module("starter.controllers",[])
    //分栏控制器
    .controller("tabController",function (DBManager) {
        //打开数据库
        DBManager.openDB("recorders",1.0);
        //创建一张表
        DBManager.createTable("CREATE TABLE book " +
          "('title' varchar(255) NOT NULL,'des' NOT NULL,'alert_time'," +
          "'status','is_public','lat','lng','address','date','is_online','is_finish')")
          .then(function (result) {
            console.log(result);
          }).catch(function (error) {
          console.log(error);
        });
    })

    //首页的控制器
    .controller("recorderController",function ($scope,DBManager,$ionicLoading,$timeout,timeTool,$ionicListDelegate) {

        function loadDate() {
          $ionicLoading.show({
            //等待视图
            template:"正在努力加载中..."
          });
          //一个空数组
          $scope.recorders=[];
          DBManager.searchDate("SELECT * FROM book ")
            .then(function (result) {
              for (var i = 0; i < result.data.length; i++) {
                var timeStamp = result.data[i].alert_time;

                $scope.recorders.push(result.data[i]);
                if ($scope.recorders[i].alert_time){
                  $scope.recorders[i].alert_time = timeTool.HoursMinuteSecond(timeStamp);
                  //$scope.recorders[i].alert_time = timeTool.week(timeStamp);

                }

              }
              $ionicLoading.hide();
              // 停止广播ion-refresher
              $scope.$broadcast('scroll.refreshComplete');
              // $scope.recorders=result.data;
              console.log($scope.recorders);
            }).catch(function (error) {
            $ionicLoading.hide();
            //如果加载失败 提示错误信息
            $ionicLoading.show({
              template:error.message
            });
            $timeout(function(){
              $ionicLoading.hide();
            },2000)
          })
        }
        loadDate();
        $scope.reload=function () {
        loadDate();
      };

        $scope.deleteItem=function (info) {
            $ionicLoading.show({
              template:"正在删除中..."
            });
            DBManager.deleteDate("DELETE FROM book WHERE date="+info.date).then(function (result) {
              $ionicLoading.hide();
                //获得要删除元素的下标
                var deleteIndex=$scope.recorders.indexOf(info);
                //在数组中删除并且在数据库中删除
                $scope.recorders.splice(deleteIndex,1);
                $ionicListDelegate.closeOptionButtons();


            }).catch(function (error) {
              $ionicLoading.show({
                template:error.message
              });
              $timeout(function(){
                $ionicLoading.hide();
              },2000)
            });

        }

    })


    //录入数据页面控制器
    .controller("RecorderWriteController",function ($scope,writeService, $ionicActionSheet,$ionicPopup,DBManager,$ionicNavBarDelegate) {
        /*
        * writeInfo 记录录入数据的数据模型
        * title 标题
        * des 内容
        * alertTime 提醒时间 精确到毫秒的时间戳
        * status 紧急状态 0非常紧急 1普通 2不紧急
        * isPublic 是否公开
        * location 定位 lat log 经纬度的值  address
        * */
        $scope.writeInfo={
            title:"",
            des:"",
            alertTime:0,
            status:{
              message:"",
              statusNum:1
            },
            Public:{
              message:"私有",
              isPublic:false
            },
            location:{
              address:"定位",
              point:{

              }
            }
        };

        /*
       * addEvent 给录入页面添加按钮事件(公共事件)
       * 0 提醒时间
       * 1 紧急状态
       * 2 定位
       * 3 是否公开
       * */
        $scope.addEvent=function (type) {
            console.log(type);
                switch (type){
                    case 0:
                      this.writeInfo.alertTime=writeService.alertTime();
                    break;
                    case 1:
                      this.writeInfo.status=writeService.statusDanger(this.writeInfo.status.statusNum);
                    break;
                    case 2:
                      writeService.getCurLocation().then(function (info) {
                        /*$scope.writeInfo.location=info;*/
                        $scope.$apply(function () {
                          $scope.writeInfo.location=info;
                        })
                      });
                    break;
                  case 3:
                    this.writeInfo.Public.message =this.writeInfo.Public.isPublic ?"公开":"私有";
                    //console.log($scope.writeInfo.Public);
                    default:
                }
        };

        //保存到本地的方法
        function saveLocal(info) {
          //alert("本地")
          var date = new Date();
          DBManager.addData("INSERT INTO book " +
            "('title','des','alert_time','status','is_public','lat','lng','address','date', " +
            "  'is_online','is_finish')  VALUES(?,?,?,?,?,?,?,?,?,?,?);",
            [info.title,info.des,info.alertTime,info.status.statusNum,info.Public.isPublic,
              info.location.point.lat,info.location.point.lng,info.location.address,date.getTime(),
              0,0]).then(function (result) {
            console.log(result);
          }).catch(function (error) {
            console.log(error);
          });


        }
        //保存到云端的方法
        function saveClouds(info) {
          alert("云端");
          //todo:判断是否登录
          //保存到云端的时候同时保存一份到本地
          saveLocal(info)
        }
        //点击保存触发的方法
        $scope.toSave=function (info) {
            //保存到本地或者云端 使用alertSheet
            if(this.writeInfo.title.length>0&&this.writeInfo.des.length>0){
                // 显示操作表
                $ionicActionSheet.show({
                  buttons: [
                    {text: '保存到云端'},
                    {text: '保存到本地'}
                  ],
                  titleText: '保存记录',
                  cancelText: '取消',
                  buttonClicked: function (index) {
                    //console.log(index);
                    //如果是0 就是假的
                    index?saveLocal(info):saveClouds(info);
                    $ionicNavBarDelegate.back();
                    return true;
                  }
                })

            }else {
              //未录入标题或者内容
              $ionicPopup.alert({
                title: '温馨提示',
                template: '亲，你还没填写标题和内容哦！',
                buttons:[{
                  text:"OK",
                  type:"button-balanced"
                }]
              });


            }
        };

    })



;
