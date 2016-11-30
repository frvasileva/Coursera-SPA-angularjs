(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                items: '<foundItems',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
      var list = this;

      list.emptyList = function() {
        return list.items ? list.items.length === 0 : false;
      };
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;

        menu.narrowItDown = function() {
            if (!menu.searchTerm) {
              menu.found = [];
            } else if (menu.searchTerm.length > 0) {
                MenuSearchService.getMatchedMenuItems(menu.searchTerm)
                .then(function(result) {
                    menu.found = result;
                })
                .catch(function(error) {
                    console.error(error);
                });
            }
        };

        menu.removeItem = function(index) {
            menu.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            var httpObj = {
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            };

            return $http(httpObj).then(function(result) {
                var data = result.data.menu_items;
                var foundItems = data.filter(function(item) {
                    return item.description.toLowerCase().includes(searchTerm);
                });

                return foundItems;
            });
        };
    }
})();
