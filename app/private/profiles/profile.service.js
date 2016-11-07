/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('profileService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var profile = {};

  profile.getLetsplayById= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'profiles/'+ID);
    return promise;
  };



  return profile;

}]);
