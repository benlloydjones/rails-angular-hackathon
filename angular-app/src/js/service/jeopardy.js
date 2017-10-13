angular
  .module('hackathon')
  .service('jeopardy', Jeopardy);

Jeopardy.$inject = ['$http', 'API_URL'];
function Jeopardy($http, API_URL) {
  function getQuestions(category, value, offset) {
    return $http
      .get(`${API_URL}/jeopardy`, { params: { category, value, offset }})
      .then(response => response);
  }

  this.getQuestions = getQuestions;
}
