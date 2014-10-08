var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, GalleriesCollection, MainPage, Marionette;
  Marionette = require('marionette');
  Backbone = require('backbone');
  GalleriesCollection = require('collections/galleries');
  return MainPage = (function(_super) {
    __extends(MainPage, _super);

    function MainPage() {
      this.onRender = __bind(this.onRender, this);
      this.initialize = __bind(this.initialize, this);
      return MainPage.__super__.constructor.apply(this, arguments);
    }

    MainPage.prototype.el = '.homepage-box';

    MainPage.prototype.initialize = function() {
      console.log("help");
      console.log("help222");
      return console.log("@galleriesCollection", this.galleriesCollection);
    };

    MainPage.prototype.onRender = function() {
      return console.log("render");
    };

    return MainPage;

  })(Marionette.Layout);
});
