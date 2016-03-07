angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// .controller('VersionsCtrl', function($scope) {
//   $scope.versions = [
//     { title: '1954 (current version)', id: 1 },
//     { title: '1923 to 1954', id: 2 },
//     { title: '1892 to 1923', id: 3 },
//     { title: '1892 (first version)', id: 4 }
//   ];
// })

.controller('firstVersionCtrl', function($scope1) {
  $scope1.firstVersion = [
    { title: '1892 (first version)', id: 1 }
  ];
})

.controller('secondVersionCtrl', function($scope2) {
  $scope2.secondVersion = [
    { title: '1892 to 1923', id: 1 }
  ];
})

.controller('thirdVersionCtrl', function($scope3) {
  $scope3.thirdVersion = [
    { title: '1923 to 1954', id: 1 }
  ];
})

.controller('fourthVersionCtrl', function($scope4) {
  $scope4.fourthVersion = [
    { title: '1954 (current version)', id: 1 }
  ];
})

// .controller('VersionCtrl', function($scope, $stateParams) {
// });

// .controller('firstVersionCtrl', function($scope1, $stateParams1) {
// });
//
// .controller('secondVersionCtrl', function($scope2, $stateParams2) {
// });
//
// .controller('thirdVersionCtrl', function($scope3, $stateParams3) {
// });

.controller('fourthVersionCtrl', function($scope4, $stateParams4) {
});
