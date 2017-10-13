angular
  .module('hackathon')
  .controller('QuizzesIndexCtrl', QuizzesIndexCtrl);

QuizzesIndexCtrl.$inject = ['Quiz'];
function QuizzesIndexCtrl(Quiz) {
  const vm = this;
  vm.all = Quiz.query();
}
