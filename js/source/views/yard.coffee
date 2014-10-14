define (require) ->
  
  Marionette = require 'marionette'
  Handlebars = require 'handlebars'
  vent = require 'vent'

  class Yard extends Marionette.ItemView

    className: 'yard-item'

    tagName: 'li'
    
    template: Handlebars.compile($('#yard-view-template').html())

    events :
      'click' : 'onClick'

    initialize : ()->
      return


    onClick : (event)->

      console.log "event", event

      vent.trigger('show-details:yard', @model)