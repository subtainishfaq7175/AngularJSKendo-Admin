/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('CommentsCtrl', function($scope, $state) {

    $scope.$state = $state;
    $scope.mainGridOptions={
      dataSource: {
        type: "json",
        transport: {
          read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
        },
        pageSize: 5,
        serverPaging: true,
        serverSorting: true
      },
      sortable: true,
      pageable: true,
      columns: [{
        field: "Username",
        title: "User name",
        width: "120px"
      },{
        field: "Comments",
        title: "Comments",
        width: "120px"
      },{
        field: "Date",
        title: "Date",
        width: "120px"
      }]
    };

  });
