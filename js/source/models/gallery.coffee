define (require)->

  Backbone = require 'backbone'

  class Gallery extends Backbone.Model

    defaults:
      galleryName: ""
      addressStreet1 : ""
      city : ""
      email : ""
      website : ""
      hours : ""
      location : ""
      uiAddress : ""
      
