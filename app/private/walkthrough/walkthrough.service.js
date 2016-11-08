/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('walkthroughService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var walkthrough = {};

  walkthrough.getWalkthroughById= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'walkthrough/'+ID);
    return promise;
  };

  walkthrough.deleteWalkthroughById= function (ID)
  {

    var promise = $http.delete(SeatEatsConstants.AppUrlApi+'walkthrough/'+ID);
    return promise;
  };



  return walkthrough;

}]);
