function Recommendation($resource){
  var url = 'http://localhost:3000/recommendations/:id'
  return $resource(url, null, {'update': {method: 'PATCH'}})
}

angular.module('app')
  .service('Recommendation', Recommendation)
