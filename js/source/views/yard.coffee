define (require) ->
  
  Marionette = require 'marionette'
  Handlebars = require 'handlebars'

  class Yard extends Marionette.ItemView

    className: 'yard-item'

    tagName: 'li'
    
    template: Handlebars.compile($('#yard-view-template').html())