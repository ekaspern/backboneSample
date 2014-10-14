define (require)->

  Backbone = require 'backbone'

  class Yard extends Backbone.Model

    defaults:
      yardName: ""
      addressStreet1 : ""
      city : ""
      state: ""
      website : ""
      
      
      
