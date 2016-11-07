/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('CommentsCtrl', function($scope, $state, SeatEatsConstants,commentsService) {

    $scope.$state = $state;

    $scope.deleteComment = function (ID) {
      commentsService.deletsCommentsById(ID).then(function (response)
        {
          $state.reload();
        });

      };

    $scope.mainGridOptions={
      dataSource: {
        type: "json",
        transport: {
          read: SeatEatsConstants.AppUrlApi+'commentsadmin'
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
        title: "Delete",
        width: "120px",
        template: '<a ng-click="deleteComment(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Delete</a>'
      }]
    };
  });
