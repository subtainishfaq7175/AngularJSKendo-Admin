'use strict';

/**
 * @ngdoc home
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'kendo.directives',
    'ngMaterial'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/home');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'private/views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'public/login/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'private/dashboard/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('home', {
            url: '/home',
            parent: 'dashboard',
            controller: 'HomeCtrl',
            templateUrl: 'private/home/home.html'
          })
          .state('masterdata', {
            url: '/masterdata',
            parent: 'dashboard',
            controller: 'MasterdataCtrl',
            templateUrl: 'private/masterdata/masterdata.html'
          })
      .state('news', {
            url: '/news',
            parent: 'dashboard',
            controller: 'NewsCtrl',
            templateUrl: 'private/news/news.html'
          })
      .state('newsadd', {
        url: '/newsadd',
        parent: 'dashboard',
        controller: 'NewsAddCtrl',
        templateUrl: 'private/news/add/add.html'
      })
      .state('games', {
            url: '/games',
            parent: 'dashboard',
            controller: 'GamesCtrl',
            templateUrl: 'private/games/games.html'
          })
      .state('gamesadd', {
        url: '/gamesadd',
        parent: 'dashboard',
        controller: 'GamesAddCtrl',
        templateUrl: 'private/games/add/add.html'
      })
      .state('letsplay', {
            url: '/letsplay',
            parent: 'dashboard',
            controller: 'LetsplayCtrl',
            templateUrl: 'private/letsplay/letsplay.html'
          })
      .state('letsplayadd', {
        url: '/letsplayadd',
        parent: 'dashboard',
        controller: 'LetsplayAddCtrl',
        templateUrl: 'private/letsplay/add/add.html'
      })
 .state('walkthrough', {
            url: '/walkthrough',
            parent: 'dashboard',
            controller: 'WalkthroughCtrl',
            templateUrl: 'private/walkthrough/walkthrough.html'
          })
      .state('walkthroughadd', {
        url: '/walkthroughadd',
        parent: 'dashboard',
        controller: 'WalkthroughAddCtrl',
        templateUrl: 'private/walkthrough/add/add.html'
      })
 .state('faqs', {
            url: '/faqs',
            parent: 'dashboard',
            controller: 'FaqsCtrl',
            templateUrl: 'private/faqs/faqs.html'
          })
      .state('faqsadd', {
        url: '/faqsadd',
        parent: 'dashboard',
        controller: 'FaqsAddCtrl',
        templateUrl: 'private/faqs/add/add.html'
      })
 .state('messages', {
            url: '/messages',
            parent: 'dashboard',
            controller: 'MessagesCtrl',
            templateUrl: 'private/messages/messages.html'
          })
 .state('messagesadd', {
            url: '/messagesadd',
            parent: 'dashboard',
            controller: 'MessagesAddCtrl',
            templateUrl: 'private/messages/add/add.html'
          })
 .state('comments', {
            url: '/comments',
            parent: 'dashboard',
            controller: 'CommentsCtrl',
            templateUrl: 'private/comments/comments.html'
          })
      .state('commentsadd', {
        url: '/commentsadd',
        parent: 'dashboard',
        controller: 'CommentsAddCtrl',
        templateUrl: 'private/comments/add/add.html'
      })

      .state('profiles', {
        url: '/profiles',
        parent: 'dashboard',
        controller: 'ProfilesCtrl',
        templateUrl: 'private/profiles/profiles.html'
      });

  });
