(function(){
    'use strict';
    angular.module("ToDoApp")
         .controller("HelpController",HelpController);
         HelpController.$inject = ['$scope'];
         function HelpController($scope){
             var hc = this;


             hc.controllerTest = controllerTest;

             function controllerTest(){
                  hc.message  = "HelpController Load!"
                  console.log(hc.message); 
             }
             hc.controllerTest();
        }
})();