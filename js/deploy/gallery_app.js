var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var App, GalleryApp, MainPage, Marionette;
  Marionette = require('marionette');
  MainPage = require('layouts/mainPage');
  App = GalleryApp = (function(_super) {
    __extends(GalleryApp, _super);

    function GalleryApp() {
      this.initialize = __bind(this.initialize, this);
      return GalleryApp.__super__.constructor.apply(this, arguments);
    }

    GalleryApp.prototype.initialize = function() {
      var mainPage;
      return mainPage = new MainPage();
    };

    return GalleryApp;

  })(Marionette.Application);
  return new App();
});
