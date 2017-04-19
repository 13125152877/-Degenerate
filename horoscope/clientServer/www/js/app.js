// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

  .config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    //设置 ios Android tabs 定位在底部
    $ionicConfigProvider.tabs.position("bottom");

    //路由的模板
    $stateProvider.state("main",{
      url:"/main",
      abstract:true,
      templateUrl:"templates/main.html",
      controller:"mainController"
    });
    //发现
    $stateProvider.state("main.starTest",{
      url:"/starTest",
      views:{
        "main-starTest":{
          templateUrl:"templates/starTest.html",
          controller:"starTestController"
        }
      }
    });

    //闹钟
    $stateProvider.state("main.starFriend",{
      url:"/starFriend",
      views:{
        "main-starFriend":{
          templateUrl:"templates/starFriend.html",
          controller:"starFriendController"
        }
      }
    });
    //好友
    $stateProvider.state("main.starWall",{
      url:"/starWall",
      views:{
        "main-starWall":{
          templateUrl:"templates/starWall.html",
          controller:"starWallController"
        }
      }
    });
    //我的
    $stateProvider.state("main.starData",{
      url:"/starData",
      views:{
        "main-starData":{
          templateUrl:"templates/starData.html",
          controller:"starDataController"
        }
      }
    });

    $urlRouterProvider.otherwise("/main/starTest");
  });


