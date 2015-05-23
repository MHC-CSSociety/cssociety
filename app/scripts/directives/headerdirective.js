'use strict';

/**
 * @ngdoc directive
 * @name cssocietyApp.directive:navrDirective
 * @description
 * # header
 */
angular.module('cssocietyApp')
  .directive('headerDirective', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/header.html'
    };
  });
