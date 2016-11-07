/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('ProfilesEditCtrl', function($scope, $state,profilesService,simpleObj) {

    $scope.$state = $state;
    $scope.model=simpleObj.data;
    console.log($scope.model);
    $scope.publishProfile=function ()
    {
      profilesService.updateProfile($scope.model).then(function (response)
      {

        console.log(response);
        $state.go("faqs");

      })
    };




  });
