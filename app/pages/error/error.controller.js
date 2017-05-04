(function () {
    'use strict';

    angular.module('ToDoApp')
        .controller('ErrorController', ErrorController);
    ErrorController.$inject = ['$rootScope','$scope'];
    function ErrorController($rootScope, $scope) {
        var er = this;
        er.message = "ErrorController Loaded!";
        console.log(er.message);
    }
})();