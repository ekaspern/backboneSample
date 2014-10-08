var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, Galleries, Model, _;
  Backbone = require('backbone');
  _ = require('underscore');
  Model = require('models/gallery');
  return Galleries = (function(_super) {
    __extends(Galleries, _super);

    function Galleries() {
      return Galleries.__super__.constructor.apply(this, arguments);
    }

    Galleries.prototype.model = Model;

    Galleries.prototype.url = '/assets/gallerydata/galleryData.json';

    return Galleries;

  })(Backbone.Collection);
});
