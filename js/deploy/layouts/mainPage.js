var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var Backbone, GlobalHeaderView, Handlebars, LumberYardsCollection, LumberYardsView, MainPage, Marionette, YardDetailView, vent;
  Marionette = require('marionette');
  Backbone = require('backbone');
  Handlebars = require('handlebars');
  vent = require('vent');
  GlobalHeaderView = require('views/globalHeader');
  LumberYardsCollection = require('collections/lumberYards');
  LumberYardsView = require('views/lumberYards');
  YardDetailView = require('views/yardDetails');
  return MainPage = (function(_super) {
    __extends(MainPage, _super);

    function MainPage() {
      this.showYardDetail = __bind(this.showYardDetail, this);
      this.showMainContent = __bind(this.showMainContent, this);
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
      lumberYardData = [
        {
          "yardName": "Anderson & McQuaid",
          "addressStreet1": "170 Fawcett Street",
          "city": "Cambridge",
          "state": "MA",
          "website": "www.andersonmcquaid.com",
          "phone": "617.876.3250",
          "woodTypes": [
            {
              "wood": "Hardwoods"
            }, {
              "wood": "Exotics"
            }, {
              "wood": "Moldings"
            }
          ]
        }, {
          "yardName": "Boulter Plywood",
          "addressStreet1": "24 Broadway",
          "city": "Somerville",
          "state": "MA",
          "website": "www.boulterplywood.com",
          "phone": "617.666.1340",
          "woodTypes": [
            {
              "wood": "Hardwoods"
            }, {
              "wood": "Veneer"
            }, {
              "wood": "Plywood"
            }
          ]
        }, {
          "yardName": "Downs & Reader",
          "addressStreet1": "60 Evans Drive",
          "city": "Stoughton",
          "state": "MA",
          "website": "www.downesandreader.com",
          "phone": "617.442.8050",
          "woodTypes": [
            {
              "wood": "Hardwoods"
            }
          ]
        }, {
          "yardName": "Highland Hardwoods",
          "addressStreet1": "Route 125",
          "city": "Brentwood",
          "state": "NH",
          "website": "www.highlandhardwoods.com",
          "phone": "603.679.1230",
          "woodTypes": [
            {
              "wood": "Hardwoods"
            }
          ]
        }, {
          "yardName": "Holt & Bugbee",
          "addressStreet1": "1600 Shawsheen Street",
          "city": "Tewksbury",
          "state": "MA",
          "website": "www.holtandbugbee.com",
          "phone": "508.851.7201",
          "woodTypes": [
            {
              "wood": "Hardwoods"
            }, {
              "wood": "Softwoods"
            }, {
              "wood": "Domestic"
            }, {
              "wood": "Imported"
            }
          ]
        }, {
          "yardName": "Kiever-Willard",
          "addressStreet1": "11-13 Graf Road",
          "city": "Newburyport",
          "state": "MA",
          "website": "www.keiver-willard.com/",
          "phone": "508.462.7193",
          "woodTypes": [
            {
              "wood": "Hardwoods"
            }
          ]
        }, {
          "yardName": "Northland Forest Products",
          "addressStreet1": "36 Depot Road",
          "city": "Kingston",
          "state": "NH",
          "website": "www.northlandforest.com",
          "phone": "603.642.8275",
          "woodTypes": [
            {
              "wood": "Hardwoods"
            }
          ]
        }
      ];
      this.lumberYardCollection = new LumberYardsCollection(lumberYardData);
      this.listenTo(vent, {
        'show-details:yard': this.showYardDetail,
        'show-list:lumberyard': this.showMainContent
      });
      return this.render();
    };

    MainPage.prototype.onRender = function() {
      this.showHeader();
      return this.showMainContent();
    };

    MainPage.prototype.showHeader = function() {
      return this.headerRegion.show(new GlobalHeaderView());
    };

    MainPage.prototype.showMainContent = function() {
      this.lumberYardsView = new LumberYardsView({
        collection: this.lumberYardCollection
      });
      return this.contentRegion.show(this.lumberYardsView);
    };

    MainPage.prototype.showYardDetail = function(model) {
      var detailView;
      detailView = new YardDetailView({
        model: model
      });
      return this.contentRegion.show(detailView);
    };

    return MainPage;

  })(Marionette.Layout);
});
