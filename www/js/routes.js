angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.feed', {
    url: '/feed',
    views: {
      'side-menu21': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
      }
    }
  })

  .state('menu.friends', {
    url: '/friends',
    views: {
      'side-menu21': {
        templateUrl: 'templates/friends.html',
        controller: 'friendsCtrl'
      }
    }
  })

  .state('menu.messages', {
    url: '/messages',
    views: {
      'side-menu21': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.search', {
    url: '/search',
    views: {
        'side-menu21': {
        templateUrl: 'templates/search.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.message', {
    url: '/message/:name',
    views: {
      'side-menu21': {
        templateUrl: 'templates/message.html',
        controller: 'messageCtrl'
      }
    }
  })

  .state('menu.profile', {
    url: '/profile/:name',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('menu.channels', {
    url: '/channels',
    views: {
      'side-menu21': {
        templateUrl: 'templates/channels.html',
        controller: 'channelsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});