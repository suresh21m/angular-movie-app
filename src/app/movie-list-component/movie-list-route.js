'use strict';
module.exports = function(movieApp) {
    movieApp.config(['$stateProvider', '$urlRouterProvider'], function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/movies');
        $stateProvider.state('movies', {
            url: '/movies'
        });
    });
};