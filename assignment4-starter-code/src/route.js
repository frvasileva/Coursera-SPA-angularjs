(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to categories if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
	  // Home page
	.state('home', {
	  url: '/',
	  templateUrl: 'src/templates/home.html'
	  })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.html',
	  controller: 'CategoriesController as cats',
	  resolve: {
      items: ['MenuDataService', function (MenuDataService) {
		    return MenuDataService.getAllCategories();
      }]
    }
    })

    .state('items', {
      url: '/items',
      templateUrl: 'src/templates/items.html'
    });
}

})();
