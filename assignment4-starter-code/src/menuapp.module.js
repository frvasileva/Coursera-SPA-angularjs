(function() {
    'use strict';

		angular.module('MenuApp', ['ui.router', 'Data'])
	    .controller('MenuAppController', MenuAppController);
        // .service('MenuSearchService', MenuSearchService)
        // .directive('foundItems', FoundItemsDirective);
		
		// MenuAppController.$inject = ['data'];
		function MenuAppController()
		{
			console.log('hey');
		}
		
})();