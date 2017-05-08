(function () {
    'use strict';

    angular.module('ToDoApp')
       
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope','ItemData','$filter','$mdToast'];
    function HomeController($scope,ItemData,$filter,$mdToast) {
        var ho = this;
        ho.obj = new Date();

         ho.getData = getData;
         ho.addItem = addItem;
         ho.selectItem = selectItem;
         ho.removeItem = removeItem;
         ho.editItem = editItem;
         ho.doneEdit = doneEdit;
         ho.toastAction = toastAction;

        
        ho.format = $filter('date')(ho.obj, "dd/MM/yyyy");
        ho.time = $filter('date')(ho.obj, "HH:mm");
        
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
            ho.toastAction();
        }   

        function selectItem(item){
            ho.item = item;
            
        }

        function removeItem(item){
            var index = ho.data.indexOf(item);
            ho.data.splice(index, 1);
        }
        
        function editItem(item){
            item.editing = true;
           
        }

        function doneEdit(item){
            item.editing = true;            
        }

        function toastAction(){
            $mdToast.show(
            $mdToast.simple()
            .textContent('Item saved!',ho.category)
            .position('bottom right')
            .hideDelay(3000)
            );
        }       
        ho.getData();   
    }
})();