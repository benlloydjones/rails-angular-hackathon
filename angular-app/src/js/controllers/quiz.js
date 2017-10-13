angular
  .module('hackathon')
  .controller('QuizzesIndexCtrl', QuizzesIndexCtrl)
  .controller('QuizzesShowCtrl', QuizzesShowCtrl);

QuizzesIndexCtrl.$inject = ['Quiz'];
function QuizzesIndexCtrl(Quiz) {
  const vm = this;
  vm.all = Quiz.query();
}

QuizzesShowCtrl.$inject = ['Quiz', '$state'];
function QuizzesShowCtrl(Quiz, $state) {
  const vm = this;
  vm.quiz = Quiz.get($state.params);
}

QuizzesEditCtrl.$inject = ['$state', 'jeopardy', '$scope', 'Quiz'];
function QuizzesEditCtrl($state, jeopardy, $scope, Quiz) {
  const vm = this;
  vm.quiz = Quiz.get($state.params);
  vm.offset = 0;
  vm.questions = [];

  $scope.$watch('vm.parameters', () => {
    vm.offset = 0;
  }, true);

  function questionButton() {
    if(vm.offest === 0) vm.questions = [];
    getQuestions(vm.parameters.category, vm.parameters.value, vm.offset);
    vm.offset += 5;
  }

  vm.questionButton = questionButton;

  function getQuestions(category, value, offset) {
    jeopardy.getQuestions(category, value, offset)
      .then(responses => {
        for(let i = 0; i < 5; i++) {
          vm.questions.unshift(responses[i]);
        }
      });
  }
}
