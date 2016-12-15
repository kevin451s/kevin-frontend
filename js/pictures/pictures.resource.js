(function() {
  'use strict';
  angular.module('Shure')
    .factory('PictureResource', PictureResource);

  PictureResource.$inject = ['$resource'];

  function PictureResource($resource) {
    return $resource('https://backend-project.herokuapp.com/api/pictures/:id', {id: '@_id'}, { 'update': { method: 'PATCH'}})
  }
}());
