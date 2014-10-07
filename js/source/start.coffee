require.config
  paths : 
    'jquery' : 'libs/jquery'
    'underscore' : 'libs/underscore'
    'backbone' : 'libs/backbone'
    'marionette' : 'libs/marionette'
    'handlebars' : 'libs/handlebars'
    # requirejs pluggins config
    'cs': 'libs/cs'
    'text' : 'libs/text'
    'hbs' : 'libs/hbs'
  
  shim : 

    'underscore': 
      exports: '_'
    'backbone': 
      deps: [
        'jquery'
        'underscore'
      ]
      exports: 'Backbone'
    'marionette':
      deps: ['backbone']
      exports: 'Marionette'
    'handlebars': 
      exports: 'Handlebars'

define (require) ->

  backboneSampleApp = require 'backbonesample_app'

  backboneSampleApp.initialize()