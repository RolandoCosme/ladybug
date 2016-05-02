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
      });

  $locationProvider.html5Mode(true);
}]);

