(function() {

    'use strict';

    angular.module('ToDoApp')
        .controller('AppController', AppController)
        
    AppController.$inject = ['$rootScope'];
    function AppController($rootScope) {
        var ap = this;

        ap.message = "AppController Loaded!";
        ap.testController = testController;

        function testController(){
        	console.log(ap.message);
        }

        //call
        ap.testController();
    };

})();
