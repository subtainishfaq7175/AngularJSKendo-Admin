/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('MessagesCtrl', function($scope, $state) {

    $scope.$state = $state;
    console.log("messages");

  });
