/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('letsplayService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var letsplay = {};

  letsplay.getLetsplayById= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplays/'+ID);
    return promise;
  };



  return letsplay;

}]);
