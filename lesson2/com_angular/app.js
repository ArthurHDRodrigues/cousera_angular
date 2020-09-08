(function (){
'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController',function ($scope){
$scope.name = "";
$scope.totalValue = 0;

$scope.displayNumeric = function(){
var totalNameValue = count($scope.name);

$scope.totalValue = totalNameValue;
};



function count(string){
var temp = 0;
for (var i=0;i<string.length;i++){
    temp += string.charCodeAt(i);
}

return temp;
};



});

})();
