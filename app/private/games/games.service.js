/**
 * Created by subtainishfaq on 11/4/16.
 */
/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("yapp").factory('gamesService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

  var game = {};

  game.getNewsList= function ()
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'games');
    return promise;
  };
  game.getGameById= function (ID)
  {

    var promise = $http.get(SeatEatsConstants.AppUrlApi+'games/'+ID);
    return promise;
  };



  return game;

}]);
