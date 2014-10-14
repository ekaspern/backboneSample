var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Handlebars, LumberYardsList, Marionette, YardItemView, vent;
  Marionette = require('marionette');
  Handlebars = require('handlebars');
  vent = require('vent');
  YardItemView = require('views/yard');
  return LumberYardsList = (function(_super) {
    __extends(LumberYardsList, _super);

    function LumberYardsList() {
      return LumberYardsList.__super__.constructor.apply(this, arguments);
    }

    LumberYardsList.prototype.template = Handlebars.compile($('#lumberyards-view-template').html());

    LumberYardsList.prototype.itemView = YardItemView;

    LumberYardsList.prototype.itemViewContainer = 'ul.lumberyards-list';

    LumberYardsList.prototype.itemViewOptions = {};

    LumberYardsList.prototype.initialize = function(options) {};

    return LumberYardsList;

  })(Marionette.CompositeView);
});
