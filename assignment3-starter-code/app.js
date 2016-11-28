(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

 
	NarrowItDownController.$inject=['MenuSearchService']; 
	function NarrowItDownController(MenuSearchService){
		var narrow = this;
		console.log(narrow);
		var promise = MenuSearchService.getMatchedMenuItems();

		  promise.then(function (response) {
			narrow.categories = response.data;
			console.log(response.data);
		  })
		  .catch(function (error) {
			console.log("Something went terribly wrong.");
		  });
  
	}
 
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http)
	{
		var service = this;

		service.getMatchedMenuItems = function () {

		 var response = $http({
						method: "GET",
						url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
					});
		
		return response;
	};
  
	}
}
)();