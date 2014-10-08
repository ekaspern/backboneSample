define (require) ->
  
  Marionette = require 'marionette'
  
  template = require 'hbs!templates/layouts/patients'
  WoodCollection = require 'collections/wood'
  
  
  #PvrRegion = require 'regions/popover'
  
  
  class MainPage extends Marionette.Layout
    tagName: "section"
    className: "nav-content-box-inner"
    template: template
    
    
    regions: {
      woodList: '#wood-list'
    }
    
    
    initialize: =>
      @woodCollection = new WoodCollection([],{})    
    
    onRender: =>
      
      @woodListView = new woodListView({
        collection: @woodCollection
      })
      @woodList.show(@woodListView)


        

    
        

    
      