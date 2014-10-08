define (require) ->
  
  Marionette = require 'marionette'
  Backbone = require 'backbone'
  Handlebars = require 'handlebars'

  # templates
  #mainPageTemplate = require 'text!templates/mainPage.hbs'
  
  #template = require 'hbs!templates/mainPage'
  GalleriesCollection = require 'collections/galleries'
  
  
  #PvrRegion = require 'regions/popover'
  
  
  class MainPage extends Marionette.Layout
    
    el: '.homepage-box'

    #template: Handlebars.compile(mainPageTemplate)
 
    
    
    #regions: {
      #galleriesList: '#contentSection'
    #}
    
    
    initialize: ->
      console.log "help"
      @galleriesCollection = new GalleriesCollection 

      @galleriesCollection.fetch() 

      #console.log "@galleriesCollection", @galleriesCollection
    
    onRender: =>

      console.log "@galleriesCollection", @galleriesCollection

      #console.log "render"
      
      #@galleriesListView = new GalleriesListView({
        #collection: @galleriesCollection
      #})
      #@galleriesList.show(@galleriesListView)
