angular.module("starter.services",[])
  .service("writeService",function () {

      //提醒时间
      function alertTime() {
        var date = new Date();
        return date.getTime();
      }
      /* 紧急状态
       *  0非常紧急 1普通 2不紧急
       * */
      function statusDanger(s) {
        //s=0 num:1  s=1 num:2 s=2 num:0
        var num = s >= 2 ? 0 : ++s;
        var info = {};
        switch (num) {
          case 0:
            info.message = "紧急事件";
            break;
          case 1:
            info.message = "普通事件";
            break;
          case 2:
            info.message = "推迟事件";
            break;
          default:
        }
        info.statusNum = num;
        return info;
      }
      //获取用户位置
      function getCurLocation() {

      var promise = new Promise(function(res,reject){
        var geo = new BMap.Geolocation();

        geo.getCurrentPosition(function (result) {
          if (this.getStatus()==BMAP_STATUS_SUCCESS){

            //获得到定位的位置
            var point = result.point;
            var coder = new BMap.Geocoder();
            coder.getLocation(point,function (rs) {
              //获得到 地址的对象
              var addComp = rs.addressComponents;
              var address = addComp.province + " " + addComp.city + " " + addComp.district + " " + addComp.street + " " + addComp.streetNumber;
              //反地理编码成功之后  把坐标 和 位置信息 传递到 使用promise 的地方
              res({
                point:point,
                address:address
              });

            });

          }
        });
      });
      return promise;
    }
      this.alertTime=alertTime;
      this.statusDanger=statusDanger;
      this.getCurLocation=getCurLocation;
  })

  .service("DBManager",function () {
    var self=this;
    //打开数据库的方法
    this.openDB=function (dbName,dbVersion) {
      /*
       * 打开数据库
       * name  数据库的名字
       * version 数据库的版本
       * displayName  数据库显示的名字
       * estimatedSize 数据库的容量
       * creationCallback 操作完成之后的回调函数
       * */
      this.db=openDatabase(dbName,dbVersion,dbName,10*1024*1204);
    };
    //创建表的方法
    this.createTable=function (sql) {
      return new Promise(function (res,reject) {
        if(self.db){
          self.db.transaction(function (ts) {
            //事物上下文对象执行sql
            //
            ts.executeSql(sql,[],function (result) {
              //建表成功 回应的内容
              res({
                code:2000,
                message:"建表成功",
                data:result
              })
            },function (error) {
              //建表失败 回应的内容
              reject({
                code:2001,
                message:"建表失败",
                data:error
              })
            });
          })
        }else{
          reject({
            code:3000,
            message:"请打开数据库"
          })
        }
      })
    };
    //添加数据的方法
    /*
    * 添加数据的方法
    *  sql :string sql 语句
    *  values ：array 插入的值 数组
    * */
    this.addData=function (sql,values) {
      return new Promise(function (res,reject) {
        if(self.db){
          self.db.transaction(function (ts) {
            ts.executeSql(sql,values,function (result) {
              res({
                code:2000,
                message:"添加数据成功",
                data:result
              })
            },function (error) {
              reject({
                code:2002,
                message:"添加数据失败",
                data:error

              })
            })
          })
        }else{
          reject({
            code:3000,
            message:"请打开数据库"
          })
        }
      })
    };
    //更新数据的方法
    this.upDate=function (sql) {
      return new Promise(function (res,reject) {

      })
    };
    //删除的方法
    this.deleteDate=function (sql) {
      return new Promise(function (res,reject) {

      })
    };
    //查找的方法
    this.searchDate=function (sql) {
      return new Promise(function (res,reject) {
        if(self.db){
          self.db.transaction(function (ts) {
            ts.executeSql(sql,[],function (result) {
              res({
                code:2000,
                message:"查询数据成功",
                data:result.rows
              })
            },function (error) {
              reject({
                code:2003,
                message:"查询数据失败",
                data:error

              })
            })
          })
        }else{
          reject({
            code:3000,
            message:"请打开数据库"
          })
        }
      })
    };




  })
;






