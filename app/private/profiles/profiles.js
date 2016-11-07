/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('ProfilesCtrl', function($scope, $state, SeatEatsConstants) {

    $scope.$state = $state;
    $scope.editProfile = function (ID)
    {
      console.log(ID);

      $state.go('profiles',{id:ID});
    };
    $scope.mainGridOptions={
      dataSource: {
        type: "json",
        transport: {
          read: SeatEatsConstants.AppUrlApi+'users'
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
        field: "name",
        title: "User Name",
        width: "120px"
      },{
        title: "Edit",
        width: "120px",
        template: '<a ng-click="editProfile(dataItem._id)" class="btn k-primary btn-outline btn-rounded btn-sm">edit</a>'
      }]
    };


  });
