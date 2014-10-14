define (require) ->
  
  Marionette = require 'marionette'
  vent = require 'vent'
  
  class GlobalHeader extends Marionette.ItemView

    className: 'header-block'

    tagName: 'div'

    template: Handlebars.compile($('#globalheader-view-template').html())

    ui:
      'searchInput': '.search-input'

    events:
      'click .search-button' : 'searchLumberYards'

    searchLumberYards: =>

      # get the search term
      searchTerm = @ui.searchInput.val()

      filteredCollection = new Backbone.Collection

      # filter collection by the searchTerm
      list = @collection.filter (model)->

        _.any model.attributes, (val, attr)->

          # if the search term is part of the val then it will return an index greater than -1
          val.indexOf(searchTerm) isnt -1
          

      # for each item add to the new collection
      for item in list
        filteredCollection.push(item)

      # if there are no items in the list then set to whole collection
      if list.length is 0 then filteredCollection = @collection 

      vent.trigger('show-list-filtered:lumberyard', filteredCollection)



    



      

          



      
    

      
