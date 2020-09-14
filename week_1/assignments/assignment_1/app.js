(function (){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);


MsgController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.itens = "";
    $scope.result = "";

    
    $scope.checkIfTooMuch = function (){
    
    
    var list_of_itens = $scope.itens.split(',');
    var number_of_itens = list_of_itens.length;
    
    if (number_of_itens == 1 && list_of_itens[0] == ""){
        $scope.result = "Please enter data first";
    }
    else if(number_of_itens <= 3){
        $scope.result = "Enjoy!";
    }
    else{
        $scope.result = "Too much!";
    }
    }
}

})();
