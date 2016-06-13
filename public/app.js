angular.module('Ladybug', [ 
  'ngRoute'
 ])
.config(['$routeProvider', function($routeProvider){

    $routeProvider
      .when('/home', {
        templateUrl: '/partials/partial-home.html'
      })
      .when('/gallery',{
          templateUrl: '/partials/partial-gallery.html',
          // controller: 'galleryController'
      })
      .when('/gallery2',{
          templateUrl: '/partials/partial-grid.html',
          controller: 'gridController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);