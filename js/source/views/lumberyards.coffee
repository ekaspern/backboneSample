define (require) ->
  
  Marionette = require 'marionette'
  Handlebars = require 'handlebars'
  vent = require 'vent'
  
  YardItemView = require 'views/yard'
 
  
  class LumberYardsList extends Marionette.CompositeView


    template: Handlebars.compile($('#lumberyards-view-template').html())
    
    itemView: YardItemView
    itemViewContainer : 'ul.lumberyards-list'
    itemViewOptions : {}


    initialize : (options) ->

      return




    