define (require) ->

  Marionette = require 'marionette'
  #MainPage = require 'layouts/mainpage'

  App = class BackboneSampleApp extends Marionette.Application

    initialize: =>

      #mainpage = new MainPage()
  
  return new App()