(function () {
    'use strict';

    angular.module('ToDoApp')
        .controller('FooterController', FooterController);
    FooterController.$inject = ['$scope','$mdDialog'];
    function FooterController($scope,$mdDialog) {
        var fo = this;
      	
      	fo.showAdd = showAdd;

      	function showAdd(ev){
      		$mdDialog.show({
                controller: "HomeController as ho",
                templateUrl: '/app/pages/add/add.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
            .then(function (answer) {
                fo.status = 'You said the information was "' + answer + '".';
            }, function () {
                fo.status = '132';
            });
      	}

      
    }
})();