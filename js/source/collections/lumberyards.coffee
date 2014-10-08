define (require) ->
  
  Backbone = require 'backbone'
  _ = require 'underscore'
  
  Model = require 'models/lumberyard'

  class LumberYards extends Backbone.Collection

    model: Model

    