
console.log('START WEEX VUE RENDER: 1.0.36, Build 2018-12-29 17:52.');


(
  function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.WeexVueRender = factory());
  }(
    this,
    (function () {
      'use strict';

      function __$styleInject(css, returnValue) {
        if (typeof document === 'undefined') {
          return returnValue;
        }
        css = css || '';
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        head.appendChild(style);
        
        if (style.styleSheet){
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
        return returnValue;
      }

      __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.weex-root,\n.weex-root * {\n  color: initial;\n  cursor: initial;\n  direction: inherit;\n  /* In chrome, there's a chance that user set the miximum font-size to \n  a abnormal smaller size. But actually the smaller size is never working\n  if this font / font-size default value is set to initial. Perhaps a bug\n  for chrome. */\n  font: initial;\n  font-size: initial;\n  font-family: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.weex-root,\n.weex-root *,\n.weex-root *::before,\n.weex-root *::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n.weex-root a,\n.weex-root button,\n.weex-root [role=\"button\"],\n.weex-root input,\n.weex-root label,\n.weex-root select,\n.weex-root textarea {\n      touch-action: manipulation;\n}\n\n.weex-root p,\n.weex-root ol,\n.weex-root ul,\n.weex-root dl,\n.weex-root figure {\n  margin: 0;\n  padding: 0;\n}\n\n.weex-root li {\n  list-style: none;\n}\n\n.weex-root figure {\n  margin: 0;\n}\n\n.weex-root textarea {\n  resize: none;\n}\n\n/* show no scroll bar. */\n::-webkit-scrollbar {\n  display: none;\n}\n",undefined);

      __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\ndiv.weex-root {\n  min-height: 100%;\n}\n\n/**\n * slider will overflow in horizontal axis, which will cause container\n * horizontally expanding. below styles will prevent this from happening.\n */\n.weex-root {\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.weex-root figure {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.weex-flex-ct {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.weex-ct {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n          flex-grow: 0;\n  -webkit-flex-basis: auto;\n          flex-basis: auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n          align-items: stretch;\n  -webkit-align-content: flex-start;\n          align-content: flex-start;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ct.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.weex-el {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n          flex-grow: 0;\n  -webkit-flex-basis: auto;\n          flex-basis: auto;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-text {\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.4266666666666667rem;\n  word-wrap: break-word;\n  overflow: hidden; /* it'll be clipped if the height is not high enough. */\n}\n\n.weex-image {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 100% 100%;\n}\n\n.weex-a {\n  text-decoration: none;\n}\n\n.weex-ios-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.weex-fixed {\n  position: fixed;\n  z-index: 1;\n}\n\n.weex-sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n",undefined);

      // 7.1.4 ToInteger
      var ceil = Math.ceil;
      var floor = Math.floor;
      var _toInteger = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };

      // 7.2.1 RequireObjectCoercible(argument)
      var _defined = function (it) {
        if (it == undefined) { throw TypeError("Can't call method on  " + it); }
        return it;
      };

      // true  -> String#at
      // false -> String#codePointAt
      var _stringAt = function (TO_STRING) {
        return function (that, pos) {
          var s = String(_defined(that));
          var i = _toInteger(pos);
          var l = s.length;
          var a, b;
          if (i < 0 || i >= l) { return TO_STRING ? '' : undefined; }
          a = s.charCodeAt(i);
          return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
            ? TO_STRING ? s.charAt(i) : a
            : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
      };

      var _library = false;

      function createCommonjsModule(fn, module) {
        return module = { exports: {} }, fn(module, module.exports), module.exports;
      }

      var _global = createCommonjsModule(function (module) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math
        ? window : typeof self != 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
        : Function('return this')();
      if (typeof __g == 'number') { __g = global; } // eslint-disable-line no-undef
      });

      var _core = createCommonjsModule(function (module) {
      var core = module.exports = { version: '2.5.2' };
      if (typeof __e == 'number') { __e = core; } // eslint-disable-line no-undef
      });

      var _core_1 = _core.version;

      var _isObject = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };

      var _anObject = function (it) {
        if (!_isObject(it)) { throw TypeError(it + ' is not an object!'); }
        return it;
      };

      var _fails = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };

      // Thank's IE8 for his funny defineProperty
      var _descriptors = !_fails(function () {
        return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
      });

      var document$1 = _global.document;
      // typeof document.createElement is 'object' in old IE
      var is = _isObject(document$1) && _isObject(document$1.createElement);
      var _domCreate = function (it) {
        return is ? document$1.createElement(it) : {};
      };

      var _ie8DomDefine = !_descriptors && !_fails(function () {
        return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
      });

      // 7.1.1 ToPrimitive(input [, PreferredType])

      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      var _toPrimitive = function (it, S) {
        if (!_isObject(it)) { return it; }
        var fn, val;
        if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) { return val; }
        if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) { return val; }
        if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) { return val; }
        throw TypeError("Can't convert object to primitive value");
      };

      var dP = Object.defineProperty;

      var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        _anObject(O);
        P = _toPrimitive(P, true);
        _anObject(Attributes);
        if (_ie8DomDefine) { try {
          return dP(O, P, Attributes);
        } catch (e) { /* empty */ } }
        if ('get' in Attributes || 'set' in Attributes) { throw TypeError('Accessors not supported!'); }
        if ('value' in Attributes) { O[P] = Attributes.value; }
        return O;
      };

      var _objectDp = {
        f: f
      };

      var _propertyDesc = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };

      var _hide = _descriptors ? function (object, key, value) {
        return _objectDp.f(object, key, _propertyDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };

      var hasOwnProperty = {}.hasOwnProperty;
      var _has = function (it, key) {
        return hasOwnProperty.call(it, key);
      };

      var id = 0;
      var px = Math.random();
      var _uid = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };

      var _redefine = createCommonjsModule(function (module) {
      var SRC = _uid('src');
      var TO_STRING = 'toString';
      var $toString = Function[TO_STRING];
      var TPL = ('' + $toString).split(TO_STRING);

      _core.inspectSource = function (it) {
        return $toString.call(it);
      };

      (module.exports = function (O, key, val, safe) {
        var isFunction = typeof val == 'function';
        if (isFunction) { _has(val, 'name') || _hide(val, 'name', key); }
        if (O[key] === val) { return; }
        if (isFunction) { _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
        if (O === _global) {
          O[key] = val;
        } else if (!safe) {
          delete O[key];
          _hide(O, key, val);
        } else if (O[key]) {
          O[key] = val;
        } else {
          _hide(O, key, val);
        }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, TO_STRING, function toString() {
        return typeof this == 'function' && this[SRC] || $toString.call(this);
      });
      });

      var _aFunction = function (it) {
        if (typeof it != 'function') { throw TypeError(it + ' is not a function!'); }
        return it;
      };

      // optional / simple context binding

      var _ctx = function (fn, that, length) {
        _aFunction(fn);
        if (that === undefined) { return fn; }
        switch (length) {
          case 1: return function (a) {
            return fn.call(that, a);
          };
          case 2: return function (a, b) {
            return fn.call(that, a, b);
          };
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments);
        };
      };

      var PROTOTYPE = 'prototype';

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
        var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        var key, own, out, exp;
        if (IS_GLOBAL) { source = name; }
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          // export native or passed
          out = (own ? target : source)[key];
          // bind timers to global for call from export context
          exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
          // extend global
          if (target) { _redefine(target, key, out, type & $export.U); }
          // export
          if (exports[key] != out) { _hide(exports, key, exp); }
          if (IS_PROTO && expProto[key] != out) { expProto[key] = out; }
        }
      };
      _global.core = _core;
      // type bitmap
      $export.F = 1;   // forced
      $export.G = 2;   // global
      $export.S = 4;   // static
      $export.P = 8;   // proto
      $export.B = 16;  // bind
      $export.W = 32;  // wrap
      $export.U = 64;  // safe
      $export.R = 128; // real proto method for `library`
      var _export = $export;

      var _iterators = {};

      var toString = {}.toString;

      var _cof = function (it) {
        return toString.call(it).slice(8, -1);
      };

      // fallback for non-array-like ES3 and non-enumerable old V8 strings

      // eslint-disable-next-line no-prototype-builtins
      var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return _cof(it) == 'String' ? it.split('') : Object(it);
      };

      // to indexed object, toObject with fallback for non-array-like ES3 strings


      var _toIobject = function (it) {
        return _iobject(_defined(it));
      };

      // 7.1.15 ToLength

      var min = Math.min;
      var _toLength = function (it) {
        return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };

      var max = Math.max;
      var min$1 = Math.min;
      var _toAbsoluteIndex = function (index, length) {
        index = _toInteger(index);
        return index < 0 ? max(index + length, 0) : min$1(index, length);
      };

      // false -> Array#indexOf
      // true  -> Array#includes



      var _arrayIncludes = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = _toIobject($this);
          var length = _toLength(O.length);
          var index = _toAbsoluteIndex(fromIndex, length);
          var value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) { while (length > index) {
            value = O[index++];
            // eslint-disable-next-line no-self-compare
            if (value != value) { return true; }
          // Array#indexOf ignores holes, Array#includes - not
          } } else { for (;length > index; index++) { if (IS_INCLUDES || index in O) {
            if (O[index] === el) { return IS_INCLUDES || index || 0; }
          } } } return !IS_INCLUDES && -1;
        };
      };

      var SHARED = '__core-js_shared__';
      var store = _global[SHARED] || (_global[SHARED] = {});
      var _shared = function (key) {
        return store[key] || (store[key] = {});
      };

      var shared = _shared('keys');

      var _sharedKey = function (key) {
        return shared[key] || (shared[key] = _uid(key));
      };

      var arrayIndexOf = _arrayIncludes(false);
      var IE_PROTO$1 = _sharedKey('IE_PROTO');

      var _objectKeysInternal = function (object, names) {
        var O = _toIobject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) { if (key != IE_PROTO$1) { _has(O, key) && result.push(key); } }
        // Don't enum bug & hidden keys
        while (names.length > i) { if (_has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        } }
        return result;
      };

      // IE 8- don't enum bug keys
      var _enumBugKeys = (
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
      ).split(',');

      // 19.1.2.14 / 15.2.3.14 Object.keys(O)



      var _objectKeys = Object.keys || function keys(O) {
        return _objectKeysInternal(O, _enumBugKeys);
      };

      var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
        _anObject(O);
        var keys = _objectKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;
        while (length > i) { _objectDp.f(O, P = keys[i++], Properties[P]); }
        return O;
      };

      var document$2 = _global.document;
      var _html = document$2 && document$2.documentElement;

      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



      var IE_PROTO = _sharedKey('IE_PROTO');
      var Empty = function () { /* empty */ };
      var PROTOTYPE$1 = 'prototype';

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = _domCreate('iframe');
        var i = _enumBugKeys.length;
        var lt = '<';
        var gt = '>';
        var iframeDocument;
        iframe.style.display = 'none';
        _html.appendChild(iframe);
        iframe.src = 'javascript:'; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--) { delete createDict[PROTOTYPE$1][_enumBugKeys[i]]; }
        return createDict();
      };

      var _objectCreate = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          Empty[PROTOTYPE$1] = _anObject(O);
          result = new Empty();
          Empty[PROTOTYPE$1] = null;
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O;
        } else { result = createDict(); }
        return Properties === undefined ? result : _objectDps(result, Properties);
      };

      var _wks = createCommonjsModule(function (module) {
      var store = _shared('wks');

      var Symbol = _global.Symbol;
      var USE_SYMBOL = typeof Symbol == 'function';

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] =
          USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
      };

      $exports.store = store;
      });

      var def = _objectDp.f;

      var TAG = _wks('toStringTag');

      var _setToStringTag = function (it, tag, stat) {
        if (it && !_has(it = stat ? it : it.prototype, TAG)) { def(it, TAG, { configurable: true, value: tag }); }
      };

      var IteratorPrototype = {};

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

      var _iterCreate = function (Constructor, NAME, next) {
        Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
        _setToStringTag(Constructor, NAME + ' Iterator');
      };

      // 7.1.13 ToObject(argument)

      var _toObject = function (it) {
        return Object(_defined(it));
      };

      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


      var IE_PROTO$2 = _sharedKey('IE_PROTO');
      var ObjectProto = Object.prototype;

      var _objectGpo = Object.getPrototypeOf || function (O) {
        O = _toObject(O);
        if (_has(O, IE_PROTO$2)) { return O[IE_PROTO$2]; }
        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        } return O instanceof Object ? ObjectProto : null;
      };

      var ITERATOR = _wks('iterator');
      var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
      var FF_ITERATOR = '@@iterator';
      var KEYS = 'keys';
      var VALUES = 'values';

      var returnThis = function () { return this; };

      var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        _iterCreate(Constructor, NAME, next);
        var getMethod = function (kind) {
          if (!BUGGY && kind in proto) { return proto[kind]; }
          switch (kind) {
            case KEYS: return function keys() { return new Constructor(this, kind); };
            case VALUES: return function values() { return new Constructor(this, kind); };
          } return function entries() { return new Constructor(this, kind); };
        };
        var TAG = NAME + ' Iterator';
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
        var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype;
        // Fix native
        if ($anyNative) {
          IteratorPrototype = _objectGpo($anyNative.call(new Base()));
          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            _setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (!_library && !_has(IteratorPrototype, ITERATOR)) { _hide(IteratorPrototype, ITERATOR, returnThis); }
          }
        }
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;
          $default = function values() { return $native.call(this); };
        }
        // Define iterator
        if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          _hide(proto, ITERATOR, $default);
        }
        // Plug for library
        _iterators[NAME] = $default;
        _iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          };
          if (FORCED) { for (key in methods) {
            if (!(key in proto)) { _redefine(proto, key, methods[key]); }
          } } else { _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods); }
        }
        return methods;
      };

      var $at = _stringAt(true);

      // 21.1.3.27 String.prototype[@@iterator]()
      _iterDefine(String, 'String', function (iterated) {
        this._t = String(iterated); // target
        this._i = 0;                // next index
      // 21.1.5.2.1 %StringIteratorPrototype%.next()
      }, function () {
        var O = this._t;
        var index = this._i;
        var point;
        if (index >= O.length) { return { value: undefined, done: true }; }
        point = $at(O, index);
        this._i += point.length;
        return { value: point, done: false };
      });

      // call something on iterator step with safe closing on error

      var _iterCall = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
        // 7.4.6 IteratorClose(iterator, completion)
        } catch (e) {
          var ret = iterator['return'];
          if (ret !== undefined) { _anObject(ret.call(iterator)); }
          throw e;
        }
      };

      // check on default Array iterator

      var ITERATOR$1 = _wks('iterator');
      var ArrayProto = Array.prototype;

      var _isArrayIter = function (it) {
        return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
      };

      var _createProperty = function (object, index, value) {
        if (index in object) { _objectDp.f(object, index, _propertyDesc(0, value)); }
        else { object[index] = value; }
      };

      // getting tag from 19.1.3.6 Object.prototype.toString()

      var TAG$1 = _wks('toStringTag');
      // ES3 wrong here
      var ARG = _cof(function () { return arguments; }()) == 'Arguments';

      // fallback for IE11 Script Access Denied error
      var tryGet = function (it, key) {
        try {
          return it[key];
        } catch (e) { /* empty */ }
      };

      var _classof = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
          // @@toStringTag case
          : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
          // builtinTag case
          : ARG ? _cof(O)
          // ES3 arguments fallback
          : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
      };

      var ITERATOR$2 = _wks('iterator');

      var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
        if (it != undefined) { return it[ITERATOR$2]
          || it['@@iterator']
          || _iterators[_classof(it)]; }
      };

      var ITERATOR$3 = _wks('iterator');
      var SAFE_CLOSING = false;

      try {
        var riter = [7][ITERATOR$3]();
        riter['return'] = function () { SAFE_CLOSING = true; };
        // eslint-disable-next-line no-throw-literal
        
      } catch (e) { /* empty */ }

      var _iterDetect = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) { return false; }
        var safe = false;
        try {
          var arr = [7];
          var iter = arr[ITERATOR$3]();
          iter.next = function () { return { done: safe = true }; };
          arr[ITERATOR$3] = function () { return iter; };
          exec(arr);
        } catch (e) { /* empty */ }
        return safe;
      };

      _export(_export.S + _export.F * !_iterDetect(function (iter) {  }), 'Array', {
        // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
        from: function from(arrayLike /*  mapfn = undefined, thisArg = undefined */) {
          var O = _toObject(arrayLike);
          var C = typeof this == 'function' ? this : Array;
          var aLen = arguments.length;
          var mapfn = aLen > 1 ? arguments[1] : undefined;
          var mapping = mapfn !== undefined;
          var index = 0;
          var iterFn = core_getIteratorMethod(O);
          var length, result, step, iterator;
          if (mapping) { mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); }
          // if object isn't iterable or it's array with default iterator - use simple case
          if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
              _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
            }
          } else {
            length = _toLength(O.length);
            for (result = new C(length); length > index; index++) {
              _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
            }
          }
          result.length = index;
          return result;
        }
      });

      var from = _core.Array.from;

      var f$1 = Object.getOwnPropertySymbols;

      var _objectGops = {
        f: f$1
      };

      var f$2 = {}.propertyIsEnumerable;

      var _objectPie = {
        f: f$2
      };

      // 19.1.2.1 Object.assign(target, source, ...)





      var $assign = Object.assign;

      // should work with symbols and should have deterministic property order (V8 bug)
      var _objectAssign = !$assign || _fails(function () {
        var A = {};
        var B = {};
        // eslint-disable-next-line no-undef
        var S = Symbol();
        var K = 'abcdefghijklmnopqrst';
        A[S] = 7;
        K.split('').forEach(function (k) { B[k] = k; });
        return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
      }) ? function assign(target, source) {
        var arguments$1 = arguments;
      // eslint-disable-line no-unused-vars
        var T = _toObject(target);
        var aLen = arguments.length;
        var index = 1;
        var getSymbols = _objectGops.f;
        var isEnum = _objectPie.f;
        while (aLen > index) {
          var S = _iobject(arguments$1[index++]);
          var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j) { if (isEnum.call(S, key = keys[j++])) { T[key] = S[key]; } }
        } return T;
      } : $assign;

      // 19.1.3.1 Object.assign(target, source)


      _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

      var assign = _core.Object.assign;

      var gOPD = Object.getOwnPropertyDescriptor;

      var f$3 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
        O = _toIobject(O);
        P = _toPrimitive(P, true);
        if (_ie8DomDefine) { try {
          return gOPD(O, P);
        } catch (e) { /* empty */ } }
        if (_has(O, P)) { return _propertyDesc(!_objectPie.f.call(O, P), O[P]); }
      };

      var _objectGopd = {
        f: f$3
      };

      // Works with __proto__ only. Old v8 can't work with null proto objects.
      /* eslint-disable no-proto */


      var check = function (O, proto) {
        _anObject(O);
        if (!_isObject(proto) && proto !== null) { throw TypeError(proto + ": can't set as prototype!"); }
      };
      var _setProto = {
        set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
          function (test, buggy, set) {
            try {
              set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
              set(test, []);
              buggy = !(test instanceof Array);
            } catch (e) { buggy = true; }
            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy) { O.__proto__ = proto; }
              else { set(O, proto); }
              return O;
            };
          }({}, false) : undefined),
        check: check
      };

      // 19.1.3.19 Object.setPrototypeOf(O, proto)

      _export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

      var setPrototypeOf = _core.Object.setPrototypeOf;

      // 19.1.3.6 Object.prototype.toString()

      var test = {};
      test[_wks('toStringTag')] = 'z';
      if (test + '' != '[object z]') {
        _redefine(Object.prototype, 'toString', function toString() {
          return '[object ' + _classof(this) + ']';
        }, true);
      }

      // 22.1.3.31 Array.prototype[@@unscopables]
      var UNSCOPABLES = _wks('unscopables');
      var ArrayProto$1 = Array.prototype;
      if (ArrayProto$1[UNSCOPABLES] == undefined) { _hide(ArrayProto$1, UNSCOPABLES, {}); }
      var _addToUnscopables = function (key) {
        ArrayProto$1[UNSCOPABLES][key] = true;
      };

      var _iterStep = function (done, value) {
        return { value: value, done: !!done };
      };

      // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()
      var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
        this._t = _toIobject(iterated); // target
        this._i = 0;                   // next index
        this._k = kind;                // kind
      // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function () {
        var O = this._t;
        var kind = this._k;
        var index = this._i++;
        if (!O || index >= O.length) {
          this._t = undefined;
          return _iterStep(1);
        }
        if (kind == 'keys') { return _iterStep(0, index); }
        if (kind == 'values') { return _iterStep(0, O[index]); }
        return _iterStep(0, [index, O[index]]);
      }, 'values');

      // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
      _iterators.Arguments = _iterators.Array;

      _addToUnscopables('keys');
      _addToUnscopables('values');
      _addToUnscopables('entries');

      var ITERATOR$4 = _wks('iterator');
      var TO_STRING_TAG = _wks('toStringTag');
      var ArrayValues = _iterators.Array;

      var DOMIterables = {
        CSSRuleList: true, // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true, // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true, // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false
      };

      for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
        var NAME = collections[i];
        var explicit = DOMIterables[NAME];
        var Collection = _global[NAME];
        var proto = Collection && Collection.prototype;
        var key;
        if (proto) {
          if (!proto[ITERATOR$4]) { _hide(proto, ITERATOR$4, ArrayValues); }
          if (!proto[TO_STRING_TAG]) { _hide(proto, TO_STRING_TAG, NAME); }
          _iterators[NAME] = ArrayValues;
          if (explicit) { for (key in es6_array_iterator) { if (!proto[key]) { _redefine(proto, key, es6_array_iterator[key], true); } } }
        }
      }

      var _anInstance = function (it, Constructor, name, forbiddenField) {
        if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
          throw TypeError(name + ': incorrect invocation!');
        } return it;
      };

      var _forOf = createCommonjsModule(function (module) {
      var BREAK = {};
      var RETURN = {};
      var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
        var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
        var f = _ctx(fn, that, entries ? 2 : 1);
        var index = 0;
        var length, step, iterator, result;
        if (typeof iterFn != 'function') { throw TypeError(iterable + ' is not iterable!'); }
        // fast case for arrays with default iterator
        if (_isArrayIter(iterFn)) { for (length = _toLength(iterable.length); length > index; index++) {
          result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
          if (result === BREAK || result === RETURN) { return result; }
        } } else { for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
          result = _iterCall(iterator, f, step.value, entries);
          if (result === BREAK || result === RETURN) { return result; }
        } }
      };
      exports.BREAK = BREAK;
      exports.RETURN = RETURN;
      });

      // 7.3.20 SpeciesConstructor(O, defaultConstructor)


      var SPECIES = _wks('species');
      var _speciesConstructor = function (O, D) {
        var C = _anObject(O).constructor;
        var S;
        return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
      };

      // fast apply, http://jsperf.lnkit.com/fast-apply/5
      var _invoke = function (fn, args, that) {
        var un = that === undefined;
        switch (args.length) {
          case 0: return un ? fn()
                            : fn.call(that);
          case 1: return un ? fn(args[0])
                            : fn.call(that, args[0]);
          case 2: return un ? fn(args[0], args[1])
                            : fn.call(that, args[0], args[1]);
          case 3: return un ? fn(args[0], args[1], args[2])
                            : fn.call(that, args[0], args[1], args[2]);
          case 4: return un ? fn(args[0], args[1], args[2], args[3])
                            : fn.call(that, args[0], args[1], args[2], args[3]);
        } return fn.apply(that, args);
      };

      var process$1 = _global.process;
      var setTask = _global.setImmediate;
      var clearTask = _global.clearImmediate;
      var MessageChannel = _global.MessageChannel;
      var Dispatch = _global.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = 'onreadystatechange';
      var defer;
      var channel;
      var port;
      var run = function () {
        var id = +this;
        // eslint-disable-next-line no-prototype-builtins
        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      var listener = function (event) {
        run.call(event.data);
      };
      // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
      if (!setTask || !clearTask) {
        setTask = function setImmediate(fn) {
          var arguments$1 = arguments;

          var args = [];
          var i = 1;
          while (arguments.length > i) { args.push(arguments$1[i++]); }
          queue[++counter] = function () {
            // eslint-disable-next-line no-new-func
            _invoke(typeof fn == 'function' ? fn : Function(fn), args);
          };
          defer(counter);
          return counter;
        };
        clearTask = function clearImmediate(id) {
          delete queue[id];
        };
        // Node.js 0.8-
        if (_cof(process$1) == 'process') {
          defer = function (id) {
            process$1.nextTick(_ctx(run, id, 1));
          };
        // Sphere (JS game engine) Dispatch API
        } else if (Dispatch && Dispatch.now) {
          defer = function (id) {
            Dispatch.now(_ctx(run, id, 1));
          };
        // Browsers with MessageChannel, includes WebWorkers
        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = _ctx(port.postMessage, port, 1);
        // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
          defer = function (id) {
            _global.postMessage(id + '', '*');
          };
          _global.addEventListener('message', listener, false);
        // IE8-
        } else if (ONREADYSTATECHANGE in _domCreate('script')) {
          defer = function (id) {
            _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
              _html.removeChild(this);
              run.call(id);
            };
          };
        // Rest old browsers
        } else {
          defer = function (id) {
            setTimeout(_ctx(run, id, 1), 0);
          };
        }
      }
      var _task = {
        set: setTask,
        clear: clearTask
      };

      var macrotask = _task.set;
      var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
      var process$2 = _global.process;
      var Promise = _global.Promise;
      var isNode$1 = _cof(process$2) == 'process';

      var _microtask = function () {
        var head, last, notify;

        var flush = function () {
          var parent, fn;
          if (isNode$1 && (parent = process$2.domain)) { parent.exit(); }
          while (head) {
            fn = head.fn;
            head = head.next;
            try {
              fn();
            } catch (e) {
              if (head) { notify(); }
              else { last = undefined; }
              throw e;
            }
          } last = undefined;
          if (parent) { parent.enter(); }
        };

        // Node.js
        if (isNode$1) {
          notify = function () {
            process$2.nextTick(flush);
          };
        // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
        } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
          var toggle = true;
          var node = document.createTextNode('');
          new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
          notify = function () {
            node.data = toggle = !toggle;
          };
        // environments with maybe non-completely correct, but existent Promise
        } else if (Promise && Promise.resolve) {
          var promise = Promise.resolve();
          notify = function () {
            promise.then(flush);
          };
        // for other environments - macrotask based on:
        // - setImmediate
        // - MessageChannel
        // - window.postMessag
        // - onreadystatechange
        // - setTimeout
        } else {
          notify = function () {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(_global, flush);
          };
        }

        return function (fn) {
          var task = { fn: fn, next: undefined };
          if (last) { last.next = task; }
          if (!head) {
            head = task;
            notify();
          } last = task;
        };
      };

      // 25.4.1.5 NewPromiseCapability(C)


      function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined) { throw TypeError('Bad Promise constructor'); }
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = _aFunction(resolve);
        this.reject = _aFunction(reject);
      }

      var f$4 = function (C) {
        return new PromiseCapability(C);
      };

      var _newPromiseCapability = {
        f: f$4
      };

      var _perform = function (exec) {
        try {
          return { e: false, v: exec() };
        } catch (e) {
          return { e: true, v: e };
        }
      };

      var _promiseResolve = function (C, x) {
        _anObject(C);
        if (_isObject(x) && x.constructor === C) { return x; }
        var promiseCapability = _newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };

      var _redefineAll = function (target, src, safe) {
        for (var key in src) { _redefine(target, key, src[key], safe); }
        return target;
      };

      var SPECIES$1 = _wks('species');

      var _setSpecies = function (KEY) {
        var C = _global[KEY];
        if (_descriptors && C && !C[SPECIES$1]) { _objectDp.f(C, SPECIES$1, {
          configurable: true,
          get: function () { return this; }
        }); }
      };

      var task = _task.set;
      var microtask = _microtask();



      var PROMISE = 'Promise';
      var TypeError$1 = _global.TypeError;
      var process = _global.process;
      var $Promise = _global[PROMISE];
      var isNode = _classof(process) == 'process';
      var empty = function () { /* empty */ };
      var Internal;
      var newGenericPromiseCapability;
      var OwnPromiseCapability;
      var Wrapper;
      var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

      var USE_NATIVE = !!function () {
        try {
          // correct subclassing with @@species support
          var promise = $Promise.resolve(1);
          var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
            exec(empty, empty);
          };
          // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
          return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
        } catch (e) { /* empty */ }
      }();

      // helpers
      var isThenable = function (it) {
        var then;
        return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
      };
      var notify = function (promise, isReject) {
        if (promise._n) { return; }
        promise._n = true;
        var chain = promise._c;
        microtask(function () {
          var value = promise._v;
          var ok = promise._s == 1;
          var i = 0;
          var run = function (reaction) {
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then;
            try {
              if (handler) {
                if (!ok) {
                  if (promise._h == 2) { onHandleUnhandled(promise); }
                  promise._h = 1;
                }
                if (handler === true) { result = value; }
                else {
                  if (domain) { domain.enter(); }
                  result = handler(value);
                  if (domain) { domain.exit(); }
                }
                if (result === reaction.promise) {
                  reject(TypeError$1('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  then.call(result, resolve, reject);
                } else { resolve(result); }
              } else { reject(value); }
            } catch (e) {
              reject(e);
            }
          };
          while (chain.length > i) { run(chain[i++]); } // variable length - can't use forEach
          promise._c = [];
          promise._n = false;
          if (isReject && !promise._h) { onUnhandled(promise); }
        });
      };
      var onUnhandled = function (promise) {
        task.call(_global, function () {
          var value = promise._v;
          var unhandled = isUnhandled(promise);
          var result, handler, console;
          if (unhandled) {
            result = _perform(function () {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = _global.onunhandledrejection) {
                handler({ promise: promise, reason: value });
              } else if ((console = _global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
          } promise._a = undefined;
          if (unhandled && result.e) { throw result.v; }
        });
      };
      var isUnhandled = function (promise) {
        if (promise._h == 1) { return false; }
        var chain = promise._a || promise._c;
        var i = 0;
        var reaction;
        while (chain.length > i) {
          reaction = chain[i++];
          if (reaction.fail || !isUnhandled(reaction.promise)) { return false; }
        } return true;
      };
      var onHandleUnhandled = function (promise) {
        task.call(_global, function () {
          var handler;
          if (isNode) {
            process.emit('rejectionHandled', promise);
          } else if (handler = _global.onrejectionhandled) {
            handler({ promise: promise, reason: promise._v });
          }
        });
      };
      var $reject = function (value) {
        var promise = this;
        if (promise._d) { return; }
        promise._d = true;
        promise = promise._w || promise; // unwrap
        promise._v = value;
        promise._s = 2;
        if (!promise._a) { promise._a = promise._c.slice(); }
        notify(promise, true);
      };
      var $resolve = function (value) {
        var promise = this;
        var then;
        if (promise._d) { return; }
        promise._d = true;
        promise = promise._w || promise; // unwrap
        try {
          if (promise === value) { throw TypeError$1("Promise can't be resolved itself"); }
          if (then = isThenable(value)) {
            microtask(function () {
              var wrapper = { _w: promise, _d: false }; // wrap
              try {
                then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
              } catch (e) {
                $reject.call(wrapper, e);
              }
            });
          } else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
          }
        } catch (e) {
          $reject.call({ _w: promise, _d: false }, e); // wrap
        }
      };

      // constructor polyfill
      if (!USE_NATIVE) {
        // 25.4.3.1 Promise(executor)
        $Promise = function Promise(executor) {
          _anInstance(this, $Promise, PROMISE, '_h');
          _aFunction(executor);
          Internal.call(this);
          try {
            executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
          } catch (err) {
            $reject.call(this, err);
          }
        };
        // eslint-disable-next-line no-unused-vars
        Internal = function Promise(executor) {
          this._c = [];             // <- awaiting reactions
          this._a = undefined;      // <- checked in isUnhandled reactions
          this._s = 0;              // <- state
          this._d = false;          // <- done
          this._v = undefined;      // <- value
          this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
          this._n = false;          // <- notify
        };
        Internal.prototype = _redefineAll($Promise.prototype, {
          // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
          then: function then(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = isNode ? process.domain : undefined;
            this._c.push(reaction);
            if (this._a) { this._a.push(reaction); }
            if (this._s) { notify(this, false); }
            return reaction.promise;
          },
          // 25.4.5.1 Promise.prototype.catch(onRejected)
          'catch': function (onRejected) {
            return this.then(undefined, onRejected);
          }
        });
        OwnPromiseCapability = function () {
          var promise = new Internal();
          this.promise = promise;
          this.resolve = _ctx($resolve, promise, 1);
          this.reject = _ctx($reject, promise, 1);
        };
        _newPromiseCapability.f = newPromiseCapability = function (C) {
          return C === $Promise || C === Wrapper
            ? new OwnPromiseCapability(C)
            : newGenericPromiseCapability(C);
        };
      }

      _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
      _setToStringTag($Promise, PROMISE);
      _setSpecies(PROMISE);
      Wrapper = _core[PROMISE];

      // statics
      _export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          var $$reject = capability.reject;
          $$reject(r);
          return capability.promise;
        }
      });
      _export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(x) {
          return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
        }
      });
      _export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
        $Promise.all(iter)['catch'](empty);
      })), PROMISE, {
        // 25.4.4.1 Promise.all(iterable)
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = _perform(function () {
            var values = [];
            var index = 0;
            var remaining = 1;
            _forOf(iterable, false, function (promise) {
              var $index = index++;
              var alreadyCalled = false;
              values.push(undefined);
              remaining++;
              C.resolve(promise).then(function (value) {
                if (alreadyCalled) { return; }
                alreadyCalled = true;
                values[$index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.e) { reject(result.v); }
          return capability.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = _perform(function () {
            _forOf(iterable, false, function (promise) {
              C.resolve(promise).then(capability.resolve, reject);
            });
          });
          if (result.e) { reject(result.v); }
          return capability.promise;
        }
      });

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /* eslint-disable */

      var isInitialized = false;

      // major events supported:
      //   panstart
      //   panmove
      //   panend
      //   swipe
      //   longpress
      // extra events supported:
      //   dualtouchstart
      //   dualtouch
      //   dualtouchend
      //   tap
      //   doubletap
      //   pressend

      var doc = window.document;
      var docEl = doc.documentElement;
      var slice = Array.prototype.slice;
      var gestures = {};
      var lastTap = null;

      /**
       * find the closest common ancestor
       * if there's no one, return null
       *
       * @param  {Element} el1 first element
       * @param  {Element} el2 second element
       * @return {Element}     common ancestor
       */
      function getCommonAncestor(el1, el2) {
        var el = el1;
        while (el) {
          if (el.contains(el2) || el == el2) {
            return el
          }
          el = el.parentNode;
        }
        return null
      }

      /**
       * fire a HTMLEvent
       *
       * @param  {Element} element which element to fire a event on
       * @param  {string}  type    type of event
       * @param  {object}  extra   extra data for the event object
       */
      function fireEvent(element, type, extra) {
        var event = doc.createEvent('HTMLEvents');
        event.initEvent(type, true, true);

        if (typeof extra === 'object') {
          for (var p in extra) {
            event[p] = extra[p];
          }
        }

        /**
         * A flag to distinguish with other events with the same name generated
         * by another library in the same page.
         */ 
        event._for = 'weex';

        element.dispatchEvent(event);
      }

      /**
       * calc the transform
       * assume 4 points ABCD on the coordinate system
       * > rotate：angle rotating from AB to CD
       * > scale：scale ratio from AB to CD
       * > translate：translate shift from A to C
       *
       * @param  {number} x1 abscissa of A
       * @param  {number} y1 ordinate of A
       * @param  {number} x2 abscissa of B
       * @param  {number} y2 ordinate of B
       * @param  {number} x3 abscissa of C
       * @param  {number} y3 ordinate of C
       * @param  {number} x4 abscissa of D
       * @param  {number} y4 ordinate of D
       * @return {object}    transform object like
       *   {rotate, scale, translate[2], matrix[3][3]}
       */
      function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
        var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
        var scale = Math.sqrt((Math.pow(y4 - y3, 2)
          + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2)
          + Math.pow(x2 - x1, 2)));
        var translate = [
          x3
          - scale * x1 * Math.cos(rotate)
          + scale * y1 * Math.sin(rotate),
          y3
          - scale * y1 * Math.cos(rotate)
          - scale * x1 * Math.sin(rotate)];

        return {
          rotate: rotate,
          scale: scale,
          translate: translate,
          matrix: [
            [scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]],
            [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]],
            [0, 0, 1]
          ]
        }
      }

      /**
       * take over the touchstart events. Add new touches to the gestures.
       * If there is no previous records, then bind touchmove, tochend
       * and touchcancel events.
       * new touches initialized with state 'tapping', and within 500 milliseconds
       * if the state is still tapping, then trigger gesture 'press'.
       * If there are two touche points, then the 'dualtouchstart' is triggerd. The
       * node of the touch gesture is their cloest common ancestor.
       *
       * @event
       * @param  {event} event
       */
      function touchstartHandler(event) {

        if (Object.keys(gestures).length === 0) {
          docEl.addEventListener('touchmove', touchmoveHandler, true);
          docEl.addEventListener('touchend', touchendHandler, true);
          docEl.addEventListener('touchcancel', touchcancelHandler, true);
        }

        // record every touch
        for (var i = 0; i < event.changedTouches.length; i++) {
          var touch = event.changedTouches[i];
          var touchRecord = {};

          for (var p in touch) {
            touchRecord[p] = touch[p];
          }

          var gesture = {
            startTouch: touchRecord,
            startTime: Date.now(),
            status: 'tapping',
            element: event.srcElement || event.target,
            pressingHandler: setTimeout(function (element, touch) {
              return function () {
                if (gesture.status === 'tapping') {
                  gesture.status = 'pressing';

                  fireEvent(element, 'longpress', {
                    // add touch data for weex
                    touch: touch,
                    touches: event.touches,
                    changedTouches: event.changedTouches,
                    touchEvent: event
                  });
                }

                clearTimeout(gesture.pressingHandler);
                gesture.pressingHandler = null;
              }
            }(event.srcElement || event.target, event.changedTouches[i]), 500)
          };
          gestures[touch.identifier] = gesture;
        }

        if (Object.keys(gestures).length == 2) {
          var elements = [];

          for (var p in gestures) {
            elements.push(gestures[p].element);
          }

          fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
            touches: slice.call(event.touches),
            touchEvent: event
          });
        }
      }

      /**
       * take over touchmove events, and handle pan and dual related gestures.
       *
       * 1. traverse every touch point：
       * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
       * 2. if there are two touch points, then calc the tranform and trigger
       *   'dualtouch'.
       *
       * @event
       * @param  {event} event
       */
      function touchmoveHandler(event) {
        for (var i = 0; i < event.changedTouches.length; i++) {
          var touch = event.changedTouches[i];
          var gesture = gestures[touch.identifier];

          if (!gesture) {
            return
          }

          if (!gesture.lastTouch) {
            gesture.lastTouch = gesture.startTouch;
          }
          if (!gesture.lastTime) {
            gesture.lastTime = gesture.startTime;
          }
          if (!gesture.velocityX) {
            gesture.velocityX = 0;
          }
          if (!gesture.velocityY) {
            gesture.velocityY = 0;
          }
          if (!gesture.duration) {
            gesture.duration = 0;
          }

          var time =  Date.now() - gesture.lastTime;
          var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
          var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

          var RECORD_DURATION = 70;
          if (time > RECORD_DURATION) {
            time = RECORD_DURATION;
          }
          if (gesture.duration + time > RECORD_DURATION) {
            gesture.duration = RECORD_DURATION - time;
          }

          gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time)
            / (gesture.duration + time);
          gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time)
            / (gesture.duration + time);
          gesture.duration += time;

          gesture.lastTouch = {};

          for (var p in touch) {
            gesture.lastTouch[p] = touch[p];
          }
          gesture.lastTime = Date.now();

          var displacementX = touch.clientX - gesture.startTouch.clientX;
          var displacementY = touch.clientY - gesture.startTouch.clientY;
          var distance = Math.sqrt(Math.pow(displacementX, 2)
            + Math.pow(displacementY, 2));
          var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
          var direction = isVertical
            ? displacementY >= 0 ? 'down' : 'up'
            : displacementX >= 0 ? 'right' : 'left';

          // magic number 10: moving 10px means pan, not tap
          if ((gesture.status === 'tapping' || gesture.status === 'pressing')
              && distance > 10) {
            gesture.status = 'panning';
            gesture.isVertical = isVertical;
            gesture.direction = direction;

            fireEvent(gesture.element, 'panstart', {
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event,
              isVertical: gesture.isVertical,
              direction: direction
            });
          }

          if (gesture.status === 'panning') {
            gesture.panTime = Date.now();

            fireEvent(gesture.element, 'panmove', {
              displacementX: displacementX,
              displacementY: displacementY,
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event,
              isVertical: gesture.isVertical,
              direction: direction
            });
          }
        }

        if (Object.keys(gestures).length == 2) {
          var position = [];
          var current = [];
          var elements = [];
          var transform;

          for (var i = 0; i < event.touches.length; i++) {
            var touch = event.touches[i];
            var gesture = gestures[touch.identifier];
            position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
            current.push([touch.clientX, touch.clientY]);
          }

          for (var p in gestures) {
            elements.push(gestures[p].element);
          }

          transform = calc(
            position[0][0],
            position[0][1],
            position[1][0],
            position[1][1],
            current[0][0],
            current[0][1],
            current[1][0],
            current[1][1]
          );
          fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
            transform: transform,
            touches: event.touches,
            touchEvent: event
          });
        }
      }

      /**
       * handle touchend event
       *
       * 1. if there are tow touch points, then trigger 'dualtouchend'如
       *
       * 2. traverse every touch piont：
       * > if tapping, then trigger 'tap'.
       * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
       * > if padding, then decide to trigger 'panend' or 'swipe'
       * > if pressing, then trigger 'pressend'.
       *
       * 3. remove listeners.
       *
       * @event
       * @param  {event} event
       */
      function touchendHandler(event) {

        if (Object.keys(gestures).length == 2) {
          var elements = [];
          for (var p in gestures) {
            elements.push(gestures[p].element);
          }
          fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
            touches: slice.call(event.touches),
            touchEvent: event
          });
        }

        for (var i = 0; i < event.changedTouches.length; i++) {
          var touch = event.changedTouches[i];
          var id = touch.identifier;
          var gesture = gestures[id];

          if (!gesture) {
            continue
          }

          if (gesture.pressingHandler) {
            clearTimeout(gesture.pressingHandler);
            gesture.pressingHandler = null;
          }

          if (gesture.status === 'tapping') {
            gesture.timestamp = Date.now();
            // fire click, not tap.
            fireEvent(gesture.element, 'weex$tap', {
              touch: touch,
              touchEvent: event
            });

            if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
              fireEvent(gesture.element, 'doubletap', {
                touch: touch,
                touchEvent: event
              });
            }

            lastTap = gesture;
          }

          if (gesture.status === 'panning') {
            var now = Date.now();
            var duration = now - gesture.startTime;
            var displacementX = touch.clientX - gesture.startTouch.clientX;
            var displacementY = touch.clientY - gesture.startTouch.clientY;

            var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY
              + gesture.velocityX * gesture.velocityX);
            var isSwipe = velocity > 0.5 && (now - gesture.lastTime) < 100;
            var extra = {
              duration: duration,
              isSwipe: isSwipe,
              velocityX: gesture.velocityX,
              velocityY: gesture.velocityY,
              displacementX: displacementX,
              displacementY: displacementY,
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event,
              isVertical: gesture.isVertical,
              direction: gesture.direction
            };

            fireEvent(gesture.element, 'panend', extra);
            if (isSwipe) {
              fireEvent(gesture.element, 'swipe', extra);
            }
          }

          if (gesture.status === 'pressing') {
            fireEvent(gesture.element, 'pressend', {
              touch: touch,
              touchEvent: event
            });
          }

          delete gestures[id];
        }

        if (Object.keys(gestures).length === 0) {
          docEl.removeEventListener('touchmove', touchmoveHandler, false);
          docEl.removeEventListener('touchend', touchendHandler, false);
          docEl.removeEventListener('touchcancel', touchcancelHandler, false);
        }
      }

      /**
       * handle touchcancel
       *
       * 1. if there are two touch points, then trigger 'dualtouchend'
       *
       * 2. traverse everty touch point:
       * > if pannnig, then trigger 'panend'
       * > if pressing, then trigger 'pressend'
       *
       * 3. remove listeners
       *
       * @event
       * @param  {event} event
       */
      function touchcancelHandler(event) {

        if (Object.keys(gestures).length == 2) {
          var elements = [];
          for (var p in gestures) {
            elements.push(gestures[p].element);
          }
          fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
            touches: slice.call(event.touches),
            touchEvent: event
          });
        }

        for (var i = 0; i < event.changedTouches.length; i++) {
          var touch = event.changedTouches[i];
          var id = touch.identifier;
          var gesture = gestures[id];

          if (!gesture) {
            continue
          }

          if (gesture.pressingHandler) {
            clearTimeout(gesture.pressingHandler);
            gesture.pressingHandler = null;
          }

          if (gesture.status === 'panning') {
            fireEvent(gesture.element, 'panend', {
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }
          if (gesture.status === 'pressing') {
            fireEvent(gesture.element, 'pressend', {
              touch: touch,
              touchEvent: event
            });
          }
          delete gestures[id];
        }

        if (Object.keys(gestures).length === 0) {
          docEl.removeEventListener('touchmove', touchmoveHandler, true);
          docEl.removeEventListener('touchend', touchendHandler, true);
          docEl.removeEventListener('touchcancel', touchcancelHandler, true);
        }
      }

      if (!isInitialized) {
        docEl.addEventListener('touchstart', touchstartHandler, true);
        isInitialized = true;
      }

      var lib$2 = window.lib || (window.lib = {});

      /**
       * Version class.
       * @class lib.env~Version
       * @param {String} v - version number.
       */
      function Version (v) {
        Object.defineProperty(this, 'val', {
          value: v.toString(),
          enumerable: true
        });

        /**
         * larger than
         * @method gt
         * @param {String} v - version
         * @return {Boolean} result
         * @instance
         * @memberof Version
         */
        this.gt = function (v) {
          return Version.compare(this, v) > 0
        };

        /**
         * larger than or equal to.
         * @method gte
         * @param {String} v - version
         * @return {Boolean} result
         * @instance
         * @memberof Version
         */
        this.gte = function (v) {
          return Version.compare(this, v) >= 0
        };

        /**
         * less than.
         * @method lt
         * @param {String} v - version
         * @return {Boolean} result
         * @instance
         * @memberof Version
         */
        this.lt = function (v) {
          return Version.compare(this, v) < 0
        };

        /**
         * less than or equal to.
         * @method lte
         * @param {String} v - version
         * @return {Boolean} result
         * @instance
         * @memberof Version
         */
        this.lte = function (v) {
          return Version.compare(this, v) <= 0
        };

        /**
         * equal to.
         * @method eq
         * @param {String} v - version
         * @return {Boolean} equal to
         * @instance
         * @memberof Version
         */
        this.eq = function (v) {
          return Version.compare(this, v) === 0
        };
      }

      /**
       * version number string.
       * @method toString
       * @return {String} current version number string.
       * @instance
       * @memberof Version
       */
      Version.prototype.toString = function () {
        return this.val
      };

      /**
       * return current version number.
       * @method valueOf
       * @return {Boolean} version number
       * @instance
       * @memberof Version
       */
      Version.prototype.valueOf = function () {
        var v = this.val.split('.');
        var r = [];
        for (var i = 0; i < v.length; i++) {
          var n = parseInt(v[i], 10);
          if (isNaN(n)) {
            n = 0;
          }
          var s = n.toString();
          if (s.length < 5) {
            s = Array(6 - s.length).join('0') + s;
          }
          r.push(s);
          if (r.length === 1) {
            r.push('.');
          }
        }
        return parseFloat(r.join(''))
      };

      /**
       * compare two versions.
       * @method compare
       * @param {String} v1 - version1
       * @param {String} v2 - version2
       * @return {Number} 0 for equality，-1 for less than，1 for larger than.
       * @memberof Version
       */
      Version.compare = function (v1, v2) {
        v1 = v1.toString().split('.');
        v2 = v2.toString().split('.');
        for (var i = 0; i < v1.length || i < v2.length; i++) {
          var n1 = parseInt(v1[i], 10);
          var n2 = parseInt(v2[i], 10);
          if (window.isNaN(n1)) {
            n1 = 0;
          }
          if (window.isNaN(n2)) {
            n2 = 0;
          }
          if (n1 < n2) {
            return -1
          }
          else if (n1 > n2) {
            return 1
          }
        }
        return 0
      };

      /**
       * 解析和操作版本号
       * @method version
       * @param {string} v - 需要解析的版本号
       * @return {lib.env~Version} Verson实例
       * @memberof lib
       */
      lib$2.version = function (v) {
        return new Version(v)
      };

      var lib$3 = window.lib || (window.lib = {});
      var env$1 = lib$3.env || (lib$3.env = {});

      var search = window.location.search.replace(/^\?/, '');
      env$1.params = {};
      if (search) {
        var params = search.split('&');
        for (var i$1 = 0; i$1 < params.length; i$1++) {
          params[i$1] = params[i$1].split('=');
          try {
            env$1.params[params[i$1][0]] = decodeURIComponent(params[i$1][1]);
          }
          catch (e) {
            env$1.params[params[i$1][0]] = params[i$1][1];
          }
        }
      }

      var lib$1 = window.lib || (window.lib = {});
      var env = lib$1.env || (lib$1.env = {});

      var ua = window.navigator.userAgent;
      var match;

      /**
       * os
       */

      match = ua.match(/Windows\sPhone\s(?:OS\s)?([\d.]+)/);
      if (match) {
        /**
         * @type {Object}
         * @memberof lib.env
         * @property {String} name - os name, e.g. Android/AndroidPad/iPhone/iPod/iPad/Windows Phone/unknown, etc.
         * @property {lib.env~Version} version - os version.
         * @property {Boolean} isWindowsPhone
         * @property {Boolean} isIPhone - is iPhone/iTouch
         * @property {Boolean} isIPad
         * @property {Boolean} isIOS
         * @property {Boolean} isAndroid
         * @property {Boolean} isAndroidPad
         */
        env.os = {
          name: 'Windows Phone',
          isWindowsPhone: true,
          version: match[1]
        };
      }
      else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
        env.os = {
          version: match[1]
        };

        if ((ua.match(/Mobile\s+Safari/))) {
          env.os.name = 'Android';
          env.os.isAndroid = true;
        }
        else {
          env.os.name = 'AndroidPad';
          env.os.isAndroidPad = true;
        }
      }
      else if ((match = ua.match(/(iPhone|iPad|iPod)/))) {
        var name = match[1];

        match = ua.match(/OS ([\d_.]+) like Mac OS X/);

        env.os = {
          name: name,
          isIPhone: (name === 'iPhone' || name === 'iPod'),
          isIPad: name === 'iPad',
          isIOS: true,
          version: match && match[1].split('_').join('.') || ''
        };
      }
      else {
        env.os = {
          name: 'unknown',
          version: '0.0.0'
        };
      }

      if (lib$1.version) {
        env.os.version = lib$1.version(env.os.version);
      }

      /**
       * browser
       */

      match = ua.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/);

      if (match) {
        /**
         * @type {Object}
         * @memberof env
         * @property {String} name - browser name，e.g. UC/QQ/Firefox/Chrome/Android/Safari/iOS Webview/Chrome Webview/IE/IEMobile/unknown, etc.
         * @property {env~Version} version - browser version.
         * @property {Boolean} isUC
         * @property {Boolean} isQQ
         * @property {Boolean} isIE
         * @property {Boolean} isIEMobile
         * @property {Boolean} isIELikeWebkit
         * @property {Boolean} isChrome
         * @property {Boolean} isAndroid
         * @property {Boolean} isSafari
         * @property {Boolean} isWebview
         */
        env.browser = {
          name: 'UC',
          isUC: true,
          version: match[1]
        };
      }
      else if ((match = ua.match(/MQQBrowser\/([\d.]+)/))) {
        env.browser = {
          name: 'QQ',
          isQQ: true,
          version: match[1]
        };
      }
      else if ((match = ua.match(/Firefox\/([\d.]+)/))) {
        env.browser = {
          name: 'Firefox',
          isFirefox: true,
          version: match[1]
        };
      }
      else if ((match = ua.match(/MSIE\s([\d.]+)/))
        || (match = ua.match(/IEMobile\/([\d.]+)/))) {
        env.browser = {
          version: match[1]
        };

        if (ua.match(/IEMobile/)) {
          env.browser.name = 'IEMobile';
          env.browser.isIEMobile = true;
        }
        else {
          env.browser.name = 'IE';
          env.browser.isIE = true;
        }

        if (ua.match(/Android|iPhone/)) {
          env.browser.isIELikeWebkit = true;
        }
      }
      else if ((match = ua.match(/(?:Chrome|CriOS)\/([\d.]+)/))) {
        env.browser = {
          name: 'Chrome',
          isChrome: true,
          version: match[1]
        };

        if (ua.match(/Version\/[\d+.]+\s*Chrome/)) {
          env.browser.name = 'Chrome Webview';
          env.browser.isWebview = true;
        }
      }
      else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
        env.browser = {
          name: 'Android',
          isAndroid: true,
          version: match[1]
        };
      }
      else if (ua.match(/iPhone|iPad|iPod/)) {
        if (ua.match(/Safari/)) {
          match = ua.match(/Version\/([\d.]+)/);
          env.browser = {
            name: 'Safari',
            isSafari: true,
            version: match && match[1] || ''
          };
        }
        else {
          match = ua.match(/OS ([\d_.]+) like Mac OS X/);
          env.browser = {
            name: 'iOS Webview',
            isWebview: true,
            version: match && match[1].replace(/_/g, '.') || ''
          };
        }
      }
      else {
        env.browser = {
          name: 'unknown',
          version: '0.0.0'
        };
      }

      if (lib$1.version) {
        env.browser.version = lib$1.version(env.browser.version);
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      var toString$1 = Object.prototype.toString;

      /**
       * Strict object type check. Only returns true
       * for plain JavaScript objects.
       *
       * @param {*} obj
       * @return {Boolean}
       */
      var OBJECT_STRING = '[object Object]';
      function isPlainObject (obj) {
        return toString$1.call(obj) === OBJECT_STRING
      }

      var ARRAY_STRING = '[object Array]';
      function isArray (arr) {
        return toString$1.call(arr) === ARRAY_STRING
      }

      function isPrimitive (val) {
        return typeof value === 'string'
          || typeof value === 'number'
          || typeof value === 'symbol'
          || typeof value === 'boolean'
      }

      function isDef (val) {
        return val !== undefined && val !== null
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /**
       * Mix properties into target object.
       * the rightest object's value has the highest priority.
       */
      function extend (to) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        if (!args || args.length <= 0) {
          return to
        }
        args.forEach(function (from) {
          if (typeof from !== 'object') {
            return
          }
          for (var key in from) {
            to[key] = from[key];
          }
        });
        return to
      }
      /**
       * Mix truthy or '' property values into target object.
       * mostly for merging styles. (that's why '' is falsy but still should be counted in.)
       * the rightest object's value has the highest priority.
       */
      function extendTruthy (to) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        if (!args || args.length <= 0) {
          return to
        }
        args.forEach(function (from) {
          if (typeof from !== 'object') {
            return
          }
          var i;
          for (var key in from) {
            if (((i = from[key]) || i === '' || i === 0) && i !== 'undefined') {
              to[key] = i;
            }
          }
        });
        return to
      }
      /**
       * Mix specified properties into target object.
       */
      function extendKeys (to, from, keys) {
        if ( from === void 0 ) from = {};

        (keys || []).forEach(function (key) {
          from && (to[key] = from[key]);
        });
        return to
      }
      /**
       * Extract specified properties from src to target object.
       */
      function extractKeys (to, from, keys) {
        if ( from === void 0 ) from = {};

        if (!from) {
          return to
        }
        (keys || []).forEach(function (key) {
          from && (to[key] = from[key]);
          from && (delete from[key]);
        });
        return to
      }
      /**
       * Simple bind, faster than native
       *
       * @param {Function} fn
       * @param {Object} ctx
       * @return {Function}
       */
      function bind (fn, ctx) {
        return function (a) {
          var l = arguments.length;
          return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx)
        }
      }
      /**
       * Only call the func the last time before it's not that frequently called.
       */
      function debounce (func, wait) {
        var timerId;
        return function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          clearTimeout(timerId);
          timerId = setTimeout(function later () {
            timerId = null;
            func.apply(null, args);
          }, wait);
        }
      }
      /**
       * Only call the func the first time before a series frequently function calls happen.
       */
      function depress (func, wait) {
        var timerId;

        function later () {
          timerId = null;
        }
        return function () {
          if (!timerId) {
            func.apply();
          }
          clearTimeout(timerId);
          timerId = setTimeout(later, wait);
        }
      }
      /**
       * Only call the func every time after a wait milliseconds if it's too frequently called.
       */
      function throttle (func, wait, callLastTime) {
        var last = 0;
        var lastTimer = null;
        var lastTimeDuration = wait + (wait > 25 ? wait : 25); // plus half wait time.
        return function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          var context = this;
          var time = new Date().getTime();
          if (time - last > wait) {
            if (callLastTime) {
              lastTimer && clearTimeout(lastTimer);
              lastTimer = setTimeout(function () {
                lastTimer = null;
                func.apply(context, args);
              }, lastTimeDuration);
            }
            func.apply(context, args);
            last = time;
          }
        }
      }
      // direction: 'l' | 'r', default is 'r'
      // num: how many times to loop, should be a positive integer
      function loopArray (arr, num, direction) {
        if (!isArray(arr)) {
          return
        }
        var isLeft = (direction + '').toLowerCase() === 'l';
        var len = arr.length;
        num = num % len;
        if (num < 0) {
          num = -num;
          isLeft = !isLeft;
        }
        if (num === 0) {
          return arr
        }
        var lp, rp;
        if (isLeft) {
          lp = arr.slice(0, num);
          rp = arr.slice(num);
        }
        else {
          lp = arr.slice(0, len - num);
          rp = arr.slice(len - num);
        }
        return rp.concat(lp)
      }

      /**
       * Create a cached version of a pure function.
       */
      function cached (fn) {
        var cache = Object.create(null);
        return function cachedFn (str) {
          var hit = cache[str];
          return hit || (cache[str] = fn(str))
        }
      }
      /**
       * Camelize a hyphen-delmited string.
       */
      var camelizeRE = /-(\w)/g;
      var camelize = cached(function (str) {
        return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); })
      });
      function camelizeKeys (obj) {
        var res = {};
        for (var key in obj) {
          res[camelize(key)] = obj[key];
        }
        return res
      }
      /**
       * Capitalize a string.
       */
      var capitalize = cached(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      });
      /**
       * Hyphenate a camelCase string.
       */
      var hyphenateRE = /([^-])([A-Z])/g;
      var hyphenate = cached(function (str) {
        return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase()
      });
      function hyphenateKeys (obj) {
        var res = {};
        for (var key in obj) {
          res[hyphenate(key)] = obj[key];
        }
        return res
      }
      var vendorsReg = /webkit-|moz-|o-|ms-/;
      function hyphenateStyleKeys (obj) {
        var res = {};
        for (var key in obj) {
          var hk = hyphenate(key).replace(vendorsReg, function ($0) {
            return '-' + $0
          });
          res[hk] = obj[key];
        }
        return res
      }
      function camelToKebab (name) {
        if (!name) {
          return ''
        }
        return name.replace(/([A-Z])/g, function (g, g1) {
          return ("-" + (g1.toLowerCase()))
        })
      }
      function appendCss (css, cssId, replace) {
        var style = document.getElementById(cssId);
        if (style && replace) {
          style.parentNode.removeChild(style);
          style = null;
        }
        if (!style) {
          style = document.createElement('style');
          style.type = 'text/css';
          cssId && (style.id = cssId);
          document.getElementsByTagName('head')[0].appendChild(style);
        }
        style.appendChild(document.createTextNode(css));
      }
      function nextFrame (callback) {
        var runner = window.requestAnimationFrame
          || window.webkitRequestAnimationFrame
          || window.mozRequestAnimationFrame
          || (function (cb) { return setTimeout(cb, 16); });
        runner(callback);
      }
      function toCSSText (object) {
        if (!object) {
          return
        }
        var obj = hyphenateStyleKeys(object);
        var cssText = '';
        for (var key in obj) {
          cssText += key + ":" + (obj[key]) + ";";
        }
        return cssText
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      /**
       * viewport priority:
       *
       * 1. meta weex-viewport (developer custom)
       * 2. setViewport(config) := config.width (private code) @deprecated
       * 3. 750 (buid time)
       *
       */
      var isInited = false;
      var DEFAULT_VIEWPORT_WIDTH = 750;

      /**
       * get viewport width from weex-viewport meta.
       */
      var envViewportWidth = parseInt(750);
      var width = !isNaN(envViewportWidth) && envViewportWidth > 0
        ? envViewportWidth
        : DEFAULT_VIEWPORT_WIDTH;

      var wxViewportMeta = document.querySelector('meta[name="weex-viewport"]');
      var metaWidth = wxViewportMeta && parseInt(wxViewportMeta.getAttribute('content'));
      if (metaWidth && !isNaN(metaWidth) && metaWidth > 0) {
        width = metaWidth;
      }

      var dpr = 0;
      var screenWidth = 0;
      var screenHeight = 0;

      var info = {
        dpr: dpr,
        scale: 0,
        rootValue: 0,
        rem: 0,
        deviceWidth: 0,
        deviceHeight: 0
      };

      /**
       * set root font-size for rem units. If already been set, just skip this.
       */
      function setRootFont (width, viewportWidth, force) {
        var doc = window.document;
        var rem = width * 750 / viewportWidth / 10;
        if (!doc.documentElement) { return }
        var rootFontSize = doc.documentElement.style.fontSize;
        if (!rootFontSize || force) {
          doc.documentElement.style.fontSize = rem + 'px';
        }
        info.rem = rem;
        info.rootValue = viewportWidth / 10;
      }

      function setMetaViewport (width) {
        if (!wxViewportMeta) {
          wxViewportMeta = document.createElement('meta');
          wxViewportMeta.setAttribute('name', 'weex-viewport');
          var firstMeta = document.querySelector('meta');
          var head = firstMeta && firstMeta.parentElement
            || document.documentElement.children[0];
          firstMeta
            ? head.insertBefore(wxViewportMeta, firstMeta)
            : head.appendChild(wxViewportMeta);
        }
        else {
          var metaWidth = parseInt(wxViewportMeta.getAttribute('content'));
          if (metaWidth === width) {
            return
          }
        }
        wxViewportMeta.setAttribute('content', width + '');
      }

      /**
       * export viewport info.
       */
      function init$1 (viewportWidth) {
        if ( viewportWidth === void 0 ) viewportWidth = width;

        if (!isInited) {
          isInited = true;

          var doc = window.document;
          if (!doc) {
            console.error('[vue-render] window.document is undfined.');
            return
          }
          if (!doc.documentElement) {
            console.error('[vue-render] document.documentElement is undfined.');
            return
          }

          dpr = info.dpr = window.devicePixelRatio;
          screenWidth = doc.documentElement.clientWidth;
          screenHeight = doc.documentElement.clientHeight;

          var resetDeviceHeight = function () {
            screenHeight = doc.documentElement.clientHeight;
            var env = window.weex && window.weex.config.env;
            info.deviceHeight = env.deviceHeight = screenHeight * dpr;
          };

          // set root font for rem.
          setRootFont(screenWidth, viewportWidth);
          setMetaViewport(viewportWidth);

          window.addEventListener('resize', resetDeviceHeight);

          /**
           * why not to use window.screen.width to get screenWidth ? Because in some
           * old webkit browser on android system it get the device pixel width, which
           * is the screenWidth multiply by the device pixel ratio.
           * e.g. ip6 -> get 375 for virtual screen width.
           */
          var scale = screenWidth / viewportWidth;
          /**
           * 1. if set initial/maximum/mimimum-scale some how the page will have a bounce
           * effect when user drag the page towards horizontal axis.
           * 2. Due to compatibility reasons, not to use viewport meta anymore.
           * 3. viewport meta should always be:
           *    <meta name="viewport"
           *      content="width=device-width,
           *      initial-scale=1,
           *      maximum-scale=1,
           *      user-scalable=no" />
           */
          extend(info, {
            scale: scale,
            rootValue: viewportWidth / 10,
            deviceWidth: screenWidth * dpr,
            deviceHeight: screenHeight * dpr
          });
        }

        return info
      }

      /**
       * reset viewport width and scale.
       * @return new scale.
       */
      function resetViewport (viewportWidth) {
        setRootFont(screenWidth, viewportWidth, true);
        setMetaViewport(viewportWidth);
        var newScale = screenWidth / viewportWidth;
        info.scale = newScale;
        return newScale
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      function extend$1 (to) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        if (!args || args.length <= 0) { return to }
        args.forEach(function (from) {
          if (typeof from !== 'object') { return }
          for (var key in from) {
            to[key] = from[key];
          }
        });
        return to
      }

      // if support passive event listeners.
      var _supportsPassive = false;
      try {
        document.createElement('div').addEventListener('test', function (_) {}, {
          get passive () {
            _supportsPassive = true;
          }
        });
      }
      catch (e) {
        // do nothing.
      }
      function supportsPassive () {
        return _supportsPassive
      }

      /**
       * Create Event.
       * @param {DOMString} type
       * @param {Object} props
       */
      function createEvent (target, type, props) {
        var event = new Event(type, { bubbles: false });

        extend$1(event, props);
        //  phantomjs don't support customer event
        if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
          return event
        }
        try {
          Object.defineProperty(event, 'target', {
            enumerable: true,
            value: target
          });
        }
        catch (err) {
          return extend$1({}, event, { target: target })
        }
        return event
      }

      /**
       * Create a bubbable Event.
       * @param {DOMString} type
       * @param {Object} props
       */
      function createBubblesEvent (target, type, props) {
        var event = new Event(type, { bubbles: true });
        extend$1(event, props);
        //  phantomjs don't support customer event
        if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
          return event
        }
        try {
          Object.defineProperty(event, 'target', {
            enumerable: true,
            value: target
          });
        }
        catch (err) {
          return extend$1({}, event, { target: target })
        }
        return event
      }

      /**
       * Create Custom Event.
       * @param {DOMString} type
       * @param {Object} props
       */
      function createCustomEvent (target, type, props) {
        // compatibility: http://caniuse.com/#search=customevent
        // const event = new CustomEvent(type)
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent(type, false, true, {});
        // event.preventDefault()
        // event.stopPropagation()

        extend$1(event, props);

        // event.target is readonly
        try {
          Object.defineProperty(event, 'target', {
            enumerable: true,
            value: target || null
          });
        }
        catch (err) {
          return extend$1({}, event, { target: target || null })
        }

        return event
      }

      /**
       * dispatch a event on a HTML element.
       * @param  {HTMLElement} elm
       * @param  {Event} type event name.
       * @param  {Object} data extra data.
       */
      function dispatchNativeEvent (elm, type, data) {
        elm.dispatchEvent(createEvent(elm, type, data));
      }

      function mapFormEvents (context) {
        var eventMap = {};['input', 'change', 'focus', 'blur', 'return'].forEach(function (type) {
          eventMap[type] = function (event) {
            if (context.$el) {
              event.value = context.$el.value;
              // for the sake of v-model, a input event must be emitted.
              if (type === 'input') {
                context.$emit(type, event);
              }
            }
          };
        });
        return eventMap
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var scaleStyles = [
        'width',
        'height',
        'left',
        'right',
        'top',
        'bottom',
        'border',
        'borderRadius',
        'borderWidth',
        'borderLeft',
        'borderRight',
        'borderTop',
        'borderBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth',
        'margin',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'padding',
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'fontSize',
        'lineHeight',
        'transform',
        'webkitTransform',
        'WebkitTransform',
        'mozTransform',
        'MozTransform',
        'itemSize'
      ];

      var vendorReg = /webkit|moz/i;
      function hyphen (key) {
        return hyphenate(key.replace(vendorReg, function ($0) {
          return ("-" + ($0.toLowerCase()) + "-")
        }))
      }

      function getAllStyles () {
        return Object.keys(scaleStyles.reduce(function (pre, key) {
          pre[key] = 1;
          pre[hyphen(key)] = 1;
          return pre
        }, {}))
      }

      var allStyles = getAllStyles();

      var config = {
        scrollableTypes: ['scroller', 'list', 'waterfall', 'recycle-list'],
        gestureEvents: [
          'panstart',
          'panmove',
          'panend',
          'swipe',
          'longpress',
          'tap'
        ],
        // these components should not bind events with .native.
        weexBuiltInComponents: [
          'div',
          'container',
          'text',
          'image',
          'gif',
          'img',
          'cell',
          'a'
        ],
        bindingStyleNamesForPx2Rem: allStyles
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /**
       * whether ct contains el.
       * @param {HTMLElement} container
       * @param {HTMLElement} target
       */
      function contains (container, target, includeSelf) {
        if (includeSelf && container === target) {
          return true
        }
        return container.contains
          ? container.contains(target) && (container !== target)
          : container.compareDocumentPosition(target) & 16 !== 0
      }

      function insideA (el) {
        if (typeof el._insideA === 'boolean') {
          return el._insideA
        }
        var parent = el.parentElement;
        var parents = [];
        var checkParents = function (inside) {
          for (var i = 0, l = parents.length; i < l; i++) {
            parents[i]._insideA = inside;
          }
        };
        var check = function (inside) {
          el._insideA = inside;
          checkParents(inside);
          return inside
        };
        while (parent !== document.body) {
          if (parent.tagName.toLowerCase() === 'a') {
            return check(true)
          }
          if (typeof parent._insideA === 'boolean') {
            return check(parent._insideA)
          }
          parents.push(parent);
          parent = parent.parentElement;
        }
        return check(false)
      }

      /**
       * get parent scroller vComponent.
       * return a VueComponent or null.
       */
      function getParentScroller (vm) {
        if (!vm) { return null }
        if (vm._parentScroller) {
          return vm._parentScroller
        }
        function _getParentScroller (parent) {
          if (!parent) { return }
          if (config.scrollableTypes.indexOf(parent.weexType) > -1) {
            vm._parentScroller = parent;
            return parent
          }
          return _getParentScroller(parent.$parent)
        }
        return _getParentScroller(vm.$parent)
      }

      /**
       * get scroller's element.
       * @param vm {HTMLElement | VueCOmponent} vm or element.
       * return the element or document.body.
       */
      function getParentScrollerElement (vm) {
        if (!vm) { return null }
        var el = vm instanceof HTMLElement ? vm : vm.$el;
        if (!el || el.nodeType !== 1) { return }
        if (vm._parentScroller) {
          return vm._parentScroller
        }
        function _getParentScroller (parent) {
          if (!parent) { return }
          var tagName = parent.tagName.toLowerCase();
          if (tagName === 'body'
            || (tagName === 'main'
            && config.scrollableTypes.indexOf(parent.getAttribute('weex-type')) > -1)
          ) {
            vm._parentScroller = parent;
            return parent
          }
          return _getParentScroller(parent.parentElement)
        }
        return _getParentScroller(el)
      }

      function horizontalBalance (rect, ctRect) {
        return rect.left < ctRect.right && rect.right > ctRect.left
      }

      function verticalBalance (rect, ctRect) {
        return rect.top < ctRect.bottom && rect.bottom > ctRect.top
      }

      /**
       * return a data array with two boolean value, which are:
       * 1. visible in current ct's viewport.
       * 2. visible with offset in current ct's viewport.
       */
      function hasIntersection (rect, ctRect, dir, offset) {
        dir = dir || 'up';
        var isHorizontal = dir === 'left' || dir === 'right';
        var isVertical = dir === 'up' || dir === 'down';
        if (isHorizontal && !verticalBalance(rect, ctRect)) {
          return [false, false]
        }
        if (isVertical && !horizontalBalance(rect, ctRect)) {
          return [false, false]
        }
        offset = offset ? parseInt(offset) * weex.config.env.scale : 0;
        switch (dir) {
          case 'up':
            return [
              rect.top < ctRect.bottom && rect.bottom > ctRect.top,
              rect.top < ctRect.bottom + offset && rect.bottom > ctRect.top - offset
            ]
          case 'down':
            return [
              rect.bottom > ctRect.top && rect.top < ctRect.bottom,
              rect.bottom > ctRect.top - offset && rect.top < ctRect.bottom + offset
            ]
          case 'left':
            return [
              rect.left < ctRect.right && rect.right > ctRect.left,
              rect.left < ctRect.right + offset && rect.right > ctRect.left - offset
            ]
          case 'right':
            return [
              rect.right > ctRect.left && rect.left < ctRect.right,
              rect.right > ctRect.left - offset && rect.left < ctRect.right + offset
            ]
        }
      }

      /**
       * isElementVisible
       * @param  {HTMLElement}  el    a dom element.
       * @param  {HTMLElement}  container  optional, the container of this el.
       */
      function isElementVisible (el, container, dir, offset) {
        if (!el.getBoundingClientRect) { return false }
        var bodyRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight,
          right: window.innerWidth
        };
        var ctRect = (container === window || container === document.body)
          ? bodyRect : container
            ? container.getBoundingClientRect() : bodyRect;
        return hasIntersection(el.getBoundingClientRect(), ctRect, dir, offset)
      }

      // to trigger the appear/disappear event.
      function triggerAppearEvent (elm, evt, dir) {
        dispatchNativeEvent(elm, evt, {
          direction: dir
        });
      }

      /**
       * get all event listeners. including bound handlers in all parent vnodes.
       */
      function getEventHandlers (context) {
        var vnode = context.$vnode;
        var handlers = {};
        var attachedVnodes = [];
        while (vnode) {
          attachedVnodes.push(vnode);
          vnode = vnode.parent;
        }
        attachedVnodes.forEach(function (vnode) {
          var parentListeners = vnode.componentOptions && vnode.componentOptions.listeners;
          var dataOn = vnode.data && vnode.data.on;
          extend(handlers, parentListeners, dataOn);
        });
        return handlers
      }

      function getAppearOffset (el) {
        return el && el.getAttribute('appear-offset')
      }

      function updateWatchAppearList (container) {
        container._watchAppearList = Array.prototype.slice.call(
          container.querySelectorAll('[weex-appear]'));
      }

      /**
       * inject removeChild function to watch disappear and offsetDisappear events.
       */
      if (!window._rmInjected) {
        window._rmInjected = true;
        var nativeRemove = HTMLElement.prototype.removeChild;
        HTMLElement.prototype.removeChild = function (el) {
          el._visible && triggerAppearEvent(el, 'disappear', null);
          el._offsetVisible && triggerAppearEvent(el, 'offsetDisappear', null);
          nativeRemove.apply(this, arguments);
        };
      }

      /**
       * Watch element's visibility to tell whether should trigger a appear/disappear
       * event in scroll handler.
       */
      function watchAppear (context, fireNow) {
        var el = context && context.$el;
        if (!el || el.nodeType !== 1) { return }

        var isWindow = false;
        var container = getParentScrollerElement(context);
        if (!container) {
          return
        }
        if (container === document.body) {
          isWindow = true;
        }
        /**
         * Code below will only exec once for binding scroll handler for parent container.
         */
        var scrollHandler = container._scrollHandler;
        if (!scrollHandler) {
          scrollHandler = container._scrollHandler = function (event$$1) {
            updateWatchAppearList(container);
            /**
             * detect scrolling direction.
             * direction only support up & down yet.
             * TODO: direction support left & right.
             */
            var scrollTop = isWindow ? window.pageYOffset : container.scrollTop;
            var preTop = container._lastScrollTop;
            container._lastScrollTop = scrollTop;
            var dir = (scrollTop < preTop
              ? 'down' : scrollTop > preTop
                ? 'up' : container._prevDirection) || null;
            container._prevDirection = dir;
            var watchAppearList = container._watchAppearList || [];
            var len = watchAppearList.length;
            for (var i = 0; i < len; i++) {
              var el = watchAppearList[i];
              var appearOffset = getAppearOffset(el);
              var visibleData = isElementVisible(el, container, dir, appearOffset);
              detectAppear(el, visibleData, dir);
            }
          };
          container.addEventListener('scroll', throttle(scrollHandler, 100, true));
        }
        if (fireNow) {
          context.$nextTick(scrollHandler);
        }
      }

      /**
       * decide whether to trigger a appear/disappear event.
       * @param {VueComponent} context
       * @param {boolean} visible
       * @param {string} dir
       */
      function detectAppear (el, visibleData, dir, appearOffset) {
        if ( dir === void 0 ) dir = null;

        if (!el) { return }
        var visible = visibleData[0];
        var offsetVisible = visibleData[1];
        /**
         * No matter it's binding appear/disappear or both of them. Always
         * should test it's visibility and change the el._visible.
         * If neigher has been bound, then ignore it.
         */
        /**
         * if the component hasn't appeared for once yet, then it shouldn't trigger
         * a disappear event at all.
         */
        if (el._appearedOnce || visible) {
          if (el._visible !== visible) {
            el._visible = visible;
            if (visible && !el._appearedOnce) {
              el._appearedOnce = true;
            }
            var evtName = visible ? 'appear' : 'disappear';
            if (el.getAttribute(("data-evt-" + evtName)) === '') {
              triggerAppearEvent(el, evtName, dir);
            }
          }
        }
        if (el._offsetAppearedOnce || offsetVisible) {
          if (el._offsetVisible !== offsetVisible) {
            el._offsetVisible = offsetVisible;
            if (offsetVisible && !el._offsetAppearedOnce) {
              el._offsetAppearedOnce = true;
            }
            var evt = offsetVisible ? ['offset-appear', 'offsetAppear'] : ['offset-disappear', 'offsetDisappear'];
            if (el.getAttribute(("data-evt-" + (evt[0]))) === '') {
              triggerAppearEvent(el, evt[1], dir);
            }
          }
        }
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      var lazyloadAttr = 'data-img-src';
      var placeholderAttr = 'placeholder';

      function preLoadImg (src,
        loadCallback,
        errorCallback) {
        var img = new Image();
        img.onload = loadCallback ? loadCallback.bind(img) : null;
        img.onerror = errorCallback ? errorCallback.bind(img) : null;
        img.src = src;
      }

      function applySrc (item, src, placeholderSrc) {
        if (!src) { return }
        function finallCb () {
          delete item._src_loading;
        }

        if (window._processImgSrc) {
          src = window._processImgSrc(src, item);
          if (placeholderSrc) {
            placeholderSrc = window._processImgSrc(placeholderSrc, item);
          }
        }

        if (item._src_loading === src) {
          return
        }

        /**
         * 1. apply src immediately in case javscript blocks the image loading
         *  before next tick.
         */
        item.style.backgroundImage = "url(" + (src || '') + ")";
        item.removeAttribute(lazyloadAttr);
        /**
         * 2. then load the img src with Image constructor (but would not post
         *  a request again), just to trigger the load event.
         */
        item._src_loading = src;
        preLoadImg(src, function (evt) {
          item.style.backgroundImage = "url(" + (src || '') + ")";
          var ref = this;
          var naturalWidth = ref.width;
          var naturalHeight = ref.height;
          var params = {
            success: true,
            size: { naturalWidth: naturalWidth, naturalHeight: naturalHeight }
          };
          dispatchNativeEvent(item, 'load', params);
          finallCb();
        }, function (evt) {
          var params = {
            success: false,
            size: { naturalWidth: 0, naturalHeight: 0 }
          };
          dispatchNativeEvent(item, 'load', params);
          if (placeholderSrc) {
            preLoadImg(placeholderSrc, function () {
              item.style.backgroundImage = "url(" + (placeholderSrc || '') + ")";
            });
          }
          finallCb();
        });
      }

      function getCtScroller (el) {
        if (!el) { return }
        var scroller = el._ptScroller;
        if (!scroller) {
          var pt = el.parentElement;
          while (pt && pt !== document.body) {
            if ((pt.className + '' || '').match(/weex-list|weex-scroller|weex-waterfall/)) {
              scroller = pt;
              break
            }
            pt = pt.parentElement;
          }
          scroller = pt;
          el._ptScroller = pt;
        }
        return scroller
      }

      function fireLazyload (el, ignoreVisibility) {
        if (Array.isArray(el)) {
          return el.forEach(function (ct) { return fireLazyload(ct); })
        }
        el = el || document.body;
        if (!el) { return }
        var imgs = (el || document.body).querySelectorAll(("[" + lazyloadAttr + "]"));
        if (el.getAttribute(lazyloadAttr)) { imgs = [el]; }
        for (var i = 0; i < imgs.length; i++) {
          var img = imgs[i];
          if (typeof ignoreVisibility === 'boolean' && ignoreVisibility) {
            applySrc(img, img.getAttribute(lazyloadAttr), img.getAttribute(placeholderAttr));
          }
          else if (isElementVisible(img, getCtScroller(el))[0]) {
            applySrc(img, img.getAttribute(lazyloadAttr), img.getAttribute(placeholderAttr));
          }
        }
      }

      /**
       * cache a throttle lazyload function for every container element
       * once for different wait times separate.
       *   the architecture of this cache:
       *      cache: {
       *        el.id: {
       *          wait: throttledFunction () { ... }
       *        }
       *      }
       */
      var cache = {};
      var _uid$2 = 1;
      function getThrottleLazyload (wait, el) {
        if ( wait === void 0 ) wait = 16;
        if ( el === void 0 ) el = document.body;

        var id = +(el && el.dataset.throttleId);
        if (isNaN(id) || id <= 0) {
          id = _uid$2++;
          el && el.setAttribute('data-throttle-id', id + '');
        }

        !cache[id] && (cache[id] = {});
        var throttled = cache[id][wait] ||
          (cache[id][wait] = throttle(
            fireLazyload.bind(this, el),
            parseFloat(wait),
            // true for callLastTime.
            // to trigger once more time after the last throttled function called with a little more delay.
            true)
          );
        return throttled
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      var bindingStyleNamesForPx2Rem = config.bindingStyleNamesForPx2Rem;

      // whether to support using 0.5px to paint 1px width border.
      var _supportHairlines;
      function supportHairlines () {
        if (typeof _supportHairlines === 'undefined') {
          var dpr = window.devicePixelRatio;
          if (dpr && dpr >= 2 && document.documentElement) {
            var docElm = document.documentElement;
            var testElm = document.createElement('div');
            var fakeBody = document.createElement('body');
            var beforeNode = docElm.firstElementChild || docElm.firstChild;
            testElm.style.border = '0.5px solid transparent';
            fakeBody.appendChild(testElm);
            docElm.insertBefore(fakeBody, beforeNode);
            _supportHairlines = testElm.offsetHeight === 1;
            docElm.removeChild(fakeBody);
          }
          else {
            _supportHairlines = false;
          }
        }
        return _supportHairlines
      }

      var support = null;

      function supportSticky () {
        if (support !== null) {
          return support
        }
        var element = window.document.createElement('div');
        var elementStyle = element.style;
        elementStyle.cssText = 'position:-webkit-sticky;position:sticky;';
        support = elementStyle.position.indexOf('sticky') !== -1;
        return support
      }

      /**
       * get transformObj
       */
      function getTransformObj (elm) {
        var styleObj = {};
        if (!elm) { return styleObj }
        var transformStr = elm.style.webkitTransform
          || elm.style.mozTransform
          || elm.style.transform;
        if (transformStr && transformStr.match(/(?: *(?:translate|rotate|scale)[^(]*\([^(]+\))+/i)) {
          styleObj = transformStr.trim().replace(/, +/g, ',').split(' ').reduce(function (pre, str) {
            ['translate', 'scale', 'rotate'].forEach(function (name) {
              if (new RegExp(name, 'i').test(str)) {
                pre[name] = str;
              }
            });
            return pre
          }, {});
        }
        return styleObj
      }

      /**
       * translate a transform string from a transformObj.
       */
      function getTransformStr (obj) {
        return Object.keys(obj).reduce(function (pre, key) {
          return pre + obj[key] + ' '
        }, '')
      }

      /**
       * add transform style to element.
       * @param {HTMLElement} elm
       * @param {object} style: transform object, format is like this:
       *   {
       *     translate: 'translate3d(2px, 2px, 2px)',
       *     scale: 'scale(0.2)',
       *     rotate: 'rotate(30deg)'
       *   }
       * @param {boolean} replace: whether to replace all transform properties.
       */
      function addTransform (elm, style, replace) {
        if (!style) { return }
        var styleObj = {};
        if (!replace) {
          styleObj = getTransformObj(elm);
        }
        for (var key in style) {
          var val = style[key];
          if (val) {
            styleObj[key] = val;
          }
        }
        var resStr = getTransformStr(styleObj);
        elm.style.webkitTransform = resStr;
        elm.style.mozTransform = resStr;
        elm.style.transform = resStr;
      }

      /**
       * copy a transform behaviour from one element to another.
       * key could be: 'translate' | 'scale' | 'rotate'
       */
      function copyTransform (from, to, key) {
        var str;
        if (!key) {
          str = from.style.webkitTransform
            || from.style.mozTransform
            || from.style.transform;
        }
        else {
          var fromObj = getTransformObj(from);
          if (!fromObj[key]) { return }
          var toObj = getTransformObj(to);
          toObj[key] = fromObj[key];
          str = getTransformStr(toObj);
        }
        to.style.webkitTransform = str;
        to.style.mozTransform = str;
        to.style.transform = str;
      }

      /**
       * get color's r, g, b value.
       * @param {string} color support all kinds of value of color.
       */
      function getRgb (color) {
        var haxReg = /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/;
        var rgbReg = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
        var span = document.createElement('span');
        var body = document.body;
        span.style.cssText = "color: " + color + "; width: 0px; height: 0px;";
        body && body.appendChild(span);
        color = window.getComputedStyle(span).color + '';
        body && body.removeChild(span);

        var match;
        match = color.match(haxReg);
        if (match) {
          return {
            r: parseInt(match[1], 16),
            g: parseInt(match[2], 16),
            b: parseInt(match[3], 16)
          }
        }
        match = color.match(rgbReg);
        if (match) {
          return {
            r: parseInt(match[1]),
            g: parseInt(match[2]),
            b: parseInt(match[3])
          }
        }
      }

      /**
       * get style sheet with owner node's id
       * @param {string} id owner node id.
       */
      function getStyleSheetById (id) {
        if (!id) { return }
        var styleSheets = document.styleSheets;
        var len = styleSheets.length;
        for (var i = 0; i < len; i++) {
          var styleSheet = styleSheets[i];
          if (styleSheet.ownerNode.id === id) {
            return styleSheet
          }
        }
      }

      function getChildrenTotalWidth (children) {
        var len = children.length;
        var total = 0;
        for (var i = 0; i < len; i++) {
          total += children[i].getBoundingClientRect().width;
        }
        return total
      }
      /**
       * get total content width of the element.
       * @param {HTMLElement} elm
       */
      function getRangeWidth (elm) {
        var children = elm.children;
        if (!children) {
          return elm.getBoundingClientRect().width
        }
        if (!Range) {
          return getChildrenTotalWidth(children)
        }
        var range = document.createRange();
        if (!range.selectNodeContents) {
          return getChildrenTotalWidth(children)
        }
        range.selectNodeContents(elm);
        return range.getBoundingClientRect().width
      }

      /**
       * px2rem and camelize keys.
       */
      function styleObject2rem (style, rootValue) {
        var obj = {};
        for (var k in style) {
          var camK = camelize(k);
          if (bindingStyleNamesForPx2Rem.indexOf(camK) > -1) {
            obj[camK] = px2rem(style[k] + '', rootValue);
          }
          else {
            obj[camK] = style[k];
          }
        }
        return obj
      }

      function px2rem (px, rootValue) {
        return px.replace(/([+-]?\d+(?:.\d*)?)([p|w]x)/g, function ($0, $1, $2) {
          if ($2 === 'wx') { // 'wx' -> px
            return $1 + 'px'
          }
          else {  // 'px' -> rem
            var pxVal = parseFloat($1);
            var sign = pxVal > 0
              ? 1 : pxVal < 0 ?
                -1 : 0;
            if (Math.abs(pxVal) <= 1) {
              return supportHairlines()
                ? ((sign * 0.5) + "px")
                : ((sign * 1) + "px")
            }
            return pxVal
              / (rootValue || window.weex.config.env.rem)
              + 'rem'
          }
        })
      }

      function rem2px (rem, rootValue) {
        return rem.replace(/([+-]?\d+(?:.\d*)?)rem/g, function ($0, $1) {
          return parseFloat($1)
            * (rootValue || window.weex.config.env.rem)
            + 'px'
        })
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */



      var utils = Object.freeze({
        extend: extend,
        extendTruthy: extendTruthy,
        extendKeys: extendKeys,
        extractKeys: extractKeys,
        bind: bind,
        debounce: debounce,
        depress: depress,
        throttle: throttle,
        loopArray: loopArray,
        cached: cached,
        camelize: camelize,
        camelizeKeys: camelizeKeys,
        capitalize: capitalize,
        hyphenate: hyphenate,
        hyphenateKeys: hyphenateKeys,
        hyphenateStyleKeys: hyphenateStyleKeys,
        camelToKebab: camelToKebab,
        appendCss: appendCss,
        nextFrame: nextFrame,
        toCSSText: toCSSText,
        supportsPassive: supportsPassive,
        createEvent: createEvent,
        createBubblesEvent: createBubblesEvent,
        createCustomEvent: createCustomEvent,
        dispatchNativeEvent: dispatchNativeEvent,
        mapFormEvents: mapFormEvents,
        contains: contains,
        insideA: insideA,
        getParentScroller: getParentScroller,
        getParentScrollerElement: getParentScrollerElement,
        hasIntersection: hasIntersection,
        isElementVisible: isElementVisible,
        getEventHandlers: getEventHandlers,
        watchAppear: watchAppear,
        detectAppear: detectAppear,
        applySrc: applySrc,
        fireLazyload: fireLazyload,
        getThrottleLazyload: getThrottleLazyload,
        supportHairlines: supportHairlines,
        supportSticky: supportSticky,
        getTransformObj: getTransformObj,
        getTransformStr: getTransformStr,
        addTransform: addTransform,
        copyTransform: copyTransform,
        getRgb: getRgb,
        getStyleSheetById: getStyleSheetById,
        getRangeWidth: getRangeWidth,
        styleObject2rem: styleObject2rem,
        px2rem: px2rem,
        rem2px: rem2px,
        isPlainObject: isPlainObject,
        isArray: isArray,
        isPrimitive: isPrimitive,
        isDef: isDef
      });

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /**
       * get WXEnvironment info.
       * @param  {object} viewportInfo: info about viewport.
       * @param  {object} envInfo: info parsed from lib.env.
       */
      function initEnv (viewportInfo, envInfo) {
        var browserName = envInfo.browser ? envInfo.browser.name : navigator.appName;
        var browserVersion = envInfo.browser ? envInfo.browser.version.val : null;
        var osName = envInfo.os.name;
        if (osName.match(/(iPhone|iPad|iPod)/i)) {
          osName = 'iOS';
        }
        else if (osName.match(/Android/i)) {
          osName = 'android';
        }
        var osVersion = envInfo.os.version.val;
        var env = {
          platform: 'Web',
          weexVersion: '1.0.36',
          layoutDirection: 'ltr',
          userAgent: navigator.userAgent,
          appName: browserName,
          appVersion: browserVersion,
          osName: osName,
          osVersion: osVersion,
          deviceModel: envInfo.os.name || null
        };
        /**
         * viewportInfo: scale, deviceWidth, deviceHeight. dpr
         */
        return extend(viewportInfo, env)
      }

      // const viewportInfo = initViewport()

      // 750 by default currently
      // const scale = viewportInfo.scale

      // const units = {
      //   REM: 12 * scale,
      //   VW: viewportInfo.deviceWidth / 100,
      //   VH: viewportInfo.deviceHeight / 100,
      //   VMIN: Math.min(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
      //   VMAX: Math.max(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
      //   CM: 96 / 2.54 * scale,
      //   MM: 96 / 25.4 * scale,
      //   Q: 96 / 25.4 / 4 * scale,
      //   IN: 96 * scale,
      //   PT: 96 / 72 * scale,
      //   PC: 96 / 6 * scale,
      //   PX: scale
      // }

      // Object.freeze(units)
      // Object.freeze(env)

      // window.CSS_UNIT = units
      window.WXEnvironment = initEnv(init$1(), window.lib.env);

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /* global Vue */

      var weexModules = {};
      var _roots = [];

      var weex$4 = {
        __vue__: null,
        utils: utils,
        // units: window.CSS_UNIT,
        config: {
          env: window.WXEnvironment,
          bundleUrl: location.href
        },

        _components: {},
        _modules: weexModules,

        _meta: {
          mounted: {},
          updated: {},
          destroyed: {},
          requiredModules: {},
          apiCalled: {},
          perf: {}
        },

        document: {
          body: {}
        },

        requireModule: function requireModule (moduleName) {
          var metaMod = weex$4._meta.requiredModules;
          if (!metaMod[moduleName]) {
            metaMod[moduleName] = 0;
          }
          metaMod[moduleName]++;
          return weexModules[moduleName]
        },

        registerModule: function registerModule () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return (ref = this).registerApiModule.apply(ref, args)
          var ref;
        },

        support: function support (feature) {
          if ( feature === void 0 ) feature = '';

          var match = (feature + '').match(/@(component|module)\/(\w+)(.\w+)?/);
          if (match) {
            var type = match[1];
            var mod = match[2];
            var method = match[3];
            method = method && method.replace(/^\./, '');
            switch (type) {
              case 'component':
                return typeof this._components[mod] !== 'undefined'
                  || config.weexBuiltInComponents.indexOf(mod) >= 0
              case 'module':
                var module = weexModules[mod];
                return module && method ? !!module[method] : !!module
            }
          }
          else {
            console.warn(("[vue-render] invalid argument for weex.support: " + feature));
            return null
          }
        },

        supports: function supports () {
          return this.support.apply(this, arguments)
        },

        isRegisteredModule: function isRegisteredModule (moduleName, methodName) {
          var feature = methodName ? (moduleName + "." + methodName) : moduleName;
          return this.support('@module/' + feature)
        },

        isRegisteredComponent: function isRegisteredComponent (componentName) {
          return this.support('@component/' + componentName)
        },

        /**
         * Register a new vue instance in this weex instance. Put its root element into weex.document.body.children, so
         * that user can use weex.document.body to walk through all dom structures in all vue instances in the page.
         */
        registerVueInstance: function registerVueInstance (instance) {
          if (!instance instanceof Vue) {
            return
          }
          var root = instance.$root;
          if (!root || !root.$el) {
            return
          }
          this.document.body.children.push(root.$el);
        },

        // @deprecated
        require: function require () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
          return (ref = this).requireModule.apply(ref, args)
          var ref;
        },

        // @deprecated
        // TODO: rename to registerModule
        registerApiModule: function registerApiModule (name, module, meta) {
          if (!weexModules[name]) {
            weexModules[name] = {};
          }
          if (!!meta && meta.registerType === 'assignment') {
            weexModules[name] = module;
          }
          else {
            var loop = function ( key ) {
              if (module.hasOwnProperty(key)) {
                weexModules[name][key] = function () {
                  var called = weex$4._meta.apiCalled;
                  if (!called[name]) {
                    called[name] = {};
                  }
                  var calledMod = called[name];
                  if (!calledMod[key]) {
                    calledMod[key] = 0;
                  }
                  calledMod[key]++;
                  return module[key].apply(weex$4, arguments)
                };
              }
            };

            for (var key in module) loop( key );
          }
        },

        registerComponent: function registerComponent (name, component) {
          if (!this.__vue__) {
            return console.log('[Vue Render] Vue is not found. Please import Vue.js before register a component.')
          }
          this._components[name] = 0;
          if (component._css) {
            var css = component._css.replace(/\b[+-]?[\d.]+rem;?\b/g, function (m) {
              return parseFloat(m) * 75 * weex$4.config.env.scale + 'px'
            });
            appendCss(css, ("weex-cmp-" + name));
            delete component._css;
          }
          this.__vue__.component(name, component);
        },

        // @deprecated
        getRoot: function getRoot () {},

        // @deprecated
        sender: {
          performCallback: function performCallback (callback, data, keepAlive) {
            if (typeof callback === 'function') {
              return callback(data)
            }
            return null
          }
        },

        // @deprecated
        install: function install (module) {
          module.init(this);
        }
      };

      Object.defineProperty(weex$4.document.body, 'children', {
        get: function get () { return _roots }
      })

      ; ['on', 'once', 'off', 'emit'].forEach(function (method) {
        weex$4[method] = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          if (!this._vue) {
            this._vue = new this.__vue__();
          }
          return (ref = this._vue)[("$" + method)].apply(ref, args)
          var ref;
        };
      });

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      function getInlineStyle (vnode) {
        var data = vnode.data || {};
        return extendTruthy({}, data.staticStyle, data.style)
      }

      function extractComponentStyle (context) {
        return getComponentInlineStyle(context)
        // return getComponentStyle(context, true)
      }

      function getComponentInlineStyle (context) {
        var vnode = context && context.$vnode;
        if (!vnode) {
          return {}
        }
        var style = {};
        while (vnode) {
          extend(style, getInlineStyle(vnode));
          vnode = vnode.parent;
        }
        return style
      }

      var text$2 = {
        transform: function transform (style) {
          var lines = style.lines;
          if (lines > 0) {
            return Object.assign(style, {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: lines
            })
          }
          return style
        }
      };

      var tagMap$1 = {
        text: text$2
      };

      var getTransformer$1 = function (tag) {
        return tagMap$1[tag]
      };

      var transformer = {
        getTransformer: getTransformer$1
      };

      var getTransformer = transformer.getTransformer;

      var getTransformer_1 = getTransformer;

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var weexBuiltInComponents = config.weexBuiltInComponents;

      var appearEventsMap = {
        appear: 'appear',
        disappear: 'disappear',
        offsetAppear: 'offset-appear',
        offsetDisappear: 'offset-disappear'
      };

      /**
       * remove text nodes in the nodes array.
       * @param  {Array} nodes
       * @return {Array} nodes without text nodes.
       */
      function trimTextVNodes (vnodes) {
        if (isArray(vnodes)) {
          return vnodes.filter(function (vnode) { return !!vnode.tag; })
        }
        return vnodes
      }

      /**
       * ==================================================
       * method to transform args passed to createElement
       * for render function.
       * ==================================================
       */

      // should share with precompiler.
      var metaMap = {
        figure: ['img', 'image', 'gif', 'figure'],
        p: ['text', 'p'],
        div: ['container', 'div'],
        section: ['cell', 'cell-slot'],
        'recycle-list': ['recycle-list']
      };

      var checkMap = Object.keys(metaMap).reduce(function (pre, targetTag) {
        var tagArr = metaMap[targetTag];
        tagArr.forEach(function (fromTag) {
          pre[fromTag] = targetTag;
        });
        return pre
      }, {});

      var _stdTagMap = {
        p: 'text',
        figure: 'image',
        section: 'cell'
      };
      function getStdTag (tag) {
        var stdTag = _stdTagMap[tag];
        return stdTag || tag
      }

      var precompiledClassMap = {
        div: {
          'weex-ct': true,
          'weex-div': true
        },
        image: {
          'weex-el': true,
          'weex-image': true
        },
        text: {
          'weex-el': true,
          'weex-text': true
        },
        cell: {
          'weex-ct': true,
          'weex-cell': true
        },
        a: {
          'weex-ct': true,
          'weex-a': true
        }
      };

      function isPrecompiled (tag) {
        return config.weexBuiltInComponents.indexOf(tag) > -1
      }

      function transformRender (ctx, h) {
        return function (
          tag,
          data,
          children,
          normalizationType,
          alwaysNormalize
        ) {
          if (isArray(data) || isPrimitive(data)) {
            normalizationType = children;
            children = data;
            data = {};
          }
          if (!isDef(data)) {
            data = {};
          }
          if (isDef(data.is)) {
            tag = data.is;
          }
          if (typeof tag === 'string') {
            data = transformData(this, data, tag);
            tag = transformTag(this, tag);
          }
          else {  // direct component options / constructor
            data = transformData(this, data, undefined);
          }
          return h.call(
            this,
            tag,
            data,
            children,
            normalizationType,
            alwaysNormalize
          )
        }.bind(ctx)
      }

      function transformTag (ctx, tag) {
        var elementTag = checkMap[tag];
        return elementTag || tag
      }

      /**
       * Tell whether a element is contained in a element who has
       * a attribute 'bubble'=true.
       * @param {HTMLElement} el
       */
      // function inBubble (el) {
      //   if (typeof el._inBubble === 'boolean') {
      //     return el._inBubble
      //   }
      //   const parents = []
      //   let parent = el.parentElement
      //   let inBubble
      //   while (parent && parent !== document.body) {
      //     if (typeof parent._inBubble === 'boolean') {
      //       inBubble = parent._inBubble
      //       break
      //     }
      //     const attr = parent.getAttribute('bubble')
      //     if (attr !== '') {
      //       inBubble = attr === true || attr === 'true'
      //       break
      //     }
      //     parents.push(parent)
      //     parent = parent.parentElement
      //   }
      //   el._inBubble = inBubble
      //   for (let i = 0, l = parents.length; i < l; i++) {
      //     parents[i]._inBubble = inBubble
      //   }
      //   return inBubble
      // }

      function bindEvents (ctx, evts, attrs, tag, appearAttached) {
        for (var key in evts) {
          var appearEvtName = appearEventsMap[key];
          if (appearEvtName) {
            attrs[("data-evt-" + appearEvtName)] = '';
            if (!appearAttached.value) {
              appearAttached.value = true;
              attrs['weex-appear'] = '';
            }
          }
          else {
            attrs[("data-evt-" + key)] = '';
            if (key !== 'click') {
              // should stop propagation by default.
              // TODO: should test inBubble first.
              var handler = evts[key];
              if (isArray(evts[key])) {
                handler.unshift(ctx.$stopPropagation);
              }
              else {
                evts[key] = [ctx.$stopPropagation, handler];
              }
            }
          }
        }
        if (evts.click) {
          evts.weex$tap = evts.click;
          evts.click = ctx.$stopOuterA;
        }
        if (evts.scroll) {
          evts.weex$scroll = evts.scroll;
          delete evts.scroll;
        }
      }

      function transformOn (ctx, data, tag) {
        var on = data.on;
        var nativeOn = data.nativeOn;
        if (weexBuiltInComponents.indexOf(tag) > -1) {
          /**
           * for div, image, text, cell, a, ...
           * user should bind all events without .native.
           */
          nativeOn = null;
          delete data.nativeOn;
        }
        if (isDef(weex._components[tag])) {
          /**
           * for slider, list, ...
           * user should bind events without .native.
           * in our events handling, all events should transfer to
           * .native binding.
           */
          delete data.nativeOn;
          nativeOn = null;
          if (on) {
            nativeOn = data.nativeOn = on;
          }
          on = null;
          delete data.on;
        }

        var attrs = data.attrs;
        if (!attrs) {
          attrs = data.attrs = {};
        }

        var appearAttached = {
          value: false
        };
        if (on) {
          bindEvents(ctx, on, attrs, tag, appearAttached);
        }
        if (nativeOn) {
          bindEvents(ctx, nativeOn, attrs, tag, appearAttached);
        }

        /**
         * binding a weex$tap to <a> element to stop propagation if there
         * is no bubbles=true flag showing on parents.
         */
        if (tag === 'a') {
          if (!on) {
            on = data.on = {};
          }
          // if (!checkBubble(el)) {
          var evt = on['weex$tap'];
          if (!evt) {
            on['weex$tap'] = ctx.$stopPropagation;
          }
          else if (Array.isArray(evt)) {
            evt.unshift(ctx.$stopPropagation);
          }
          else {
            evt = [ctx.$stopPropagation, evt];
          }
          // }
        }
      }

      function transformClass (data, tag) {
        var classData = data.class;
        var tagClassObj = precompiledClassMap[tag];
        if (!classData) {
          classData = data.class = [];
        }
        if (classData && isArray(classData)) {
          data.class = classData.concat(Object.keys(tagClassObj));
        }
        else if (typeof classData === 'object') {
          Object.assign(classData, tagClassObj);
        }
      }

      function transformStyle (ctx, data, tag) {
        var style = data.style;
        if (!style) { return }
        var transformer = getTransformer_1(getStdTag(tag));
        if (transformer) {
          data.style = ctx._px2rem(transformer.transform(style), 75);
        }
        else {
          data.style = ctx._px2rem(style, 75);
        }
      }

      /**
       * transformAttrs:
       *  - add weex-type attrs for precompiledTags.
       *  - image.resize: transform to directive weex-resize.
       */
      function transformAttrs (data, tag) {
        var attrs = data.attrs;
        var directives = data.directives;
        if (!attrs) {
          attrs = data.attrs = {};
        }
        attrs['weex-type'] = tag;
        if (tag === 'image' || tag === 'gif') {
          var src = attrs.src;
          var resize = attrs.resize;
          if (src) {
            attrs['data-img-src'] = src;
          }
          if (resize) {
            if (!directives) {
              directives = data.directives = [];
            }
            directives.push({
              name: 'weex-resize',
              value: attrs.resize
            });
          }
        }
      }

      function transformData (ctx, data, tag) {
        if (isArray(data)) {
          // parameter data is ommited.
          return data
        }
        var isP = isPrecompiled(tag);
        // class
        isP && transformClass(data, tag);
        // style
        transformStyle(ctx, data, tag);
        // attrs
        isP && transformAttrs(data, tag);
        // on
        transformOn(ctx, data, tag);
        return data
      }

      function mapNativeEvents (ctx, map) {
        var eventMap = {};
        var loop = function ( origEvent ) {
          eventMap[origEvent] = function (evt) {
            var el = evt.target;
            dispatchNativeEvent(el, map[origEvent]);
          };
        };

        for (var origEvent in map) loop( origEvent );
        return eventMap
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */



      var core = Object.freeze({
        extractComponentStyle: extractComponentStyle,
        getComponentInlineStyle: getComponentInlineStyle,
        trimTextVNodes: trimTextVNodes,
        transformRender: transformRender,
        transformTag: transformTag,
        transformData: transformData,
        mapNativeEvents: mapNativeEvents
      });

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var scrollableTypes = config.scrollableTypes;

      var lazyloadWatched = false;
      function watchLazyload () {
        lazyloadWatched = true
        ; [
          'scroll',
          // 'transitionend',
          // 'webkitTransitionEnd',
          // 'animationend',
          // 'webkitAnimationEnd',
          'resize'
        ].forEach(function (evt) {
          window.addEventListener(evt, getThrottleLazyload(25, document.body));
        });
        /**
         * In case the users use the body's overflow to scroll. Then the scroll
         * event would not be triggered on the window object but on the body.
         */
        document.body.addEventListener('scroll', getThrottleLazyload(25, document.body));
      }

      var idCnt = 0;
      var appearWatched = false;

      /**
       * during updating, the appear watcher binding on the appearWatched context
       * should be triggered within a debounced wrapper.
       * If the updating interval is shorter then 50 ms, then the appear events will
       * ignore the change in the previous 50 ms due to the debounce wrapper.
       */
      var debouncedWatchAppear = debounce(function () {
        watchAppear(appearWatched, true);
      }, 50);

      /**
       * if it's a scrollable tag, then watch appear events for it.
       */
      function watchAppearForScrollables (tagName, context) {
        // when this is a scroller/list/waterfall
        if (scrollableTypes.indexOf(tagName) > -1) {
          var sd = context.scrollDirection;
          if (!sd || sd !== 'horizontal') {
            appearWatched = context;
            watchAppear(context, true);
          }
        }
      }

      var base$1 = {
        beforeCreate: function beforeCreate () {
          if (!lazyloadWatched) {
            watchLazyload();
          }
        },

        updated: function updated () {
          var el = this.$el;
          if (!el || el.nodeType !== 1) {
            return
          }
          if (this._rootId) {
            if (el.className.indexOf('weex-root') <= -1) {
              el.classList.add('weex-root');
              el.classList.add('weex-ct');
              el.setAttribute('data-wx-root-id', this._rootId);
            }
          }

          var tagName = this.$options && this.$options._componentTag;
          var metaUp = weex._meta.updated;
          if (!metaUp[tagName]) {
            metaUp[tagName] = 0;
          }
          metaUp[tagName]++;
          // will check appearing when no other changes in latest 50ms.
          debouncedWatchAppear();
          /**
           * since the updating of component may affect the layout, the lazyloading should
           * be fired.
           */
          this._fireLazyload();
        },

        mounted: function mounted () {
          var tagName = this.$options && this.$options._componentTag;
          var el = this.$el;
          if (!el || el.nodeType !== 1) {
            return
          }
          if (typeof weex._components[tagName] !== 'undefined') {
            weex._components[tagName]++;
          }
          var metaMt = weex._meta.mounted;
          if (!metaMt[tagName]) {
            metaMt[tagName] = 0;
          }
          metaMt[tagName]++;

          watchAppearForScrollables(tagName, this);

          // when this is the root element of Vue instance.
          if (this === this.$root) {
            var rootId = "wx-root-" + (idCnt++);
            if (!weex._root) {
              weex._root = {};
            }
            weex._root[rootId] = this;
            this._rootId = rootId;
            if (el.nodeType !== 1) {
              return
            }
            el.classList.add('weex-root');
            el.classList.add('weex-ct');
            el.setAttribute('data-wx-root-id', rootId);

            /**
             * there's no scrollable component in this page. That is to say,
             * the page is using body scrolling instead of scrollabe components.
             * Then the appear watcher should be attached on the body.
             */
            if (!appearWatched) {
              appearWatched = this;
              watchAppear(this, true);
            }

            this._fireLazyload(el);
          }

          // give warning for not using $processStyle in vue-loader config.
          // if (!warned && !window._style_processing_added) {
          //   warnProcessStyle()
          // }
        },

        destroyed: function destroyed () {
          var el = this.$el;
          if (!el || el.nodeType !== 1) {
            return
          }
          /**
           * if the destroyed element is above another panel with images inside, and the images
           * moved into the viewport, then the lazyloading should be triggered.
           */
          if (this._rootId) {
            delete weex._root[this._rootId];
            delete this._rootId;
          }
          var tagName = this.$options && this.$options._componentTag;
          if (typeof weex._components[tagName] !== 'undefined') {
            weex._components[tagName]--;
          }
          var metaDs = weex._meta.destroyed;
          if (!metaDs[tagName]) {
            metaDs[tagName] = 0;
          }
          metaDs[tagName]++;
          this._fireLazyload();
        },

        methods: {
          _fireLazyload: function _fireLazyload (el) {
            getThrottleLazyload(25, el || document.body)();
          }
        }
      };

      var event$1 = {
        methods: {
          // deprecated.
          $stopOutterA: function $stopOutterA (e) {
            return this.$stopOuterA(e)
          },

          $stopOuterA: function $stopOuterA (e) {
            if (e && e.preventDefault && e.target) {
              if (insideA(e.target)) {
                e.preventDefault();
              }
            }
          },

          $stopPropagation: function $stopPropagation (e) {
            if (e && e.stopPropagation) {
              e.stopPropagation();
            }
          }
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      var bindingStyleNamesForPx2Rem$1 = config.bindingStyleNamesForPx2Rem;

      var style = {
        methods: {
          _px2rem: function _px2rem (value, rootValue) {
            var this$1 = this;

            if (typeof value === 'string') {
              return (value + '').replace(/[+-]?\d+(?:.\d*)?[pw]x/gi, function ($0) {
                return weex.utils.px2rem($0, rootValue)
              })
            }
            if (typeof value === 'number') {
              return weex.utils.px2rem(value + '', rootValue)
            }
            if (isPlainObject(value)) {
              for (var k in value) {
                if (
                  value.hasOwnProperty(k)
                  && bindingStyleNamesForPx2Rem$1.indexOf(k) > -1
                ) {
                  value[k] = weex.utils.px2rem(value[k] + '', rootValue);
                }
              }
              return value
            }
            if (isArray(value)) {
              for (var i = 0, l = value.length; i < l; i++) {
                this$1._px2rem(value[i], rootValue);
              }
              return value
            }
          },

          _processExclusiveStyle: function _processExclusiveStyle (styleObj, rootValue, tagName) {
            var transformer = getTransformer_1(tagName);
            return this._px2rem(
              transformer.transform(styleObj),
              rootValue
            )
          },

          _getParentRect: function _getParentRect () {
            var el = this.$el;
            var parent = el && el.parentElement;
            return parent && parent.getBoundingClientRect()
          }
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      // input and textare has some common api and event
      var findEnterKeyType = function (key) {
        var keys = ['default', 'go', 'next', 'search', 'send'];
        if (keys.indexOf(key) > -1) {
          return key
        }
        return 'done'
      };

      var inputCommon = {
        methods: {
          focus: function focus () {
            this.$el && this.$el.focus();
          },
          blur: function blur () {
            this.$el && this.$el.blur();
          },

          setSelectionRange: function setSelectionRange (start, end) {
            try {
              this.$el.setSelectionRange(start, end);
            }
            catch (e) {
              
            }
          },

          getSelectionRange: function getSelectionRange (callback) {
            try {
              var selection = window.getSelection();
              var str = selection.toString();
              var selectionStart = this.$el.value.indexOf(str);
              var selectionEnd = selectionStart === -1 ? selectionStart : selectionStart + str.length;
              callback && callback({
                selectionStart: selectionStart,
                selectionEnd: selectionEnd
              });
            }
            catch (e) {
              callback && callback(new Error('[vue-render] getSelection is not supported.'));
            }
          },

          getEditSelectionRange: function getEditSelectionRange (callback) {
            this.getSelectionRange(callback);
          },

          // support enter key event
          createKeyboardEvent: function createKeyboardEvent (events) {
            var customKeyType = this.returnKeyType;
            if (customKeyType) {
              var keyboardEvents = {
                'keyup': function (ev) {
                  var code = ev.keyCode;
                  var key = ev.key;
                  if (code === 13) {
                    if (!key || key.toLowerCase() === 'tab') {
                      key = 'next';
                    }
                    dispatchNativeEvent(ev.target, 'return', {
                      key: key,
                      returnKeyType: findEnterKeyType(customKeyType),
                      value: ev.target.value
                    });
                  }
                }
              };
              events = extend(events, keyboardEvents);
            }
            return events
          }
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var sticky = {
        destroyed: function destroyed () {
          if (!this._stickyAdded) { return }
          var scroller = getParentScroller(this);
          if (!scroller) { return }
          delete scroller._stickyChildren[this._uid];
        },

        methods: {
          _addSticky: function _addSticky () {
            var el = this.$el;
            if (!el || el.nodeType === 1) {
              return
            }
            el.classList.add('sticky');
            if (!this._placeholder) {
              this._placeholder = el.cloneNode(true);
            }
            this._placeholder.style.display = 'block';
            this._placeholder.style.width = this.$el.offsetWidth + 'px';
            this._placeholder.style.height = this.$el.offsetHeight + 'px';
            el.parentNode.insertBefore(this._placeholder, this.$el);
          },

          _removeSticky: function _removeSticky () {
            var el = this.$el;
            if (!el || el.nodeType === 1) {
              return
            }
            el.classList.remove('sticky');
            if (this._placeholder) {
              this._placeholder.parentNode.removeChild(this._placeholder);
            }
            this._placeholder = null;
          }
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      window.global = window;
      window.weex = weex$4;

      weex$4._styleMap = {}

      ; ['getComponentInlineStyle',
        'extractComponentStyle',
        'mapNativeEvents',
        'trimTextVNodes']
        .forEach(function (method) {
          weex$4[method] = core[method].bind(weex$4);
        });

      weex$4.mixins = {
        inputCommon: inputCommon
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var _inited$1 = false;

      var renderFunctionPlugin = {
        init: function init (weex) {
          if (_inited$1) {
            return
          }
          _inited$1 = true;
          var Vue = weex.__vue__;
          var _render = Vue.prototype._render;
          Vue.prototype._render = function () {
            var weexRender = this._weexRender;
            var tag = this.$options && this.$options._componentTag;
            if (
              !weexRender
              && !isDef(weex._components[tag])
            ) {
              var origRender = this.$options.render;
              weexRender = this._weexRender = function (h) {
                var args = [], len = arguments.length - 1;
                while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

                return origRender.call.apply(origRender, [ this, transformRender(this, h) ].concat( args ))
              };
              this.$options.render = weexRender;
            }
            return _render.call(this)
          };
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      if (global.Vue) {
        setVue(global.Vue);
      }

      function setVue (vue) {
        if (!vue) {
          throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.')
        }
        if (global.weex.__vue__) {
          return
        }
        global.weex.__vue__ = vue;
        weex.install(renderFunctionPlugin);
        console.log(("[Vue Render] install Vue " + (vue.version) + "."));
      }

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /**
       * init weex.
       * @param  {Vue$2} Vue: Vue Constructor.
       * @param  {object} options: extend weex plugins.
       *         - components.
       *         - modules.
       */
      var _inited = false;
      function init (Vue/* options = {}*/) {
        if (_inited) { return }
        _inited = true;

        setVue(Vue);

        Vue.prototype.$getConfig = function () {
          console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
          return weex.config
        };

        var htmlRegex = /^html:/i;
        Vue.config.isReservedTag = function (tag) { return htmlRegex.test(tag); };
        Vue.config.parsePlatformTagName = function (tag) { return tag.replace(htmlRegex, ''); };

        function isWeexTag (tag) {
          return typeof weex._components[tag] !== 'undefined'
        }
        var oldGetTagNamespace = Vue.config.getTagNamespace;
        Vue.config.getTagNamespace = function (tag) {
          if (isWeexTag(tag)) {
            return
          }
          return oldGetTagNamespace(tag)
        };

        Vue.mixin(base$1);
        Vue.mixin(event$1);
        Vue.mixin(style);
        Vue.mixin(sticky);
      }

      // auto init in dist mode.
      if (typeof window !== 'undefined' && window.Vue) {
        init(window.Vue);
      }

      weex.init = init;

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      /**
       * @fileOverview Input component.
       * Support v-model only if vue version is larger than 2.2.0
       */
      var mapFormEvents$1;
      var appendCss$1;

      var ID_PREFIX_PLACEHOLDER_COLOR = 'wipt_plc_';
      var ID_PREFIX_INPUT = 'wipt_';
      var idCount = 0;

      function setPlaceholderColor (inputVm, placeholderColor) {
        if (!placeholderColor) {
          return
        }
        var vendors = [
          '::-webkit-input-placeholder',
          ':-moz-placeholder',
          '::-moz-placeholder',
          ':-ms-input-placeholder',
          ':placeholder-shown'
        ];
        var id = inputVm._id;
        appendCss$1(
          vendors.map(function (vendor, idx) {
            return ("#" + ID_PREFIX_INPUT + id + (vendors[idx]) + "{color:" + placeholderColor + ";}")
          }).join(''),
          ("" + ID_PREFIX_PLACEHOLDER_COLOR + id),
          true);
      }

      function processStyle (vm) {
        var styles = getComponentInlineStyle(vm);
        var phColor = styles.placeholderColor || styles['placeholder-color'];
        if (phColor) {
          setPlaceholderColor(vm, phColor);
        }
        return styles
      }

      function getInput (weex) {
        var ref = weex.mixins;
        var inputCommon = ref.inputCommon;

        return {
          name: 'weex-input',
          mixins: [inputCommon],
          props: {
            type: {
              type: String,
              default: 'text',
              validator: function validator (value) {
                return [
                  'email', 'number', 'password', 'search', 'tel', 'text', 'url', 'date',
                  'datetime', 'time' ].indexOf(value) !== -1
              }
            },
            value: String,
            placeholder: String,
            disabled: {
              type: [String, Boolean],
              default: false
            },
            autofocus: {
              type: [String, Boolean],
              default: false
            },
            maxlength: [String, Number],
            returnKeyType: String
          },

          render: function render (createElement) {
            if (!this._id) {
              this._id = idCount++;
            }
            var events = mapFormEvents$1(this);
            return createElement('html:input', {
              attrs: {
                'weex-type': 'input',
                id: ("" + ID_PREFIX_INPUT + (this._id)),
                type: this.type,
                value: this.value,
                disabled: (this.disabled !== 'false' && this.disabled !== false),
                autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
                placeholder: this.placeholder,
                maxlength: this.maxlength,
                'returnKeyType': this.returnKeyType
              },
              domProps: {
                value: this.value
              },
              on: this.createKeyboardEvent(events),
              staticClass: 'weex-input weex-el',
              staticStyle: processStyle(this)
            })
          }
        }
      }

      var input = {
        init: function init (weex) {
          mapFormEvents$1 = weex.utils.mapFormEvents;
          appendCss$1 = weex.utils.appendCss;

          weex.registerComponent('input', getInput(weex));
        }
      };

      __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.weex-switch {\n  border: 0.013333rem solid #dfdfdf;\n  cursor: pointer;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.333333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  -webkit-box-shadow: #dfdfdf 0 0 0 0 inset;\n          box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, background-color 1.2s, -webkit-box-shadow 0.4s;\n  transition: border 0.4s, background-color 1.2s, -webkit-box-shadow 0.4s;\n  transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n  transition: border 0.4s, box-shadow 0.4s, background-color 1.2s, -webkit-box-shadow 0.4s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  -webkit-box-shadow: #64bd63 0 0 0 0.533333rem inset;\n          box-shadow: #64bd63 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  opacity: 0.3\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  -webkit-box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n  transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.533333rem;\n}\n",undefined);

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      function getSwitch (weex) {
        var extractComponentStyle = weex.extractComponentStyle;
        var ref = weex.utils;
        var dispatchNativeEvent = ref.dispatchNativeEvent;

        return {
          name: 'weex-switch',
          props: {
            checked: {
              type: [Boolean, String],
              default: false
            },
            disabled: {
              type: [Boolean, String],
              default: false
            },
            // Border color  when the switch is turned off
            tintColor: String,
            // Background color when the switch is turned on.
            onTintColor: String,
            // Color of the foreground switch grip.
            thumbTintColor: String
          },
          data: function data () {
            return {
              isChecked: (this.checked !== 'false' && this.checked !== false),
              isDisabled: (this.disabled !== 'false' && this.disabled !== false)
            }
          },
          computed: {
            wrapperClass: function wrapperClass () {
              var classArray = ['weex-el', 'weex-switch'];
              this.isChecked && classArray.push('weex-switch-checked');
              this.isDisabled && classArray.push('weex-switch-disabled');
              return classArray.join(' ')
            },
            mergeStyle: function mergeStyle () {
              var style = extractComponentStyle(this);
              var ref = this;
              var tintColor = ref.tintColor;
              var onTintColor = ref.onTintColor;
              var isChecked = ref.isChecked;
              var isDisabled = ref.isDisabled;

              if (!isChecked && tintColor) {
                Object.assign(style, {
                  borderColor: tintColor,
                  boxShadow: (tintColor + " 0 0 0 0 inset")
                });
              }

              if (isChecked && onTintColor) {
                Object.assign(style, {
                  backgroundColor: onTintColor,
                  color: onTintColor,
                  borderColor: onTintColor,
                  boxShadow: (onTintColor + " 0 0 0 0.533333rem inset")
                });
              }

              isDisabled && Object.assign(style, {
                opacity: 0.3
              });

              return style
            },
            smallStyle: function smallStyle () {
              var ref = this;
              var thumbTintColor = ref.thumbTintColor;
              var smallStyle = {};

              if (thumbTintColor) {
                smallStyle = {
                  background: thumbTintColor
                };
              }
              return smallStyle
            }
          },
          methods: {
            toggle: function toggle () {
              // TODO: handle the events
              if (!this.isDisabled) {
                this.isChecked = !this.isChecked;
                dispatchNativeEvent(this.$el, 'change', { value: this.isChecked });
              }
            }
          },

          mounted: function mounted () {
            var this$1 = this;

            var el = this.$el;
            if (el && el.nodeType === 1) {
              if (!this._removeClickHandler) {
                var handler = function (evt) {
                  this$1.toggle();
                };
                this._removeClickHandler = el.removeEventListener.bind(el, 'weex$tap', handler);
                el.addEventListener('weex$tap', handler);
              }
            }
          },

          beforeDestroy: function beforeDestroy () {
            var rm = this._removeClickHandler;
            if (rm) {
              rm();
              delete this._removeClickHandler;
            }
          },

          render: function render (createElement) {
            return createElement('span', {
              attrs: { 'weex-type': 'switch' },
              staticClass: this.wrapperClass,
              staticStyle: this.mergeStyle
            }, [createElement('small', {
              staticClass: 'weex-switch-inner',
              staticStyle: this.smallStyle
            })])
          }
        }
      }

      var _switch = {
        init: function init (weex) {
          weex.registerComponent('switch', getSwitch(weex));
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      var DEFAULT_OFFSET_ACCURACY = 10;
      var DEFAULT_LOADMORE_OFFSET = 0;

      function getThrottledScroll (context) {
        var scale = weex.config.env.scale;
        if (!context._throttleScroll) {
          var wrapper = context.$refs.wrapper;
          var inner = context.$refs.inner;
          var preOffset = (context.scrollDirection === 'horizontal'
            ? wrapper.scrollLeft
            : wrapper.scrollTop)
            || 0;
          context._throttleScroll = weex.utils.throttle(function (evt) {
            var offset = context.scrollDirection === 'horizontal'
              ? wrapper.scrollLeft
              : wrapper.scrollTop;
            var indent = parseInt(context.offsetAccuracy) * scale;
            function triggerScroll () {
              var rect = inner.getBoundingClientRect();
              var evtObj = {
                contentSize: { width: rect.width, height: rect.height },
                contentOffset: {
                  x: wrapper.scrollLeft,
                  /**
                   * positive direciton for y-axis is down.
                   * so should use negative operation on scrollTop.
                   *
                   *  (0,0)---------------> x
                   *       |
                   *       |
                   *       |
                   *       |
                   *       v y
                   *
                   */
                  y: -wrapper.scrollTop
                }
              };
              if (context.$el) {
                weex.utils.dispatchNativeEvent(context.$el, 'weex$scroll', evtObj);
              }
            }
            if (Math.abs(offset - preOffset) >= indent) {
              triggerScroll();
              preOffset = offset;
            }
          }, 16, true);
        }
        return context._throttleScroll
      }

      var scrollable$1 = {
        props: {
          loadmoreoffset: {
            type: [String, Number],
            default: DEFAULT_LOADMORE_OFFSET,
            validator: function validator (value) {
              var val = parseInt(value);
              return !isNaN(val) && val >= DEFAULT_LOADMORE_OFFSET
            }
          },

          offsetAccuracy: {
            type: [Number, String],
            default: DEFAULT_OFFSET_ACCURACY,
            validator: function validator (value) {
              var val = parseInt(value);
              return !isNaN(val) && val >= DEFAULT_OFFSET_ACCURACY
            }
          }
        },

        created: function created () {
          // should call resetLoadmore() to enable loadmore event.
          this._loadmoreReset = true;
        },

        mounted: function mounted () {
          this.reloadStickyChildren();
        },

        updated: function updated () {
          this.reloadStickyChildren();
        },

        methods: {
          updateLayout: function updateLayout () {
            var wrapper = this.$refs.wrapper;
            if (wrapper) {
              var rect = wrapper.getBoundingClientRect();
              this._wrapperWidth = rect.width;
              this._wrapperHeight = rect.height;
            }
            var inner = this.$refs.inner;
            var children = inner && inner.children;
            if (inner) {
              var rect$1 = inner.getBoundingClientRect();
              this._innerWidth = rect$1.width;
              this._innerHeight = rect$1.height;
            }
            var loadingEl = this._loading && this._loading.$el;
            var refreshEl = this._refresh && this._refresh.$el;
            if (loadingEl) {
              this._innerHeight -= loadingEl.getBoundingClientRect().height;
            }
            if (refreshEl) {
              this._innerHeight -= refreshEl.getBoundingClientRect().height;
            }
            // inner width is always the viewport width somehow in horizontal
            // scoller, therefore the inner width should be reclaculated.
            if (this.scrollDirection === 'horizontal' && children) {
              this._innerWidth = weex.utils.getRangeWidth(inner);
            }
          },

          resetLoadmore: function resetLoadmore () {
            this._loadmoreReset = true;
          },

          /**
           * process sticky children in scrollable components.
           * current only support list and vertical scroller.
           */
          processSticky: function processSticky () {
            var this$1 = this;

            /**
             * current browser support 'sticky' or '-webkit-sticky', so there's no need
             * to do further more.
             */
            var stickyChildren = this._stickyChildren;
            var len = stickyChildren && stickyChildren.length || 0;
            if (len <= 0) { return }

            var origSticky = weex.utils.supportSticky();
            // current only support list and vertical scroller.
            if (this.scrollDirection === 'horizontal') {
              return
            }

            var container = this.$el;
            if (!container) { return }
            var scrollTop = container.scrollTop;

            var stickyChild;
            for (var i = 0; i < len; i++) {
              stickyChild = stickyChildren[i];
              if (origSticky) {
                this$1.addSticky(stickyChild, origSticky);
              }
              else if (stickyChild._initOffsetTop < scrollTop) {
                this$1.addSticky(stickyChild);
              }
              else {
                this$1.removeSticky(stickyChild);
              }
            }
          },

          addSticky: function addSticky (el, supportSticky) {
            if (supportSticky) {
              el.classList.add('weex-ios-sticky');
            }
            else {
              if (el._sticky === true) { return }
              el._sticky = true;
              if (!el._placeholder) {
                var placeholder = el.cloneNode(true);
                placeholder._origNode = el;
                placeholder.classList.add('weex-sticky-placeholder');
                el._placeholder = placeholder;
              }
              el.parentNode.insertBefore(el._placeholder, el);
              el.style.width = window.getComputedStyle(el).width;
              el.classList.add('weex-sticky');
            }
          },

          removeSticky: function removeSticky (el) {
            if (
              typeof el._sticky === 'undefined'
              || el._sticky === false
            ) {
              return
            }
            el._sticky = false;
            el.parentNode.removeChild(el._placeholder);
            el.classList.remove('weex-sticky');
          },

          reloadStickyChildren: function reloadStickyChildren () {
            var container = this.$el;
            if (!container) { return }
            var stickyChildren = [];
            var children = container.querySelectorAll('[sticky]');
            for (var i = 0, l = children.length; i < l; i++) {
              var child = children[i];
              if (/weex-sticky-placeholder/.test(child.className)) {  // is a placeholder.
                var origNode = child._origNode;
                if (
                  !origNode
                  || !origNode.parentNode
                  || origNode.parentNode !== child.parentNode
                ) {
                  child.parentNode.removeChild(child);
                }
              }
              else {  // is a sticky node.
                stickyChildren.push(child);
                if (!child._sticky) {
                  child._initOffsetTop = child.offsetTop;
                }
              }
            }
            this._stickyChildren = stickyChildren;
          },

          handleScroll: function handleScroll (event) {
            weex.utils.getThrottleLazyload(25, this.$el, 'scroll')();
            getThrottledScroll(this)(event);

            this.processSticky();

            // fire loadmore event.
            var inner = this.$refs.inner;
            if (inner) {
              var innerLength = this.scrollDirection === 'horizontal'
                ? this._innerWidth
                : this._innerHeight;
              if (!this._innerLength) {
                this._innerLength = innerLength;
              }
              if (this._innerLength !== innerLength) {
                this._innerLength = innerLength;
                this._loadmoreReset = true;
              }
              if (this._loadmoreReset && this.reachBottom(this.loadmoreoffset)) {
                this._loadmoreReset = false;
                var el = this.$el;
                if (el) {
                  weex.utils.dispatchNativeEvent(el, 'loadmore');
                }
              }
            }
          },

          reachTop: function reachTop () {
            var wrapper = this.$refs.wrapper;
            return (!!wrapper) && (wrapper.scrollTop <= 0)
          },

          reachBottom: function reachBottom (offset) {
            var wrapper = this.$refs.wrapper;
            var inner = this.$refs.inner;
            offset = parseInt(offset || 0) * weex.config.env.scale;

            if (wrapper && inner) {
              var key = this.scrollDirection === 'horizontal'
                ? 'width'
                : 'height';
              var innerLength = this[("_inner" + (key[0].toUpperCase()) + (key.substr(1)))];
              var wrapperLength = this[("_wrapper" + (key[0].toUpperCase()) + (key.substr(1)))];
              var scrollOffset = this.scrollDirection === 'horizontal'
                ? wrapper.scrollLeft
                : wrapper.scrollTop;
              return scrollOffset >= innerLength - wrapperLength - offset
            }
            return false
          },

          handleTouchStart: function handleTouchStart (event) {
            if (this._loading || this._refresh) {
              var touch = event.changedTouches[0];
              this._touchParams = {
                reachTop: this.reachTop(),
                reachBottom: this.reachBottom(),
                startTouchEvent: touch,
                startX: touch.pageX,
                startY: touch.pageY,
                timeStamp: event.timeStamp
              };
            }
          },

          handleTouchMove: function handleTouchMove (event) {
            if (!this._touchParams || !this._refresh && !this._loading) {
              return
            }
            var inner = this.$refs.inner;
            var ref = this._touchParams;
            var startY = ref.startY;
            var reachTop = ref.reachTop;
            var reachBottom = ref.reachBottom;
            if (inner) {
              var touch = event.changedTouches[0];
              var offsetY = touch.pageY - startY;
              var dir = offsetY > 0 ? 'down' : 'up';
              this._touchParams.offsetY = offsetY;
              if (this._refresh && (dir === 'down') && reachTop) {
                this._refresh.pullingDown(offsetY);
              }
              else if (this._loading && (dir === 'up') && reachBottom) {
                this._loading.pullingUp(-offsetY);
              }
            }
          },

          handleTouchEnd: function handleTouchEnd (event) {
            if (!this._touchParams || !this._refresh && !this._loading) {
              return
            }
            var inner = this.$refs.inner;
            var ref = this._touchParams;
            var startY = ref.startY;
            var reachTop = ref.reachTop;
            var reachBottom = ref.reachBottom;
            if (inner) {
              var touch = event.changedTouches[0];
              var offsetY = touch.pageY - startY;
              var dir = offsetY > 0 ? 'down' : 'up';
              this._touchParams.offsetY = offsetY;
              if (this._refresh && (dir === 'down') && reachTop) {
                this._refresh.pullingEnd();
              }
              else if (this._loading && (dir === 'up') && reachBottom) {
                this._loading.pullingEnd();
              }
            }
            delete this._touchParams;
          }
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      function getList (weex) {
        var extractComponentStyle = weex.extractComponentStyle;

        return {
          name: 'weex-list',
          mixins: [scrollable$1],
          computed: {
            wrapperClass: function wrapperClass () {
              var classArray = ['weex-list', 'weex-list-wrapper', 'weex-ct'];
              this._refresh && classArray.push('with-refresh');
              this._loading && classArray.push('with-loading');
              return classArray.join(' ')
            }
          },

          methods: {
            createChildren: function createChildren (h) {
              var slots = this.$slots.default || [];
              this._cells = slots.filter(function (vnode) {
                if (!vnode.tag && !vnode.componentOptions) { return false }
                return true
              });
              return [
                h('article', {
                  ref: 'inner',
                  staticClass: 'weex-list-inner weex-ct'
                }, this._cells)
              ]
            }
          },

          render: function render (createElement) {
            var this$1 = this;

            this.weexType = 'list';

            this.$nextTick(function () {
              this$1.updateLayout();
            });

            return createElement('main', {
              ref: 'wrapper',
              attrs: { 'weex-type': 'list' },
              staticClass: this.wrapperClass,
              on: {
                scroll: this.handleScroll,
                touchstart: this.handleTouchStart,
                touchmove: this.handleTouchMove,
                touchend: this.handleTouchEnd
              },
              staticStyle: extractComponentStyle(this)
            }, this.createChildren(createElement))
          }
        }
      }

      var list = {
        init: function init (weex) {
          weex.registerComponent('list', getList(weex));
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      function getScroller (weex) {
        var extractComponentStyle = weex.extractComponentStyle;

        return {
          name: 'weex-scroller',
          mixins: [scrollable$1],
          props: {
            scrollDirection: {
              type: [String],
              default: 'vertical',
              validator: function validator (value) {
                return ['horizontal', 'vertical'].indexOf(value) !== -1
              }
            },
            scrollable: {
              type: [Boolean],
              default: true
            }
          },
          computed: {
            wrapperClass: function wrapperClass () {
              var classArray = ['weex-scroller', 'weex-scroller-wrapper', 'weex-ct'];
              if (this.scrollDirection === 'horizontal') {
                classArray.push('weex-scroller-horizontal');
              }
              else {
                classArray.push('weex-scroller-vertical');
              }
              if (!this.scrollable) {
                classArray.push('weex-scroller-disabled');
              }
              return classArray.join(' ')
            }
          },

          methods: {
            createChildren: function createChildren (h) {
              var slots = this.$slots.default || [];
              this._cells = slots.filter(function (vnode) {
                if (!vnode.tag && !vnode.componentOptions) { return false }
                return true
              });
              return [
                h('article', {
                  ref: 'inner',
                  staticClass: 'weex-scroller-inner weex-ct'
                }, this._cells)
              ]
            }
          },

          render: function render (createElement) {
            var this$1 = this;

            this.weexType = 'scroller';

            /* istanbul ignore next */
            // if ("production" === 'development') {
            //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
            // }

            this._cells = this.$slots.default || [];
            this.$nextTick(function () {
              this$1.updateLayout();
            });

            return createElement('main', {
              ref: 'wrapper',
              attrs: { 'weex-type': 'scroller' },
              on: {
                scroll: this.handleScroll,
                touchstart: this.handleTouchStart,
                touchmove: this.handleTouchMove,
                touchend: this.handleTouchEnd
              },
              staticClass: this.wrapperClass,
              staticStyle: extractComponentStyle(this)
            }, this.createChildren(createElement))
          }
        }
      }

      var scroller = {
        init: function init (weex) {
          weex.registerComponent('scroller', getScroller(weex));
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND,  either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      /**
       * @fileoverview waterfall
       * NOTE: only support full screen width waterfall.
       */

      var NORMAL_GAP_SIZE = 32;
      var DEFAULT_COLUMN_COUNT = 1;

      function getWaterfall (weex) {
        var extractComponentStyle = weex.extractComponentStyle;

        return {
          name: 'weex-waterfall',
          mixins: [scrollable$1],
          props: {
            /**
             * specified gap size.
             * value can be number or 'normal'. 'normal' (32px) by default.
             */
            columnGap: {
              type: [String, Number],
              default: 'normal',
              validator: function validator (val) {
                if (!val || val === 'normal') {
                  return true
                }
                val = parseInt(val);
                return !isNaN(val) && val > 0
              }
            },
            /**
             * the maximum column counts.
             * value can be number or 'auto'. 1 by default.
             */
            columnCount: {
              type: [String, Number],
              default: DEFAULT_COLUMN_COUNT,
              validator: function validator (val) {
                val = parseInt(val);
                return !isNaN(val) && val > 0
              }
            },
            /**
             * the mimimum column width.
             * value can be number or 'auto'. 'auto' by default.
             */
            columnWidth: {
              type: [String, Number],
              default: 'auto',
              validator: function validator (val) {
                if (!val || val === 'auto') {
                  return true
                }
                val = parseInt(val);
                return !isNaN(val) && val > 0
              }
            }
          },

          mounted: function mounted () {
            this._nextTick();
          },

          updated: function updated () {
            this.$nextTick(this._nextTick());
          },

          methods: {
            _createChildren: function _createChildren (h, rootStyle) {
              var this$1 = this;

              var slots = (this.$slots.default || []).slice();
              this._headers = [];
              this._footers = [];
              this._others = [];
              var len = slots.length;

              for (var i = 0; i < len; i++) {
                var vnode = slots[i];
                var tag =
                  vnode.componentOptions
                  && vnode.componentOptions.tag
                  || vnode.tag;
                if (tag === 'refresh' || tag === 'loading') {
                  continue
                }
                if (tag === 'section') {  // cell
                  break
                }
                if (tag === 'header') {
                  this$1._headers.push(vnode);
                  slots[i] = null; // should not included in footer.
                }
              }

              for (var i$1 = len - 1; i$1 >= 0; i$1--) {
                var vnode$1 = slots[i$1];
                if (!vnode$1) { continue }  // already taken by header.
                var tag$1 =
                  vnode$1.componentOptions
                  && vnode$1.componentOptions.tag
                  || vnode$1.tag;
                if (tag$1 === 'refresh' || tag$1 === 'loading') {
                  continue
                }
                if (tag$1 === 'section') { // cell
                  break
                }
                if (tag$1 === 'header') {
                  this$1._footers.push(vnode$1);
                }
              }

              this._cells = slots.filter(function (vnode) {
                if (!vnode) { return false }
                var cmpOpts = vnode.componentOptions;
                if (!vnode.tag && !cmpOpts) { return false }
                var tag = cmpOpts && cmpOpts.tag || vnode.tag;
                if (tag === 'refresh' || tag === 'loading') {
                  this$1[("_" + tag)] = vnode;
                  return false
                }
                if (tag !== 'section') {
                  this$1._others.push(vnode);
                  return false
                }
                return true
              });

              this._reCalc(rootStyle);
              this._genColumns(h);
              var children = [];
              this._refresh && children.push(this._refresh);
              children = children.concat(this._headers);
              // .concat(this._others)
              children.push(h('html:div', {
                ref: 'columns',
                staticClass: 'weex-waterfall-inner-columns weex-ct'
              }, this._columns));
              children.push(h('html:div', {
                ref: 'footers',
                staticClass: 'weex-waterfall-footers weex-ct'
              }, this._footers));
              this._loading && children.push(this._loading);
              return [
                h('article', {
                  ref: 'inner',
                  staticClass: 'weex-waterfall-inner weex-ct'
                }, children)
              ]
            },

            _reCalc: function _reCalc (rootStyle) {
              /**
               * NOTE: columnGap and columnWidth can't both be auto.
               * NOTE: the formula:
               *  totalWidth = n * w + (n - 1) * gap
               * 1. if columnCount = n then calc w
               * 2. if columnWidth = w then calc n
               * 3. if columnWidth = w and columnCount = n then calc totalWidth
               *    3.1 if totalWidth < ctWidth then increase columnWidth
               *    3.2 if totalWidth > ctWidth then decrease columnCount
               */
              var width, gap, cnt, ctWidth;
              var scale = weex.config.env.scale;
              var el = this.$el;
              function getCtWidth (width, style) {
                var padding = style.padding
                  ? parseInt(style.padding) * 2
                  : parseInt(style.paddingLeft || 0) + parseInt(style.paddingRight || 0);
                return width - padding
              }
              if (el && el.nodeType === 1) { // already mounted
                var cstyle = window.getComputedStyle(el);
                ctWidth = getCtWidth(el.getBoundingClientRect().width, cstyle);
              }
              else { // not mounted.
                // only support full screen width for waterfall component.
                ctWidth = getCtWidth(document.documentElement.clientWidth, rootStyle);
              }

              gap = this.columnGap;
              if (gap && gap !== 'normal') {
                gap = parseInt(gap);
              }
              else {
                gap = NORMAL_GAP_SIZE;
              }
              gap = gap * scale;

              width = this.columnWidth;
              cnt = this.columnCount;
              if (width && width !== 'auto') {
                width = parseInt(width) * scale;
              }
              if (cnt && cnt !== 'auto') {
                cnt = parseInt(cnt);
              }

              // 0. if !columnCount && !columnWidth
              if (cnt === 'auto' && width === 'auto') {
                
              }
              // 1. if columnCount = n then calc w.
              else if (cnt !== 'auto' && width === 'auto') {
                width = (ctWidth - (cnt - 1) * gap) / cnt;
              }
              // 2. if columnWidth = w then calc n.
              else if (cnt === 'auto' && width !== 'auto') {
                cnt = (ctWidth + gap) / (width + gap);
              }
              // 3. if columnWidth = w and columnCount = n then calc totalWidth
              else if (cnt !== 'auto' && width !== 'auto') {
                var totalWidth;
                var adjustCountAndWidth = function () {
                  totalWidth = cnt * width + (cnt - 1) * gap;
                  if (totalWidth < ctWidth) {
                    width += (ctWidth - totalWidth) / cnt;
                  }
                  else if (totalWidth > ctWidth && cnt > 1) {
                    cnt--;
                    adjustCountAndWidth();
                  }
                  else if (totalWidth > ctWidth) {  // cnt === 1
                    width = ctWidth;
                  }
                };
                adjustCountAndWidth();
              }
              this._columnCount = cnt;
              this._columnWidth = width;
              this._columnGap = gap;
            },

            _genColumns: function _genColumns (createElement) {
              var this$1 = this;

              this._columns = [];
              var cells = this._cells;
              var columnCnt = this._columnCount;
              var len = cells.length;
              var columnCells = this._columnCells = Array(columnCnt).join('.').split('.').map(function () { return [] });
              // spread cells to the columns using simpole polling algorithm.
              for (var i = 0; i < len; i++) {
                (cells[i].data.attrs || (cells[i].data.attrs = {}))['data-cell'] = i;
                columnCells[i % columnCnt].push(cells[i]);
              }
              for (var i$1 = 0; i$1 < columnCnt; i$1++) {
                this$1._columns.push(createElement('html:div', {
                  ref: ("column" + i$1),
                  attrs: {
                    'data-column': i$1
                  },
                  staticClass: 'weex-ct',
                  staticStyle: {
                    width: this$1._columnWidth + 'px',
                    marginLeft: i$1 === 0 ? 0 : this$1._columnGap + 'px'
                  }
                }, columnCells[i$1]));
              }
            },

            _nextTick: function _nextTick () {
              this._reLayoutChildren();
            },

            _reLayoutChildren: function _reLayoutChildren () {
              var this$1 = this;

              /**
               * treat the shortest column bottom as the match standard.
               * whichever cell exceeded it would be rearranged.
               * 1. m = shortest column bottom.
               * 2. get all cell ids who is below m.
               * 3. calculate which cell should be in which column.
               */
              var columnCnt = this._columnCount;
              var columnDoms = [];
              var columnAppendFragments = [];
              var columnBottoms = [];
              var minBottom = Number.MAX_SAFE_INTEGER;
              var minBottomColumnIndex = 0;

              // 1. find the shortest column bottom.
              for (var i = 0; i < columnCnt; i++) {
                var columnDom = this$1._columns[i].elm;
                var lastChild = columnDom.lastElementChild;
                var bottom = lastChild ? lastChild.getBoundingClientRect().bottom : 0;
                columnDoms.push(columnDom);
                columnBottoms[i] = bottom;
                columnAppendFragments.push(document.createDocumentFragment());
                if (bottom < minBottom) {
                  minBottom = bottom;
                  minBottomColumnIndex = i;
                }
              }

              // 2. get all cell ids who is below m.
              var belowCellIds = [];
              var belowCells = {};
              for (var i$1 = 0; i$1 < columnCnt; i$1++) {
                if (i$1 === minBottomColumnIndex) {
                  continue
                }
                var columnDom$1 = columnDoms[i$1];
                var cellsInColumn = columnDom$1.querySelectorAll('section.weex-cell');
                var len = cellsInColumn.length;
                for (var j = len - 1; j >= 0; j--) {
                  var cellDom = cellsInColumn[j];
                  var cellRect = cellDom.getBoundingClientRect();
                  if (cellRect.top > minBottom) {
                    var id = ~~cellDom.getAttribute('data-cell');
                    belowCellIds.push(id);
                    belowCells[id] = { elm: cellDom, height: cellRect.height };
                    columnBottoms[i$1] -= cellRect.height;
                  }
                }
              }

              // 3. calculate which cell should be in which column and rearrange them
              //  in the dom tree.
              belowCellIds.sort(function (a, b) { return a > b });
              var cellIdsLen = belowCellIds.length;
              function addToShortestColumn (belowCell) {
                // find shortest bottom.
                minBottom = Math.min.apply(Math, columnBottoms);
                minBottomColumnIndex = columnBottoms.indexOf(minBottom);
                var cellElm = belowCell.elm;
                var cellHeight = belowCell.height;
                columnAppendFragments[minBottomColumnIndex].appendChild(cellElm);
                columnBottoms[minBottomColumnIndex] += cellHeight;
              }
              for (var i$2 = 0; i$2 < cellIdsLen; i$2++) {
                addToShortestColumn(belowCells[belowCellIds[i$2]]);
              }
              for (var i$3 = 0; i$3 < columnCnt; i$3++) {
                columnDoms[i$3].appendChild(columnAppendFragments[i$3]);
              }
            }
          },

          render: function render (createElement) {
            var this$1 = this;

            this.weexType = 'waterfall';
            this._cells = this.$slots.default || [];
            this.$nextTick(function () {
              this$1.updateLayout();
            });
            var mergedStyle = extractComponentStyle(this);
            return createElement('main', {
              ref: 'wrapper',
              attrs: { 'weex-type': 'waterfall' },
              on: {
                scroll: this.handleScroll,
                touchstart: this.handleTouchStart,
                touchmove: this.handleTouchMove,
                touchend: this.handleTouchEnd
              },
              staticClass: 'weex-waterfall weex-waterfall-wrapper weex-ct',
              staticStyle: mergedStyle
            }, this._createChildren(createElement, mergedStyle))
          }
        }
      }

      var waterfall = {
        init: function init (weex) {
          weex.registerComponent('waterfall', getWaterfall(weex));
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      function getHeader (weex) {
        var extractComponentStyle = weex.extractComponentStyle;

        return {
          render: function render (createElement) {
            var attrs = this.$vnode.data.attrs;
            return createElement('html:header', {
              attrs: {
                'weex-type': 'header',
                sticky: (
                  this.$parent.weexType === 'waterfall'
                  && typeof attrs.sticky === 'undefined'
                ) ? undefined : ''
              },
              ref: 'header',
              staticClass: 'weex-header weex-ct',
              staticStyle: extractComponentStyle(this)
            }, this.$slots.default)
          }
        }
      }

      var header = {
        init: function init (weex) {
          weex.registerComponent('header', getHeader(weex));
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      function getLoading () {
        var extractComponentStyle = weex.extractComponentStyle;
        var ref = weex.utils;
        var dispatchNativeEvent = ref.dispatchNativeEvent;

        return {
          name: 'weex-loading',
          props: {
            display: {
              type: String,
              default: 'show',
              validator: function validator (value) {
                return ['show', 'hide'].indexOf(value) !== -1
              }
            }
          },
          data: function data () {
            return {
              height: -1,
              viewHeight: 0
            }
          },
          mounted: function mounted () {
            this.viewHeight = this.$el.offsetHeight;
            if (this.display === 'hide') {
              this.height = 0;
            }
            else {
              this.height = this.viewHeight;
            }
          },
          watch: {
            height: function height (val) {
              var offset = val + "px";
              this.$el.style.height = offset;
              this.$el.style.bottom = offset;
            },
            display: function display (val) {
              if (val === 'hide') {
                this.height = 0;
              }
              else {
                this.height = this.viewHeight;
              }
            }
          },
          methods: {
            pulling: function pulling (offsetY) {
              if ( offsetY === void 0 ) offsetY = 0;

              this.height = offsetY;
            },
            pullingUp: function pullingUp (offsetY) {
              this.$el.style.transition = "height 0s";
              this.pulling(offsetY);
            },
            pullingEnd: function pullingEnd () {
              this.$el && (this.$el.style.transition = "height .2s");
              if (this.height >= this.viewHeight) {
                this.pulling(this.viewHeight);
                if (this.$el) {
                  dispatchNativeEvent(this.$el, 'loading');
                }
              }
              else {
                this.pulling(0);
              }
            },
            getChildren: function getChildren () {
              var children = this.$slots.default || [];
              if (this.display === 'show') {
                return children
              }
              return children.filter(function (vnode) {
                return !(vnode.componentOptions
                  && vnode.componentOptions.tag === 'loading-indicator')
              })
            }
          },
          render: function render (createElement) {
            this.$parent._loading = this;
            return createElement('aside', {
              ref: 'loading',
              attrs: { 'weex-type': 'loading' },
              staticClass: 'weex-loading weex-ct',
              staticStyle: extractComponentStyle(this)
            }, this.getChildren())
          }
        }
      }

      var loading = {
        init: function init (weex) {
          weex.registerComponent('loading', getLoading(weex));
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      function getRefresh (weex) {
        var extractComponentStyle = weex.extractComponentStyle;
        var ref = weex.utils;
        var dispatchNativeEvent = ref.dispatchNativeEvent;

        return {
          name: 'weex-refresh',
          props: {
            display: {
              type: String,
              default: 'show',
              validator: function validator (value) {
                return ['show', 'hide'].indexOf(value) !== -1
              }
            }
          },
          data: function data () {
            return {
              lastDy: 0,
              viewHeight: 0,
              height: -1
            }
          },
          mounted: function mounted () {
            this.viewHeight = this.$el.offsetHeight;
            if (this.display === 'hide') {
              this.height = 0;
            }
            else {
              this.height = this.viewHeight;
            }
          },
          watch: {
            height: function height (val) {
              this.$el.style.height = val + "px";
            },
            display: function display (val) {
              if (val === 'hide') {
                this.height = 0;
              }
              else {
                this.height = this.viewHeight;
              }
            }
          },
          methods: {
            pulling: function pulling (offsetY) {
              if ( offsetY === void 0 ) offsetY = 0;

              this.height = offsetY;
              if (this.$el) {
                dispatchNativeEvent(this.$el, 'pullingdown', {
                  dy: offsetY - this.lastDy,
                  pullingDistance: offsetY,
                  viewHeight: this.viewHeight
                });
              }
              this.lastDy = offsetY;
            },
            pullingDown: function pullingDown (offsetY) {
              this.$el.style.transition = "height 0s";
              this.pulling(offsetY);
            },
            pullingEnd: function pullingEnd () {
              this.$el && (this.$el.style.transition = "height .2s");
              if (this.height >= this.viewHeight) {
                this.pulling(this.viewHeight);
                if (this.$el) {
                  dispatchNativeEvent(this.$el, 'refresh');
                }
              }
              else {
                this.pulling(0);
              }
            },
            getChildren: function getChildren () {
              var children = this.$slots.default || [];
              if (this.display === 'show') {
                return children
              }
              return children.filter(function (vnode) {
                return !(vnode.componentOptions
                  && vnode.componentOptions.tag === 'loading-indicator')
              })
            }
          },
          render: function render (createElement) {
            this.$parent._refresh = this;
            return createElement('aside', {
              ref: 'refresh',
              attrs: { 'weex-type': 'refresh' },
              staticClass: 'weex-refresh weex-ct',
              staticStyle: extractComponentStyle(this)
            }, this.getChildren())
          }
        }
      }

      var refresh = {
        init: function init (weex) {
          weex.registerComponent('refresh', getRefresh(weex));
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var extractComponentStyle$1;
      var getRgb$1;
      var loopArray$1;
      var getStyleSheetById$1;

      var _css = "\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  width: 1rem !important;\n  height: 1rem !important;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 0.5em;\n  height: 0.5em;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n  -moz-animation: weex-spinner 1.1s infinite ease;\n  animation: weex-spinner 1.1s infinite ease;\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n";

      function getStyleSheet (spinnerVm) {
        if (spinnerVm._styleSheet) {
          return
        }
        spinnerVm._styleSheet = getStyleSheetById$1('weex-cmp-loading-indicator');
      }

      function setKeyframeColor (spinnerVm, val) {
        getStyleSheet(spinnerVm);
        var keyframeRules = computeKeyFrameRules(val);
        var rules = spinnerVm._styleSheet.rules || spinnerVm._styleSheet.cssRules;
        for (var i = 0, l = rules.length; i < l; i++) {
          var item = rules.item(i);
          if ((item.type === CSSRule.KEYFRAMES_RULE
                || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE)
              && item.name === 'weex-spinner') {
            var cssRules = item.cssRules;
            for (var j = 0, m = cssRules.length; j < m; j++) {
              var keyframe = cssRules[j];
              if (keyframe.type === CSSRule.KEYFRAME_RULE
                || keyframe.type === CSSRule.WEBKIT_KEYFRAME_RULE) {
                keyframe.style.boxShadow = keyframeRules[j];
              }
            }
          }
        }
      }

      function computeKeyFrameRules (rgb) {
        if (!rgb) {
          return
        }
        var scaleArr = [
          '0em -1.3em 0em 0em',
          '0.9em -0.9em 0 0em',
          '1.25em 0em 0 0em',
          '0.875em 0.875em 0 0em',
          '0em 1.25em 0 0em',
          '-0.9em 0.9em 0 0em',
          '-1.3em 0em 0 0em',
          '-0.9em -0.9em 0 0em'];
        var colorArr = [
          '1',
          '0.2',
          '0.2',
          '0.2',
          '0.2',
          '0.2',
          '0.5',
          '0.7']
          .map(function (e) {
            return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + e + ')'
          });
        var rules = [];
        var loop = function ( i ) {
          var tmpColorArr = loopArray$1(colorArr, i, 'r');
          rules.push(scaleArr.map(function (scaleStr, i) {
            return scaleStr + ' ' + tmpColorArr[i]
          }).join(', '));
        };

        for (var i = 0; i < scaleArr.length; i++) loop( i );
        return rules
      }

      function processStyle$1 (vm) {
        var style = extractComponentStyle$1(vm);
        var color = style.color;
        var rgb = color && getRgb$1(color);
        if (rgb) {
          setKeyframeColor(vm, rgb);
        }
        return style
      }

      var loadingIndicator = {
        name: 'weex-loading-indicator',
        render: function render (createElement) {
          this.weexType = 'loading-indicator';
          return createElement('mark', {
            attrs: { 'weex-type': 'loading-indicator' },
            staticClass: 'weex-loading-indicator weex-ct',
            staticStyle: processStyle$1(this)
          })
        },
        _css: _css
      };

      var loadingIndicator$1 = {
        init: function init (weex) {
          extractComponentStyle$1 = weex.extractComponentStyle;
          getRgb$1 = weex.utils.getRgb;
          loopArray$1 = weex.utils.loopArray;
          getStyleSheetById$1 = weex.utils.getStyleSheetById;
          weex.registerComponent('loading-indicator', loadingIndicator);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      function getList$1 (weex) {
        var extractComponentStyle = weex.extractComponentStyle;

        return {
          name: 'weex-recycle-list',
          mixins: [scrollable$1],
          props: {
            scrollDirection: {
              type: [String],
              default: 'vertical',
              validator: function validator (value) {
                return ['horizontal', 'vertical'].indexOf(value) !== -1
              }
            },
            _items: Array,
            _switch: String
          },
          computed: {
            wrapperClass: function wrapperClass () {
              var classArray = ['weex-recycle', 'weex-recycle-wrapper', 'weex-ct'];
              this._refresh && classArray.push('with-refresh');
              this._loading && classArray.push('with-loading');
              if (this.scrollDirection === 'horizontal') {
                classArray.push('weex-recycle-horizontal');
              }
              else {
                classArray.push('weex-recycle-vertical');
              }
              return classArray.join(' ')
            }
          },

          methods: {
            createChildren: function createChildren (h) {
              var _vm = this;
              return [
                h('article', {
                  ref: 'inner',
                  staticClass: 'weex-recycle-inner weex-ct'
                }, [
                  _vm._l(_vm._items, function (item, index) {
                    return [
                      _vm._t(_vm.sloteName(item), null, {
                        item: item,
                        index: index
                      })
                    ]
                  })
                ])
              ]
            },
            sloteName: function sloteName (item) {
              if (this._switch && item[this._switch]) {
                return item[this._switch]
              }
              else {
                return 'default'
              }
            }
          },

          render: function render (createElement) {
            var this$1 = this;

            this.weexType = 'list';

            this.$nextTick(function () {
              this$1.updateLayout();
            });

            return createElement('main', {
              ref: 'wrapper',
              attrs: { 'weex-type': 'recycle-list' },
              staticClass: this.wrapperClass,
              on: {
                scroll: this.handleScroll,
                touchstart: this.handleTouchStart,
                touchmove: this.handleTouchMove,
                touchend: this.handleTouchEnd
              },
              staticStyle: extractComponentStyle(this)
            }, this.createChildren(createElement))
          }
        }
      }

      var recycleList = {
        init: function init (weex) {
          weex.registerComponent('recycle-list', getList$1(weex));
        }
      };

      __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\nbody > .weex-list,\nbody > .weex-recycle,\nbody > .weex-scroller,\nbody > .weex-waterfall {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-recycle-wrapper,\n.weex-scroller-wrapper,\n.weex-waterfall-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-list-wrapper,\n.weex-waterfall-wrapper {\n  overflow-y: scroll !important;\n  overflow-x: hidden !important;\n}\n\n.weex-list-inner,\n.weex-recycle-inner,\n.weex-scroller-inner,\n.weex-waterfall-inner {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-waterfall-inner-columns {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-scroller-wrapper.weex-scroller-vertical,\n.weex-recycle-wrapper.weex-recycle-vertical  {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal,\n.weex-recycle-wrapper.weex-recycle-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.weex-scroller-wrapper.weex-scroller-disabled {\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner,\n.weex-recycle-horizontal .weex-recycle-inner {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.weex-cell {\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n",undefined);

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      // import cell from './cell'
      var modules = [
        list,
        scroller,
        waterfall,
        // cell,
        header,
        loading,
        refresh,
        loadingIndicator$1,
        recycleList
      ];

      var scrollable = {
        init: function init (weex) {
          modules.forEach(function (mod) {
            weex.install(mod);
          });
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var TRANSITION_TIME = 400;
      var NEIGHBOR_SCALE_TIME = 100;
      var MAIN_SLIDE_OPACITY = 1;
      var THROTTLE_SCROLL_TIME = 25;
      var INTERVAL_MINIMUM = 200;

      var slideMixin = {
        created: function created () {
          this._clones = [];
          this.innerOffset = 0;
          this._indicator = null;
        },

        beforeUpdate: function beforeUpdate () {
          this._getWrapperSize();
        },

        updated: function updated () {
          var this$1 = this;

          var children = this.$children;
          var len = children && children.length;
          if (children && len > 0) {
            for (var i = 0; i < len; i++) {
              var vm = children[i];
              if (vm.$options._componentTag === 'indicator'
                || vm.$vnode.data.ref === 'indicator') {
                vm._watcher.get();
                break
              }
            }
          }

          var frameCount = this.frameCount;
          if (!this._preFrameCount) {
            this._preFrameCount = frameCount;
          }
          else if (this._preFrameCount !== frameCount) {
            this._resetNodes();
            this._preFrameCount = frameCount;
            var resetBlankFrame = function () {
              if (this$1.currentIndex >= frameCount) {
                // reset blank page.
                this$1._stopAutoPlay();
                this$1._slideTo(0);
              }
            };
            if (this._sliding) {
              // If it's sliding, then the currentIndex is the last frame. The actual currentIndex
              // should be the next index.
              // That is to say, this updating happens Between _parepareNodes and _rearrangeNodes,
              // and the sliding is not yet finished, and the state is not updated yet.
              setTimeout(resetBlankFrame, TRANSITION_TIME + NEIGHBOR_SCALE_TIME);
            }
            else {
              resetBlankFrame();
            }
          }
          weex.utils.fireLazyload(this.$el, true);
          if (this._preIndex !== this.currentIndex) {
            this._slideTo(this.currentIndex);
          }
        },

        mounted: function mounted () {
          this._getWrapperSize();
          this._slideTo(this.currentIndex);
          weex.utils.fireLazyload(this.$el, true);
        },

        methods: {
          _getWrapperSize: function _getWrapperSize () {
            var wrapper = this.$refs.wrapper;
            if (wrapper) {
              var rect = wrapper.getBoundingClientRect();
              this._wrapperWidth = rect.width;
              this._wrapperHeight = rect.height;
            }
          },

          _formatChildren: function _formatChildren (createElement) {
            var this$1 = this;

            var children = this.$slots.default || [];
            var indicatorVnode;
            var cells = children.filter(function (vnode) {
              if (!vnode.tag) { return false }
              if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
                indicatorVnode = vnode;
                return false
              }
              return true
            }).map(function (vnode) {
              return createElement('li', {
                ref: 'cells',
                staticClass: ("weex-slider-cell weex-ct" + (this$1.isNeighbor ? ' neighbor-cell' : ''))
              }, [vnode])
            });
            if (indicatorVnode) {
              indicatorVnode.data.attrs = indicatorVnode.data.attrs || {};
              indicatorVnode.data.attrs.count = cells.length;
              indicatorVnode.data.attrs.active = this.currentIndex;
              this._indicator = indicatorVnode;
            }
            return cells
          },

          _renderSlides: function _renderSlides (createElement) {
            this._cells = this._formatChildren(createElement);
            this.frameCount = this._cells.length;
            return createElement(
              'nav',
              {
                ref: 'wrapper',
                attrs: { 'weex-type': this.isNeighbor ? 'slider-neighbor' : 'slider' },
                on: {
                  touchstart: this._handleTouchStart,
                  touchmove: weex.utils.throttle(weex.utils.bind(this._handleTouchMove, this), 25),
                  touchend: this._handleTouchEnd,
                  touchcancel: this._handleTouchCancel
                },
                staticClass: 'weex-slider weex-slider-wrapper weex-ct',
                staticStyle: weex.extractComponentStyle(this)
              },
              [
                createElement('ul', {
                  ref: 'inner',
                  staticClass: 'weex-slider-inner weex-ct'
                }, this._cells),
                this._indicator
              ]
            )
          },

          // get standard index
          _normalizeIndex: function _normalizeIndex (index) {
            var newIndex = (index + this.frameCount) % this.frameCount;
            return Math.min(Math.max(newIndex, 0), this.frameCount - 1)
          },

          _startAutoPlay: function _startAutoPlay () {
            if (!this.autoPlay || this.autoPlay === 'false') {
              return
            }
            if (this._autoPlayTimer) {
              clearTimeout(this._autoPlayTimer);
              this._autoPlayTimer = null;
            }
            var interval = parseInt(this.interval - TRANSITION_TIME - NEIGHBOR_SCALE_TIME);
            interval = interval > INTERVAL_MINIMUM ? interval : INTERVAL_MINIMUM;
            this._autoPlayTimer = setTimeout(weex.utils.bind(this._next, this), interval);
          },

          _stopAutoPlay: function _stopAutoPlay () {
            if (this._autoPlayTimer) {
              clearTimeout(this._autoPlayTimer);
              this._autoPlayTimer = null;
            }
          },

          _slideTo: function _slideTo (index, isTouchScroll) {
            var this$1 = this;

            if (this.frameCount <= 0) {
              return
            }
            if (!this.infinite || this.infinite === 'false') {
              if (index === -1 || index > (this.frameCount - 1)) {
                this._slideTo(this.currentIndex);
                return
              }
            }
            if (!this._preIndex && this._preIndex !== 0) {
              if (this._showNodes && this._showNodes[0]) {
                this._preIndex = this._showNodes[0].index;
              }
              else {
                this._preIndex = this.currentIndex;
              }
            }

            if (this._sliding) {
              return
            }
            this._sliding = true;

            var newIndex = this._normalizeIndex(index);
            var inner = this.$refs.inner;
            var step = this._step = this.frameCount <= 1 ? 0 : this._preIndex - index;

            if (inner) {
              this._prepareNodes();
              var translate = weex.utils.getTransformObj(inner).translate;
              var match = translate && translate.match(/translate[^(]+\(([+-\d.]+)/);
              var innerX = match && match[1] || 0;
              var dist = innerX - this.innerOffset;
              this.innerOffset += step * this._wrapperWidth;
              // transform the whole slides group.
              inner.style.webkitTransition = "-webkit-transform " + (TRANSITION_TIME / 1000) + "s ease-in-out";
              inner.style.mozTransition = "transform " + (TRANSITION_TIME / 1000) + "s ease-in-out";
              inner.style.transition = "transform " + (TRANSITION_TIME / 1000) + "s ease-in-out";
              inner.style.webkitTransform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
              inner.style.mozTransform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
              inner.style.transform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";

              // emit scroll events.
              if (!isTouchScroll) {
                this._emitScrollEvent('scrollstart');
              }
              setTimeout(function () {
                this$1._throttleEmitScroll(dist, function () {
                  this$1._emitScrollEvent('scrollend');
                });
              }, THROTTLE_SCROLL_TIME);

              this._loopShowNodes(step);

              setTimeout(function () {
                if (this$1.isNeighbor) {
                  this$1._setNeighbors();
                }

                setTimeout(function () {
                  inner.style.webkitTransition = '';
                  inner.style.mozTransition = '';
                  inner.style.transition = '';
                  for (var i = this$1._showStartIdx; i <= this$1._showEndIdx; i++) {
                    var node = this$1._showNodes[i];
                    if (!node) { continue }
                    var elm = node.firstElementChild;
                    elm.style.webkitTransition = '';
                    elm.style.mozTransition = '';
                    elm.style.transition = '';
                  }
                  // clean cloned nodes and rearrange slide cells.
                  this$1._rearrangeNodes(newIndex);
                }, NEIGHBOR_SCALE_TIME);
              }, TRANSITION_TIME);
            }

            if (newIndex !== this._preIndex) {
              weex.utils.dispatchNativeEvent(this.$el, 'change', {
                index: newIndex
              });
            }
          },

          _clearNodesOffset: function _clearNodesOffset () {
            var this$1 = this;

            var end = this._showEndIdx;
            for (var i = this._showStartIdx; i <= end; i++) {
              var node = this$1._showNodes[i];
              node = node && node.firstElementChild;
              if (!node) { continue }
              weex.utils.addTransform(this$1._showNodes[i].firstElementChild, {
                translate: 'translate3d(0px, 0px, 0px)'
              });
            }
          },

          _loopShowNodes: function _loopShowNodes (step) {
            var this$1 = this;

            if (!step || this.frameCount <= 1) {
              return
            }
            var sign = step > 0 ? 1 : -1;
            var i = step <= 0 ? this._showStartIdx : this._showEndIdx;
            var end = step <= 0 ? this._showEndIdx : this._showStartIdx;
            for (; i !== end - sign; i -= sign) {
              var nextIdx = i + step;
              this$1._showNodes[nextIdx] = this$1._showNodes[i];
              this$1._showNodes[nextIdx]._showIndex = nextIdx;
              delete this$1._showNodes[i];
            }
            this._showStartIdx += step;
            this._showEndIdx += step;
          },

          _prepareNodes: function _prepareNodes () {
            // test if the next slide towards the direction exists.
            // e.g. currentIndex 0 -> 1: should prepare 4 slides: -1, 0, 1, 2
            // if not, translate a node to here, or just clone it.
            var step = this._step;
            if (!this._inited) {
              this._initNodes();
              this._inited = true;
              this._showNodes = {};
            }
            if (this.frameCount <= 1) {
              this._showStartIdx = this._showEndIdx = 0;
              var node = this._cells[0].elm;
              node.style.opacity = 1;
              node.style.zIndex = 99;
              node.index = 0;
              this._showNodes[0] = node;
              node._inShow = true;
              node._showIndex = 0;
              return
            }

            var showCount = this._showCount = Math.abs(step) + 3;
            this._showStartIdx = step <= 0 ? -1 : 2 - showCount;
            this._showEndIdx = step <= 0 ? showCount - 2 : 1;
            this._clearNodesOffset();
            this._positionNodes(this._showStartIdx, this._showEndIdx, step);
          },

          _clearClones: function _clearClones () {
            var this$1 = this;

            // clear all clones.
            Object.keys(this._clones).forEach(function (key) {
              this$1._clones[key].forEach(function (cloneNode) {
                cloneNode.parentNode.removeChild(cloneNode);
              });
              this$1._clones[key] = [];
            });
          },

          // reset nodes' index and _inShow state. But leave the styles
          // as they are to prevent dom rerendering.
          _resetNodes: function _resetNodes () {
            this._clearClones();
            // reset status.
            this._cells.forEach(function (cell, idx) {
              var elm = cell.elm;
              elm.index = idx;
              elm._inShow = false;
            });
          },

          _initNodes: function _initNodes () {
            this._cells.forEach(function (cell, idx) {
              var node = cell.elm;
              node.index = idx;
              node._inShow = false;
              node.style.zIndex = 0;
              node.style.opacity = 0;
            });
          },

          _positionNodes: function _positionNodes (begin, end, step, anim) {
            var this$1 = this;

            var cells = this._cells;
            var start = step <= 0 ? begin : end;
            var stop = step <= 0 ? end : begin;
            var sign = step <= 0 ? -1 : 1;
            var cellIndex = this._preIndex + sign;
            for (var i = start; i !== stop - sign; i = i - sign) {
              var node = cells[this$1._normalizeIndex(cellIndex)].elm;
              cellIndex = cellIndex - sign;
              this$1._positionNode(node, i);
            }
          },

          /**
           * index: position index in the showing cells' view.
           */
          _positionNode: function _positionNode (node, index) {
            var holder = this._showNodes[index];
            if (node._inShow && (holder !== node || holder._showIndex !== index)) {
              if (holder && holder._isClone) { this._removeClone(holder); }
              node = this._getClone(node.index);
            }
            else if (node._inShow) {  // holder === node
              return
            }

            node._inShow = true;
            var translateX = index * this._wrapperWidth - this.innerOffset;
            weex.utils.addTransform(node, {
              translate: ("translate3d(" + translateX + "px, 0px, 0px)")
            });
            node.style.zIndex = 99 - Math.abs(index);
            node.style.opacity = 1;
            node._showIndex = index;
            this._showNodes[index] = node;
          },

          _getClone: function _getClone (index) {
            var arr = this._clones[index] || (this._clones[index] = []);
            var origNode = this._cells[index].elm;
            var clone = origNode.cloneNode(true);
            clone._isClone = true;
            clone._inShow = true;
            // clone._inShow = origNode._inShow
            clone.index = origNode.index;
            clone.style.opacity = 0;
            clone.style.zIndex = 0;
            this.$refs.inner.appendChild(clone);
            arr.push(clone);
            return clone
            // try {
            //   let arr = this._clones[index]
            //   if (!arr) {
            //     this._clones[index] = arr = []
            //   }
            //   if (arr.length <= 0) {

            //   }
            //   return arr.pop()
            // } catch (err) {
            //   console.error('this._cells -> ', this._cells)
            // }
          },

          _removeClone: function _removeClone (node) {
            var cloneArr = this._clones[node.index];
            var i;
            if (cloneArr && (i = cloneArr.indexOf(node)) > -1) {
              cloneArr.splice(i, 1);
            }
            try {
              node.parentNode.removeChild(node);
            }
            catch (err) {
              // maybe cells has been updated and this clone node is already removed from the dom tree
              // throught _clearClones method.
            }
            // const idx = node.index
            // this._hideNode(node)
            // const arr = this._clones[idx]
            // arr.push(node)
          },

          _hideNode: function _hideNode (node) {
            node._inShow = false;
            node.style.opacity = 0;
            node.style.zIndex = 0;
          },

          /**
           * hide nodes from begin to end in showArray.
           * if it is clone node, just move the clone node to the buffer.
           */
          _clearNodes: function _clearNodes (begin, end) {
            var this$1 = this;

            for (var i = begin; i <= end; i++) {
              var node = this$1._showNodes[i];
              if (!node) { return }
              if (node._isClone) {
                this$1._removeClone(node);
              }
              else if (!node._inShow) {
                this$1._hideNode(node);
              }
              delete this$1._showNodes[i];
            }
          },

          /**
           * copy node style props (opacity and zIndex) and transform status from
           * one element to another.
           */
          _copyStyle: function _copyStyle (from, to, styles, transformExtra) {
            if ( styles === void 0 ) styles = ['opacity', 'zIndex'];
            if ( transformExtra === void 0 ) transformExtra = {};

            weex.utils.extendKeys(to.style, from.style, styles);
            var transObj = weex.utils.getTransformObj(from);
            for (var k in transformExtra) {
              transObj[k] = transformExtra[k];
            }
            weex.utils.addTransform(to, transObj);
            var fromInner = from.firstElementChild;
            var toInner = to.firstElementChild;
            toInner.style.opacity = fromInner.style.opacity;
            weex.utils.copyTransform(fromInner, toInner);
          },

          /**
           * replace a clone node with the original node if it's not in use.
           */
          _replaceClone: function _replaceClone (clone, pos) {
            var this$1 = this;

            var origCell = this._cells[clone.index];
            if (!origCell) {
              return
            }
            var origNode = origCell.elm;
            if (origNode._inShow) {
              return
            }
            var origShowIndex = origNode._showIndex;
            var styleProps = ['opacity', 'zIndex'];
            var cl;
            if (Math.abs(origShowIndex) <= 1) {
              // leave a clone to replace the origNode in the show zone(-1 ~ 1).
              cl = this._getClone(origNode.index);
              this._copyStyle(origNode, cl);
              this._showNodes[origShowIndex] = cl;
            }
            origNode._inShow = true;
            var transObj = weex.utils.getTransformObj(clone);
            transObj.translate = transObj.translate.replace(/[+-\d.]+[pw]x/, function ($0) {
              return pos * this$1._wrapperWidth - this$1.innerOffset + 'px'
            });
            this._copyStyle(clone, origNode, styleProps, transObj);
            this._removeClone(clone);
            if (!cl) {
              delete this._showNodes[origShowIndex];
            }
            this._showNodes[pos] = origNode;
            origNode._showIndex = pos;
          },

          _rearrangeNodes: function _rearrangeNodes (newIndex) {
            var this$1 = this;

            if (this.frameCount <= 1) {
              this._sliding = false;
              this.currentIndex = 0;
              return
            }

            // clear autoPlay timer (and restart after updated hook).
            this._startAutoPlay();

            /**
             * clean nodes. replace current node with non-cloned node.
             * set current index to the new index.
             */
            var shows = this._showNodes;
            for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
              shows[i]._inShow = false;
            }
            for (var i$1 = -1; i$1 <= 1; i$1++) {
              var node = shows[i$1];
              if (!node._isClone) {
                node._inShow = true;
              }
              else {
                this$1._replaceClone(node, i$1);
              }
            }

            this._clearNodes(this._showStartIdx, -2);
            this._showStartIdx = -1;
            this._clearNodes(2, this._showEndIdx);
            this._showEndIdx = 1;
            this._sliding = false;

            // set current index to the new index.
            this.currentIndex = newIndex;
            this._preIndex = newIndex;
          },

          /**
           * according to the attrs: neighborScale, neighborAlpha, neighborSpace.
           * 1. apply the main cell transform effects.
           * 2. set the previous cell and the next cell's positon, scale and alpha.
           * 3. set other cells' scale and alpha.
           */
          _setNeighbors: function _setNeighbors () {
            var this$1 = this;

            for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
              var elm = this$1._showNodes[i].firstElementChild;
              elm.style.webkitTransition = "all " + (NEIGHBOR_SCALE_TIME / 1000) + "s ease";
              elm.style.mozTransition = "all " + (NEIGHBOR_SCALE_TIME / 1000) + "s ease";
              elm.style.transition = "all " + (NEIGHBOR_SCALE_TIME / 1000) + "s ease";
              var transObj = {
                scale: ("scale(" + (i === 0 ? this$1.currentItemScale : this$1.neighborScale) + ")")
              };
              var translateX = (void 0);
              if (!this$1._neighborWidth) {
                this$1._neighborWidth = parseFloat(elm.style.width) || elm.getBoundingClientRect().width;
              }
              // calculate position offsets according to neighbor scales.
              if (Math.abs(i) === 1) {
                var dist = ((this$1._wrapperWidth - this$1._neighborWidth * this$1.neighborScale) / 2
                  + this$1.neighborSpace * weex.config.env.scale) / this$1.neighborScale;
                translateX = -i * dist;
              }
              else {
                // clear position offsets.
                translateX = 0;
              }
              transObj.translate = "translate3d(" + translateX + "px, 0px, 0px)";
              weex.utils.addTransform(elm, transObj);
              elm.style.opacity = i === 0 ? MAIN_SLIDE_OPACITY : this$1.neighborAlpha;
            }
          },

          _next: function _next () {
            var next = this.currentIndex + 1;
            if (this.frameCount <= 1) {
              next--;
            }
            this._slideTo(next);
          },

          _prev: function _prev () {
            var prev = this.currentIndex - 1;
            if (this.frameCount <= 1) {
              prev++;
            }
            this._slideTo(prev);
          },

          _handleTouchStart: function _handleTouchStart (event) {
            var touch = event.changedTouches[0];
            this._stopAutoPlay();
            var inner = this.$refs.inner;
            this._touchParams = {
              originalTransform: inner.style.webkitTransform
                || inner.style.mozTransform
                || inner.style.transform,
              startTouchEvent: touch,
              startX: touch.pageX,
              startY: touch.pageY,
              timeStamp: event.timeStamp
            };
          },

          _handleTouchMove: function _handleTouchMove (event) {
            var tp = this._touchParams;
            if (!tp) { return }
            if (this._sliding) {
              return
            }
            var ref = this._touchParams;
            var startX = ref.startX;
            var startY = ref.startY;
            var touch = event.changedTouches[0];
            var offsetX = touch.pageX - startX;
            var offsetY = touch.pageY - startY;
            tp.offsetX = offsetX;
            tp.offsetY = offsetY;
            var isV = tp.isVertical;
            if (typeof isV === 'undefined') {
              isV = tp.isVertical = Math.abs(offsetX) < Math.abs(offsetY);
              if (!isV) {
                this._emitScrollEvent('scrollstart');
              }
            }
            // vertical scroll. just ignore it.
            if (isV) {
              return
            }
            // horizontal scroll. trigger scroll event.
            event.preventDefault();
            var inner = this.$refs.inner;
            if (inner && offsetX) {
              if (!this._nodesOffsetCleared) {
                this._nodesOffsetCleared = true;
                this._clearNodesOffset();
              }
              this._emitScrollEvent('weex$scroll', {
                offsetXRatio: offsetX / this._wrapperWidth
              });
              inner.style.webkitTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
              inner.style.mozTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
              inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
            }
          },

          _handleTouchEnd: function _handleTouchEnd (event) {
            this._startAutoPlay();
            var tp = this._touchParams;
            if (!tp) { return }
            var isV = tp.isVertical;
            if (typeof isV === 'undefined') {
              return
            }
            var inner = this.$refs.inner;
            var offsetX = tp.offsetX;
            if (inner) {
              this._nodesOffsetCleared = false;
              // TODO: test the velocity if it's less than 0.2.
              var reset = Math.abs(offsetX / this._wrapperWidth) < 0.2;
              var direction = offsetX > 0 ? 1 : -1;
              var newIndex = reset ? this.currentIndex : (this.currentIndex - direction);
              this._slideTo(newIndex, true);
            }
            delete this._touchParams;
          },

          _handleTouchCancel: function _handleTouchCancel (event) {
            return this._handleTouchEnd(event)
          },

          _emitScrollEvent: function _emitScrollEvent (type, data) {
            if ( data === void 0 ) data = {};

            var el = this.$el;
            if (el) {
              weex.utils.dispatchNativeEvent(el, type, data);
            }
          },

          _throttleEmitScroll: function _throttleEmitScroll (offset, callback) {
            var this$1 = this;

            var i = 0;
            var throttleTime = THROTTLE_SCROLL_TIME;
            var cnt = parseInt(TRANSITION_TIME / throttleTime) - 1;
            var sign = offset > 0 ? 1 : -1;
            var r = Math.abs(offset / this._wrapperWidth);
            var throttledScroll = function () {
              if (++i > cnt) {
                return callback && callback.call(this$1)
              }
              var ratio = this$1._step === 0
                ? sign * r * (1 - i / cnt)
                : sign * (r + (1 - r) * i / cnt);
              this$1._emitScrollEvent('weex$scroll', {
                offsetXRatio: ratio
              });
              setTimeout(throttledScroll, THROTTLE_SCROLL_TIME);
            };
            throttledScroll();
          }
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      // import { validateStyles } from '../../validator'
      // import indicator from './indicator'
      var slider$1 = {
        mixins: [slideMixin],
        props: {
          index: {
            type: [String, Number],
            default: 0
          },
          'auto-play': {
            type: [String, Boolean],
            default: false
          },
          interval: {
            type: [String, Number],
            default: 3000
          },
          infinite: {
            type: [String, Boolean],
            default: true
          }
        },

        watch: {
          index: function index () {
            this.currentIndex = this._normalizeIndex(this.index);
          }
        },

        data: function data () {
          return {
            frameCount: 0,
            currentIndex: this.index
          }
        },

        beforeCreate: function beforeCreate () {
          this.weexType = 'slider';
        },

        render: function render (createElement) {
          /* istanbul ignore next */
          // if ("production" === 'development') {
          //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
          // }
          return this._renderSlides(createElement)
        }
      };

      var slider$2 = {
        init: function init (weex) {
          weex.registerComponent('slider', slider$1);
          weex.registerComponent('cycleslider', slider$1);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var DEFAULT_NEIGHBOR_SPACE = 20;
      var DEFAULT_NEIGHBOR_ALPHA = 0.6;
      var DEFAULT_NEIGHBOR_SCALE = 0.8;
      var DEFAULT_CURRENT_ITEM_SCALE = 0.9;

      var sliderNeighbor = {
        mixins: [slideMixin],
        props: {
          index: {
            type: [String, Number],
            default: 0
          },
          autoPlay: {
            type: [String, Boolean],
            default: false
          },
          interval: {
            type: [String, Number],
            default: 3000
          },
          infinite: {
            type: [String, Boolean],
            default: true
          },
          neighborSpace: {
            type: [String, Number],
            validator: function (val) {
              val = parseFloat(val);
              return !isNaN(val) && val > 0
            },
            default: DEFAULT_NEIGHBOR_SPACE
          },
          neighborAlpha: {
            type: [String, Number],
            validator: function (val) {
              val = parseFloat(val);
              return !isNaN(val) && val >= 0 && val <= 1
            },
            default: DEFAULT_NEIGHBOR_ALPHA
          },
          neighborScale: {
            type: [String, Number],
            validator: function (val) {
              val = parseFloat(val);
              return !isNaN(val) && val >= 0 && val <= 1
            },
            default: DEFAULT_NEIGHBOR_SCALE
          },
          currentItemScale: {
            type: [String, Number],
            validator: function (val) {
              val = parseFloat(val);
              return !isNaN(val) && val >= 0 && val <= 1
            },
            default: DEFAULT_CURRENT_ITEM_SCALE
          }
        },

        watch: {
          index: function index () {
            this.currentIndex = this._normalizeIndex(this.index);
          }
        },

        data: function data () {
          return {
            currentIndex: this.index,
            frameCount: 0
          }
        },

        beforeCreate: function beforeCreate () {
          this.isNeighbor = true;
          this.weexType = 'slider-neighbor';
        },

        render: function render (createElement) {
          return this._renderSlides(createElement)
        }
      };

      var neighbor = {
        init: function init (weex) {
          weex.registerComponent('slider-neighbor', sliderNeighbor);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      var getComponentInlineStyle$1;

      function getIndicatorItemStyle (ms, isActive) {
        var style = {};
        var bgColor = isActive
          ? ms['itemSelectedColor'] || ms['item-selected-color']
          : ms['itemColor'] || ms['item-color'];
        style['background-color'] = bgColor;
        style['width'] = style['height'] = ms['itemSize'] || ms['item-size'];
        return style
      }

      function getScopeIds (context) {
        var scopeIds = context._scopeIds;
        if (scopeIds) {
          return scopeIds
        }
        else {
          scopeIds = [];
        }
        var parent = context.$parent;
        while (parent) {
          var i = (void 0);
          if ((i = parent.$options) && (i = i._scopeId)) {
            scopeIds.push(i);
          }
          parent = parent.$parent;
        }
        context._scopeIds = scopeIds;
        return scopeIds
      }

      function _render (context, h) {
        var children = [];
        var mergedStyle = getComponentInlineStyle$1(context);
        var scopeIds = getScopeIds(context);
        var attrs = {};
        for (var i = 0, l = scopeIds.length; i < l; i++) {
          attrs[scopeIds[i]] = '';
        }
        for (var i$1 = 0; i$1 < Number(context.count); ++i$1) {
          var classNames = ['weex-indicator-item weex-el'];
          var isActive = false;
          if (i$1 === Number(context.active)) {
            classNames.push('weex-indicator-item-active');
            isActive = true;
          }
          children.push(h('mark', {
            attrs: attrs,
            staticClass: classNames.join(' '),
            staticStyle: getIndicatorItemStyle(mergedStyle, isActive)
          }));
        }
        return h('nav', {
          attrs: { 'weex-type': 'indicator' },
          staticClass: 'weex-indicator weex-ct'
        }, [
          // the indicator nav may cover the slides, and may stop the
          // click event be triggered on the slides.
          // so a smaller wrapper is needed to prevent the overlap.
          // This wrapper will cover only the whole size of all the
          // indicator pointers' item-sizes.
          h('div', {
            staticClass: 'weex-indicator-inner'
          }, children)
        ])
      }

      var indicator = {
        name: 'weex-indicator',
        methods: {
          show: function () {
            this.$el.style.visibility = 'visible';
          }
        },
        props: {
          itemColor: [String],
          itemSelectedColor: [String],
          itemSize: [String]
        },
        data: function data () {
          return {
            count: 0,
            active: 0
          }
        },
        render: function render (createElement) {
          var ref = this.$vnode.data.attrs || {};
          var count = ref.count;
          var active = ref.active;
          this.count = count;
          this.active = active;
          if (!this.count) { return }
          return _render(this, createElement)
        }
      };

      var indicator$1 = {
        init: function init (weex) {
          getComponentInlineStyle$1 = weex.getComponentInlineStyle;
          weex.registerComponent('indicator', indicator);
        }
      };

      __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-slider-wrapper {\n  overflow: hidden;\n}\n\n.weex-slider-inner {\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.weex-slider-cell {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: transparent !important;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n.neighbor-cell {\n  overflow: visible !important;\n}\n\nnav.weex-indicator {\n  position: absolute;\n  z-index: 10;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-transform: translate(-10rem, 0px);\n          transform: translate(-10rem, 0px)\n}\n\ndiv.weex-indicator-inner {\n  -webkit-transform: translate(10rem, 0px);\n          transform: translate(10rem, 0px);\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}",undefined);

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      var slider = {
        init: function init (weex) {
          weex.install(slider$2);
          weex.install(neighbor);
          weex.install(indicator$1);
        }
      };

      __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.weex-textarea {\n  font-size: 0.426667rem\n}\n.weex-textarea:focus {\n  outline: none;\n}\n",undefined);

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      function getTextarea (weex) {
        var extractComponentStyle = weex.extractComponentStyle;
        var ref = weex.mixins;
        var inputCommon = ref.inputCommon;
        var ref$1 = weex.utils;
        var extend = ref$1.extend;
        var mapFormEvents = ref$1.mapFormEvents;

        return {
          name: 'weex-textarea',
          mixins: [inputCommon],
          props: {
            value: String,
            placeholder: String,
            disabled: {
              type: [String, Boolean],
              default: false
            },
            autofocus: {
              type: [String, Boolean],
              default: false
            },
            rows: {
              type: [String, Number],
              default: 2
            },
            returnKeyType: String
          },

          render: function render (createElement) {
            /* istanbul ignore next */
            // if ("production" === 'development') {
            //   validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle)
            // }
            var events = extend(mapFormEvents(this));
            return createElement('html:textarea', {
              attrs: {
                'weex-type': 'textarea',
                value: this.value,
                disabled: (this.disabled !== 'false' && this.disabled !== false),
                autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
                placeholder: this.placeholder,
                rows: this.rows,
                'return-key-type': this.returnKeyType
              },
              domProps: {
                value: this.value
              },
              on: this.createKeyboardEvent(events),
              staticClass: 'weex-textarea weex-el',
              staticStyle: extractComponentStyle(this)
            })
          }
        }
      }

      var textarea = {
        init: function init (weex) {
          weex.registerComponent('textarea', getTextarea(weex));
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      function getVideo (weex) {
        var extractComponentStyle = weex.extractComponentStyle;
        var mapNativeEvents = weex.mapNativeEvents;
        var ref = weex.utils;
        var dispatchNativeEvent = ref.dispatchNativeEvent;

        return {
          name: 'weex-video',
          props: {
            src: String,
            playStatus: {
              type: String,
              default: 'pause',
              validator: function validator (value) {
                return ['play', 'pause'].indexOf(value) !== -1
              }
            },
            autoplay: {
              type: [String, Boolean],
              default: false
            },
            autoPlay: {
              type: [String, Boolean],
              default: false
            },
            playsinline: {
              type: [String, Boolean],
              default: true
            },
            controls: {
              type: [String, Boolean],
              default: false
            }
          },

          render: function render (createElement) {
            if (this.playStatus === 'play') {
              this.$nextTick(function () {
                try {
                  this.$el && this.$el.play();
                }
                catch (err) {
                  dispatchNativeEvent(this && this.$el, 'error', {
                    message: err.message
                  });
                }
              });
            }
            else if (this.playStatus === 'pause') {
              this.$nextTick(function () {
                this.$el && this.$el.pause();
              });
            }

            return createElement('html:video', {
              attrs: {
                'weex-type': 'video',
                autoplay: ((this.autoplay !== 'false' && this.autoplay !== false)
                  || (this.autoPlay !== 'false' && this.autoPlay !== false)),
                'webkit-playsinline': this.playsinline,
                controls: this.controls,
                src: this.src
              },
              on: mapNativeEvents(this, {
                play: 'start',
                error: 'fail'
              }),
              staticClass: 'weex-video weex-el',
              staticStyle: extractComponentStyle(this)
            })
          }
        }
      }

      var video = {
        init: function init (weex) {
          weex.registerComponent('video', getVideo(weex));
        }
      };

      __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n",undefined);

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      function getWeb (weex) {
        var extractComponentStyle = weex.extractComponentStyle;
        var ref = weex.utils;
        var dispatchNativeEvent = ref.dispatchNativeEvent;

        return {
          data: function data () {
            return {
              currentSrc: ''
            }
          },
          name: 'weex-web',
          props: {
            src: String
          },
          watch: {
            src: function src (newVal) {
              this.currentSrc = newVal;
            }
          },
          methods: {
            goBack: function goBack () {
              var el = this.$el;
              if (el) {
                var win = el.contentWindow;
                try {
                  win.history.back();
                  this.currentSrc = win.location.href;
                }
                catch (err) {
                  dispatchNativeEvent(el, 'error', err);
                }
              }
            },
            goForward: function goForward () {
              var el = this.$el;
              if (el) {
                var win = el.contentWindow;
                try {
                  win.history.forward();
                  this.currentSrc = win.location.href;
                }
                catch (err) {
                  dispatchNativeEvent(el, 'error', err);
                }
              }
            },
            reload: function reload () {
              var el = this.$el;
              if (el) {
                try {
                  el.contentWindow.location.reload();
                  dispatchNativeEvent(el, 'pagestart', { url: this.currentSrc });
                }
                catch (err) {
                  dispatchNativeEvent(el, 'error', err);
                }
              }
            }
          },

          created: function created () {
            this.currentSrc = this.src;
          },

          mounted: function mounted () {
            var el = this.$el;
            this._prevSrc = this.currentSrc;
            if (el) {
              dispatchNativeEvent(el, 'pagestart', { url: this.currentSrc });
            }
          },

          updated: function updated () {
            if (this.currentSrc !== this._prevSrc) {
              this._prevSrc = this.currentSrc;
              dispatchNativeEvent(this.$el, 'pagestart', { url: this.currentSrc });
            }
          },

          render: function render (createElement) {
            var this$1 = this;

            return createElement('iframe', {
              attrs: {
                'weex-type': 'web',
                src: this.currentSrc
              },
              on: {
                load: function (event) {
                  this$1.$nextTick(function () {
                    var el = this.$el;
                    try {
                      var html = el.contentWindow.document.documentElement;
                      if (html) {
                        dispatchNativeEvent(el, 'pagefinish', { url: this.currentSrc });
                      }
                      else {
                        dispatchNativeEvent(el, 'error', new Error('[vue-render]:found no page content.'));
                      }
                    }
                    catch (err) {
                      dispatchNativeEvent(el, 'error', err);
                    }
                  });
                }
              },
              staticClass: 'weex-web weex-el',
              staticStyle: extractComponentStyle(this)
            })
          }
        }
      }

      var web = {
        init: function init (weex) {
          weex.registerComponent('web', getWeb(weex));
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      // import a from './a'
      // import div from './div'
      // import image from './image'
      // import text from './text'
      var components = [
        // a,
        // div,
        // image,
        input,
        _switch,
        scrollable,
        slider,
        // text,
        textarea,
        video,
        web
      ];

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var supportGeolocation = 'geolocation' in navigator;
      var errorMsg = "[h5-render]: browser doesn't support geolocation.";

      var geolocation = {
        // options:
        //   - enableHighAccuracy optional, value is true or false, false by default.
        //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
        //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
        getCurrentPosition: function getCurrentPosition (successCbId, errorCbId, options) {
          var this$1 = this;

          var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos); };
          var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
          if (supportGeolocation) {
            navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
          }
          else {
            console.warn(errorMsg);
            errorCb(new Error(errorMsg));
          }
        },

        // options: the same with `getCurrentPosition`.
        watchPosition: function watchPosition (successCbId, errorCbId, options) {
          var this$1 = this;

          var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos, true); };
          var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
          if (supportGeolocation) {
            var id = navigator.geolocation.watchPosition(function (pos) {
              pos.watchId = id;
              successCb(pos);
            }, errorCb, options);
          }
          else {
            console.warn(errorMsg);
            errorCb(new Error(errorMsg));
          }
        },

        clearWatch: function clearWatch (watchId) {
          if (supportGeolocation) {
            navigator.geolocation.clearWatch(watchId);
          }
          else {
            console.warn(errorMsg);
          }
        }
      };

      var meta = {
        geolocation: [{
          name: 'getCurrentPosition',
          args: ['function', 'function', 'object']
        }, {
          name: 'watchPosition',
          args: ['function', 'function', 'object']
        }, {
          name: 'clearWatch',
          args: ['string']
        }]
      };

      var geolocation$1 = {
        init: function init (Weex) {
          Weex.registerApiModule('geolocation', geolocation, meta);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /* global localStorage */

      var supportLocalStorage = false;
      try {
        supportLocalStorage = typeof localStorage !== 'undefined';
      }
      catch (err) {
        // not support.
      }

      var SUCCESS = 'success';
      var FAILED = 'failed';
      var INVALID_PARAM = 'invalid_param';
      var UNDEFINED = 'undefined';

      function callFail (sender, callbackId, errorMsg) {
        sender.performCallback(callbackId, {
          result: FAILED,
          data: errorMsg || UNDEFINED
        });
      }

      function callNotSupportFail (sender, callbackId) {
        sender.performCallback(callbackId, {
          result: FAILED,
          data: 'localStorage is disabled or not supported.'
        });
      }

      var storage = {

        /**
         * When passed a key name and value, will add that key to the storage,
         * or update that key's value if it already exists.
         * @param {string} key
         * @param {string} value not null nor undifined，but 0 works.
         * @param {function} callbackId
         */
        setItem: function (key, value, callbackId) {
          var sender = this.sender;
          if (!supportLocalStorage) {
            return callNotSupportFail(sender, callbackId)
          }
          if (!key || (!value && value !== 0)) {
            sender.performCallback(callbackId, {
              result: 'failed',
              data: INVALID_PARAM
            });
            return
          }
          try {
            localStorage.setItem(key, value);
            sender.performCallback(callbackId, {
              result: SUCCESS,
              data: UNDEFINED
            });
          }
          catch (e) {
            // accept any exception thrown during a storage attempt as a quota error
            callFail(sender, callbackId);
          }
        },

        /**
         * When passed a key name, will return that key's value.
         * @param {string} key
         * @param {function} callbackId
         */
        getItem: function (key, callbackId) {
          var sender = this.sender;
          if (!supportLocalStorage) {
            return callNotSupportFail(sender, callbackId)
          }
          if (!key) {
            sender.performCallback(callbackId, {
              result: FAILED,
              data: INVALID_PARAM
            });
            return
          }
          try {
            var val = localStorage.getItem(key);
            sender.performCallback(callbackId, {
              result: val ? SUCCESS : FAILED,
              data: val || UNDEFINED
            });
          }
          catch (e) {
            // accept any exception thrown during a storage attempt as a quota error
            callFail(sender, callbackId);
          }
        },

        /**
         *When passed a key name, will remove that key from the storage.
        * @param {string} key
        * @param {function} callbackId
        */
        removeItem: function (key, callbackId) {
          var sender = this.sender;
          if (!supportLocalStorage) {
            return callNotSupportFail(sender, callbackId)
          }
          if (!key) {
            sender.performCallback(callbackId, {
              result: FAILED,
              data: INVALID_PARAM
            });
            return
          }
          try {
            localStorage.removeItem(key);
            sender.performCallback(callbackId, {
              result: SUCCESS,
              data: UNDEFINED
            });
          }
          catch (e) {
            // accept any exception thrown during a storage attempt as a quota error
            callFail(sender, callbackId);
          }
        },

        /**
         * Returns an integer representing the number of data items stored in the Storage object.
         * @param {function} callbackId
         */
        length: function (callbackId) {
          var sender = this.sender;
          if (!supportLocalStorage) {
            return callNotSupportFail(sender, callbackId)
          }
          try {
            var len = localStorage.length;
            sender.performCallback(callbackId, {
              result: SUCCESS,
              data: len
            });
          }
          catch (e) {
            // accept any exception thrown during a storage attempt as a quota error
            callFail(sender, callbackId);
          }
        },

        /**
         * Returns an array that contains all keys stored in Storage object.
         * @param {function} callbackId
         */
        getAllKeys: function (callbackId) {
          var sender = this.sender;
          if (!supportLocalStorage) {
            return callNotSupportFail(sender, callbackId)
          }
          try {
            var _arr = [];
            for (var i = 0; i < localStorage.length; i++) {
              _arr.push(localStorage.key(i));
            }
            sender.performCallback(callbackId, {
              result: SUCCESS,
              data: _arr
            });
          }
          catch (e) {
            // accept any exception thrown during a storage attempt as a quota error
            callFail(sender, callbackId);
          }
        }
      };

      var meta$1 = {
        storage: [{
          name: 'setItem',
          args: ['string', 'string', 'function']
        }, {
          name: 'getItem',
          args: ['string', 'function']
        }, {
          name: 'removeItem',
          args: ['string', 'function']
        }, {
          name: 'length',
          args: ['function']
        }, {
          name: 'getAllKeys',
          args: ['function']
        }]
      };

      var storage$1 = {
        init: function (Weex) {
          Weex.registerApiModule('storage', storage, meta$1);
        }
      };

      (typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){var b={};Object.defineProperty(this,"params",{set:function(a){if("object"==typeof a){for(var c in b){ delete b[c]; }for(var c in a){ b[c]=a[c]; }}},get:function(){return b},enumerable:!0}), Object.defineProperty(this,"search",{set:function(a){if("string"==typeof a){0===a.indexOf("?")&&(a=a.substr(1));var c=a.split("&");for(var d in b){ delete b[d]; }for(var e=0;e<c.length;e++){var f=c[e].split("=");if(void 0!==f[1]&&(f[1]=f[1].toString()), f[0]){ try{b[decodeURIComponent(f[0])]=decodeURIComponent(f[1]);}catch(g){b[f[0]]=f[1];} }}}},get:function(){var a=[];for(var c in b){ if(void 0!==b[c]){ if(""!==b[c]){ try{a.push(encodeURIComponent(c)+"="+encodeURIComponent(b[c]));}catch(d){a.push(c+"="+b[c]);} }else { try{a.push(encodeURIComponent(c));}catch(d){a.push(c);} } } }return a.length?"?"+a.join("&"):""},enumerable:!0});var c;Object.defineProperty(this,"hash",{set:function(a){"string"==typeof a&&(a&&a.indexOf("#")<0&&(a="#"+a), c=a||"");},get:function(){return c},enumerable:!0}), this.set=function(a){a=a||"";var b;if(!(b=a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")))){ throw new Error("Wrong uri scheme."); }this.protocol=b[1]||("object"==typeof location?location.protocol:""), this.username=b[2]||"", this.password=b[3]||"", this.hostname=this.host=b[4], this.port=b[5]||"", this.pathname=b[6]||"/", this.search=b[7]||"", this.hash=b[8]||"", this.origin=this.protocol+"//"+this.hostname;}, this.toString=function(){var a=this.protocol+"//";return this.username&&(a+=this.username, this.password&&(a+=":"+this.password), a+="@"), a+=this.host, this.port&&"80"!==this.port&&(a+=":"+this.port), this.pathname&&(a+=this.pathname), this.search&&(a+=this.search), this.hash&&(a+=this.hash), a}, a&&this.set(a.toString());}b.httpurl=function(a){return new c(a)};}(window,window.lib||(window.lib={}));var httpurl_common = window.lib['httpurl'];

      var strictUriEncode = function (str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
          return '%' + c.charCodeAt(0).toString(16).toUpperCase();
        });
      };

      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */

      /* eslint-disable no-unused-vars */
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;

      function toObject$1(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
      }

      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }

          // Detect buggy property enumeration order in older V8 versions.

          // https://bugs.chromium.org/p/v8/issues/detail?id=4118
          var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
          test1[5] = 'de';
          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
          });
          if (order2.join('') !== '0123456789') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join('') !==
              'abcdefghijklmnopqrst') {
            return false;
          }

          return true;
        } catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }

      var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
        var arguments$1 = arguments;

        var from;
        var to = toObject$1(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments$1[s]);

          for (var key in from) {
            if (hasOwnProperty$1.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };

      function encoderForArrayFormat(opts) {
        switch (opts.arrayFormat) {
          case 'index':
            return function (key, value, index) {
              return value === null ? [
                encode(key, opts),
                '[',
                index,
                ']'
              ].join('') : [
                encode(key, opts),
                '[',
                encode(index, opts),
                ']=',
                encode(value, opts)
              ].join('');
            };

          case 'bracket':
            return function (key, value) {
              return value === null ? encode(key, opts) : [
                encode(key, opts),
                '[]=',
                encode(value, opts)
              ].join('');
            };

          default:
            return function (key, value) {
              return value === null ? encode(key, opts) : [
                encode(key, opts),
                '=',
                encode(value, opts)
              ].join('');
            };
        }
      }

      function parserForArrayFormat(opts) {
        var result;

        switch (opts.arrayFormat) {
          case 'index':
            return function (key, value, accumulator) {
              result = /\[(\d*)\]$/.exec(key);

              key = key.replace(/\[\d*\]$/, '');

              if (!result) {
                accumulator[key] = value;
                return;
              }

              if (accumulator[key] === undefined) {
                accumulator[key] = {};
              }

              accumulator[key][result[1]] = value;
            };

          case 'bracket':
            return function (key, value, accumulator) {
              result = /(\[\])$/.exec(key);
              key = key.replace(/\[\]$/, '');

              if (!result) {
                accumulator[key] = value;
                return;
              } else if (accumulator[key] === undefined) {
                accumulator[key] = [value];
                return;
              }

              accumulator[key] = [].concat(accumulator[key], value);
            };

          default:
            return function (key, value, accumulator) {
              if (accumulator[key] === undefined) {
                accumulator[key] = value;
                return;
              }

              accumulator[key] = [].concat(accumulator[key], value);
            };
        }
      }

      function encode(value, opts) {
        if (opts.encode) {
          return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
        }

        return value;
      }

      function keysSorter(input) {
        if (Array.isArray(input)) {
          return input.sort();
        } else if (typeof input === 'object') {
          return keysSorter(Object.keys(input)).sort(function (a, b) {
            return Number(a) - Number(b);
          }).map(function (key) {
            return input[key];
          });
        }

        return input;
      }

      var extract = function (str) {
        return str.split('?')[1] || '';
      };

      var parse = function (str, opts) {
        opts = objectAssign({arrayFormat: 'none'}, opts);

        var formatter = parserForArrayFormat(opts);

        // Create an object with no prototype
        // https://github.com/sindresorhus/query-string/issues/47
        var ret = Object.create(null);

        if (typeof str !== 'string') {
          return ret;
        }

        str = str.trim().replace(/^(\?|#|&)/, '');

        if (!str) {
          return ret;
        }

        str.split('&').forEach(function (param) {
          var parts = param.replace(/\+/g, ' ').split('=');
          // Firefox (pre 40) decodes `%3D` to `=`
          // https://github.com/sindresorhus/query-string/pull/37
          var key = parts.shift();
          var val = parts.length > 0 ? parts.join('=') : undefined;

          // missing `=` should be `null`:
          // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
          val = val === undefined ? null : decodeURIComponent(val);

          formatter(decodeURIComponent(key), val, ret);
        });

        return Object.keys(ret).sort().reduce(function (result, key) {
          var val = ret[key];
          if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
            // Sort object keys, not values
            result[key] = keysSorter(val);
          } else {
            result[key] = val;
          }

          return result;
        }, Object.create(null));
      };

      var stringify = function (obj, opts) {
        var defaults = {
          encode: true,
          strict: true,
          arrayFormat: 'none'
        };

        opts = objectAssign(defaults, opts);

        var formatter = encoderForArrayFormat(opts);

        return obj ? Object.keys(obj).sort().map(function (key) {
          var val = obj[key];

          if (val === undefined) {
            return '';
          }

          if (val === null) {
            return encode(key, opts);
          }

          if (Array.isArray(val)) {
            var result = [];

            val.slice().forEach(function (val2) {
              if (val2 === undefined) {
                return;
              }

              result.push(formatter(key, val2, result.length));
            });

            return result.join('&');
          }

          return encode(key, opts) + '=' + encode(val, opts);
        }).filter(function (x) {
          return x.length > 0;
        }).join('&') : '';
      };

      var queryString = {
        extract: extract,
        parse: parse,
        stringify: stringify
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /* global lib, XMLHttpRequest */
      /* deps: httpurl */

      var utils$1;

      var jsonpCnt = 0;
      var ERROR_STATE = -1;

      function _jsonp (config, callback, progressCallback) {
        var cbName = config.jsonpCallbackName || 'jsonp_' + (++jsonpCnt);
        var url;

        if (!config.url) {
          console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
        }

        global[cbName] = (function (cb) {
          return function (response) {
            callback({
              status: 200,
              ok: true,
              statusText: 'OK',
              data: response
            });
            delete global[cb];
          }
        })(cbName);

        var script = document.createElement('script');
        try {
          url = lib.httpurl(config.url);
        }
        catch (err) {
          console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: '
            + config.url);
        }
        url.params.callback = cbName;
        script.type = 'text/javascript';
        script.src = url.toString();
        // script.onerror is not working on IE or safari.
        // but they are not considered here.
        script.onerror = (function (cb) {
          return function (err) {
            console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
            callback({
              status: ERROR_STATE,
              ok: false,
              statusText: '',
              data: ''
            });
            delete global[cb];
          }
        })(cbName);
        var head = document.getElementsByTagName('head')[0];
        head.insertBefore(script, null);
      }

      function _xhr (config, callback, progressCallback) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = config.type;
        xhr.open(config.method, config.url, true);

        // cors cookie support
        if (config.withCredentials === true) {
          xhr.withCredentials = true;
        }

        var headers = config.headers || {};
        for (var k in headers) {
          xhr.setRequestHeader(k, headers[k]);
        }

        xhr.onload = function (res) {
          callback({
            status: xhr.status,
            ok: xhr.status >= 200 && xhr.status < 300,
            statusText: xhr.statusText,
            data: xhr.response,
            headers: xhr.getAllResponseHeaders().split('\n')
              .reduce(function (obj, headerStr) {
                var headerArr = headerStr.match(/(.+): (.+)/);
                if (headerArr) {
                  obj[headerArr[1]] = headerArr[2];
                }
                return obj
              }, {})
          });
        };

        if (progressCallback) {
          xhr.onprogress = function (e) {
            progressCallback({
              readyState: xhr.readyState,
              status: xhr.status,
              length: e.loaded,
              total: e.total,
              statusText: xhr.statusText,
              headers: xhr.getAllResponseHeaders().split('\n')
                .reduce(function (obj, headerStr) {
                  var headerArr = headerStr.match(/(.+): (.+)/);
                  if (headerArr) {
                    obj[headerArr[1]] = headerArr[2];
                  }
                  return obj
                }, {})
            });
          };
        }

        xhr.onerror = function (err) {
          console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
          callback({
            status: ERROR_STATE,
            ok: false,
            statusText: '',
            data: ''
          });
        };

        xhr.send(config.body || null);
      }

      var stream = {

        /**
         * sendHttp
         * @deprecated
         * Note: This API is deprecated. Please use stream.fetch instead.
         * send a http request through XHR.
         * @param  {obj} params
         *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
         *  - url: url requested
         * @param  {string} callbackId
         */
        sendHttp: function (param, callbackId) {
          if (typeof param === 'string') {
            try {
              param = JSON.parse(param);
            }
            catch (e) {
              return
            }
          }
          if (typeof param !== 'object' || !param.url) {
            return console.error(
              '[h5-render] invalid config or invalid config.url for sendHttp API')
          }

          var sender = this.sender;
          var method = param.method || 'GET';
          var xhr = new XMLHttpRequest();
          xhr.open(method, param.url, true);
          xhr.onload = function () {
            sender.performCallback(callbackId, this.responseText);
          };
          xhr.onerror = function (error) {
            return console.error('[h5-render] unexpected error in sendHttp API', error)
            // sender.performCallback(
            //   callbackId,
            //   new Error('unexpected error in sendHttp API')
            // )
          };
          xhr.send();
        },

        /**
         * fetch
         * use stream.fetch to request for a json file, a plain text file or
         * a arraybuffer for a file stream. (You can use Blob and FileReader
         * API implemented by most modern browsers to read a arraybuffer.)
         * @param  {object} options config options
         *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
         *   - headers {obj}
         *   - url {string}
         *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
         *   - withCredentials {boolean}
         *   - body
         *   - type {string} 'json' | 'jsonp' | 'text'
         * @param  {string} callbackId
         * @param  {string} progressCallbackId
         */
        fetch: function (options, callbackId, progressCallbackId) {
          var DEFAULT_METHOD = 'GET';
          var DEFAULT_MODE = 'cors';
          var DEFAULT_TYPE = 'text';

          var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
          var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
          var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

          // const fallback = false  // fallback from 'fetch' API to XHR.
          var sender = this.sender;

          var config = utils$1.extend({}, options);

          // validate options.method
          if (typeof config.method === 'undefined') {
            config.method = DEFAULT_METHOD;
            console.warn('[h5-render] options.method for \'fetch\' API has been set to '
              + 'default value \'' + config.method + '\'');
          }
          else if (methodOptions.indexOf((config.method + '')
            .toUpperCase()) === -1) {
            return console.error('[h5-render] options.method \''
              + config.method
              + '\' for \'fetch\' API should be one of '
              + methodOptions + '.')
          }

          // validate options.url
          if (!config.url) {
            return console.error('[h5-render] options.url should be set for \'fetch\' API.')
          }

          // validate body content for method 'GET'.
          if (config.method.toUpperCase() === 'GET') {
            var body = config.body;
            if (utils$1.isPlainObject(body)) {
              body = queryString.stringify(body);
            }
            var url = config.url;
            var hashIdx = url.indexOf('#');
            hashIdx <= -1 && (hashIdx = url.length);
            var hash = url.substr(hashIdx);
            if (hash && hash[0] === '#') {
              hash = hash.substr(1);
            }
            url = url.substring(0, hashIdx);
            if (body) {
              url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body;
            }
            url += '#' + hash;
            config.url = url;
          }

          // validate options.mode
          if (typeof config.mode === 'undefined') {
            config.mode = DEFAULT_MODE;
          }
          else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
            return console.error('[h5-render] options.mode \''
              + config.mode
              + '\' for \'fetch\' API should be one of '
              + modeOptions + '.')
          }

          // validate options.type
          if (typeof config.type === 'undefined') {
            config.type = DEFAULT_TYPE;
            console.warn('[h5-render] options.type for \'fetch\' API has been set to '
              + 'default value \'' + config.type + '\'.');
          }
          else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
            return console.error('[h5-render] options.type \''
                + config.type
                + '\' for \'fetch\' API should be one of '
                + typeOptions + '.')
          }

          // validate options.headers
          config.headers = config.headers || {};
          if (!utils$1.isPlainObject(config.headers)) {
            return console.error('[h5-render] options.headers should be a plain object')
          }

          // validate options.timeout
          config.timeout = parseInt(config.timeout, 10) || 2500;

          var _callArgs = [config, function (res) {
            sender.performCallback(callbackId, res);
          }];
          if (progressCallbackId) {
            _callArgs.push(function (res) {
              // Set 'keepAlive' to true for sending continuous callbacks
              sender.performCallback(progressCallbackId, res, true);
            });
          }

          if (config.type === 'jsonp') {
            _jsonp.apply(this, _callArgs);
          }
          else {
            _xhr.apply(this, _callArgs);
          }
        }

      };

      var meta$2 = {
        stream: [{
          name: 'sendHttp',
          args: ['object', 'function']
        }, {
          name: 'fetch',
          args: ['object', 'function', 'function']
        }]
      };

      var stream$1 = {
        init: function (Weex) {
          utils$1 = Weex.utils;
          Weex.registerApiModule('stream', stream, meta$2);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /**

      AUCTION:
      taskQueue
      Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.

      works in Chrome Firefox Opera. but not in Safari.
      @see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility

      Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.

      So look out your app behavior, when downgrade to html5 render.
      Any idea is welcome.
      **/

      var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

      var clipboard = {

        getString: function (callbackId) {
          // not supported in html5
          console.log('clipboard.getString() is not supported now.');
        },

        setString: function (text) {
          // not support safari
          if (typeof text === 'string' && text !== '' && document.execCommand) {
            var tempInput = element();
            tempInput.value = text;

            tempInput.select();
            document.execCommand('copy');
            // var out = document.execCommand('copy');
            // console.log("execCommand out is " + out);
            tempInput.value = '';
            tempInput.blur();
          }
          else {
            console.log('only support string input now');
          }
        }

      };

      function element () {
        var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
        if (!tempInput) {
          tempInput = document.createElement('input');
          tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
          tempInput.style.cssText = 'height:1px;width:1px;border:none;';
          // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
          document.body.appendChild(tempInput);
        }
        return tempInput
      }

      var meta$3 = {
        clipboard: [{
          name: 'getString',
          args: ['function']
        }, {
          name: 'setString',
          args: ['string']
        }]
      };

      var clipboard$1 = {
        init: function (Weex) {
          Weex.registerApiModule('clipboard', clipboard, meta$3);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var event$2 = {
        /**
         * openUrl
         * @param  {string} url
         */
        openURL: function (url) {
          location.href = url;
        }

      };

      var meta$4 = {
        event: [{
          name: 'openURL',
          args: ['string']
        }]
      };

      var eventModule = {
        init: function (Weex) {
          Weex.registerApiModule('event', event$2, meta$4);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var utils$2 = {};
      var endEvent;
      var styleName;

      var DESIGN_ROOT_VALUE = 75;

      var EVENT_NAME_MAP = {
        transition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        OTransition: 'oTransitionEnd',
        msTransition: 'MSTransitionEnd'
      };

      function detectEvents () {
        var testEl = document.createElement('div');
        var style = testEl.style;
        for (var name in EVENT_NAME_MAP) {
          if (name in style) {
            endEvent = EVENT_NAME_MAP[name];
            styleName = name;
            break
          }
        }
      }

      detectEvents();

      function transitionOnce (vnode, config, callback) {
        var nextFrame = utils$2.nextFrame;
        var toCSSText = utils$2.toCSSText;
        var styleObject2rem = utils$2.styleObject2rem;
        var isArray = utils$2.isArray;

        if (isArray(vnode)) {
          vnode = vnode[0];
        }

        var duration = config.duration || 0; // ms
        var timing = config.timingFunction || 'linear';
        var delay = config.delay || 0;  // ms

        // TODO: parse transition properties
        var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

        var dom = vnode instanceof HTMLElement ? vnode : vnode.$el;
        // trigger image lazyloading by force.
        dom && weex.utils.fireLazyload(dom, true);

        var transitionEndHandler = function (event) {
          event && event.stopPropagation();
          if (endEvent) {
            dom.removeEventListener(endEvent, transitionEndHandler);
            dom.style[styleName] = '';
          }
          callback();
        };
        if (endEvent) {
          dom.style[styleName] = transitionValue;
          dom.addEventListener(endEvent, transitionEndHandler);
        }
        nextFrame(function () {
          dom.style.cssText
            += toCSSText(styleObject2rem(config.styles, DESIGN_ROOT_VALUE) || {});
        });
      }

      var animation = {
        /**
         * transition
         * @param  {String} vnode
         * @param  {Object} config
         * @param  {String} callback
         */
        transition: function transition (vnode, config, callback) {
          if (!config.styles) { return }
          return transitionOnce(vnode, config, function () {
            callback && callback();
          })
        }
      };

      var animation$1 = {
        init: function init (weex) {
          var extendKeys = weex.utils.extendKeys;
          extendKeys(utils$2, weex.utils, [
            'nextFrame',
            'toCSSText',
            'styleObject2rem',
            // 'autoPrefix',
            // 'normalizeStyle',
            'isArray'
          ]);

          weex.registerModule('animation', animation);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var utils$3 = {};

      function now () {
        var now = window.performance && window.performance.now
          ? window.performance.now.bind(window.performance) : Date.now;
        return now()
      }

      function scrollElement (dSuffix, position) {
        if ((this === document.body) || (this === window)
          && window.scrollTo) {
          return window.scrollTo(0, position)
        }
        this[("scroll" + dSuffix)] = position;
      }
      /**
       * self invoked function that, given a context, steps through scrolling
       * @method step
       * @param {Object} context
       */
      function step$1 (context) {
        // call method again on next available frame
        context.frame = window.requestAnimationFrame(step$1.bind(window, context));
        var time = now();
        var elapsed = (time - context.startTime) / 468;
        // avoid elapsed times higher than one
        elapsed = elapsed > 1 ? 1 : elapsed;
        // apply easing to elapsed time
        var value = ease(elapsed);
        var currentPosition = context.startPosition + (context.position - context.startPosition) * value;
        context.method.call(context.scrollable, context.dSuffix, currentPosition);
        // return when end points have been reached
        /**
          * NOTE: should use ~~ to parse position number into integer. Otherwise
          * this two float numbers maybe have a slicely little difference, which
          * will cause this function never to stop.
        */
        if (~~currentPosition === ~~context.position) {
          window.cancelAnimationFrame(context.frame);
          return
        }
      }
      /**
       * returns result of applying ease math function to a number
       * @method ease
       * @param {Number} k
       * @returns {Number}
       */
      function ease (k) {
        return 0.5 * (1 - Math.cos(Math.PI * k))
      }
      var dom = {
        /**
         * scrollToElement
         * @param  {Vnode | VComponent} vnode
         * @param  {Object} options {offset:Number}
         *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
         */
        scrollToElement: function (vnode, options) {
          var isArray = utils$3.isArray;
          var getParentScrollerElement = utils$3.getParentScrollerElement;
          if (isArray(vnode)) {
            vnode = vnode[0];
          }
          var isElement = vnode instanceof HTMLElement;
          var el = isElement ? vnode : (vnode.$el || vnode.elm);
          var ct = getParentScrollerElement(vnode);
          var scroller = ct.__vue__;
          var isWindow = ct === document.body;
          var scrollDirection =
            isWindow ? 'vertical'
              : (scroller && scroller.scrollDirection || 'vertical');
          if (ct && el) {
            var dSuffix = ({
              horizontal: 'Left',
              vertical: 'Top'
            })[scrollDirection];
            var ctRect = ct.getBoundingClientRect();
            var elRect = el.getBoundingClientRect();
            /**
              * if it's a waterfall, and you want to scroll to a header, then just
              * scroll to the top.
            */
            if (
              !isElement
              && scroller
              && scroller.weexType === 'waterfall'
              && scroller._headers
              && scroller._headers.indexOf(vnode.$vnode || vnode) > -1) {
              // it's in waterfall. just scroll to the top.
              elRect = ct.firstElementChild.getBoundingClientRect();
            }
            var dir = dSuffix.toLowerCase();
            var offset = (isWindow ? 0 : ct[("scroll" + dSuffix)]) + elRect[dir] - ctRect[dir];
            if (options) {
              offset += options.offset && options.offset * weex.config.env.scale || 0;
            }
            else {}
            if (options && options.animated === false) {
              return scrollElement.call(ct, dSuffix, offset)
            }
            step$1({
              scrollable: ct,
              startTime: now(),
              frame: null,
              startPosition: isWindow ? window.pageYOffset : ct[("scroll" + dSuffix)],
              position: offset,
              method: scrollElement,
              dSuffix: dSuffix
            });
          }
        },
        /**
         * getComponentRect
         * @param {String} vnode
         * @param {Function} callback
         */
        getComponentRect: function (vnode, callback) {
          var isArray = utils$3.isArray;
          if (isArray(vnode)) {
            vnode = vnode[0];
          }
          var scale = window.weex.config.env.scale;
          var info = {
            result: false
          };
          var rectKeys = ['width', 'height', 'top', 'bottom', 'left', 'right'];

          function recalc (rect) {
            var res = {};
            rectKeys.forEach(function (key) {
              if (rect[key]) {
                res[key] = rect[key] / scale;
              }
            });
            return res
          }
          if (vnode && vnode === 'viewport') {
            info.result = true;
            info.size = recalc({
              width: document.documentElement.clientWidth,
              height: document.documentElement.clientHeight,
              top: 0,
              left: 0,
              right: document.documentElement.clientWidth,
              bottom: document.documentElement.clientHeight
            });
          }
          else if (vnode) {
            var el = vnode instanceof HTMLElement
              ? vnode
              : vnode.$el;
            if (el.getBoundingClientRect) {
              info.result = true;
              info.size = recalc(el.getBoundingClientRect());
            }
            else {
              info.result = false;
            }
          }
          var message = info.result ? info : {
            result: false,
            errMsg: 'Illegal parameter'
          };
          callback && callback(message);
          return message
        },
        /**
         * getLayoutDirection
         * @param {String} vnode
         * @param {Function} callback
         */
        getLayoutDirection: function (vnode, callback) {
          var isArray = utils$3.isArray;
          if (isArray(vnode)) {
            vnode = vnode[0];
          }
          var direction = 'ltr';
          if (vnode && vnode === 'viewport') {
            direction = getComputedStyle(document.documentElement)['direction'];
          }
          else if (vnode) {
            var el = vnode instanceof HTMLElement ? vnode : vnode.$el;
            direction = getComputedStyle(el)['direction'];
          }
          callback && callback(direction);
          return direction
        },
        /**
         * for adding fontFace
         * @param {string} key fontFace
         * @param {object} styles rules
         */
        addRule: function (key, styles) {
          var camelToKebab = utils$3.camelToKebab;
          var appendCss = utils$3.appendCss;
          key = camelToKebab(key);
          var stylesText = '';
          for (var k in styles) {
            if (styles.hasOwnProperty(k)) {
              stylesText += camelToKebab(k) + ':' + styles[k] + ';';
            }
          }
          var styleText = "@" + key + "{" + stylesText + "}";
          appendCss(styleText, 'dom-added-rules');
        }
      };
      var dom$1 = {
        init: function init (weex) {
          var extendKeys = weex.utils.extendKeys;
          extendKeys(utils$3, weex.utils, ['camelToKebab', 'appendCss', 'isArray', 'getParentScrollerElement']);
          weex.registerModule('dom', dom);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /**
       * globalEvent API:
       * @doc http://weex.apache.org/cn/references/modules/globalevent.html
       */
      // track varies kinds of events and listeners.
      var handlerTraker = {};

      var globalEvent = {
        /**
         * addEventListener
         * NOTE: one callback can only be bound to the same event once. Bind a callback twice doesn't
         *  mean it will be called twice when the event fired once.
         * @param {string} evt - the event name to add a listener on.
         */
        addEventListener: function addEventListener (evt, callback) {
          if (!callback) {
            return
          }
          var handlers = handlerTraker[evt];
          if (!handlers) {
            handlers = handlerTraker[evt] = [];
          }
          var len = handlers.length;
          for (var i = 0; i < len; i++) {
            if (handlers[i] === callback) {
              // this callback is already bound. no need to bind it again.
              return
            }
          }
          handlers.push(callback);
          document.addEventListener(evt, callback);
        },

        /**
         * removeEventListener
         * NOTE: remove all the event handlers for the specified event type.
         * @param {string} evt - the event name to remove a listener from.
         */
        removeEventListener: function removeEventListener (evt) {
          var handlers = handlerTraker[evt];
          if (!handlers) {
            // evt handlers has been already removed.
            return
          }
          handlers.forEach(function (cb) { return document.removeEventListener(evt, cb); });
          delete handlerTraker[evt];
        }
      };

      var globalEvent$1 = {
        init: function init (weex) {
          weex.registerModule('globalEvent', globalEvent);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var queue$1 = [];
      var isProcessing = false;
      var toastWin;
      var TOAST_WIN_CLASS_NAME = 'weex-toast';
      var TOAST_TRANSITION_DURATION = 0.4;

      var DEFAULT_DURATION = 0.8;

      function showToastWindow (msg, callback) {
        if (!toastWin) {
          toastWin = document.createElement('div');
          toastWin.classList.add(TOAST_WIN_CLASS_NAME);
          toastWin.classList.add('hide');
          document.body.appendChild(toastWin);
        }
        toastWin.textContent = msg;
        setTimeout(function () {
          toastWin.classList.remove('hide');
          callback && callback();
        }, 16);
      }

      function hideToastWindow (callback) {
        if (!toastWin) {
          return
        }
        toastWin.classList.add('hide');
        setTimeout(function () {
          callback && callback();
        }, TOAST_TRANSITION_DURATION * 1000);
      }

      var toast = {
        push: function (msg, duration) {
          queue$1.push({
            msg: msg,
            duration: duration || DEFAULT_DURATION
          });
          this.show();
        },

        show: function () {
          var that = this;

          // All messages had been toasted already, so remove the toast window,
          if (!queue$1.length) {
            toastWin && toastWin.parentNode.removeChild(toastWin);
            toastWin = null;
            return
          }

          // the previous toast is not ended yet.
          if (isProcessing) {
            return
          }
          isProcessing = true;

          var toastInfo = queue$1.shift();
          showToastWindow(toastInfo.msg, function () {
            setTimeout(function () {
              hideToastWindow(function () {
                isProcessing = false;
                that.show();
              });
            }, toastInfo.duration * 1000);
          });
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      // there will be only one instance of modal.
      var MODAL_WRAP_CLASS = 'weex-modal-wrap';
      var MODAL_NODE_CLASS = 'weex-modal-node';

      function Modal () {
        this.wrap = document.querySelector(MODAL_WRAP_CLASS);
        this.node = document.querySelector(MODAL_NODE_CLASS);
        if (!this.wrap) {
          this.createWrap();
        }
        if (!this.node) {
          this.createNode();
        }
        this.clearNode();
        this.createNodeContent();
        this.bindEvents();
      }

      Modal.prototype = {

        show: function () {
          this.wrap.style.display = 'block';
          this.node.classList.remove('hide');
        },

        destroy: function () {
          document.body.removeChild(this.wrap);
          document.body.removeChild(this.node);
          this.wrap = null;
          this.node = null;
        },

        createWrap: function () {
          this.wrap = document.createElement('div');
          this.wrap.className = MODAL_WRAP_CLASS;
          document.body.appendChild(this.wrap);
        },

        createNode: function () {
          this.node = document.createElement('div');
          this.node.classList.add(MODAL_NODE_CLASS, 'hide');
          document.body.appendChild(this.node);
        },

        clearNode: function () {
          this.node.innerHTML = '';
        },

        createNodeContent: function () {

          // do nothing.
          // child classes can override this method.
        },

        bindEvents: function () {
          this.wrap.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
          });
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var CONTENT_CLASS = 'content';
      var MSG_CLASS = 'content-msg';
      var BUTTON_GROUP_CLASS = 'btn-group';
      var BUTTON_CLASS = 'btn';

      function Alert (config) {
        this.msg = config.message || '';
        this.callback = config.callback;
        this.okTitle = config.okTitle || 'OK';
        Modal.call(this);
        this.node.classList.add('weex-alert');
      }

      Alert.prototype = Object.create(Modal.prototype);

      Alert.prototype.createNodeContent = function () {
        var content = document.createElement('div');
        content.classList.add(CONTENT_CLASS);
        this.node.appendChild(content);

        var msg = document.createElement('div');
        msg.classList.add(MSG_CLASS);
        msg.appendChild(document.createTextNode(this.msg));
        content.appendChild(msg);

        var buttonGroup = document.createElement('div');
        buttonGroup.classList.add(BUTTON_GROUP_CLASS);
        this.node.appendChild(buttonGroup);
        var button = document.createElement('div');
        button.classList.add(BUTTON_CLASS, 'alert-ok');
        button.appendChild(document.createTextNode(this.okTitle));
        buttonGroup.appendChild(button);
      };

      Alert.prototype.bindEvents = function () {
        Modal.prototype.bindEvents.call(this);
        var button = this.node.querySelector('.' + BUTTON_CLASS);
        button.addEventListener('click', function () {
          this.destroy();
          this.callback && this.callback();
        }.bind(this));
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var CONTENT_CLASS$1 = 'content';
      var MSG_CLASS$1 = 'content-msg';
      var BUTTON_GROUP_CLASS$1 = 'btn-group';
      var BUTTON_CLASS$1 = 'btn';

      function Confirm (config) {
        this.msg = config.message || '';
        this.callback = config.callback;
        this.okTitle = config.okTitle || 'OK';
        this.cancelTitle = config.cancelTitle || 'Cancel';
        Modal.call(this);
        this.node.classList.add('weex-confirm');
      }

      Confirm.prototype = Object.create(Modal.prototype);

      Confirm.prototype.createNodeContent = function () {
        var content = document.createElement('div');
        content.classList.add(CONTENT_CLASS$1);
        this.node.appendChild(content);

        var msg = document.createElement('div');
        msg.classList.add(MSG_CLASS$1);
        msg.appendChild(document.createTextNode(this.msg));
        content.appendChild(msg);

        var buttonGroup = document.createElement('div');
        buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
        this.node.appendChild(buttonGroup);
        var btnOk = document.createElement('div');
        btnOk.appendChild(document.createTextNode(this.okTitle));
        btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
        var btnCancel = document.createElement('div');
        btnCancel.appendChild(document.createTextNode(this.cancelTitle));
        btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
        buttonGroup.appendChild(btnOk);
        buttonGroup.appendChild(btnCancel);
        this.node.appendChild(buttonGroup);
      };

      Confirm.prototype.bindEvents = function () {
        Modal.prototype.bindEvents.call(this);
        var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
        var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
        btnOk.addEventListener('click', function () {
          this.destroy();
          this.callback && this.callback(this.okTitle);
        }.bind(this));
        btnCancel.addEventListener('click', function () {
          this.destroy();
          this.callback && this.callback(this.cancelTitle);
        }.bind(this));
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var CONTENT_CLASS$2 = 'content';
      var MSG_CLASS$2 = 'content-msg';
      var BUTTON_GROUP_CLASS$2 = 'btn-group';
      var BUTTON_CLASS$2 = 'btn';
      var INPUT_WRAP_CLASS = 'input-wrap';
      var INPUT_CLASS = 'input';

      function Prompt (config) {
        this.msg = config.message || '';
        this.defaultMsg = config.default || '';
        this.callback = config.callback;
        this.okTitle = config.okTitle || 'OK';
        this.cancelTitle = config.cancelTitle || 'Cancel';
        Modal.call(this);
        this.node.classList.add('weex-prompt');
      }

      Prompt.prototype = Object.create(Modal.prototype);

      Prompt.prototype.createNodeContent = function () {
        var content = document.createElement('div');
        content.classList.add(CONTENT_CLASS$2);
        this.node.appendChild(content);

        var msg = document.createElement('div');
        msg.classList.add(MSG_CLASS$2);
        msg.appendChild(document.createTextNode(this.msg));
        content.appendChild(msg);

        var inputWrap = document.createElement('div');
        inputWrap.classList.add(INPUT_WRAP_CLASS);
        content.appendChild(inputWrap);
        var input = document.createElement('input');
        input.classList.add(INPUT_CLASS);
        input.type = 'text';
        input.autofocus = true;
        input.placeholder = this.defaultMsg;
        inputWrap.appendChild(input);

        var buttonGroup = document.createElement('div');
        buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
        var btnOk = document.createElement('div');
        btnOk.appendChild(document.createTextNode(this.okTitle));
        btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
        var btnCancel = document.createElement('div');
        btnCancel.appendChild(document.createTextNode(this.cancelTitle));
        btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
        buttonGroup.appendChild(btnOk);
        buttonGroup.appendChild(btnCancel);
        this.node.appendChild(buttonGroup);
      };

      Prompt.prototype.bindEvents = function () {
        Modal.prototype.bindEvents.call(this);
        var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
        var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
        var that = this;
        btnOk.addEventListener('click', function () {
          var val = document.querySelector('input').value;
          this.destroy();
          this.callback && this.callback({
            result: that.okTitle,
            data: val
          });
        }.bind(this));
        btnCancel.addEventListener('click', function () {
          var val = document.querySelector('input').value;
          this.destroy();
          this.callback && this.callback({
            result: that.cancelTitle,
            data: val
          });
        }.bind(this));
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var _css$1 = "\n.weex-toast {\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  z-index: 1999999999;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 50%;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.7;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 0.013333rem solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.weex-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.426667rem;\n  border: 0.013333rem solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n";

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      // TODO: rewrite the modal styles
      var modal = {

        // duration: default is 0.8 seconds.
        toast: function (config) {
          toast.push(config.message, config.duration);
        },

        // config:
        //  - message: string
        //  - okTitle: title of ok button
        //  - callback
        alert: function (config, callback) {
          config.callback = function () {
            callback && callback();
          };
          new Alert(config).show();
        },

        // config:
        //  - message: string
        //  - okTitle: title of ok button
        //  - cancelTitle: title of cancel button
        //  - callback
        confirm: function (config, callback) {
          config.callback = function (val) {
            callback && callback(val);
          };
          new Confirm(config).show();
        },

        // config:
        //  - message: string
        //  - okTitle: title of ok button
        //  - cancelTitle: title of cancel button
        //  - callback
        prompt: function (config, callback) {
          config.callback = function (val) {
            callback && callback(val);
          };
          new Prompt(config).show();
        }
      };

      var modal$1 = {
        init: function (Weex) {
          Weex.utils.appendCss(_css$1, 'weex-mud-modal');
          Weex.registerModule('modal', modal);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      /**
       * Navigator module
       */
      var navigatorModule = {
        push: function (config, callback) {
          window.location.href = config.url;
          callback && callback();
        },

        pop: function (config, callback) {
          window.history.back();
          callback && callback();
        }
      };

      var navigatorModule$1 = {
        init: function init (weex) {
          weex.registerModule('navigator', navigatorModule);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      /**
       * Webview module
       */
      var isArray$1;

      var webview = {
        goBack: function goBack (vnode) {
          if (isArray$1(vnode)) {
            vnode = vnode[0];
          }
          if (vnode && typeof vnode.goBack === 'function') {
            vnode.goBack();
          }
        },
        goForward: function goForward (vnode) {
          if (isArray$1(vnode)) {
            vnode = vnode[0];
          }
          if (vnode && typeof vnode.goForward === 'function') {
            vnode.goForward();
          }
        },
        reload: function reload (vnode) {
          if (isArray$1(vnode)) {
            vnode = vnode[0];
          }
          if (vnode && typeof vnode.reload === 'function') {
            vnode.reload();
          }
        }
      };

      var webview$1 = {
        init: function init (weex) {
          isArray$1 = weex.utils.isArray;
          weex.registerModule('webview', webview);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      /**
       * websocket module
       */
      /*global WebSocket*/
      var websocket$1 = (function () {
        var registerListeners = ['onopen', 'onmessage', 'onerror', 'onclose'];
        var ws = {
          INSTANCE: null,
          WebSocket: function (url, protocol) {
            if (!url) {
              ws.INSTANCE = null;
              return
            }
            if (!protocol) {
              ws.INSTANCE = new WebSocket(url);
            }
            else {
              ws.INSTANCE = new WebSocket(url, protocol);
            }
            return ws.INSTANCE
          },
          send: function (messages) {
            ws.INSTANCE && ws.INSTANCE.send(messages);
          },
          close: function () {
            ws.INSTANCE && ws.INSTANCE.close();
          }
        };
        var loop = function ( i ) {
          if (registerListeners.hasOwnProperty(i)) {
            Object.defineProperty(ws, registerListeners[i], {
              get: function () {
                return ws.INSTANCE && ws.INSTANCE[registerListeners[i]]
              },
              set: function (fn) {
                if (ws.INSTANCE) {
                  ws.INSTANCE[registerListeners[i]] = fn;
                }
              }
            });
          }
        };

        for (var i in registerListeners) loop( i );
        return ws
      })();

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      // TODO: rewrite the module meta
      var websocket = {
        init: function (Weex) {
          Weex.registerModule('webSocket', websocket$1, { registerType: 'assignment' });
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      var meta$5 = {
        /**
         * setViewport.
         * Changing viewport design width at runtime.
         */
        setViewport: function setViewport (options) {
          if (!options) {
            console.error(("[vue-render] set viewport width invalid options: " + options));
          }
          var newWidth = parseInt(options.width);
          if (!isNaN(newWidth) && newWidth > 0) {
            resetViewport(options.width);
          }
          else {
            console.error(("[vue-render] set viewport width invalid options.width: " + (options.width)));
          }
        }
      };

      var meta$6 = {
        init: function init (weex) {
          weex.registerModule('meta', meta$5);
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */

      // modules from render/browesr (legacy modules)

      // custom modules
      var modules$1 = [
        geolocation$1,
        storage$1,
        stream$1,
        clipboard$1,
        eventModule,
        modal$1,
        websocket,
        animation$1,
        dom$1,
        globalEvent$1,
        navigatorModule$1,
        webview$1,
        meta$6
      ];

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var valMap = {
        contain: 'contain',
        cover: 'cover',
        stretch: '100% 100%'
      };
      var vals = Object.keys(valMap);
      var defaultVal = 'stretch';

      var resize = {
        init: function init (weex) {
          weex.__vue__.directive('weex-resize', function (el, binding) {
            if (el.tagName.toLowerCase() !== 'figure') {
              return
            }
            var value = binding.value;
            var oldValue = binding.oldvalue;
            if (value === oldValue) {
              return
            }
            if (vals.indexOf(value) <= -1) {
              value = defaultVal;
            }
            el.style.backgroundSize = valMap[value];
          });
        }
      };

      /*
      * Licensed to the Apache Software Foundation (ASF) under one
      * or more contributor license agreements.  See the NOTICE file
      * distributed with this work for additional information
      * regarding copyright ownership.  The ASF licenses this file
      * to you under the Apache License, Version 2.0 (the
      * "License"); you may not use this file except in compliance
      * with the License.  You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing,
      * software distributed under the License is distributed on an
      * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      * KIND, either express or implied.  See the License for the
      * specific language governing permissions and limitations
      * under the License.
      */
      var directives = {
        resize: resize
      };

      var preInit = weex.init;

      weex.init = function () {
        preInit.apply(weex, arguments);
        var plugins = components.concat(modules$1);

        plugins.forEach(function (plugin) {
          weex.install(plugin);
        });

        for (var k in directives) {
          weex.install(directives[k]);
        }
      };

      if (global.Vue) {
        weex.init(global.Vue);
      }

      return weex;

    })
  )
);
