(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
 
  var service = this;
  var items = [];

  service.getAllCategories = function () {
   var response = $http({
                method: "GET",
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            }).then(function(result) {
				console.log(result);
                return result;
				
            }, function errorCallback(response) {
                console.log(error);
            });

    return response;
  };
  
  
  service.getItemsForCategory = function (categoryShortName) {
    // var deferred = $q.defer();

    // // Wait 2 seconds before returning
    // $timeout(function () {
      // // deferred.reject(items);
      // deferred.resolve(items);
    // }, 800);

    // return deferred.promise;
  };
  
}

})();
