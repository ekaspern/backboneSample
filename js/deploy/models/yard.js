var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, Yard;
  Backbone = require('backbone');
  return Yard = (function(_super) {
    __extends(Yard, _super);

    function Yard() {
      return Yard.__super__.constructor.apply(this, arguments);
    }

    Yard.prototype.defaults = {
      yardName: "",
      addressStreet1: "",
      city: "",
      email: "",
      website: "",
      hours: "",
      location: "",
      uiAddress: ""
    };

    return Yard;

  })(Backbone.Model);
});
