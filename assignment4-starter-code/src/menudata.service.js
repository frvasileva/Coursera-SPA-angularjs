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

		var response = $http({
						method: "GET",
						url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
					}).then(function(result) {
						console.log(result);
						return result;
						
					}, function errorCallback(response) {
						console.log(error);
					});
  
    return response;

  };
  
}

})();
