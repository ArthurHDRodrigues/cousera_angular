(function (){
'use strict';

angular.module('filterApp',[])

.controller('filterAppController',filterAppController);


filterAppController.$inject = ['$scope','$filter'];

function filterAppController($scope,$filter){
    $scope.itens = "";
    $scope.result = "";
    $scope.result_html = "";

    
    $scope.checkIfTooMuch = function (){
    

        $scope.result_html = "Please enter data first";
        $scope.result = $filter('uppercase')($scope.result_html);
    
    }
}



})();
