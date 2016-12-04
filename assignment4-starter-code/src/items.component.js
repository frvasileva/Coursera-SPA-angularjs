(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/items-description.template.html',
  bindings: {
    items: '<'
  }
});

})();
