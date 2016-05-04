angular.module('Ladybug', [ 
  'ngRoute'
 ])
.config(['$routeProvider', function($routeProvider){

    $routeProvider
      .when('/home', {
        templateUrl: '/partials/partial-home.html'
      })
      .when('/gallery',{
          templateUrl: '/partials/partial-gallery.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

    // $routeProvider
    //   .when('/home', {
    //     url: '/home',
    //     templateUrl: '/partials/partial-home.html',
    //     controller: 'homeController'
    //   });
     // $locationProvider.html5Mode(true);

$("#carousel").carousel();