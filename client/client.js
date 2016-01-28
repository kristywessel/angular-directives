var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.message = "Hello Angular";
}]);