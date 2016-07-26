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
      .when('/practical-life',{
          templateUrl: '/partials/partial-practical.html',
      })
      .when('/sensorial',{
          templateUrl: '/partials/partial-sensorial.html',
      })
      .when('/mathematics',{
          templateUrl: '/partials/partial-mathematics.html',
      })
      .when('/language',{
          templateUrl: '/partials/partial-language.html',
      })
      .when('/science',{
          templateUrl: '/partials/partial-science.html',
      })
      .when('/geography',{
          templateUrl: '/partials/partial-geography.html',
      })
      .when('/art',{
          templateUrl: '/partials/partial-art.html',
      })
      .when('/form',{
          templateUrl: '/partials/partial-form.php',
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);