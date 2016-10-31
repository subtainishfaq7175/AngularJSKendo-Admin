/**
 * Created by subtainishfaq on 10/30/16.
 */
angular.module('yapp')
  .controller('NewsAddCtrl', function($scope, $state) {

    $scope.$state = $state;
    $scope.dateString;// = $state;
    $scope.html;
    $scope.value;
    $scope.value2;
    $scope.selectOptions = {
      placeholder: "Select products...",
      dataTextField: "ProductName",
      dataValueField: "ProductID",
      valuePrimitive: true,
      autoBind: false,
      dataSource: {
        type: "odata",
        serverFiltering: true,
        transport: {
          read: {
            url: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
          }
        }
      }
    };
    $scope.selectedIds = [ 4, 7 ];


  });
