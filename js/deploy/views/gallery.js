var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Gallery, Handlebars, Marionette;
  Marionette = require('marionette');
  Handlebars = require('handlebars');
  return Gallery = (function(_super) {
    __extends(Gallery, _super);

    function Gallery() {
      return Gallery.__super__.constructor.apply(this, arguments);
    }

    Gallery.prototype.className = 'gallery-item';

    Gallery.prototype.tagName = 'li';

    Gallery.prototype.template = Handlebars.compile($('#gallery-view-template').html());

    return Gallery;

  })(Marionette.ItemView);
});
