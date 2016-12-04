(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/templates/category-item.templates.html',
  bindings: {
    items: '<'
  }
});

})();
