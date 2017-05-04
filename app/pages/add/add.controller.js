(function () {
    'use strict';

    angular.module('ToDoApp')
        .controller('AddController', AddController);
    AddController.$inject = ['$scope'];
    function AddController($scope) {
        var ad = this;
       
       ad.test = test;

       function test(){
        alert("add");
       }

       //call
       
    }
})();