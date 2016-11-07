/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('ProfilesAddCtrl', function($scope, $state,profilesService) {

    $scope.$state = $state;
    $scope.model={};
    $scope.publishProfile=function ()
    {
      profilesService.postProfile($scope.model).then(function (response)
      {

        console.log(response);
        debugger;

      })
    };




  });
