define (require) ->
  
  Marionette = require 'marionette'
  
  class GlobalHeader extends Marionette.ItemView

    template: Handlebars.compile($('#globalheader-view-template').html())

    
