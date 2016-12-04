(function () {
'use strict';

angular.module('MenuApp').controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['items'];
 function CategoriesController(items) {
	var cats = this;
	cats.items = items.data;
}
})();
