// var myApp = angular.module('myApp',[]);

// function MyCtrl($scope) {
//     $scope.myForm = {};
    
//     $scope.processForm = function(){
//         alert("Submitting form..");
//     }
// }

angular.module('Ladybug', [])
    .controller('submitController', ['$scope', function processForm($scope) {
        $scope.myForm = {};
        $scope.processForm = function(){
            alert("Submitting form..");
        };
    }]);