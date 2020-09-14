(function (){
'use strict';

angular.module('MsgApp',[])

.controller('MsgController',MsgController);


MsgController.$inject = ['$scope'];

function MsgController($scope){
    $scope.name = "Bödhy";
    
    $scope.sayMessage = function(){
        return 'olaaaa';
        };
        
    $scope.tag_begin='<p>';
    $scope.tag_end='</p>';
    $scope.img = '';
    $scope.turn_red = function (){
    $scope.status='b';
    $scope.msg='mudou';
    $scope.img='img/dot.jpeg';
    }
}

})();
