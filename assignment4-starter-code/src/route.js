(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to categories if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider

  .state('home', {
	  url: '/',
	  templateUrl: 'src/templates/home.html'
	  })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
	  controller: 'CategoriesController as cats',
	  resolve: {
      items: ['MenuDataService', function (MenuDataService) {
		    return MenuDataService.getAllCategories();
      }]
    }
    })

    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'src/templates/items.template.html',
	  controller: 'ItemDetailsController as itemDetails',
	  resolve: {
			items: ['$stateParams', 'MenuDataService', 
					function(stateParams, MenuDataService){
						return MenuDataService.getItemsForCategory(stateParams.shortName);
				}]
	}
    });
}

})();
