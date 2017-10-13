angular
  .module('hackathon')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/home.html'
    })
    .state('quizzesIndex', {
      url: '/quizzes',
      templateUrl: 'js/views/quizzesIndex.html',
      controller: 'QuizzesIndexCtrl as quizzesIndex'
    })
    .state('quizzesShow', {
      url: '/quizzes/:id',
      templateUrl: 'js/views/quizzesShow.html',
      controller: 'QuizzesShowCtrl as quizzesShow'
    })
    .state('quizzesEdit', {
      url: '/quizzes/:id/edit',
      templateUrl: 'js/views/quizzesEdit.html',
      controller: 'QuizzesEditCtrl as quizzesEdit'
    });

  $urlRouterProvider.otherwise('/');
}
