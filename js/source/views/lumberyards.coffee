define (require) ->
  
  Marionette = require 'marionette'
  Handlebars = require 'handlebars'
  vent = require 'vent'
  
  YardItemView = require 'views/yard'
 
  #EmptyView = require 'views/content/movies_empty_view'
  
  class LumberYardsList extends Marionette.CompositeView


    template: Handlebars.compile($('#lumberyards-view-template').html())
    
    itemView: YardItemView
    itemViewContainer : 'ul.lumberyards-list'
    itemViewOptions : {}

    collectionEvents :
      'sync' : 'render'


    initialize : (options)->

      return

    

    #emptyView: EmptyView

    