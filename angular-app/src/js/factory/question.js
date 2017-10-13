angular
  .module('hackathon')
  .factory('Question', Question);

Question.$inject = ['$resource', 'API_URL'];
function Question($resource, API_URL) {
  return new $resource(`${API_URL}/questions/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
