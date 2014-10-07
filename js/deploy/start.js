require.config({
  paths: {
    'jquery': 'libs/jquery',
    'underscore': 'libs/underscore',
    'backbone': 'libs/backbone',
    'marionette': 'libs/marionette',
    'handlebars': 'libs/handlebars',
    'cs': 'libs/cs',
    'text': 'libs/text',
    'hbs': 'libs/hbs'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'marionette': {
      deps: ['backbone'],
      exports: 'Marionette'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

define(function(require) {
  var backboneSampleApp;
  backboneSampleApp = require('backbonesample_app');
  return backboneSampleApp.initialize();
});
