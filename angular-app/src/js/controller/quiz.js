angular
  .module('hackathon')
  .controller('QuizIndexCtrl', QuizIndexCtrl);

QuizIndexCtrl.$inject = ['Quiz'];
function QuizIndexCtrl(Quiz) {
  const vm = this;
  vm.all = Quiz.query();
}
