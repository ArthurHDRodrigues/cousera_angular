(function (){
'use strict';

angular.module('filterApp',[])

.controller('filterAppController',filterAppController)
.filter('name',filterFactory);


filterAppController.$inject = ['$scope','$filter','nameFilter']; //deve necessariamente ser nome_do_filter+Filter

function filterAppController($scope,$filter,nameFilter){
    $scope.itens = "";
    $scope.result = "";
    $scope.result_html = "";
    
    $scope.checkIfTooMuch = function (){
    
        $scope.result_html = filterFactory()($scope.itens,"valor");//"Please enter data first";
        $scope.result = $filter('uppercase')($scope.result_html);
    
    }
}

function filterFactory(){
    return function(input,val){
        input = input || "";
        val = val || "";
        var output = input+val;
    return output;
    }

}

})();
