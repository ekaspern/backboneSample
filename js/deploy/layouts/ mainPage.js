var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var MainPage, Marionette, WoodCollection, template;
  Marionette = require('marionette');
  template = require('hbs!templates/layouts/patients');
  WoodCollection = require('collections/wood');
  return MainPage = (function(_super) {
    __extends(MainPage, _super);

    function MainPage() {
      this.onRender = __bind(this.onRender, this);
      this.initialize = __bind(this.initialize, this);
      return MainPage.__super__.constructor.apply(this, arguments);
    }

    MainPage.prototype.tagName = "section";

    MainPage.prototype.className = "nav-content-box-inner";

    MainPage.prototype.template = template;

    MainPage.prototype.regions = {
      woodList: '#wood-list'
    };

    MainPage.prototype.initialize = function() {
      return this.woodCollection = new WoodCollection([], {});
    };

    MainPage.prototype.onRender = function() {
      this.woodListView = new woodListView({
        collection: this.woodCollection
      });
      return this.woodList.show(this.woodListView);
    };

    return MainPage;

  })(Marionette.Layout);
});
