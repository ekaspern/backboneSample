define (require) ->
  
  Backbone = require 'backbone'
  
  
  Model = require 'models/yard'

  class LumberYards extends Backbone.Collection

    model: Model


    