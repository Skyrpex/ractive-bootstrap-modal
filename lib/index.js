'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ractive = require('ractive');

var _ractive2 = _interopRequireDefault(_ractive);

exports['default'] = _ractive2['default'].extend({
  template: "{{#show}}\n\t<div intro-outro=\"fade: { duration: 100 }\" class=\"modal-backdrop\"></div>\n\n\t<div class=\"modal-open\">\n\t\t<div intro-outro=\"fly: { duration: 350, x: 0, y: '-25%' }\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"display: block; {{#zIndex}}z-index: {{zIndex}};{{/}}\" on-click=\"backdrop\">\n\t\t\t{{yield}}\n\t\t</div>\n\t</div>\n{{/}}\n",
  isolated: true,
  transitions: {
    fade: require('ractive-transitions-fade'),
    fly: require('ractive-transitions-fly')
  },
  data: function data() {
    return {
      show: false
    };
  },
  oninit: function oninit() {
    var _this = this;

    // Listen to backdrop click.
    this.on('backdrop', function (e) {
      var _e$original = e.original;
      var clientX = _e$original.clientX;
      var clientY = _e$original.clientY;

      var backdrop = _this.find('.modal');
      if (document.elementFromPoint(clientX, clientY) === backdrop) {
        _this.set('show', false);
        return false;
      }
    });
  }
});
module.exports = exports['default'];