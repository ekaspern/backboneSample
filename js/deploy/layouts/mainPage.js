var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, GlobalHeaderView, Handlebars, LumberYardsCollection, LumberYardsView, MainPage, Marionette;
  Marionette = require('marionette');
  Backbone = require('backbone');
  Handlebars = require('handlebars');
  GlobalHeaderView = require('views/globalHeader');
  LumberYardsCollection = require('collections/lumberyards');
  LumberYardsView = require('views/lumberyards');
  return MainPage = (function(_super) {
    __extends(MainPage, _super);

    function MainPage() {
      this.showContent = __bind(this.showContent, this);
      this.showHeader = __bind(this.showHeader, this);
      this.onRender = __bind(this.onRender, this);
      return MainPage.__super__.constructor.apply(this, arguments);
    }

    MainPage.prototype.el = '.homepage-box';

    MainPage.prototype.template = Handlebars.compile($('#mainpage-layout-template').html());

    MainPage.prototype.regions = {
      headerRegion: '.main-header',
      contentRegion: '.main-content',
      footerRegion: '.main-footer'
    };

    MainPage.prototype.initialize = function() {
      var lumberYardData;
      console.log("help");
      lumberYardData = [
        {
          "yardName": "Downs & Reader",
          "addressStreet1": "60 Evans Drive",
          "city": "Stoughton",
          "state": "MA",
          "website": "www.downesandreader.com",
          "phone": "617.442.8050",
          "woodTypes": ["Hardwoods"]
        }, {
          "yardName": "Anderson & McQuaid",
          "addressStreet1": "170 Fawcett Street",
          "city": "Cambridge",
          "state": "MA",
          "website": "www.societyofcrafts.org",
          "phone": "617.876.3250",
          "woodTypes": ["Hardwoods", "Exotics", "Moldings"]
        }, {
          "yardName": "Boutlter Plywood",
          "addressStreet1": "24 Broadway",
          "city": "Somerville",
          "state": "MA",
          "website": "www.boulterplywood.com",
          "phone": "617.666.1340",
          "woodTypes": ["Hardwoods", "Veneer", "Plywood"]
        }
      ];
      this.lumberYardCollection = new LumberYardsCollection(lumberYardData);
      return this.render();
    };

    MainPage.prototype.onRender = function() {
      this.showHeader();
      return this.showContent();
    };

    MainPage.prototype.showHeader = function() {
      return this.headerRegion.show(new GlobalHeaderView());
    };

    MainPage.prototype.showContent = function() {
      this.lumberYardsView = new LumberYardsView({
        collection: this.lumberYardCollection
      });
      return this.contentRegion.show(this.lumberYardsView);
    };

    return MainPage;

  })(Marionette.Layout);
});
