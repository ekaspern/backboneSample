var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var GalleriesList, GalleryItemView, Handlebars, Marionette;
  Marionette = require('marionette');
  Handlebars = require('handlebars');
  GalleryItemView = require('views/gallery');
  return GalleriesList = (function(_super) {
    __extends(GalleriesList, _super);

    function GalleriesList() {
      return GalleriesList.__super__.constructor.apply(this, arguments);
    }

    GalleriesList.prototype.template = Handlebars.compile($('#galleries-view-template').html());

    GalleriesList.prototype.itemView = GalleryItemView;

    GalleriesList.prototype.itemViewContainer = 'ul.galleries-list';

    GalleriesList.prototype.itemViewOptions = {};

    GalleriesList.prototype.collectionEvents = {
      'sync': 'render'
    };

    GalleriesList.prototype.initialize = function(options) {
      return console.log("galleries view??");
    };

    return GalleriesList;

  })(Marionette.CompositeView);
});
