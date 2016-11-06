/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('LetsplayCtrl', function($scope, $state,SeatEatsConstants) {

    $scope.$state = $state;
    $scope.editLetsplay = function (ID)
    {
      console.log(ID);

      $state.go('letsplayedit',{id:ID});
    };
    $scope.mainGridOptions={
      dataSource: {
        type: "json",
        transport: {
          read: SeatEatsConstants.AppUrlApi+'letsplays'
        },

        schema: {
          data: "docs",
          total: "total"
        }
        ,
        pageSize: 5,
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
        template: '<a ng-click="editLetsplay(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">edit</a>'
      }]
    };

  });
