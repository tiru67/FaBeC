/**
 * Created by Tiru on 5/16/15.
 */

angular.module('Fabec').controller('homeController',function($scope,$rootScope,$anchorScroll,$location,$timeout,$routeParams,$document){
    $rootScope.$on('$routeChangeSuccess', function(){
        $document.find('#nav-bar').removeClass('in');

            $location.hash($routeParams.scrollTo);
            //$anchorScroll.yOffset = 100;
            $anchorScroll();

            window.scrollBy(0, -95);

    });

    $scope.goToPath = function(path){
        window.location.hash = "#/"+path;

    };

});
