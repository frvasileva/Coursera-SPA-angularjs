(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);

   
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menuCtrl = this;
        menuCtrl.foundItems = [];
        menuCtrl.checkIsInMenu = function() {

            var promise = MenuSearchService.getMatchedMenuItems(menuCtrl.menuItem);
            promise.then(function(response) {
                console.log("response ", response);
                menuCtrl.foundItems = response;
            });
        }
    }

    MenuSearchService.$inject = ['$http'];

    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {

            var response = $http({
                method: "GET",
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function(result) {

                var found = [];
                var items = result.data.menu_items

                for (var i = 0, len = items.length; i < len; i++) {
                    if (items[i].description.indexOf(searchTerm) > -1) {
                        found.push(items[i].description);
                    }
                }

                return found;
            }, function errorCallback(response) {
                console.log(error);
            });

            return response;
        };

    }
})();