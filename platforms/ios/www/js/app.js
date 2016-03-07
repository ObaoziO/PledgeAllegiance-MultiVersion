// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })

  // .state('app.browse', {
  //     url: '/browse',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/browse.html'
  //       }
  //     }
  //   })

  .state('app.versions', {
    url: '/versions',
    views: {
      'menuContent': {
        templateUrl: 'templates/versions.html',
        controller: 'VersionsCtrl'
      }
    }
  })

    .state('app.firstVersion', {
      url: '/firstVersion',
      views: {
        'menuContent': {
          templateUrl: 'templates/firstVersion.html',
          controller: 'firstVersionCtrl'
        }
      }
    })

    .state('app.secondVersion', {
      url: '/secondVersion',
      views: {
        'menuContent': {
          templateUrl: 'templates/secondVersion.html',
          controller: 'secondVersionCtrl'
        }
      }
    })

    .state('app.thirdVersion', {
      url: '/thirdVersion',
      views: {
        'menuContent': {
          templateUrl: 'templates/thirdVersion.html',
          controller: 'thirdVersionCtrl'
        }
      }
    })

    .state('app.fourthVersion', {
      url: '/fourthVersion',
      views: {
        'menuContent': {
          templateUrl: 'templates/fourthVersion.html',
          controller: 'fourthVersionCtrl'
        }
      }
    })

//   .state('app.single', {
//     url: '/versions/:versionId',
//     views: {
//       'menuContent': {
//         templateUrl: 'templates/version.html',
//         controller: 'VersionCtrl'
//       }
//     }
//   });
//   // if none of the above states are matched, use this as the fallback
//   $urlRouterProvider.otherwise('/app/versions');
// });
.state('app.single', {
  url: '/fourthVersion/:fourthVersionId',
  views: {
    'menuContent': {
      templateUrl: 'templates/fourthVersion.html',
      controller: 'fourthVersionCtrl'
    }
  }
});
// if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/app/versions');
});
