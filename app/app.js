'use strict';

// Declare app level module which depends on views, and components
angular.module('Fabec', [
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
      })
      .when('/partners', {
          templateUrl: 'app/views/partners/partners.tpl.html'
      });
}])
.service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        if(stopY>100){
            stopY = stopY-100;
        }
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 50) speed = 50;
        var step = Math.round(distance /50);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});