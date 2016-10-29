/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('WalkthroughCtrl', function($scope, $state) {

    $scope.$state = $state;
    console.log("walkthrough");

  });
