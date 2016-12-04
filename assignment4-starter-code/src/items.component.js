(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'TODO/shoppinglist/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
