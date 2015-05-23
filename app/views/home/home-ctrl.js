/**
 * Created by Tiru on 5/16/15.
 */

angular.module('fabech').controller('homeController',function($scope,$rootScope,$anchorScroll,$location,$timeout,$routeParams,$document){
    $rootScope.$on('$routeChangeSuccess', function(){
        //window.scrollTo(0,50);

        $location.hash($routeParams.scrollTo);
        $anchorScroll.yOffset = 100;
        $anchorScroll();

        $document.find('#nav-bar').removeClass('in');
    });

    $scope.goToPath = function(path){

        $location.path(path);
        //test git
    };

});
