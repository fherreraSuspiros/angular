var app = angular.module('app', []);

app.controller('miCtrl', ['$scope', function ($scope)
{
  $scope.mensaje = 'Mensaje desde el controlador';
  $scope.logPadre = function()
  {
    alert()
  }

}]);