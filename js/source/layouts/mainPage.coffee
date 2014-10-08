define (require) ->
  
  Marionette = require 'marionette'
  Backbone = require 'backbone'
  Handlebars = require 'handlebars'  

  GlobalHeaderView = require 'views/globalHeader'

  LumberYardsCollection = require 'collections/lumberyards'
  LumberYardsView = require 'views/lumberyards'
  
  
  #PvrRegion = require 'regions/popover'
  
  
  class MainPage extends Marionette.Layout
    
    el: '.homepage-box'

    template: Handlebars.compile($('#mainpage-layout-template').html())
 
    
    
    regions: {
      headerRegion: '.main-header'
      contentRegion: '.main-content'
      footerRegion: '.main-footer'
    }
    
    
    initialize: ->
      console.log "help"

      #normally i would call a web service in the lumber yards collection but I am just passing in the data so people can down load my app and run it
      lumberYardData = [
        
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
          "yardName" : "Boulter Plywood",
          "addressStreet1" : "24 Broadway",
          "city" : "Somerville",
          "state" : "MA"
          "website" : "www.boulterplywood.com",
          "phone" : "617.666.1340",
          "woodTypes" : ["Hardwoods", "Veneer", "Plywood"]
        },
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
          "yardName" : "Highland Hardwoods",
          "addressStreet1" : "Route 125",
          "city" : "Brentwood",
          "state" : "NH"
          "website" : "www.highlandhardwoods.com",
          "phone" : "603.679.1230",
          "woodTypes" : ["Hardwoods"]
        },
        {
          "yardName" : "Holt & Bugbee",
          "addressStreet1" : "1600 Shawsheen Street",
          "city" : "Tewksbury",
          "state" : "MA"
          "website" : "www.holtandbugbee.com",
          "phone" : "508.851.7201",
          "woodTypes" : ["Hardwoods, Softwoods, Domestic, Imported"]
        },
        {
          "yardName" : "Kiever-Willard",
          "addressStreet1" : "11-13 Graf Road",
          "city" : "Newburyport",
          "state" : "MA"
          "website" : "www.keiver-willard.com/",
          "phone" : "508.462.7193",
          "woodTypes" : ["Hardwoods"]
        },
        {
          "yardName" : "Northland Forest Products",
          "addressStreet1" : "36 Depot Road",
          "city" : "Kingston",
          "state" : "NH"
          "website" : "www.northlandforest.com",
          "phone" : "603.642.8275",
          "woodTypes" : ["Hardwoods"]
        }

      ]

      @lumberYardCollection = new LumberYardsCollection(lumberYardData)


      @render()

    onRender: =>
      
      @showHeader()
      @showContent()
      #@showFooter()

    showHeader: =>


      @headerRegion.show(new GlobalHeaderView())

    
    showContent: =>




      # display the lumber yards list view
      @lumberYardsView = new LumberYardsView({
        collection: @lumberYardCollection
      })

      @contentRegion.show(@lumberYardsView)
      
