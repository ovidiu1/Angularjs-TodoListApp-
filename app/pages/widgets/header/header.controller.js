(function () {
    'use strict';

    angular.module('ToDoApp')
        .controller('HeaderController', HeaderController);
    HeaderController.$inject = ['$scope','siteMenuConstant'];
    function HeaderController($scope,siteMenuConstant) {
        var hd = this;
        hd.message = "HeaderController Loaded!";

        ho.testController = testController;

        function testController(){
            console.log(hd.message);
        }

        //call
        hd.testController();
    }
})();