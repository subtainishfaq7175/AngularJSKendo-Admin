/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('FaqsAddCtrl', function($scope, $state,faqsService) {

    $scope.$state = $state;
    $scope.model={};
    $scope.publishFaq=function ()
    {
      faqsService.postFaq($scope.model).then(function (response)
      {

        console.log(response);
        debugger;

      })
    };




  });
