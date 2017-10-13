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
