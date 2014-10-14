var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var GlobalHeader, Marionette, vent;
  Marionette = require('marionette');
  vent = require('vent');
  return GlobalHeader = (function(_super) {
    __extends(GlobalHeader, _super);

    function GlobalHeader() {
      this.searchLumberYards = __bind(this.searchLumberYards, this);
      return GlobalHeader.__super__.constructor.apply(this, arguments);
    }

    GlobalHeader.prototype.className = 'header-block';

    GlobalHeader.prototype.tagName = 'div';

    GlobalHeader.prototype.template = Handlebars.compile($('#globalheader-view-template').html());

    GlobalHeader.prototype.ui = {
      'searchInput': '.search-input'
    };

    GlobalHeader.prototype.events = {
      'click .search-button': 'searchLumberYards'
    };

    GlobalHeader.prototype.searchLumberYards = function() {
      var filteredCollection, item, list, searchTerm, _i, _len;
      searchTerm = this.ui.searchInput.val();
      filteredCollection = new Backbone.Collection;
      list = this.collection.filter(function(model) {
        return _.any(model.attributes, function(val, attr) {
          return val.indexOf(searchTerm) !== -1;
        });
      });
      for (_i = 0, _len = list.length; _i < _len; _i++) {
        item = list[_i];
        filteredCollection.push(item);
      }
      if (list.length === 0) {
        filteredCollection = this.collection;
      }
      return vent.trigger('show-list-filtered:lumberyard', filteredCollection);
    };

    return GlobalHeader;

  })(Marionette.ItemView);
});
