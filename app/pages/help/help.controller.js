(function(){
    'use strict';
    angular.module("ToDoApp")
         .controller("HelpController",HelpController);
         HelpController.$inject = ['$scope'];
         function HelpController($scope){
             var hc = this;
        }
})();