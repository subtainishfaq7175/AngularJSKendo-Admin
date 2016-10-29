'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'dashboard/dashboard.html',
          controller: 'DashboardCtrl'
        })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            controller: 'OverviewCtrl',
            templateUrl: 'overview/overview.html'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            controller: 'ReportsCtrl',
            templateUrl: 'reports/reports.html'
          })
      .state('news', {
            url: '/news',
            parent: 'dashboard',
            controller: 'NewsCtrl',
            templateUrl: 'news/news.html'
          })
      .state('games', {
            url: '/games',
            parent: 'dashboard',
            controller: 'GamesCtrl',
            templateUrl: 'games/games.html'
          })
      .state('letsplay', {
            url: '/letsplay',
            parent: 'dashboard',
            controller: 'LetsplayCtrl',
            templateUrl: 'letsplay/letsplay.html'
          })
 .state('walkthrough', {
            url: '/walkthrough',
            parent: 'dashboard',
            controller: 'WalkthroughCtrl',
            templateUrl: 'walkthrough/walkthrough.html'
          })
 .state('faqs', {
            url: '/faqs',
            parent: 'dashboard',
            controller: 'FaqsCtrl',
            templateUrl: 'faqs/faqs.html'
          })
 .state('messages', {
            url: '/messages',
            parent: 'dashboard',
            controller: 'MessagesCtrl',
            templateUrl: 'messages/messages.html'
          })
 .state('comments', {
            url: '/comments',
            parent: 'dashboard',
            controller: 'CommentsCtrl',
            templateUrl: 'comments/comments.html'
          });

  });
