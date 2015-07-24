(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.Ractive||(g.Ractive = {}));g=(g.components||(g.components = {}));g.Modal = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"ractive":undefined,"ractive-transitions-fade":undefined,"ractive-transitions-fly":undefined}]},{},[1])(1)
});