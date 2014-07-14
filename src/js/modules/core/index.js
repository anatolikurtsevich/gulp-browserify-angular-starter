'use strict';

var angular = require('angular');
var AppCtrl = require('./controllers/AppCtrl');


var ngModule = angular.module('app.core', [])
    .controller('AppCtrl', ['$scope', AppCtrl]);


module.exports = ngModule;