'use strict';

// Declare app level module which depends on views, and components
angular.module('fabech', [
      'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'})
      .when('/home', {
      templateUrl: 'app/views/home/home.tpl.html'
  })
      .when('/about', {
          templateUrl: 'app/views/about/about.tpl.html'
      })
      .when('/careers', {
          templateUrl: 'app/views/careers/careers.tpl.html'
      })
      .when('/contact', {
          templateUrl: 'app/views/contact/contact.tpl.html'
      })
      .when('/services', {
          templateUrl: 'app/views/services/services.tpl.html'
      })
      .when('/solutions', {
          templateUrl: 'app/views/services/services.tpl.html'
      });
}]);