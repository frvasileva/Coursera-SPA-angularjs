(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

 
	NarrowItDownController.$inject=['MenuSearchService']; 
	function NarrowItDownController(MenuSearchService){
		var menuCtrl = this;
		menuCtrl.checkIsInMenu = function(){
			console.log("clicked ");
			console.log(menuCtrl.menuItem);
			var itms = MenuSearchService.getMatchedMenuItems(menuCtrl.menuItem);
			console.log(itms);
		}  
	}
 
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http)
	{
		var service = this;

		service.getMatchedMenuItems = function (searchTerm) {

		 var response = $http({
						method: "GET",
						url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
					}).then(function (result) {

						    var foundItems = [];
							var items = result.data.menu_items

							for (var i = 0, len = items.length; i < len; i++) {
							 if(items[i].description.indexOf(searchTerm) > -1){
							 	console.log("search for " + searchTerm, items[i].description);
							 	foundItems.push(items[i].description);
							 }
							}
						console.log("foundItems ", foundItems);
						    // return processed items
						    return foundItems;
						}, function errorCallback(response) {
						   		console.log(error);
						  });		
			};
  
	}
}
)();