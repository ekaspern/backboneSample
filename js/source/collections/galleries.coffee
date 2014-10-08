define (require) ->
  
  Backbone = require 'backbone'
  _ = require 'underscore'
  
  Model = require 'models/gallery'

  class Galleries extends Backbone.Collection

    model: Model

    # The JSON is in a file for this application instead of using an API
    url: '/assets/gallerydata/galleryData.json'