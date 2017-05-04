(function () {
    'use strict';

    angular.module('ToDoApp')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope','ItemData','$filter'];
    function HomeController($scope,ItemData,$filter) {
        var ho = this;

         ho.getData = getData;
         ho.addItem = addItem;
         ho.status = status;

            ho.obj = new Date();
            ho.format = $filter('date')(ho.obj, "dd/MM/yyyy");
            ho.time = $filter('date')(ho.obj, "hh:mm");
            console.log(ho.data);
            console.log(ho.time);            

        function getData(){
           ho.data = ItemData.Data;
           console.log(ho.data)
        }

        function status(){
            if (ho.data.status == "Done!"){
                return ho.st = done;
            }else{
                return ho.st = progress;
            }
        }

        function addItem(){
            var newItem ={
                category:ho.category,
                content:ho.item,
                status:'In Progress!',
                date:ho.format,
                time:ho.time
            };
            ho.data.push(newItem);
        }
        ho.getData();   
        ho.test = ho.category;
        console.log(ho.test);
    }
})();