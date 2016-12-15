(function() {
  'use strict';
  angular.module('Shure')
    .factory('ServiceResource', ServiceResource);

  ServiceResource.$inject = ['$resource'];

  function ServiceResource($resource) {
    return $resource('https://backend-project.herokuapp.com/services/:id', {id: '@_id'}, { 'update': { method: 'PATCH'}})
  }
}());
