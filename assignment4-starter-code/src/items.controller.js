(function () {
'use strict';

angular.module('MenuApp').controller('ItemDetailsController', ItemDetailsController);

ItemDetailsController.$inject = ['items'];
 function ItemDetailsController(items) {
		var itemDetails = this;
		itemDetails.items = items.data.menu_items;
}
})();
