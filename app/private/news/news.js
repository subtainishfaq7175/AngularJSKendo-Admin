/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('NewsCtrl', function($scope, $state,SeatEatsConstants,newsService) {


    $scope.$state = $state;

    $scope.editNews = function (ID) {
      $state.go('newsedit',{id:ID});
    };

    $scope.deleteNews = function (ID) {
      newsService.deleteNewsById(ID).then(function (response)
      {
        $state.reload();

      });

    };

    $scope.mainGridOptions={
      dataSource: {
        type: "json",
        transport: {
          read: SeatEatsConstants.AppUrlApi+'news'
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
        field: "title",
        title: "title",
        width: "120px"
      },{
        title: "Edit",
        width: "120px",
        template: '<a ng-click="editNews(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Edit</a>'
      },{
        title: "Delete",
        width: "120px",
        template: '<a ng-click="deleteNews(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">Delete</a>'
      }]
    };


  });
