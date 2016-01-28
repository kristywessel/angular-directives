var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.message = 'Hello User!';
    $scope.end = 'money';
    $scope.endTwo = '123';
    $scope.thing = false;
    $scope.names = ['Pizza', 'Unicorns', 'Robots'];
    $scope.my = {favorite: 'Unicorns'};
}]);