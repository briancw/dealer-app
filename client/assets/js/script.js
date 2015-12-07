(function() {
    var app = angular.module('test', ['ngMaterial']);

    app.controller('StoreController', function() {
        // this.foo = foothing;
        this.run = function() {
            return 'fooey';
        }
    });
})();

