/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('FaqsCtrl', function($scope, $state, SeatEatsConstants,faqsService) {

    $scope.$state = $state;
    $scope.editFaq = function (ID) {
      console.log(ID);

      $state.go('faqsedit',{id:ID});
    };
    $scope.deleteFaq = function (ID) {
    faqsService.deleteFaqsById(ID).then(function (response)
    {
      $state.reload();
    });

    };
    $scope.mainGridOptions={
      dataSource: {
        type: "json",
        transport: {
          read: SeatEatsConstants.AppUrlApi+'faqs'
        },

        schema: {
          data: "docs",
          total: "total"
        }
        ,
        pageSize: 10,
        serverPaging: true,
        serverSorting: true
      },
      sortable: true,
      pageable: true,
      columns: [{
        field: "content",
        title: "Content",
        width: "120px"
      },{
        title: "Edit",
        width: "120px",
        template: '<a ng-click="editFaq(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Edit</a>'
      },{
        title: "Delete",
        width: "120px",
        template: '<a ng-click="deleteFaq(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Delete</a>'
      }]
    };


  });
