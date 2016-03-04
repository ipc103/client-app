function Category($resource){
  var url = 'http://localhost:3000/categories'
  return $resource( url + '/:id', null, {'update': {method: 'PATCH'}})
}

angular.module('app')
  .service('Category', Category)
