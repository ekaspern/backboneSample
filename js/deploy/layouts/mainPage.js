var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, GalleriesCollection, Handlebars, MainPage, Marionette;
  Marionette = require('marionette');
  Backbone = require('backbone');
  Handlebars = require('handlebars');
  GalleriesCollection = require('collections/galleries');
  return MainPage = (function(_super) {
    __extends(MainPage, _super);

    function MainPage() {
      this.onRender = __bind(this.onRender, this);
      return MainPage.__super__.constructor.apply(this, arguments);
    }

    MainPage.prototype.el = '.homepage-box';

    MainPage.prototype.initialize = function() {
      console.log("help");
      this.galleriesCollection = new GalleriesCollection;
      return this.galleriesCollection.fetch();
    };

    MainPage.prototype.onRender = function() {
      return console.log("@galleriesCollection", this.galleriesCollection);
    };

    return MainPage;

  })(Marionette.Layout);
});
