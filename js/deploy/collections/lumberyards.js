var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, LumberYards, Model;
  Backbone = require('backbone');
  Model = require('models/yard');
  return LumberYards = (function(_super) {
    __extends(LumberYards, _super);

    function LumberYards() {
      return LumberYards.__super__.constructor.apply(this, arguments);
    }

    LumberYards.prototype.model = Model;

    return LumberYards;

  })(Backbone.Collection);
});
