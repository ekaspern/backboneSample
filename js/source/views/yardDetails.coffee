define (require) ->
  
  Marionette = require 'marionette'
  Handlebars = require 'handlebars'
  vent = require 'vent'

  class YardDetails extends Marionette.ItemView

    className: 'yard-details'

    tagName: 'div'
    
    template: Handlebars.compile($('#yard-details-template').html())

    events:
      'click .text-back' : 'displayLumberYards'

    

    initialize : ()->
      return

    displayLumberYards: =>
      vent.trigger 'show-list:lumberyard'


    