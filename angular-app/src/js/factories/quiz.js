angular
  .module('hackathon')
  .factory('Quiz', Quiz);

Quiz.$inject = ['$resource', 'API_URL'];
function Quiz($resource, API_URL) {
  return new $resource(`${API_URL}/quizzes/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
