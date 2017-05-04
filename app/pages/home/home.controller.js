(function () {
    'use strict';

    angular.module('ToDoApp')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope','ItemData'];
    function HomeController($scope,ItemData) {
        var ho = this;

         ho.getData = getData;
    
        function getData(){
            ho.data = ItemData.Data;
            console.log(ho.data);
        }

        ho.getData();   
    }
})();