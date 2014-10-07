define (require) ->

  Marionette = require 'marionette'
  #MainPage = require 'layouts/mainpage'

  App = class BackboneSampleApp extends Marionette.Application

    initialize: =>

    	console.log "test"

      #mainpage = new MainPage()
  
  return new App()