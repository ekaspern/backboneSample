define (require) ->
  
  Backbone = require 'backbone'
  
  
  Model = require 'models/lumberyard'

  class LumberYards extends Backbone.Collection

    model: Model


    