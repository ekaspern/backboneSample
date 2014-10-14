define (require) ->
  
  Marionette = require 'marionette'
  Backbone = require 'backbone'
  Handlebars = require 'handlebars'  
  vent = require 'vent'

  GlobalHeaderView = require 'views/globalHeader'

  LumberYardsCollection = require 'collections/lumberYards'
  LumberYardsView = require 'views/lumberYards'

  YardDetailView = require 'views/yardDetails'
  
  
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

      #normally i would call a web service in the lumber yards collection but I am just passing in the data so people can down load my app and run it
      lumberYardData = [
        
        {
          "yardName" : "Anderson & McQuaid",
          "addressStreet1" : "170 Fawcett Street",
          "city" : "Cambridge",
          "state" : "MA"
          "website" : "www.andersonmcquaid.com",
          "phone" : "617.876.3250",
          "woodTypes" : [
            {"wood" :"Hardwoods"}, 
            {"wood" :"Exotics"}, 
            {"wood" :"Moldings"}
          ]
        },
        {
          "yardName" : "Boulter Plywood",
          "addressStreet1" : "24 Broadway",
          "city" : "Somerville",
          "state" : "MA"
          "website" : "www.boulterplywood.com",
          "phone" : "617.666.1340",
          "woodTypes" : [
            {"wood" :"Hardwoods"}, 
            {"wood" :"Veneer"}, 
            {"wood" :"Plywood"}
          ]
        },
        {
          "yardName" : "Downs & Reader",
          "addressStreet1" : "60 Evans Drive",
          "city" : "Stoughton",
          "state" : "MA"
          "website" : "www.downesandreader.com",
          "phone" : "617.442.8050",
          "woodTypes" : [{"wood" :"Hardwoods"}]
        },
        {
          "yardName" : "Highland Hardwoods",
          "addressStreet1" : "Route 125",
          "city" : "Brentwood",
          "state" : "NH"
          "website" : "www.highlandhardwoods.com",
          "phone" : "603.679.1230",
          "woodTypes" : [{"wood" :"Hardwoods"}]
        },
        {
          "yardName" : "Holt & Bugbee",
          "addressStreet1" : "1600 Shawsheen Street",
          "city" : "Tewksbury",
          "state" : "MA"
          "website" : "www.holtandbugbee.com",
          "phone" : "508.851.7201",
          "woodTypes" : [
            {"wood" :"Hardwoods"}, 
            {"wood" :"Softwoods"}, 
            {"wood" :"Domestic"},
            {"wood" :"Imported"}
          ]
        },
        {
          "yardName" : "Kiever-Willard",
          "addressStreet1" : "11-13 Graf Road",
          "city" : "Newburyport",
          "state" : "MA"
          "website" : "www.keiver-willard.com/",
          "phone" : "508.462.7193",
          "woodTypes" : [{"wood" :"Hardwoods"}]
        },
        {
          "yardName" : "Northland Forest Products",
          "addressStreet1" : "36 Depot Road",
          "city" : "Kingston",
          "state" : "NH"
          "website" : "www.northlandforest.com",
          "phone" : "603.642.8275",
          "woodTypes" : [{"wood" :"Hardwoods"}]
        }

      ]

      @lumberYardCollection = new LumberYardsCollection(lumberYardData)

      # listening to see if the user clicks on a yard in the list of lumber yard
      @listenTo(vent, {
        'show-details:yard' : @showYardDetail
        'show-list:lumberyard' : @showMainContent
        'show-list-filtered:lumberyard' : @getFilteredContent
      })


      @render()

    onRender: =>
      
      @showHeader()
      @showMainContent()

    #display header
    showHeader: =>
      @headerRegion.show(new GlobalHeaderView({
          collection: @lumberYardCollection
        })
      )
    
    # display the lumber yards list view
    showMainContent: =>
      
      @lumberYardsView = new LumberYardsView({
        collection: @lumberYardCollection
      })

      @contentRegion.show(@lumberYardsView)

    # displays the detail view for the yard
    showYardDetail: (model) =>

      detailView = new YardDetailView({
        model: model
      })

      @contentRegion.show(detailView)

    # set the filtered content
    getFilteredContent: (filteredCollection) =>

      #set the collection to the filter collection
      @lumberYardCollection = filteredCollection
      #show content
      @showMainContent()




