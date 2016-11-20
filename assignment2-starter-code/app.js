(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

 
  ToBuyController.$inject=['ShoppingListService'];
  function  ToBuyController (ShoppingListService) {
	var toBuyCtrl = this;
	toBuyCtrl.items = ShoppingListService.getPlannedItems();
	
	toBuyCtrl.markAsBought = function(itemIndex){
		ShoppingListService.markAsBought(itemIndex);
	}
}

  AlreadyBoughtController.$inject=['ShoppingListService'];
  function  AlreadyBoughtController (ShoppingListService) {
    var boughtCtrl = this;
	boughtCtrl.items = ShoppingListService.getBoughtItems();
}
  
  function ShoppingListService() {
	  var service = this;

	  // List of shopping items
	  var itemsToBuy = [
							{name: 'cupcakes', quantity: 10},
							{name: 'cheese', quantity: 10},
							{name: 'bottles of wine', quantity: 1},
							{name: 'beers', quantity: 10},
							{name: 'tomatoes', quantity: 10},
							{name: 'bread', quantity:2},
							{name: 'chocolate', quantity:3}
						];
						
	var itemsBought = [];
	  
    service.markAsBought = function (itemIdex) {
		itemsBought.push(itemsToBuy[itemIdex]);
		itemsToBuy.splice(itemIdex, 1);
	}
		  
	service.getPlannedItems = function () {
		return itemsToBuy;
	}
	  
	service.getBoughtItems = function(){
		return itemsBought;
	}
  }

})();