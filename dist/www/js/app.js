/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! exports provided: default */

      /***/
      function srcIndexJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _tooltip_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./tooltip.css */
        "./src/tooltip.css");
        /* harmony import */


        var _tooltip_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tooltip_css__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./tooltip.js */
        "./src/tooltip.js");

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
        /* harmony default export */

        __webpack_exports__["default"] = _tooltip_js__WEBPACK_IMPORTED_MODULE_1__["default"];
        /***/
      },

      /***/
      "./src/tooltip.css":
      /*!*************************!*\
        !*** ./src/tooltip.css ***!
        \*************************/

      /*! no static exports found */

      /***/
      function srcTooltipCss(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "./src/tooltip.js":
      /*!************************!*\
        !*** ./src/tooltip.js ***!
        \************************/

      /*! exports provided: default */

      /***/
      function srcTooltipJs(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Tooltip = /*#__PURE__*/function () {
          function Tooltip(el, options) {
            var _this = this;

            _classCallCheck(this, Tooltip); // console.log(options);


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
        /* harmony default export */


        __webpack_exports__["default"] = Tooltip;
        /***/
      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/v-tooltip.css":
/*!****************************!*\
  !*** ./dist/v-tooltip.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./www/app.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./www/app.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      option: {
        content: 'Markdown Editor component for Vue.js',
        placement: 'right'
      }
    };
  },
  methods: {
    val: function val() {
      this.value = "jjkjlkjljlkjlkjlkjlkj";
    },
    change: function change() {
      this.option.content = "Other content";
    },
    replace: function replace() {
      this.$refs.md.editor.replaceSelection("Handle editor");
    }
  },
  created: function created() {
    this.$root.$on('tooltip:upload', function (md) {
      md.drawImage({
        url: 'https://i.imgur.com/CbCXhBe.png',
        title: 'this image title'
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./www/app.vue?vue&type=template&id=0d4f360b&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./www/app.vue?vue&type=template&id=0d4f360b& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("h5", [_vm._v("Hover")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "button",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                  when: "hover",
                  placement: "top",
                  content: "Html content"
                },
                expression:
                  "{ when:'hover', placement: 'top', content: 'Html content'}"
              }
            ],
            staticClass: "btn btn-primary",
            attrs: { type: "button" }
          },
          [_vm._v("Top")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                  when: "hover",
                  placement: "bottom",
                  content: "Html content"
                },
                expression:
                  "{ when:'hover', placement: 'bottom', content: 'Html content'}"
              }
            ],
            staticClass: "btn btn-primary",
            attrs: { type: "button" }
          },
          [_vm._v("Bottom")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                  when: "hover",
                  placement: "left",
                  content: "Html content"
                },
                expression:
                  "{ when:'hover', placement: 'left', content: 'Html content'}"
              }
            ],
            staticClass: "btn btn-primary",
            attrs: { type: "button" }
          },
          [_vm._v("Left")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                  when: "hover",
                  placement: "right",
                  content: "Html content"
                },
                expression:
                  "{ when:'hover', placement: 'right', content: 'Html content'}"
              }
            ],
            staticClass: "btn btn-primary",
            attrs: { type: "button" }
          },
          [_vm._v("Right")]
        )
      ]),
      _vm._v(" "),
      _c("h5", [_vm._v("Click")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "button",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                  when: "click",
                  placement: "top",
                  content: "Html content"
                },
                expression:
                  "{ when: 'click', placement: 'top', content: 'Html content'}"
              }
            ],
            staticClass: "btn btn-primary",
            attrs: { type: "button" }
          },
          [_vm._v("Top")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                  when: "click",
                  placement: "bottom",
                  content: "Html content"
                },
                expression:
                  "{ when: 'click', placement: 'bottom', content: 'Html content'}"
              }
            ],
            staticClass: "btn btn-primary",
            attrs: { type: "button" }
          },
          [_vm._v("Bottom")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                  when: "click",
                  placement: "left",
                  content: "Html content"
                },
                expression:
                  "{ when: 'click', placement: 'left', content: 'Html content'}"
              }
            ],
            staticClass: "btn btn-primary",
            attrs: { type: "button" }
          },
          [_vm._v("Left")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: {
                  when: "click",
                  placement: "right",
                  content: "Html content"
                },
                expression:
                  "{ when: 'click', placement: 'right', content: 'Html content'}"
              }
            ],
            staticClass: "btn btn-primary",
            attrs: { type: "button" }
          },
          [_vm._v("Right")]
        )
      ]),
      _vm._v(" "),
      _c("h5", [_vm._v("Focus")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: {
                    when: "focus",
                    placement: "top",
                    content: "Html content top"
                  },
                  expression:
                    "{ when: 'focus', placement: 'top', content: 'Html content top'}"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "i-top" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: {
                    when: "focus",
                    placement: "bottom",
                    content: "Html content bottom"
                  },
                  expression:
                    "{ when: 'focus', placement: 'bottom', content: 'Html content bottom'}"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "i-bottom" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: {
                    when: "focus",
                    placement: "left",
                    content: "Html content left"
                  },
                  expression:
                    "{ when: 'focus', placement: 'left', content: 'Html content left'}"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "i-left" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: {
                    when: "focus",
                    placement: "right",
                    content: "Html content right"
                  },
                  expression:
                    "{ when: 'focus', placement: 'right', content: 'Html content right'}"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "i-right" }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", [
      _c("h1", [_vm._v("v-tooltip")]),
      _vm._v(" "),
      _c("h4", [_vm._v("Tooltip directive for Vue.js")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("p", [
        _c(
          "a",
          {
            staticClass: "social-icon",
            attrs: {
              href: "https://github.com/Morioh-Lab/v-tooltip",
              target: "_blank"
            }
          },
          [_c("i", { staticClass: "fa-3x fab fa-github-square" })]
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Themed by "),
        _c(
          "a",
          {
            attrs: { href: "http://on.morioh.net/96d5d36367", target: "_blank" }
          },
          [_vm._v("Morioh Theme")]
        ),
        _c("br"),
        _vm._v("\n            Made Love by "),
        _c("a", { attrs: { href: "https://morioh.com" } }, [_vm._v("Morioh")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./www/app.js":
/*!********************!*\
  !*** ./www/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.css */ "./www/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dist_v_tooltip_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/v-tooltip.css */ "./dist/v-tooltip.css");
/* harmony import */ var _dist_v_tooltip_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_v_tooltip_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.vue */ "./www/app.vue");
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist */ "./dist/index.js");
/* harmony import */ var _dist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dist__WEBPACK_IMPORTED_MODULE_4__);





vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(_dist__WEBPACK_IMPORTED_MODULE_4___default.a);
new vue__WEBPACK_IMPORTED_MODULE_2___default.a({
  el: '#app',
  render: function render(h) {
    return h(_app_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }
});

/***/ }),

/***/ "./www/app.vue":
/*!*********************!*\
  !*** ./www/app.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=0d4f360b& */ "./www/app.vue?vue&type=template&id=0d4f360b&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./www/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "www/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./www/app.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./www/app.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./www/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./www/app.vue?vue&type=template&id=0d4f360b&":
/*!****************************************************!*\
  !*** ./www/app.vue?vue&type=template&id=0d4f360b& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=0d4f360b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./www/app.vue?vue&type=template&id=0d4f360b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_0d4f360b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./www/layout.css":
/*!************************!*\
  !*** ./www/layout.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });
//# sourceMappingURL=app.js.map