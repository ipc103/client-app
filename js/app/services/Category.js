var url = 'http://localhost:3000/categories'
function Category($resource){
  return $resource( url + '/:id')
}

angular.module('app')
  .service('Category', Category)
