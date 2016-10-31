/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('MasterdataCtrl', function($scope, $state) {

    $scope.$state = $state;
    $scope.arr =[{hello :"hi"},{hello :"hi"},];

  });
