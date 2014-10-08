define (require) ->

  Marionette = require 'marionette'
  MainPage = require 'layouts/mainPage'



  App = class GalleryApp extends Marionette.Application

    initialize: =>

      mainPage = new MainPage()
  
  return new App()