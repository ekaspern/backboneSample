var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, Gallery;
  Backbone = require('backbone');
  return Gallery = (function(_super) {
    __extends(Gallery, _super);

    function Gallery() {
      return Gallery.__super__.constructor.apply(this, arguments);
    }

    Gallery.prototype.defaults = {
      galleryName: "",
      addressStreet1: "",
      city: "",
      email: "",
      website: "",
      hours: "",
      location: "",
      uiAddress: ""
    };

    return Gallery;

  })(Backbone.Model);
});