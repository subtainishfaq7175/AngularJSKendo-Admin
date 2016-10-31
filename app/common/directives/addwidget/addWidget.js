(function() {
    angular.module("yapp").directive('addObject', [contactPartial]);

    function contactPartial() {
        var directive = {
            scope: {
                objectList: "=",

            },
            templateUrl: "common/directives/addwidget/addWidget.html",
            controller: ["$scope", addWidgetCtrl],
            controllerAs: "addWidgetCtrl"
        };
        return directive;
    }


    function addWidgetCtrl($scope) {
        var vm = this;
        vm.scope = $scope;
       vm.objectList = vm.scope.objectList;


        vm.addNewObject = function () {
            if (true) {
                var obj = {
                    CostCenter: null
                };
                vm.objectList.push(obj);

            }
        };
        vm.addObject = function () {
        vm.addNewObject();

        };


        vm.deleteObject = function (item,index) {
         if(vm.objectList.length>1) {
             vm.scope.objectList.remove(index);
             console.log(index);
             console.log(vm.scope.objectList[index - 1]);
             var flag_found = false;
             for (i = 0; i < vm.objectList.length; i++) {
                 if (vm.objectList[i].SpendType.PrimaryContactFlag)
                     flag_found = true;
             }
             if (!flag_found) {
                 vm.objectList[0].SpendType.PrimaryContactFlag = true;
             }
         }
        };

        Array.prototype.remove = function (from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };



    }

})();
