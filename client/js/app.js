angular.module('ladybug', [
  'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partials/partial-home.html',
        controller: 'homeController'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'partials/partial-login.html',
        controller: 'loginController'
      })

      .state('register', {
        url: '/register',
        templateUrl: 'partials/partial-register.html',
        controller: 'registerController'
      })

      .state('userProfile', {
        url: '/users/:user',
        templateUrl: 'partials/partial-userProfile.html',
        controller: 'userProfileController'
      });


  $locationProvider.html5Mode(true);
}]);

