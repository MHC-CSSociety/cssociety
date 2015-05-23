'use strict';

/**
 * @ngdoc overview
 * @name cssocietyApp
 * @description
 * # cssocietyApp
 *
 * Main module of the application.
 */
angular
  .module('cssocietyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/programs', {
        templateUrl: 'views/programs.html',
        controller: 'ProgramsCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/community', {
        templateUrl: 'views/community.html',
        controller: 'CommunityCtrl'
      })
      .when('/sponsor', {
        templateUrl: 'views/sponsor.html',
        controller: 'SponsorCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .when('/header', {
        templateUrl: 'views/header.html',
        controller: 'HeaderCtrl'
      })
      .when('/growth', {
        templateUrl: 'views/growth.html',
        controller: 'GrowthCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
