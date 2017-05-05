(function () {
    'use strict';

    angular.module('ToDoApp')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope','ItemData','$filter'];
    function HomeController($scope,ItemData,$filter) {
        var ho = this;

         ho.getData = getData;
         ho.addItem = addItem;
         ho.selectItem = selectItem;
         ho.removeItem = removeItem;
         ho.editItem = editItem;
         ho.doneEdit = doneEdit;
        
        ho.obj = new Date();
        ho.format = $filter('date')(ho.obj, "dd/MM/yyyy");
        ho.time = $filter('date')(ho.obj, "hh:mm");
           
        function getData(){
           ho.data = ItemData.Data;
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

        function selectItem(item){
            ho.item = item;
            console.log(ho.item);
        }

        function removeItem(item){
            var index = ho.data.indexOf(item);
            ho.data.splice(index, 1);
        }
        
        function editItem(item){
            item.editing = true;
            console.log(item.editing);
        }

        function doneEdit(item){
            item.editing = true;            
        }

        ho.getData();   
    }
})();