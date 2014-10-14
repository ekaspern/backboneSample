var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Handlebars, Marionette, Yard, vent;
  Marionette = require('marionette');
  Handlebars = require('handlebars');
  vent = require('vent');
  return Yard = (function(_super) {
    __extends(Yard, _super);

    function Yard() {
      return Yard.__super__.constructor.apply(this, arguments);
    }

    Yard.prototype.className = 'yard-item';

    Yard.prototype.tagName = 'li';

    Yard.prototype.template = Handlebars.compile($('#yard-view-template').html());

    Yard.prototype.events = {
      'click': 'onClick'
    };

    Yard.prototype.initialize = function() {};

    Yard.prototype.onClick = function(event) {
      return vent.trigger('show-details:yard', this.model);
    };

    return Yard;

  })(Marionette.ItemView);
});
