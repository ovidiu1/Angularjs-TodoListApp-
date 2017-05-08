(function () {
    'use strict';

    angular.module('ToDoApp')
        .controller('FooterController', FooterController);
    FooterController.$inject = ['$scope','$mdDialog'];
    function FooterController($scope,$mdDialog) {
        var fo = this;
      	
      	fo.showAdd = showAdd;
        fo.help = help;
        fo.test = test;

      	function showAdd(ev){
      		$mdDialog.show({
                controller: "HomeController as ho",
                templateUrl: '/app/pages/add/add.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
      	}
       
       function help(ev){
        $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose()
        .title('Help')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
       }

       function test(ev){
         	$mdDialog.show({
                controller: "HelpController as hc",
                templateUrl: '/app/pages/help/help.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
       }
    }
})();