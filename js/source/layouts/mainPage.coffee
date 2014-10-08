define (require) ->
  
  Marionette = require 'marionette'
  Backbone = require 'backbone'
  Handlebars = require 'handlebars'  
  
  LumberYardsCollection = require 'collections/lumberyards'
  LumberYardsView = require 'views/lumberyards'
  
  
  #PvrRegion = require 'regions/popover'
  
  
  class MainPage extends Marionette.Layout
    
    el: '.homepage-box'

    template: Handlebars.compile($('#mainpage-layout-template').html())
 
    
    
    regions: {
      headerRegion: '#main-header'
      contentRegion: '#main-content'
      footerRegion: '#main-footer'
    }
    
    
    initialize: ->
      console.log "help"

      #normally i would call a web service in the lumber yards collection but I am just passing in the data so people can down load my app and run it
      lumberYardData = [
        {
          "yardName" : "Downs & Reader",
          "addressStreet1" : "60 Evans Drive",
          "city" : "Stoughton",
          "state" : "MA"
          "website" : "www.downesandreader.com",
          "phone" : "617.442.8050",
          "woodTypes" : ["Hardwoods"]
        },
        {
          "yardName" : "Anderson & McQuaid",
          "addressStreet1" : "170 Fawcett Street",
          "city" : "Cambridge",
          "state" : "MA"
          "website" : "www.societyofcrafts.org",
          "phone" : "617.876.3250",
          "woodTypes" : ["Hardwoods", "Exotics", "Moldings"]
        },
        {
          "yardName" : "Boutlter Plywood",
          "addressStreet1" : "24 Broadway",
          "city" : "Somerville",
          "state" : "MA"
          "website" : "www.boulterplywood.com",
          "phone" : "617.666.1340",
          "woodTypes" : ["Hardwoods", "Veneer", "Plywood"]
        }
      ]

      @lumberYardCollection = new LumberYardsCollection(lumberYardData)


      @render()

    onRender: =>
      
      #@showHeader()
      @showContent()
      #@showFooter()
    
    showContent: =>

      console.log "@lumberYardCollection", @lumberYardCollection

      console.log "showContent222"

      # display the lumber yards list view
      @lumberYardsView = new LumberYardsView({
        collection: @lumberYardCollection
      })

      @contentRegion.show(@lumberYardsView)
      
