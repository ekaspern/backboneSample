var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var GlobalHeader, Marionette;
  Marionette = require('marionette');
  return GlobalHeader = (function(_super) {
    __extends(GlobalHeader, _super);

    function GlobalHeader() {
      return GlobalHeader.__super__.constructor.apply(this, arguments);
    }

    GlobalHeader.prototype.template = Handlebars.compile($('#globalheader-view-template').html());

    return GlobalHeader;

  })(Marionette.ItemView);
});
