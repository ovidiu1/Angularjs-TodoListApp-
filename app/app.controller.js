(function() {

    'use strict';

    angular.module('ToDoApp')
    .filter('workFilter',function(){
            return function(input){
                var out = [];
                angular.forEach(input,function(item){
                    if(item.category === 'work'){
                        out.push(item)
                    }
                })
                return out;
            }
        })
         .filter('lifeFilter',function(){
            return function(input){
                var out = [];
                angular.forEach(input,function(item){
                    if(item.category === 'personal_life'){
                        out.push(item)
                    }
                })
                return out;
            }
        })
        .filter('wishFilter',function(){
            return function(input){
                var out = [];
                angular.forEach(input,function(item){
                    if(item.category === 'wishlist'){
                        out.push(item)
                    }
                })
                return out;
            }
        })
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
