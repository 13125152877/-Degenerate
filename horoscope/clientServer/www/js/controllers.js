(function () {
  angular.module("starter.controllers",[])
  //分栏控制器
    .controller("mainController",function () {

    })
    //星测试页面控制器
    .controller("starTestController",function ($scope,$ionicSlideBoxDelegate) {
      $scope.tabNames=['今天','明天','本周','本月','本年'];
      $scope.slectIndex=0;
      // $scope.activeSlide=function(index){//点击时候触发
      //   $scope.slectIndex=index;
      //   $ionicSlideBoxDelegate.slide(index);
      // };
      $scope.slideChanged=function(index){//滑动时候触发
        $scope.slectIndex=index;
      };


    })

    //星友圈页面控制器
    .controller("starFriendController",function () {

    })
    //星愿墙页面控制器
    .controller("starWallController",function () {

    })
    //星资料页面控制器
    .controller("starDataController",function () {

    })
  ;

})();
