var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var App, BackboneSampleApp, Marionette;
  Marionette = require('marionette');
  App = BackboneSampleApp = (function(_super) {
    __extends(BackboneSampleApp, _super);

    function BackboneSampleApp() {
      this.initialize = __bind(this.initialize, this);
      return BackboneSampleApp.__super__.constructor.apply(this, arguments);
    }

    BackboneSampleApp.prototype.initialize = function() {};

    return BackboneSampleApp;

  })(Marionette.Application);
  return new App();
});
