(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.css */ "./src/tooltip.css");
/* harmony import */ var _tooltip_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tooltip_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.js */ "./src/tooltip.js");



var __install = function __install(Vue) {
  Vue.directive('tooltip', {
    bind: function bind(el, binding, vnode) {
      if (!el.$tooltip) {
        el.$tooltip = new _tooltip_js__WEBPACK_IMPORTED_MODULE_1__["default"](el, binding.value || {});
      }
    },
    unbind: function unbind(el) {
      if (el.$tooltip) {
        el.$tooltip.dispose();
        delete el.$tooltip;
      }
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(__install);
}

_tooltip_js__WEBPACK_IMPORTED_MODULE_1__["default"].install = __install;
/* harmony default export */ __webpack_exports__["default"] = (_tooltip_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/tooltip.css":
/*!*************************!*\
  !*** ./src/tooltip.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/tooltip.js":
/*!************************!*\
  !*** ./src/tooltip.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tooltip = /*#__PURE__*/function () {
  function Tooltip(el, options) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    // console.log(options);
    this.id = 't-' + Math.random().toString(16).substr(2, 9);
    this.el = el;
    this.container = document.createElement('div');
    this.events = [];
    var o = this.o = Object.assign({
      when: 'hover',
      // hover | click | focus
      placement: 'top',
      // auto | top | bottom | left | right
      offset: 0,
      content: '',
      title: '',
      html: true,
      delay: {
        show: 0,
        hide: 500
      } // beforeShow: null,
      // beforeHide: null,
      // afterShow: null,
      // afterHide: null

    }, options);

    switch (o.when) {
      case 'click':
        // this.el.addEventListener('click', () => this.toggle());
        //this.events.push({ 'click': () => this.toggle() });
        this.events.push(['click', function () {
          return _this.toggle();
        }]);
        break;

      case 'focus':
        // this.el.addEventListener('focus', () => this.show());
        // this.el.addEventListener('blur', () => this.hide());
        this.events.push(['focus', function () {
          return _this.show();
        }]);
        this.events.push(['blur', function () {
          return _this.hide();
        }]);
        break;

      case 'hover':
      default:
        // this.el.addEventListener('mouseover', () => this.show());
        // this.el.addEventListener('mouseout', () => this.hide());
        this.events.push(['mouseover', function () {
          return _this.show();
        }]);
        this.events.push(['mouseout', function () {
          return _this.hide();
        }]);
        this.container.addEventListener('mouseover', function () {
          return _this.show();
        });
        this.container.addEventListener('mouseout', function () {
          return _this.hide();
        });
        break;
    }

    this.events.forEach(function (evt) {
      _this.el.addEventListener(evt[0], evt[1]);
    });
  }

  _createClass(Tooltip, [{
    key: "viewport",
    value: function viewport(el) {
      return {
        top: el.offsetTop,
        left: el.offsetLeft,
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    }
  }, {
    key: "show",
    value: function show() {
      var o = this.o;

      if (!this.created) {
        this.container.id = this.id;
        this.container.className = "tt show animated tt-p-" + o.placement;
        this.container.setAttribute('x-placement', o.placement); // create arrow

        this.arrow = document.createElement('div');
        this.arrow.className = "tt-arrow";
        this.container.appendChild(this.arrow);
        this.tl = document.createElement('h3');
        this.tl.className = "tt-header";
        this.container.appendChild(this.tl);
        this.body = document.createElement('div');
        this.body.className = "tt-body";
        this.container.appendChild(this.body);
        document.body.appendChild(this.container);
        this.created = true;
      }

      clearTimeout(this.hideTimeout); // container hover

      if (this.showed) return;
      this.container.style.display = "block";
      this.tl.innerText = o.title;
      this.html(o.content); // this.position();

      this.showed = true;
    }
  }, {
    key: "position",
    value: function position() {
      var o = this.o; // var v = this.viewport(this.el); //this.el.getBoundingClientRect();
      // var m = this.viewport(this.container);//this.container.getBoundingClientRect();
      // var a = this.viewport(this.arrow); //this.arrow.getBoundingClientRect();
      // Scroll offset of the current document

      var ot = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var ol = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
      var v = this.el.getBoundingClientRect();
      var m = this.container.getBoundingClientRect();
      var a = this.arrow.getBoundingClientRect();
      var t = v.top + ot;
      var l = v.left + ol;

      switch (o.placement) {
        case 'left':
          this.container.style.left = l - m.width - a.width - o.offset + 'px';
          this.container.style.top = t + (v.height - m.height) / 2 + 'px';
          this.arrow.style.top = (m.height - a.height) / 2 + 'px';
          this.removeClass(this.container, "fadeOutLeft");
          this.addClass(this.container, "fadeInLeft");
          break;

        case 'right':
          this.container.style.left = l + v.width + a.width + o.offset + 'px';
          this.container.style.top = t + (v.height - m.height) / 2 + 'px';
          this.arrow.style.top = (m.height - a.height) / 2 + 'px';
          this.removeClass(this.container, "fadeOutRight");
          this.addClass(this.container, "fadeInRight");
          break;

        case 'bottom':
          this.container.style.left = l + (v.width - m.width) / 2 + 'px';
          this.container.style.top = t + m.height + o.offset + a.height + 'px';
          this.arrow.style.left = (m.width - a.width) / 2 + 'px';
          this.removeClass(this.container, "fadeOutDown");
          this.addClass(this.container, "fadeInUp");
          break;

        case 'top':
        default:
          this.container.style.left = l + (v.width - m.width) / 2 + 'px';
          this.container.style.top = t - m.height - o.offset - a.height + 'px';
          this.arrow.style.left = (m.width - a.width) / 2 + 'px';
          this.removeClass(this.container, "fadeOutUp");
          this.addClass(this.container, "fadeInDown");
          break;
      }
    }
  }, {
    key: "html",
    value: function html(content) {
      var _this2 = this;

      if (typeof content === 'function') {
        var result = content();

        if (result && typeof result.then === 'function') {
          result.then(function (val) {
            _this2.html(val);
          });
        } else {
          this.html(result);
        }
      } else {
        this.o.html ? this.body.innerHTML = content : this.body.innerText = content;
        this.position();
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.showed) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "toArray",
    value: function toArray(value) {
      if (typeof value === 'string') {
        value = value.split(' ');
      }

      return value;
    }
  }, {
    key: "addClass",
    value: function addClass(el, classes) {
      var newClasses = this.toArray(classes);
      var lists = this.toArray(el.className);
      newClasses.forEach(function (newClass) {
        if (lists.indexOf(newClass) === -1) {
          lists.push(newClass);
        }
      });
      el.className = lists.join(' ');
    }
  }, {
    key: "removeClass",
    value: function removeClass(el, classes) {
      var newClasses = this.toArray(classes);
      var lists = this.toArray(el.className);
      newClasses.forEach(function (newClass) {
        var index = lists.indexOf(newClass);

        if (index !== -1) {
          lists.splice(index, 1);
        }
      });
      el.className = lists.join(' ');
    } // css(obj) {
    // }

  }, {
    key: "hide",
    value: function hide(f) {
      var _this3 = this;

      if (!f) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = setTimeout(function () {
          _this3.hide(1);
        }, this.o.delay.hide);
        return;
      }

      switch (this.o.placement) {
        case 'top':
          this.removeClass(this.container, "fadeInDown");
          this.addClass(this.container, "fadeOutUp");
          break;

        case 'bottom':
          this.removeClass(this.container, "fadeInUp");
          this.addClass(this.container, "fadeOutDown");
          break;

        case 'right':
          this.removeClass(this.container, "fadeInRight");
          this.addClass(this.container, "fadeOutRight");
          break;

        case 'left':
          this.removeClass(this.container, "fadeInLeft");
          this.addClass(this.container, "fadeOutLeft");
          break;
      }

      this.hideTimeout = setTimeout(function () {
        _this3.container.style.display = "none";
      }, 800);
      this.showed = false;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      var _this4 = this;

      this.events.forEach(function (evt) {
        _this4.el.removeEventListener(evt[0], evt[1]);
      });
      document.body.removeChild(this.container);
    }
  }]);

  return Tooltip;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map