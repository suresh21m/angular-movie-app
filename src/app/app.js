'use strict';

var angular = require('angular');
var angularUiRouter = require('angular-ui-router');
var uiBootstrap = require('angular-ui-bootstrap');
var movieApp = angular.module('movieApp', [angularUiRouter, uiBootstrap]);
require('./movie-list-component/movie-list-component.js')(movieApp);
require('./movie-rating-component/movie-rating-component.js')(movieApp);