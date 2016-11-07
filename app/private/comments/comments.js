/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('CommentsCtrl', function($scope, $state, SeatEatsConstants) {

    $scope.$state = $state;
    $scope.editComment = function (ID)
    {
      console.log(ID);

      $state.go('comments',{id:ID});
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
        title: "Edit",
        width: "120px",
        template: '<a ng-click="editComment(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">edit</a>'
      }]
    };
  });
