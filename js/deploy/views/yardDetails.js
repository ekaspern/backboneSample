var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Handlebars, Marionette, YardDetails, vent;
  Marionette = require('marionette');
  Handlebars = require('handlebars');
  vent = require('vent');
  return YardDetails = (function(_super) {
    __extends(YardDetails, _super);

    function YardDetails() {
      this.displayLumberYards = __bind(this.displayLumberYards, this);
      return YardDetails.__super__.constructor.apply(this, arguments);
    }

    YardDetails.prototype.className = 'yard-details';

    YardDetails.prototype.tagName = 'div';

    YardDetails.prototype.template = Handlebars.compile($('#yard-details-template').html());

    YardDetails.prototype.events = {
      'click .text-back': 'displayLumberYards'
    };

    YardDetails.prototype.initialize = function(options) {};

    YardDetails.prototype.displayLumberYards = function() {
      return vent.trigger('show-list:lumberyard');
    };

    return YardDetails;

  })(Marionette.ItemView);
});
