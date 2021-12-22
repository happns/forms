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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];

    if (!silent && keys.indexOf(element.key) !== -1) {
      throw new TypeError("Duplicated element (" + element.key + ")");
    }

    keys.push(element.key);
  }

  function _fromElementDescriptor(element) {
    var obj = {
      kind: element.kind,
      key: element.key,
      placement: element.placement,
      descriptor: element.descriptor
    };
    var desc = {
      value: "Descriptor",
      configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
  }

  function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArray(elementObjects).map(function (elementObject) {
      var element = _toElementDescriptor(elementObject);

      _disallowProperty(elementObject, "finisher", "An element descriptor");

      _disallowProperty(elementObject, "extras", "An element descriptor");

      return element;
    });
  }

  function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);

    if (kind !== "method" && kind !== "field") {
      throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
    }

    var key = _toPropertyKey(elementObject.key);

    var placement = String(elementObject.placement);

    if (placement !== "static" && placement !== "prototype" && placement !== "own") {
      throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
    }

    var descriptor = elementObject.descriptor;

    _disallowProperty(elementObject, "elements", "An element descriptor");

    var element = {
      kind: kind,
      key: key,
      placement: placement,
      descriptor: Object.assign({}, descriptor)
    };

    if (kind !== "field") {
      _disallowProperty(elementObject, "initializer", "A method descriptor");
    } else {
      _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");

      _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");

      _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");

      element.initializer = elementObject.initializer;
    }

    return element;
  }

  function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);

    var finisher = _optionalCallableProperty(elementObject, "finisher");

    var extras = _toElementDescriptors(elementObject.extras);

    return {
      element: element,
      finisher: finisher,
      extras: extras
    };
  }

  function _fromClassDescriptor(elements) {
    var obj = {
      kind: "class",
      elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
      value: "Descriptor",
      configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
  }

  function _toClassDescriptor(obj) {
    var kind = String(obj.kind);

    if (kind !== "class") {
      throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
    }

    _disallowProperty(obj, "key", "A class descriptor");

    _disallowProperty(obj, "placement", "A class descriptor");

    _disallowProperty(obj, "descriptor", "A class descriptor");

    _disallowProperty(obj, "initializer", "A class descriptor");

    _disallowProperty(obj, "extras", "A class descriptor");

    var finisher = _optionalCallableProperty(obj, "finisher");

    var elements = _toElementDescriptors(obj.elements);

    return {
      elements: elements,
      finisher: finisher
    };
  }

  function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) {
      throw new TypeError(objectType + " can't have a ." + name + " property.");
    }
  }

  function _optionalCallableProperty(obj, name) {
    var value = obj[name];

    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }

    return value;
  }

  function assertString(input) {
    var isString = typeof input === 'string' || input instanceof String;

    if (!isString) {
      var invalidType;

      if (input === null) {
        invalidType = 'null';
      } else {
        invalidType = _typeof(input);

        if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
          invalidType = input.constructor.name;
        } else {
          invalidType = "a ".concat(invalidType);
        }
      }

      throw new TypeError("Expected string but received ".concat(invalidType, "."));
    }
  }

  function toDate(date) {
    assertString(date);
    date = Date.parse(date);
    return !isNaN(date) ? new Date(date) : null;
  }

  function toFloat(str) {
    assertString(str);
    return parseFloat(str);
  }

  function toInt(str, radix) {
    assertString(str);
    return parseInt(str, radix || 10);
  }

  function toBoolean(str, strict) {
    assertString(str);

    if (strict) {
      return str === '1' || str === 'true';
    }

    return str !== '0' && str !== 'false' && str !== '';
  }

  function equals(str, comparison) {
    assertString(str);
    return str === comparison;
  }

  function toString(input) {
    if (_typeof(input) === 'object' && input !== null) {
      if (typeof input.toString === 'function') {
        input = input.toString();
      } else {
        input = '[object Object]';
      }
    } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
      input = '';
    }

    return String(input);
  }

  function contains(str, elem) {
    assertString(str);
    return str.indexOf(toString(elem)) >= 0;
  }

  function matches(str, pattern, modifiers) {
    assertString(str);

    if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
      pattern = new RegExp(pattern, modifiers);
    }

    return pattern.test(str);
  }

  function merge() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaults = arguments.length > 1 ? arguments[1] : undefined;

    for (var key in defaults) {
      if (typeof obj[key] === 'undefined') {
        obj[key] = defaults[key];
      }
    }

    return obj;
  }
  /* eslint-disable prefer-rest-params */


  function isByteLength(str, options) {
    assertString(str);
    var min;
    var max;

    if (_typeof(options) === 'object') {
      min = options.min || 0;
      max = options.max;
    } else {
      // backwards compatibility: isByteLength(str, min [, max])
      min = arguments[1];
      max = arguments[2];
    }

    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === 'undefined' || len <= max);
  }

  var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false
  };

  function isFQDN(str, options) {
    assertString(str);
    options = merge(options, default_fqdn_options);
    /* Remove the optional trailing dot before checking validity */

    if (options.allow_trailing_dot && str[str.length - 1] === '.') {
      str = str.substring(0, str.length - 1);
    }

    var parts = str.split('.');

    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 63) {
        return false;
      }
    }

    if (options.require_tld) {
      var tld = parts.pop();

      if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
        return false;
      } // disallow spaces


      if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
        return false;
      }
    }

    for (var part, _i = 0; _i < parts.length; _i++) {
      part = parts[_i];

      if (options.allow_underscores) {
        part = part.replace(/_/g, '');
      }

      if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
        return false;
      } // disallow full-width chars


      if (/[\uff01-\uff5e]/.test(part)) {
        return false;
      }

      if (part[0] === '-' || part[part.length - 1] === '-') {
        return false;
      }
    }

    return true;
  }

  var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  var ipv6Block = /^[0-9A-F]{1,4}$/i;

  function isIP(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    assertString(str);
    version = String(version);

    if (!version) {
      return isIP(str, 4) || isIP(str, 6);
    } else if (version === '4') {
      if (!ipv4Maybe.test(str)) {
        return false;
      }

      var parts = str.split('.').sort(function (a, b) {
        return a - b;
      });
      return parts[3] <= 255;
    } else if (version === '6') {
      var blocks = str.split(':');
      var foundOmissionBlock = false; // marker to indicate ::
      // At least some OS accept the last 32 bits of an IPv6 address
      // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
      // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
      // and '::a.b.c.d' is deprecated, but also valid.

      var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
      var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

      if (blocks.length > expectedNumberOfBlocks) {
        return false;
      } // initial or final ::


      if (str === '::') {
        return true;
      } else if (str.substr(0, 2) === '::') {
        blocks.shift();
        blocks.shift();
        foundOmissionBlock = true;
      } else if (str.substr(str.length - 2) === '::') {
        blocks.pop();
        blocks.pop();
        foundOmissionBlock = true;
      }

      for (var i = 0; i < blocks.length; ++i) {
        // test for a :: which can not be at the string start/end
        // since those cases have been handled above
        if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
          if (foundOmissionBlock) {
            return false; // multiple :: in address
          }

          foundOmissionBlock = true;
        } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {// it has been checked before that the last
          // block is a valid IPv4 address
        } else if (!ipv6Block.test(blocks[i])) {
          return false;
        }
      }

      if (foundOmissionBlock) {
        return blocks.length >= 1;
      }

      return blocks.length === expectedNumberOfBlocks;
    }

    return false;
  }

  var default_email_options = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true
  };
  /* eslint-disable max-len */

  /* eslint-disable no-control-regex */

  var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
  var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
  var gmailUserPart = /^[a-z\d]+$/;
  var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
  var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
  var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
  /* eslint-enable max-len */

  /* eslint-enable no-control-regex */

  function isEmail(str, options) {
    assertString(str);
    options = merge(options, default_email_options);

    if (options.require_display_name || options.allow_display_name) {
      var display_email = str.match(displayName);

      if (display_email) {
        str = display_email[1];
      } else if (options.require_display_name) {
        return false;
      }
    }

    var parts = str.split('@');
    var domain = parts.pop();
    var user = parts.join('@');
    var lower_domain = domain.toLowerCase();

    if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
      /*
        Previously we removed dots for gmail addresses before validating.
        This was removed because it allows `multiple..dots@gmail.com`
        to be reported as valid, but it is not.
        Gmail only normalizes single dots, removing them from here is pointless,
        should be done in normalizeEmail
      */
      user = user.toLowerCase(); // Removing sub-address from username before gmail validation

      var username = user.split('+')[0]; // Dots are not included in gmail length restriction

      if (!isByteLength(username.replace('.', ''), {
        min: 6,
        max: 30
      })) {
        return false;
      }

      var _user_parts = username.split('.');

      for (var i = 0; i < _user_parts.length; i++) {
        if (!gmailUserPart.test(_user_parts[i])) {
          return false;
        }
      }
    }

    if (!isByteLength(user, {
      max: 64
    }) || !isByteLength(domain, {
      max: 254
    })) {
      return false;
    }

    if (!isFQDN(domain, {
      require_tld: options.require_tld
    })) {
      if (!options.allow_ip_domain) {
        return false;
      }

      if (!isIP(domain)) {
        if (!domain.startsWith('[') || !domain.endsWith(']')) {
          return false;
        }

        var noBracketdomain = domain.substr(1, domain.length - 2);

        if (noBracketdomain.length === 0 || !isIP(noBracketdomain)) {
          return false;
        }
      }
    }

    if (user[0] === '"') {
      user = user.slice(1, user.length - 1);
      return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }

    var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
    var user_parts = user.split('.');

    for (var _i = 0; _i < user_parts.length; _i++) {
      if (!pattern.test(user_parts[_i])) {
        return false;
      }
    }

    return true;
  }

  var default_url_options = {
    protocols: ['http', 'https', 'ftp'],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false
  };
  var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

  function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
  }

  function checkHost(host, matches) {
    for (var i = 0; i < matches.length; i++) {
      var match = matches[i];

      if (host === match || isRegExp(match) && match.test(host)) {
        return true;
      }
    }

    return false;
  }

  function isURL(url, options) {
    assertString(url);

    if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
      return false;
    }

    if (url.indexOf('mailto:') === 0) {
      return false;
    }

    options = merge(options, default_url_options);
    var protocol, auth, host, hostname, port, port_str, split, ipv6;
    split = url.split('#');
    url = split.shift();
    split = url.split('?');
    url = split.shift();
    split = url.split('://');

    if (split.length > 1) {
      protocol = split.shift().toLowerCase();

      if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
        return false;
      }
    } else if (options.require_protocol) {
      return false;
    } else if (url.substr(0, 2) === '//') {
      if (!options.allow_protocol_relative_urls) {
        return false;
      }

      split[0] = url.substr(2);
    }

    url = split.join('://');

    if (url === '') {
      return false;
    }

    split = url.split('/');
    url = split.shift();

    if (url === '' && !options.require_host) {
      return true;
    }

    split = url.split('@');

    if (split.length > 1) {
      if (options.disallow_auth) {
        return false;
      }

      auth = split.shift();

      if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
        return false;
      }
    }

    hostname = split.join('@');
    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);

    if (ipv6_match) {
      host = '';
      ipv6 = ipv6_match[1];
      port_str = ipv6_match[2] || null;
    } else {
      split = hostname.split(':');
      host = split.shift();

      if (split.length) {
        port_str = split.join(':');
      }
    }

    if (port_str !== null) {
      port = parseInt(port_str, 10);

      if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
        return false;
      }
    }

    if (!isIP(host) && !isFQDN(host, options) && (!ipv6 || !isIP(ipv6, 6))) {
      return false;
    }

    host = host || ipv6;

    if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
      return false;
    }

    if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
      return false;
    }

    return true;
  }

  var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
  var macAddressNoColons = /^([0-9a-fA-F]){12}$/;

  function isMACAddress(str, options) {
    assertString(str);

    if (options && options.no_colons) {
      return macAddressNoColons.test(str);
    }

    return macAddress.test(str);
  }

  var subnetMaybe = /^\d{1,2}$/;

  function isIPRange(str) {
    assertString(str);
    var parts = str.split('/'); // parts[0] -> ip, parts[1] -> subnet

    if (parts.length !== 2) {
      return false;
    }

    if (!subnetMaybe.test(parts[1])) {
      return false;
    } // Disallow preceding 0 i.e. 01, 02, ...


    if (parts[1].length > 1 && parts[1].startsWith('0')) {
      return false;
    }

    return isIP(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;
  }

  function isBoolean(str) {
    assertString(str);
    return ['true', 'false', '1', '0'].indexOf(str) >= 0;
  }

  var alpha = {
    'en-US': /^[A-Z]+$/i,
    'bg-BG': /^[А-Я]+$/i,
    'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    'da-DK': /^[A-ZÆØÅ]+$/i,
    'de-DE': /^[A-ZÄÖÜß]+$/i,
    'el-GR': /^[Α-ω]+$/i,
    'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
    'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
    'nb-NO': /^[A-ZÆØÅ]+$/i,
    'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
    'nn-NO': /^[A-ZÆØÅ]+$/i,
    'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
    'ru-RU': /^[А-ЯЁ]+$/i,
    'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
    'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
    'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
    'sv-SE': /^[A-ZÅÄÖ]+$/i,
    'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
    'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
    'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
  };
  var alphanumeric = {
    'en-US': /^[0-9A-Z]+$/i,
    'bg-BG': /^[0-9А-Я]+$/i,
    'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    'da-DK': /^[0-9A-ZÆØÅ]+$/i,
    'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
    'el-GR': /^[0-9Α-ω]+$/i,
    'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
    'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
    'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
    'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
    'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
    'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
    'ru-RU': /^[0-9А-ЯЁ]+$/i,
    'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
    'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
    'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
    'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
    'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
    'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
    'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
  };
  var decimal = {
    'en-US': '.',
    ar: '٫'
  };
  var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

  for (var locale, i = 0; i < englishLocales.length; i++) {
    locale = "en-".concat(englishLocales[i]);
    alpha[locale] = alpha['en-US'];
    alphanumeric[locale] = alphanumeric['en-US'];
    decimal[locale] = decimal['en-US'];
  } // Source: http://www.localeplanet.com/java/


  var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

  for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
    _locale = "ar-".concat(arabicLocales[_i]);
    alpha[_locale] = alpha.ar;
    alphanumeric[_locale] = alphanumeric.ar;
    decimal[_locale] = decimal.ar;
  } // Source: https://en.wikipedia.org/wiki/Decimal_mark


  var dotDecimal = [];
  var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fr-FR', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sl-SI', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];

  for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
    decimal[dotDecimal[_i2]] = decimal['en-US'];
  }

  for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
    decimal[commaDecimal[_i3]] = ',';
  }

  alpha['pt-BR'] = alpha['pt-PT'];
  alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
  decimal['pt-BR'] = decimal['pt-PT']; // see #862

  alpha['pl-Pl'] = alpha['pl-PL'];
  alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
  decimal['pl-Pl'] = decimal['pl-PL'];

  function isAlpha(str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
    assertString(str);

    if (locale in alpha) {
      return alpha[locale].test(str);
    }

    throw new Error("Invalid locale '".concat(locale, "'"));
  }

  var locales = Object.keys(alpha);

  function isAlphanumeric(str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
    assertString(str);

    if (locale in alphanumeric) {
      return alphanumeric[locale].test(str);
    }

    throw new Error("Invalid locale '".concat(locale, "'"));
  }

  var locales$1 = Object.keys(alphanumeric);
  var numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
  var numericNoSymbols = /^[0-9]+$/;

  function isNumeric(str, options) {
    assertString(str);

    if (options && options.no_symbols) {
      return numericNoSymbols.test(str);
    }

    return numeric.test(str);
  }

  var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
  var intLeadingZeroes = /^[-+]?[0-9]+$/;

  function isInt(str, options) {
    assertString(str);
    options = options || {}; // Get the regex to use for testing, based on whether
    // leading zeroes are allowed or not.

    var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt

    var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
    var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
    var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
    var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;
    return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
  }

  function isPort(str) {
    return isInt(str, {
      min: 0,
      max: 65535
    });
  }

  function isLowercase(str) {
    assertString(str);
    return str === str.toLowerCase();
  }

  function isUppercase(str) {
    assertString(str);
    return str === str.toUpperCase();
  }
  /* eslint-disable no-control-regex */


  var ascii = /^[\x00-\x7F]+$/;
  /* eslint-enable no-control-regex */

  function isAscii(str) {
    assertString(str);
    return ascii.test(str);
  }

  var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

  function isFullWidth(str) {
    assertString(str);
    return fullWidth.test(str);
  }

  var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

  function isHalfWidth(str) {
    assertString(str);
    return halfWidth.test(str);
  }

  function isVariableWidth(str) {
    assertString(str);
    return fullWidth.test(str) && halfWidth.test(str);
  }
  /* eslint-disable no-control-regex */


  var multibyte = /[^\x00-\x7F]/;
  /* eslint-enable no-control-regex */

  function isMultibyte(str) {
    assertString(str);
    return multibyte.test(str);
  }

  var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  function isSurrogatePair(str) {
    assertString(str);
    return surrogatePair.test(str);
  }

  function isFloat(str, options) {
    assertString(str);
    options = options || {};
    var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? decimal[options.locale] : '.', "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));

    if (str === '' || str === '.' || str === '-' || str === '+') {
      return false;
    }

    var value = parseFloat(str.replace(',', '.'));
    return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
  }

  var locales$2 = Object.keys(decimal);

  var includes = function includes(arr, val) {
    return arr.some(function (arrVal) {
      return val === arrVal;
    });
  };

  function decimalRegExp(options) {
    var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? '' : '?', "$"));
    return regExp;
  }

  var default_decimal_options = {
    force_decimal: false,
    decimal_digits: '1,',
    locale: 'en-US'
  };
  var blacklist = ['', '-', '+'];

  function isDecimal(str, options) {
    assertString(str);
    options = merge(options, default_decimal_options);

    if (options.locale in decimal) {
      return !includes(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
    }

    throw new Error("Invalid locale '".concat(options.locale, "'"));
  }

  var hexadecimal = /^[0-9A-F]+$/i;

  function isHexadecimal(str) {
    assertString(str);
    return hexadecimal.test(str);
  }

  function isDivisibleBy(str, num) {
    assertString(str);
    return toFloat(str) % parseInt(num, 10) === 0;
  }

  var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

  function isHexColor(str) {
    assertString(str);
    return hexcolor.test(str);
  }

  var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

  function isISRC(str) {
    assertString(str);
    return isrc.test(str);
  }

  var md5 = /^[a-f0-9]{32}$/;

  function isMD5(str) {
    assertString(str);
    return md5.test(str);
  }

  var lengths = {
    md5: 32,
    md4: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8
  };

  function isHash(str, algorithm) {
    assertString(str);
    var hash = new RegExp("^[a-f0-9]{".concat(lengths[algorithm], "}$"));
    return hash.test(str);
  }

  var jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;

  function isJWT(str) {
    assertString(str);
    return jwt.test(str);
  }

  function isJSON(str) {
    assertString(str);

    try {
      var obj = JSON.parse(str);
      return !!obj && _typeof(obj) === 'object';
    } catch (e) {
      /* ignore */
    }

    return false;
  }

  var default_is_empty_options = {
    ignore_whitespace: false
  };

  function isEmpty(str, options) {
    assertString(str);
    options = merge(options, default_is_empty_options);
    return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
  }
  /* eslint-disable prefer-rest-params */


  function isLength(str, options) {
    assertString(str);
    var min;
    var max;

    if (_typeof(options) === 'object') {
      min = options.min || 0;
      max = options.max;
    } else {
      // backwards compatibility: isLength(str, min [, max])
      min = arguments[1];
      max = arguments[2];
    }

    var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
    var len = str.length - surrogatePairs.length;
    return len >= min && (typeof max === 'undefined' || len <= max);
  }

  var uuid = {
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
  };

  function isUUID(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
    assertString(str);
    var pattern = uuid[version];
    return pattern && pattern.test(str);
  }

  function isMongoId(str) {
    assertString(str);
    return isHexadecimal(str) && str.length === 24;
  }

  function isAfter(str) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
    assertString(str);
    var comparison = toDate(date);
    var original = toDate(str);
    return !!(original && comparison && original > comparison);
  }

  function isBefore(str) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
    assertString(str);
    var comparison = toDate(date);
    var original = toDate(str);
    return !!(original && comparison && original < comparison);
  }

  function isIn(str, options) {
    assertString(str);
    var i;

    if (Object.prototype.toString.call(options) === '[object Array]') {
      var array = [];

      for (i in options) {
        if ({}.hasOwnProperty.call(options, i)) {
          array[i] = toString(options[i]);
        }
      }

      return array.indexOf(str) >= 0;
    } else if (_typeof(options) === 'object') {
      return options.hasOwnProperty(str);
    } else if (options && typeof options.indexOf === 'function') {
      return options.indexOf(str) >= 0;
    }

    return false;
  }
  /* eslint-disable max-len */


  var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
  /* eslint-enable max-len */

  function isCreditCard(str) {
    assertString(str);
    var sanitized = str.replace(/[- ]+/g, '');

    if (!creditCard.test(sanitized)) {
      return false;
    }

    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;

    for (var i = sanitized.length - 1; i >= 0; i--) {
      digit = sanitized.substring(i, i + 1);
      tmpNum = parseInt(digit, 10);

      if (shouldDouble) {
        tmpNum *= 2;

        if (tmpNum >= 10) {
          sum += tmpNum % 10 + 1;
        } else {
          sum += tmpNum;
        }
      } else {
        sum += tmpNum;
      }

      shouldDouble = !shouldDouble;
    }

    return !!(sum % 10 === 0 ? sanitized : false);
  }

  var validators = {
    ES: function ES(str) {
      assertString(str);
      var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
      var charsValue = {
        X: 0,
        Y: 1,
        Z: 2
      };
      var controlDigits = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; // sanitize user input

      var sanitized = str.trim().toUpperCase(); // validate the data structure

      if (!DNI.test(sanitized)) {
        return false;
      } // validate the control digit


      var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function (char) {
        return charsValue[char];
      });
      return sanitized.endsWith(controlDigits[number % 23]);
    }
  };

  function isIdentityCard(str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'any';
    assertString(str);

    if (locale in validators) {
      return validators[locale](str);
    } else if (locale === 'any') {
      for (var key in validators) {
        if (validators.hasOwnProperty(key)) {
          var validator = validators[key];

          if (validator(str)) {
            return true;
          }
        }
      }

      return false;
    }

    throw new Error("Invalid locale '".concat(locale, "'"));
  }

  var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

  function isISIN(str) {
    assertString(str);

    if (!isin.test(str)) {
      return false;
    }

    var checksumStr = str.replace(/[A-Z]/g, function (character) {
      return parseInt(character, 36);
    });
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble = true;

    for (var i = checksumStr.length - 2; i >= 0; i--) {
      digit = checksumStr.substring(i, i + 1);
      tmpNum = parseInt(digit, 10);

      if (shouldDouble) {
        tmpNum *= 2;

        if (tmpNum >= 10) {
          sum += tmpNum + 1;
        } else {
          sum += tmpNum;
        }
      } else {
        sum += tmpNum;
      }

      shouldDouble = !shouldDouble;
    }

    return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
  }

  var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
  var isbn13Maybe = /^(?:[0-9]{13})$/;
  var factor = [1, 3];

  function isISBN(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    assertString(str);
    version = String(version);

    if (!version) {
      return isISBN(str, 10) || isISBN(str, 13);
    }

    var sanitized = str.replace(/[\s-]+/g, '');
    var checksum = 0;
    var i;

    if (version === '10') {
      if (!isbn10Maybe.test(sanitized)) {
        return false;
      }

      for (i = 0; i < 9; i++) {
        checksum += (i + 1) * sanitized.charAt(i);
      }

      if (sanitized.charAt(9) === 'X') {
        checksum += 10 * 10;
      } else {
        checksum += 10 * sanitized.charAt(9);
      }

      if (checksum % 11 === 0) {
        return !!sanitized;
      }
    } else if (version === '13') {
      if (!isbn13Maybe.test(sanitized)) {
        return false;
      }

      for (i = 0; i < 12; i++) {
        checksum += factor[i % 2] * sanitized.charAt(i);
      }

      if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
        return !!sanitized;
      }
    }

    return false;
  }

  var issn = '^\\d{4}-?\\d{3}[\\dX]$';

  function isISSN(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    assertString(str);
    var testIssn = issn;
    testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
    testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');

    if (!testIssn.test(str)) {
      return false;
    }

    var digits = str.replace('-', '').toUpperCase();
    var checksum = 0;

    for (var i = 0; i < digits.length; i++) {
      var digit = digits[i];
      checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
    }

    return checksum % 11 === 0;
  }
  /* eslint-disable max-len */


  var phones = {
    'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
    'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
    'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
    'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
    'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
    'ar-KW': /^(\+?965)[569]\d{7}$/,
    'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
    'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
    'ar-TN': /^(\+?216)?[2459]\d{7}$/,
    'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
    'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
    'bn-BD': /\+?(88)?0?1[356789][0-9]{8}\b/,
    'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
    'de-DE': /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
    'el-GR': /^(\+?30|0)?(69\d{8})$/,
    'en-AU': /^(\+?61|0)4\d{8}$/,
    'en-GB': /^(\+?44|0)7\d{9}$/,
    'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
    'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
    'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
    'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
    'en-KE': /^(\+?254|0)?[7]\d{8}$/,
    'en-MU': /^(\+?230|0)?\d{8}$/,
    'en-NG': /^(\+?234|0)?[789]\d{9}$/,
    'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
    'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
    'en-RW': /^(\+?250|0)?[7]\d{8}$/,
    'en-SG': /^(\+65)?[89]\d{7}$/,
    'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
    'en-UG': /^(\+?256|0)?[7]\d{8}$/,
    'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    'en-ZA': /^(\+?27|0)\d{9}$/,
    'en-ZM': /^(\+?26)?09[567]\d{7}$/,
    'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
    'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
    'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
    'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
    'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
    'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    'fr-FR': /^(\+?33|0)[67]\d{8}$/,
    'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
    'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
    'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
    'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
    'kk-KZ': /^(\+?7|8)?7\d{9}$/,
    'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    'lt-LT': /^(\+370|8)\d{8}$/,
    'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
    'nb-NO': /^(\+?47)?[49]\d{7}$/,
    'nl-BE': /^(\+?32|0)4?\d{8}$/,
    'nn-NO': /^(\+?47)?[49]\d{7}$/,
    'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
    'pt-BR': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
    'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
    'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
    'ru-RU': /^(\+?7|8)?9\d{9}$/,
    'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
    'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
    'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
    'th-TH': /^(\+66|66|0)\d{9}$/,
    'tr-TR': /^(\+?90|0)?5\d{9}$/,
    'uk-UA': /^(\+?38|8)?0\d{9}$/,
    'vi-VN': /^(\+?84|0)((3([2-9]))|(5([689]))|(7([0|6-9]))|(8([1-5]))|(9([0-9])))([0-9]{7})$/,
    'zh-CN': /^((\+|00)86)?1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
    'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
  };
  /* eslint-enable max-len */
  // aliases

  phones['en-CA'] = phones['en-US'];
  phones['fr-BE'] = phones['nl-BE'];
  phones['zh-HK'] = phones['en-HK'];

  function isMobilePhone(str, locale, options) {
    assertString(str);

    if (options && options.strictMode && !str.startsWith('+')) {
      return false;
    }

    if (Array.isArray(locale)) {
      return locale.some(function (key) {
        if (phones.hasOwnProperty(key)) {
          var phone = phones[key];

          if (phone.test(str)) {
            return true;
          }
        }

        return false;
      });
    } else if (locale in phones) {
      return phones[locale].test(str); // alias falsey locale as 'any'
    } else if (!locale || locale === 'any') {
      for (var key in phones) {
        if (phones.hasOwnProperty(key)) {
          var phone = phones[key];

          if (phone.test(str)) {
            return true;
          }
        }
      }

      return false;
    }

    throw new Error("Invalid locale '".concat(locale, "'"));
  }

  var locales$3 = Object.keys(phones);

  function currencyRegex(options) {
    var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
    options.digits_after_decimal.forEach(function (digit, index) {
      if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
    });
    var symbol = "(\\".concat(options.symbol.replace(/\./g, '\\.'), ")").concat(options.require_symbol ? '' : '?'),
        negative = '-?',
        whole_dollar_amount_without_sep = '[1-9]\\d*',
        whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"),
        valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
        whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join('|'), ")?"),
        decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? '' : '?');
    var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ''); // default is negative sign before symbol, but there are two other options (besides parens)

    if (options.allow_negatives && !options.parens_for_negatives) {
      if (options.negative_sign_after_digits) {
        pattern += negative;
      } else if (options.negative_sign_before_digits) {
        pattern = negative + pattern;
      }
    } // South African Rand, for example, uses R 123 (space) and R-123 (no space)


    if (options.allow_negative_sign_placeholder) {
      pattern = "( (?!\\-))?".concat(pattern);
    } else if (options.allow_space_after_symbol) {
      pattern = " ?".concat(pattern);
    } else if (options.allow_space_after_digits) {
      pattern += '( (?!$))?';
    }

    if (options.symbol_after_digits) {
      pattern += symbol;
    } else {
      pattern = symbol + pattern;
    }

    if (options.allow_negatives) {
      if (options.parens_for_negatives) {
        pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
      } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
        pattern = negative + pattern;
      }
    } // ensure there's a dollar and/or decimal amount, and that
    // it doesn't start with a space or a negative sign followed by a space


    return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
  }

  var default_currency_options = {
    symbol: '$',
    require_symbol: false,
    allow_space_after_symbol: false,
    symbol_after_digits: false,
    allow_negatives: true,
    parens_for_negatives: false,
    negative_sign_before_digits: false,
    negative_sign_after_digits: false,
    allow_negative_sign_placeholder: false,
    thousands_separator: ',',
    decimal_separator: '.',
    allow_decimal: true,
    require_decimal: false,
    digits_after_decimal: [2],
    allow_space_after_digits: false
  };

  function isCurrency(str, options) {
    assertString(str);
    options = merge(options, default_currency_options);
    return currencyRegex(options).test(str);
  }
  /* eslint-disable max-len */
  // from http://goo.gl/0ejHHW


  var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
  /* eslint-enable max-len */

  var isValidDate = function isValidDate(str) {
    // str must have passed the ISO8601 check
    // this check is meant to catch invalid dates
    // like 2009-02-31
    // first check for ordinal dates
    var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);

    if (ordinalMatch) {
      var oYear = Number(ordinalMatch[1]);
      var oDay = Number(ordinalMatch[2]); // if is leap year

      if (oYear % 4 === 0 && oYear % 100 !== 0) return oDay <= 366;
      return oDay <= 365;
    }

    var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
    var year = match[1];
    var month = match[2];
    var day = match[3];
    var monthString = month ? "0".concat(month).slice(-2) : month;
    var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare

    var d = new Date("".concat(year, "-").concat(monthString || '01', "-").concat(dayString || '01'));
    if (isNaN(d.getUTCFullYear())) return false;

    if (month && day) {
      return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
    }

    return true;
  };

  function isISO8601(str, options) {
    assertString(str);
    var check = iso8601.test(str);
    if (!options) return check;
    if (check && options.strict) return isValidDate(str);
    return check;
  }
  /* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */


  var dateFullYear = /[0-9]{4}/;
  var dateMonth = /(0[1-9]|1[0-2])/;
  var dateMDay = /([12]\d|0[1-9]|3[01])/;
  var timeHour = /([01][0-9]|2[0-3])/;
  var timeMinute = /[0-5][0-9]/;
  var timeSecond = /([0-5][0-9]|60)/;
  var timeSecFrac = /(\.[0-9]+)?/;
  var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
  var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
  var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
  var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
  var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
  var rfc3339 = new RegExp("".concat(fullDate.source, "[ tT]").concat(fullTime.source));

  function isRFC3339(str) {
    assertString(str);
    return rfc3339.test(str);
  }

  var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

  function isISO31661Alpha2(str) {
    assertString(str);
    return includes(validISO31661Alpha2CountriesCodes, str.toUpperCase());
  }

  var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];

  function isISO31661Alpha3(str) {
    assertString(str);
    return includes(validISO31661Alpha3CountriesCodes, str.toUpperCase());
  }

  var notBase64 = /[^A-Z0-9+\/=]/i;

  function isBase64(str) {
    assertString(str);
    var len = str.length;

    if (!len || len % 4 !== 0 || notBase64.test(str)) {
      return false;
    }

    var firstPaddingChar = str.indexOf('=');
    return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
  }

  var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;
  var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
  var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

  function isDataURI(str) {
    assertString(str);
    var data = str.split(',');

    if (data.length < 2) {
      return false;
    }

    var attributes = data.shift().trim().split(';');
    var schemeAndMediaType = attributes.shift();

    if (schemeAndMediaType.substr(0, 5) !== 'data:') {
      return false;
    }

    var mediaType = schemeAndMediaType.substr(5);

    if (mediaType !== '' && !validMediaType.test(mediaType)) {
      return false;
    }

    for (var i = 0; i < attributes.length; i++) {
      if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {// ok
      } else if (!validAttribute.test(attributes[i])) {
        return false;
      }
    }

    for (var _i = 0; _i < data.length; _i++) {
      if (!validData.test(data[_i])) {
        return false;
      }
    }

    return true;
  }

  var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

  function isMagnetURI(url) {
    assertString(url);
    return magnetURI.test(url.trim());
  }
  /*
    Checks if the provided string matches to a correct Media type format (MIME type)
  
    This function only checks is the string format follows the
    etablished rules by the according RFC specifications.
    This function supports 'charset' in textual media types
    (https://tools.ietf.org/html/rfc6657).
  
    This function does not check against all the media types listed
    by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
    because of lightness purposes : it would require to include
    all these MIME types in this librairy, which would weigh it
    significantly. This kind of effort maybe is not worth for the use that
    this function has in this entire librairy.
  
    More informations in the RFC specifications :
    - https://tools.ietf.org/html/rfc2045
    - https://tools.ietf.org/html/rfc2046
    - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
    - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
  */
  // Match simple MIME types
  // NB :
  //   Subtype length must not exceed 100 characters.
  //   This rule does not comply to the RFC specs (what is the max length ?).


  var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len
  // Handle "charset" in "text/*"

  var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
  // Handle "boundary" in "multipart/*"

  var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

  function isMimeType(str) {
    assertString(str);
    return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
  }

  var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
  var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

  var isLatLong = function (str) {
    assertString(str);
    if (!str.includes(',')) return false;
    var pair = str.split(',');
    return lat.test(pair[0]) && long.test(pair[1]);
  };

  var threeDigit = /^\d{3}$/;
  var fourDigit = /^\d{4}$/;
  var fiveDigit = /^\d{5}$/;
  var sixDigit = /^\d{6}$/;
  var patterns = {
    AD: /^AD\d{3}$/,
    AT: fourDigit,
    AU: fourDigit,
    BE: fourDigit,
    BG: fourDigit,
    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    CH: fourDigit,
    CZ: /^\d{3}\s?\d{2}$/,
    DE: fiveDigit,
    DK: fourDigit,
    DZ: fiveDigit,
    EE: fiveDigit,
    ES: fiveDigit,
    FI: fiveDigit,
    FR: /^\d{2}\s?\d{3}$/,
    GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    GR: /^\d{3}\s?\d{2}$/,
    HR: /^([1-5]\d{4}$)/,
    HU: fourDigit,
    IL: fiveDigit,
    IN: sixDigit,
    IS: threeDigit,
    IT: fiveDigit,
    JP: /^\d{3}\-\d{4}$/,
    KE: fiveDigit,
    LI: /^(948[5-9]|949[0-7])$/,
    LT: /^LT\-\d{5}$/,
    LU: fourDigit,
    LV: /^LV\-\d{4}$/,
    MX: fiveDigit,
    NL: /^\d{4}\s?[a-z]{2}$/i,
    NO: fourDigit,
    PL: /^\d{2}\-\d{3}$/,
    PT: /^\d{4}\-\d{3}?$/,
    RO: sixDigit,
    RU: sixDigit,
    SA: fiveDigit,
    SE: /^\d{3}\s?\d{2}$/,
    SI: fourDigit,
    SK: /^\d{3}\s?\d{2}$/,
    TN: fourDigit,
    TW: /^\d{3}(\d{2})?$/,
    UA: fiveDigit,
    US: /^\d{5}(-\d{4})?$/,
    ZA: fourDigit,
    ZM: fiveDigit
  };
  var locales$4 = Object.keys(patterns);

  var isPostalCode = function (str, locale) {
    assertString(str);

    if (locale in patterns) {
      return patterns[locale].test(str);
    } else if (locale === 'any') {
      for (var key in patterns) {
        if (patterns.hasOwnProperty(key)) {
          var pattern = patterns[key];

          if (pattern.test(str)) {
            return true;
          }
        }
      }

      return false;
    }

    throw new Error("Invalid locale '".concat(locale, "'"));
  };

  function ltrim(str, chars) {
    assertString(str);
    var pattern = chars ? new RegExp("^[".concat(chars, "]+"), 'g') : /^\s+/g;
    return str.replace(pattern, '');
  }

  function rtrim(str, chars) {
    assertString(str);
    var pattern = chars ? new RegExp("[".concat(chars, "]")) : /\s/;
    var idx = str.length - 1;

    for (; idx >= 0 && pattern.test(str[idx]); idx--) {}

    return idx < str.length ? str.substr(0, idx + 1) : str;
  }

  function trim(str, chars) {
    return rtrim(ltrim(str, chars), chars);
  }

  function escape(str) {
    assertString(str);
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
  }

  function unescape(str) {
    assertString(str);
    return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
  }

  function blacklist$1(str, chars) {
    assertString(str);
    return str.replace(new RegExp("[".concat(chars, "]+"), 'g'), '');
  }

  function stripLow(str, keep_new_lines) {
    assertString(str);
    var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
    return blacklist$1(str, chars);
  }

  function whitelist(str, chars) {
    assertString(str);
    return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
  }

  function isWhitelisted(str, chars) {
    assertString(str);

    for (var i = str.length - 1; i >= 0; i--) {
      if (chars.indexOf(str[i]) === -1) {
        return false;
      }
    }

    return true;
  }

  var default_normalize_email_options = {
    // The following options apply to all email addresses
    // Lowercases the local part of the email address.
    // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
    // The domain is always lowercased, as per RFC 1035
    all_lowercase: true,
    // The following conversions are specific to GMail
    // Lowercases the local part of the GMail address (known to be case-insensitive)
    gmail_lowercase: true,
    // Removes dots from the local part of the email address, as that's ignored by GMail
    gmail_remove_dots: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    gmail_remove_subaddress: true,
    // Conversts the googlemail.com domain to gmail.com
    gmail_convert_googlemaildotcom: true,
    // The following conversions are specific to Outlook.com / Windows Live / Hotmail
    // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
    outlookdotcom_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    outlookdotcom_remove_subaddress: true,
    // The following conversions are specific to Yahoo
    // Lowercases the local part of the Yahoo address (known to be case-insensitive)
    yahoo_lowercase: true,
    // Removes the subaddress (e.g. "-foo") from the email address
    yahoo_remove_subaddress: true,
    // The following conversions are specific to Yandex
    // Lowercases the local part of the Yandex address (known to be case-insensitive)
    yandex_lowercase: true,
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: true
  }; // List of domains used by iCloud

  var icloud_domains = ['icloud.com', 'me.com']; // List of domains used by Outlook.com and its predecessors
  // This list is likely incomplete.
  // Partial reference:
  // https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/

  var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com']; // List of domains used by Yahoo Mail
  // This list is likely incomplete

  var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com']; // List of domains used by yandex.ru

  var yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru']; // replace single dots, but not multiple consecutive dots

  function dotsReplacer(match) {
    if (match.length > 1) {
      return match;
    }

    return '';
  }

  function normalizeEmail(email, options) {
    options = merge(options, default_normalize_email_options);
    var raw_parts = email.split('@');
    var domain = raw_parts.pop();
    var user = raw_parts.join('@');
    var parts = [user, domain]; // The domain is always lowercased, as it's case-insensitive per RFC 1035

    parts[1] = parts[1].toLowerCase();

    if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
      // Address is GMail
      if (options.gmail_remove_subaddress) {
        parts[0] = parts[0].split('+')[0];
      }

      if (options.gmail_remove_dots) {
        // this does not replace consecutive dots like example..email@gmail.com
        parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
      }

      if (!parts[0].length) {
        return false;
      }

      if (options.all_lowercase || options.gmail_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }

      parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
    } else if (icloud_domains.indexOf(parts[1]) >= 0) {
      // Address is iCloud
      if (options.icloud_remove_subaddress) {
        parts[0] = parts[0].split('+')[0];
      }

      if (!parts[0].length) {
        return false;
      }

      if (options.all_lowercase || options.icloud_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
    } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
      // Address is Outlook.com
      if (options.outlookdotcom_remove_subaddress) {
        parts[0] = parts[0].split('+')[0];
      }

      if (!parts[0].length) {
        return false;
      }

      if (options.all_lowercase || options.outlookdotcom_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
    } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
      // Address is Yahoo
      if (options.yahoo_remove_subaddress) {
        var components = parts[0].split('-');
        parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
      }

      if (!parts[0].length) {
        return false;
      }

      if (options.all_lowercase || options.yahoo_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
    } else if (yandex_domains.indexOf(parts[1]) >= 0) {
      if (options.all_lowercase || options.yandex_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }

      parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preffered
    } else if (options.all_lowercase) {
      // Any other address
      parts[0] = parts[0].toLowerCase();
    }

    return parts.join('@');
  }

  var version = '10.11.0';
  var validator = {
    version: version,
    toDate: toDate,
    toFloat: toFloat,
    toInt: toInt,
    toBoolean: toBoolean,
    equals: equals,
    contains: contains,
    matches: matches,
    isEmail: isEmail,
    isURL: isURL,
    isMACAddress: isMACAddress,
    isIP: isIP,
    isIPRange: isIPRange,
    isFQDN: isFQDN,
    isBoolean: isBoolean,
    isAlpha: isAlpha,
    isAlphaLocales: locales,
    isAlphanumeric: isAlphanumeric,
    isAlphanumericLocales: locales$1,
    isNumeric: isNumeric,
    isPort: isPort,
    isLowercase: isLowercase,
    isUppercase: isUppercase,
    isAscii: isAscii,
    isFullWidth: isFullWidth,
    isHalfWidth: isHalfWidth,
    isVariableWidth: isVariableWidth,
    isMultibyte: isMultibyte,
    isSurrogatePair: isSurrogatePair,
    isInt: isInt,
    isFloat: isFloat,
    isFloatLocales: locales$2,
    isDecimal: isDecimal,
    isHexadecimal: isHexadecimal,
    isDivisibleBy: isDivisibleBy,
    isHexColor: isHexColor,
    isISRC: isISRC,
    isMD5: isMD5,
    isHash: isHash,
    isJWT: isJWT,
    isJSON: isJSON,
    isEmpty: isEmpty,
    isLength: isLength,
    isByteLength: isByteLength,
    isUUID: isUUID,
    isMongoId: isMongoId,
    isAfter: isAfter,
    isBefore: isBefore,
    isIn: isIn,
    isCreditCard: isCreditCard,
    isIdentityCard: isIdentityCard,
    isISIN: isISIN,
    isISBN: isISBN,
    isISSN: isISSN,
    isMobilePhone: isMobilePhone,
    isMobilePhoneLocales: locales$3,
    isPostalCode: isPostalCode,
    isPostalCodeLocales: locales$4,
    isCurrency: isCurrency,
    isISO8601: isISO8601,
    isRFC3339: isRFC3339,
    isISO31661Alpha2: isISO31661Alpha2,
    isISO31661Alpha3: isISO31661Alpha3,
    isBase64: isBase64,
    isDataURI: isDataURI,
    isMagnetURI: isMagnetURI,
    isMimeType: isMimeType,
    isLatLong: isLatLong,
    ltrim: ltrim,
    rtrim: rtrim,
    trim: trim,
    escape: escape,
    unescape: unescape,
    stripLow: stripLow,
    whitelist: whitelist,
    blacklist: blacklist$1,
    isWhitelisted: isWhitelisted,
    normalizeEmail: normalizeEmail,
    toString: toString
  };
  return validator;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<h2>{{item.title}}</h2>\n<span ng-bind-html=\"item.description.indexOf('data:text/html') === 0 ? item.description.replace('data:text/html,', '') : (item.description | linky)\"></span>\n\n<p class=\"required-info\" ng-if=\"$index === 0\">* <span translate=\".required\">Required</span></p>";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\">\n    <md-autocomplete md-selected-item=\"selectedItem\" md-search-text=\"searchText\" md-items=\"item in querySearch(searchText)\">\n        <md-item-template>\n            <span class=\"item-title\">\n                <md-icon md-svg-icon=\"img/icons/octicon-repo.svg\"></md-icon>\n            </span>\n            <span class=\"item-metadata\">\n                <span>\n                    <strong>{{item.title}}</strong>\n                </span>\n                <span>\n                    <strong>{{item.description}}</strong>\n                </span>\n            </span>\n        </md-item-template>\n    </md-autocomplete>\n</div>\n";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\">\n    <md-checkbox ng-repeat=\"option in question.options\" ng-checked=\"exists(option, question.answer)\" ng-click=\"toggle(option, question.answer)\"  class=\"md-primary\" ng-disabled=\"disabled\">\n        {{option.name}}\n    </md-checkbox>\n</div>\n";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<md-input-container class=\"md-block\">\n    <textarea ng-model=\"question.answer\" md-maxlength=\"2000\" rows=\"5\" md-select-on-focus ng-required=\"question.required\" name=\"{{question.ask}}\" ng-disabled=\"disabled\"></textarea>\n</md-input-container>\n";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<md-radio-group ng-model=\"question.answer\" ng-required=\"question.required\" name=\"{{question.ask}}\" ng-disabled=\"disabled\">\n\n    <md-radio-button ng-repeat=\"option in question.options\" value=\"{{option.name}}\" class=\"md-primary\">{{option.name}}</md-radio-button>\n\n</md-radio-group>\n";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<md-input-container>\n    <input ng-model=\"question.answer\" ng-required=\"question.required\" name=\"{{question.ask}}\" ng-disabled=\"disabled\" question-validator>\n    <form-display_content_question_validators></form-display_content_question_validators>\n</md-input-container>";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=\"display\">\n    <form-display_content_question_displays_radio-button-list ng-if=\"question.type === 'radioButtonList'\">\n    </form-display_content_question_displays_radio-button-list>\n    <form-display_content_question_displays_check-box-list ng-if=\"question.type === 'checkBoxList'\">\n    </form-display_content_question_displays_check-box-list>\n    <form-display_content_question_displays_short-text ng-if=\"question.type === 'shortText'\">\n    </form-display_content_question_displays_short-text>\n    <form-display_content_question_displays_long-text ng-if=\"question.type === 'longText'\">\n    </form-display_content_question_displays_long-text>\n    <form-display_content_question_displays_autocomplete ng-if=\"question.type === 'autocomplete'\">\n    </form-display_content_question_displays_autocomplete>\n</div>";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<ng-messages for=\"ngForm[question.ask].$error\" role=\"alert\" ng-if=\"!disabled && (!ngForm[question.ask].$pristine || ngForm.$submitted)\">\n    <ng-message when=\"required\" translate=\".validator.required\">This item is required</ng-message>\n    <ng-message ng-repeat=\"validator in question.validation.items\" when=\"{{validator.name}}\">\n        <span ng-if=\"!validator.message\" translate=\".validator.{{validator.name}}\" translate-values=\"{ param: validator.param }\"></span>\n        <span ng-if=\"validator.message\">{{validator.message}}</span>\n    </ng-message>\n</ng-messages>";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=\"question\" layout=\"row\" layout-align=\"start center\">\n    <label>{{question.ask}} <span class=\"required\" ng-if=\"question.required\">*</span></label>\n\n    <form-display_content_question_displays>\n    </form-display_content_question_displays>\n</div>";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div ng-repeat=\"item in form.items\" ng-show=\"!item.hidden\">\n    <form-display_content_heading ng-init=\"heading=item\" ng-if=\"item.type === 'heading'\">\n    </form-display_content_heading>\n    <form-display_content_question ng-init=\"question=item.question\" ng-if=\"item.type === 'question'\">\n    </form-display_content_question>\n    <form-display_content ng-init=\"form=item\" ng-if=\"item.type === 'section'\">\n    </form-display_content>\n</div>";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form-display_content ng-form=\"ngForm\">\n    </form-display_content>\n</div>";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<md-icon class=\"drag-handle\"><i class=\"material-icons\">drag_handle</i></md-icon>\n";

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = JSON.parse("{\"createNewQuestion\":\"Utwórz nowe pytanie\",\"createNewHeading\":\"Utwórz nowy nagłówek\",\"createNewSection\":\"Utwórz nową sekcję\"}");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-whiteframe-z1 editing-menu\" layout=\"row\" layout-gt-sm=\"column\" layout-align=\"start center\">\n    <md-button class=\"md-icon-button\" ng-click=\"addNewQuestion()\">\n        <md-tooltip md-direction=\"right\">\n            <span translate=\"formEditor.editingMenu.createNewQuestion\">Add new question</span>\n        </md-tooltip>\n        <md-icon>\n            <i class=\"material-icons\">add_circle</i>\n        </md-icon>\n    </md-button>\n    <md-button class=\"md-icon-button\" ng-click=\"addNewHeading()\">\n        <md-tooltip md-direction=\"right\">\n            <span translate=\"formEditor.editingMenu.createNewHeading\">Add new heading</span>\n        </md-tooltip>\n        <md-icon>\n            <i class=\"material-icons\">text_fields</i>\n        </md-icon>\n    </md-button>\n    <md-button class=\"md-icon-button\" ng-click=\"addNewSection()\">\n        <md-tooltip md-direction=\"right\">\n            <span translate=\"formEditor.editingMenu.createNewSection\">Add new section</span>\n        </md-tooltip>\n        <md-icon>\n            <i class=\"material-icons\">view_agenda</i>\n        </md-icon>\n    </md-button>\n</div>";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" class=\"editable\" ng-class=\"{ 'editing': editingItem === heading, 'locked': item.settings.locked }\" ng-click=\"setEditingItem(item, section, $event)\">\n    <div layout=\"row\" layout-align=\"center center\">\n        <form-editor_drag-handle class=\"item-drag-handle editing-ui\" as-sortable-item-handle ng-mousedown=\"setEditingItem(item, section, $event)\"></form-editor_drag-handle>\n    </div>\n    <md-input-container class=\"big\" md-no-float>\n        <input ng-model=\"heading.title\" ng-focus=\"setEditingItem(heading, $event)\" placeholder=\"Title\">\n    </md-input-container>\n\n    <md-input-container class=\"small\" md-no-float>\n        <input ng-model=\"heading.description\" ng-focus=\"setEditingItem(heading, $event)\" placeholder=\"Description\">\n    </md-input-container>\n\n    <div layout=\"row\" class=\"editing-ui\" layout-align=\"end center\" layout-padding ng-if=\"!item.settings.locked\">\n            <md-button class=\"md-icon-button\" ng-click=\"deleteItem(item)\">\n                <md-icon><i class=\"material-icons\">delete</i></md-icon>\n            </md-button>\n        </div>\n</div>\n";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<div ng-repeat=\"property in getProperties()\">\n    <div layout=\"row\" layout-align=\"start center\">\n        <span class=\"title\">{{property.title}}</span>\n        <md-input-container flex>\n            <input ng-model=\"property.value\">\n        </md-input-container>\n    </div>\n\n    <div ui-ace></div>\n</div>";

/***/ }),
/* 24 */
/***/ (function(module) {

module.exports = JSON.parse("{\"answerValidation\":\"Weryfikacja odpowiedzi\"}");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "Autocomplete";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<form-editor_question_editors_options></form-editor_question_editors_options>\n";

/***/ }),
/* 27 */
/***/ (function(module) {

module.exports = JSON.parse("{\"longTextContent\":\"Tekst długiej odpowiedzi\"}");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span translate=\"formEditor.question.editors.longText.longTextContent\">Long text content</span>\n    <br>\n    .<br>.<br>.<br>\n</div>\n";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"start center\">\n    <form-editor_drag-handle ng-class=\"{hidden: question.options.length <= 1}\" class=\"editing-ui vertical\" as-sortable-item-handle></form-editor_drag-handle>\n    <md-icon ng-if=\"question.type === 'radioButtonList'\"><i class=\"material-icons\">radio_button_unchecked</i></md-icon>\n    <md-icon ng-if=\"question.type === 'checkBoxList'\"><i class=\"material-icons\">check_box_outline_blank</i></md-icon>\n    <md-input-container md-no-float flex>\n        <input ng-model=\"option.name\" placeholder=\"Option\" ng-focus=\"setEditingItem(item, $event)\" ng-keyup=\"handleKeyUp($event)\">\n    </md-input-container>\n    <md-button class=\"md-icon-button editing-ui\" ng-click=\"deleteOption(option)\" ng-if=\"question.options.length > 1\" tabindex=\"-1\">\n        <md-icon md-menu-origin><i class=\"material-icons\">close</i></md-icon>\n    </md-button>\n</div>\n";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<div class=\"placeholder\" layout=\"row\" layout-align=\"start center\">\n    <form-editor_drag-handle class=\"editing-ui\" as-sortable-item-handle style=\"visibility: hidden\"></form-editor_drag-handle>\n        <md-icon ng-if=\"question.type === 'radioButtonList'\"><i class=\"material-icons\">radio_button_unchecked</i></md-icon>\n    <md-icon ng-if=\"question.type === 'checkBoxList'\"><i class=\"material-icons\">check_box_outline_blank</i></md-icon>\n    <md-input-container md-no-float flex>\n        <a ng-click=\"addNewOption($event)\">Add new option</a>\n    </md-input-container>\n</div>\n";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<div as-sortable=\"sortable.options\" ng-model=\"question.options\">\n    <form-editor_question_editors_options_item ng-repeat=\"option in question.options\" as-sortable-item></form-editor_question_editors_options_item>\n</div>\n<form-editor_question_editors_options_placeholder class=\"editing-ui\"></form-editor_question_editors_options_placeholder>\n";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<form-editor_question_editors_options></form-editor_question_editors_options>\n";

/***/ }),
/* 37 */
/***/ (function(module) {

module.exports = JSON.parse("{\"shortTextContent\":\"Tekst krótkiej odpowiedzi\"}");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span translate=\"formEditor.question.editors.shortText.shortTextContent\">Short text content</span>\n</div>\n";

/***/ }),
/* 40 */
/***/ (function(module) {

module.exports = JSON.parse("{\"radioButtons\":\"Pojedynczy wybór\",\"checkBoxes\":\"Wielokrotny wybór\",\"shortText\":\"Krótki tekst\",\"longText\":\"Długi tekst\"}");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div layout-align=\"center center\" layout=\"row\">\n        <md-select ng-model=\"question.type\">\n            <md-option value=\"shortText\">\n                <md-icon style=\"margin-right: 10px;\">\n                    <i class=\"material-icons\">short_text</i>\n                </md-icon>\n                <span translate=\"formEditor.question.typeSelectMenu.shortText\">Short text</span>\n            </md-option>\n            <md-option value=\"longText\">\n                <md-icon style=\"margin-right: 10px;\">\n                    <i class=\"material-icons\">view_headline</i>\n                </md-icon>\n                <span translate=\"formEditor.question.typeSelectMenu.longText\">Long text</span>\n            </md-option>\n            <md-divider></md-divider>\n            <md-option value=\"radioButtonList\">\n                <md-icon style=\"margin-right: 10px;\">\n                    <i class=\"material-icons\">radio_button_checked</i>\n                </md-icon>\n                <span translate=\"formEditor.question.typeSelectMenu.radioButtons\">Radio buttons</span>\n            </md-option>\n            <md-option value=\"checkBoxList\">\n                <md-icon style=\"margin-right: 10px;\">\n                    <i class=\"material-icons\">check_box</i>\n                </md-icon>\n                <span translate=\"formEditor.question.typeSelectMenu.checkBoxes\">Check boxes</span>\n            </md-option>\n        </md-select>\n</div>";

/***/ }),
/* 43 */
/***/ (function(module) {

module.exports = JSON.parse("{\"number\":\"Number\",\"text\":\"Text\",\"regex\":\"Regular expression\",\"expression\":\"Expression\",\"gt\":\"Greater than\",\"gte\":\"Greater than or equal\",\"lt\":\"Less than\",\"lte\":\"Less than or equal\",\"eq\":\"Equal\",\"ne\":\"Not equal\",\"contains\":\"Contains\",\"notContains\":\"Not contains\",\"isEmail\":\"Email address\",\"isURL\":\"URL\",\"matches\":\"Matches\",\"notMatches\":\"Doesn't match\",\"customErrorMessage\":\"Custom error message\"}");

/***/ }),
/* 44 */
/***/ (function(module) {

module.exports = JSON.parse("{\"number\":\"Liczba\",\"text\":\"Tekst\",\"regex\":\"Wyrażenie regularne\",\"expression\":\"Wyrażenie\",\"gt\":\"Większe niż\",\"gte\":\"Większe lub równe\",\"lt\":\"Mniejsze niż\",\"lte\":\"Mniejsze lub równe\",\"eq\":\"Równe\",\"ne\":\"Różne\",\"contains\":\"Zawiera\",\"notContains\":\"Nie zawiera\",\"isEmail\":\"Adres e-mail\",\"isURL\":\"URL\",\"matches\":\"Spełnia\",\"notMatches\":\"Nie spełnia\",\"customErrorMessage\":\"Niestandardowy tekst błędu\"}");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"start start\" flex>\n    <md-select ng-model=\"validator.group\">\n        <md-option value=\"number\"><span translate=\"formEditor.question.validators.number\">Number</span></md-option>\n        <md-option value=\"text\"><span translate=\"formEditor.question.validators.text\">Text</span></md-option>\n        <md-option value=\"regex\"><span translate=\"formEditor.question.validators.regex\">Regular expression</span></md-option>\n      </md-select>\n\n      <md-select ng-model=\"validator.name\">\n        <md-option ng-repeat=\"v in getValidatorsForGroup(validator.group)\" ng-value=\"v[1]\"><span translate=\"formEditor.question.validators.{{v[0][1]}}\"></span></md-option>\n      </md-select>\n\n      <md-input-container ng-if=\"hasParam('number')\" flex>\n        <label><span translate=\"formEditor.question.validators.number\">Number</span></label>\n        <input ng-model=\"validator.param\" type=\"number\">\n      </md-input-container>\n\n      <md-input-container ng-if=\"hasParam('text')\" flex>\n        <label>\n            <span ng-if=\"validator.group !== 'regex'\" translate=\"formEditor.question.validators.text\">Text</span>\n            <span ng-if=\"validator.group === 'regex'\" translate=\"formEditor.question.validators.expression\">Expression</span>\n        </label>\n        <input ng-model=\"validator.param\">\n      </md-input-container>\n\n      <md-input-container flex>\n        <label translate=\"formEditor.question.validators.customErrorMessage\">Custom error message</label>\n        <input ng-model=\"validator.message\">\n      </md-input-container>\n\n      <md-button class=\"md-icon-button remove-validator-button\" ng-click=\"toggleValidation(question)\">\n          <md-icon>\n              <i class=\"material-icons\">close</i>\n          </md-icon>\n      </md-button>\n</div>\n";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<div class=\"editable\" ng-class=\"{ 'editing': editingItem === item, 'last': $last }\" ng-click=\"setEditingItem(item, section, $event);\">\n    <div layout=\"row\" layout-align=\"center center\">\n        <form-editor_drag-handle class=\"item-drag-handle editing-ui\" as-sortable-item-handle ng-mousedown=\"setEditingItem(item, section, $event)\"></form-editor_drag-handle>\n    </div>\n    <div class=\"basic-settings\" layout=\"column\" layout-gt-sm=\"row\" layout-align=\"start center\">\n        <md-input-container md-no-float class=\"question-input\" flex>\n            <input ng-model=\"question.ask\" placeholder=\"Question\" ng-focus=\"setEditingItem(item, $event)\">\n        </md-input-container>\n        <form-editor_question_type-select-menu class=\"editing-ui\"></form-editor_question_type-select-menu>\n    </div>\n\n    <div class=\"answer-editor\">\n        <form-editor_question_editors_radio-button-list ng-if=\"question.type === 'radioButtonList'\"></form-editor_question_editors_radio-button-list>\n        <form-editor_question_editors_check-box-list ng-if=\"question.type === 'checkBoxList'\"></form-editor_question_editors_check-box-list>\n        <form-editor_question_editors_short-text ng-if=\"question.type === 'shortText'\"></form-editor_question_editors_short-text>\n        <form-editor_question_editors_long-text ng-if=\"question.type === 'longText'\"></form-editor_question_editors_long-text>\n        <form-editor_question_editors_autocomplete ng-if=\"question.type === 'autocomplete'\"></form-editor_question_editors_autocomplete>\n    </div>\n\n    <div class=\"editing-ui\" ng-if=\"question.validation\" flex>\n        <form-editor_question_validators flex></form-editor_question_validators>\n    </div>\n\n    <div layout=\"row\" class=\"question-toolbar editing-ui\" layout-align=\"end center\" layout-padding>\n        <md-button class=\"md-icon-button\" ng-click=\"copyItem(item)\">\n            <md-icon><i class=\"material-icons\">content_copy</i></md-icon>\n        </md-button>\n        <md-button class=\"md-icon-button\" ng-click=\"deleteItem(item)\">\n            <md-icon><i class=\"material-icons\">delete</i></md-icon>\n        </md-button>\n        <div class=\"divider\"></div>\n        <md-switch ng-model=\"question.required\">\n            <span translate=\".required\">Required</span>\n        </md-switch>\n        <md-menu>\n            <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\n                <md-icon><i class=\"material-icons\">more_vert</i></md-icon>\n            </md-button>\n            <md-menu-content>\n                <md-menu-item>\n                    <md-button ng-click=\"toggleValidation(question)\">\n                        <md-icon>\n                            <i class=\"material-icons\" ng-if=\"question.validation\">checked</i>\n                        </md-icon>\n                        <span translate=\"formEditor.question.answerValidation\">Answer validation</span>\n                    </md-button>\n                </md-menu-item>\n            </md-menu-content>\n        </md-menu>\n    </div>\n</div>\n";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form-editor_editing-menu></form-editor_editing-menu>\n\n    <md-content ng-repeat=\"section in getSections()\" class=\"page md-whiteframe-z1\" flex ng-click=\"setEditingItem(null, section, $event)\">\n        <div as-sortable=\"sortable.options\" ng-model=\"section.items\">\n            <div as-sortable-item ng-repeat=\"item in section.items\">\n                <form-editor_heading ng-init=\"heading=item\" ng-if=\"item.type === 'heading'\">\n                </form-editor_heading>\n                <form-editor_question ng-init=\"question=item.question\" ng-if=\"item.type === 'question'\">\n                </form-editor_question>\n            </div>\n        </div>\n    </md-content>\n</div>\n";

/***/ }),
/* 51 */
/***/ (function(module) {

module.exports = JSON.parse("{\"validator\":{\"isEmail\":\"Enter correct e-mail address\",\"isURL\":\"Provide a valid URL\",\"gt\":\"The value should be greater than {{param}}\",\"gte\":\"The value should be greater or equal {{param}}\",\"lt\":\"The value should be lower than {{param}}\",\"lte\":\"The value should be lower or equal {{param}}\",\"eq\":\"The value should equal {{param}}\",\"ne\":\"The value should not equal {{param}}\",\"contains\":\"The value should contain the following \\\"{{param}}\\\"\",\"notContains\":\"The value should not contain the following \\\"{{param}}\\\"\",\"matches\":\"The value should match the following regular expression {{param}}\",\"notMatches\":\"The value should not match the following regular expression {{param}}\"}}");

/***/ }),
/* 52 */
/***/ (function(module) {

module.exports = JSON.parse("{\"edit\":\"Edycja\",\"responses\":\"Odpowiedzi\",\"report\":\"Raport\",\"required\":\"Wymagane\",\"response\":\"Odpowiedź\",\"of\":\"z\",\"send\":\"Wyślij\",\"share\":\"Udostępnij\",\"remove\":\"Usuń\",\"validator\":{\"required\":\"To pole jest wymagane!\",\"isURL\":\"Podaj poprawny adres URL\",\"isEmail\":\"Podaj poprawny adres e-mail\",\"gt\":\"Wartość powinna być liczbą większa od {{param}}\",\"gte\":\"Wartość powinna być liczbą większa lub równą {{param}}\",\"lt\":\"Wartość powinna być liczbą mniejszą od {{param}}\",\"lte\":\"Wartość powinna być liczbą mniejszą lub równą {{param}}\",\"eq\":\"Wartość powinna być równa {{param}}\",\"ne\":\"Wartość powinna być różna od {{param}}\",\"contains\":\"Wartość powinna zawierać \\\"{{param}}\\\"\",\"notContains\":\"Wartość nie powinna zawierać \\\"{{param}}\\\"\",\"matches\":\"Wartość powinna spełniać wyrażenie regularne {{param}}\",\"notMatches\":\"Wartość nie powinna spełniać wyrażenie regularne {{param}}\"}}");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./shared/components/formDisplay/controller.js
class FormValidationError extends Error {
  constructor(params) {
    super(...params); // Maintains proper stack trace for where our error was thrown (only available on V8)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }

}

/* harmony default export */ var controller = (function ($scope, $resource, FormResource, Config) {
  const endpoint = Config.forms.api.endpoint;

  $scope.loadForm = async ({
    type
  }) => {
    let form = await $resource(`${endpoint}/forms/request?@type=${encodeURIComponent(type)}`).get().$promise;
    $scope.form = form;
    $scope.$apply();
  };

  $scope.loadResource = async ({
    type,
    client_id
  }) => {
    const resources = await $resource(`${endpoint}/resources?@type=${encodeURIComponent(type)}`).query({
      client_id
    }).$promise;
    const resource = resources[0] || angular.copy($scope.form.request);
    $scope.loadResourceFromObject(resource);
  };

  $scope.loadResourceFromObject = async resource => {
    $scope.resource = resource;
    FormResource.toForm($scope.form, $scope.resource);
  };

  $scope.save = async () => {
    const client_id = $scope.clientId;
    Object.assign($scope.resource, FormResource.fromForm($scope.form));
    $scope.ngForm.$setSubmitted();

    if ($scope.ngForm.$valid) {
      $scope.resource = await FormResource.save({
        formId: $scope.form._id,
        client_id
      }, $scope.resource).$promise;
      $scope.ngForm.$setPristine();
      $scope.ngForm.$setUntouched();
      $scope.$$phase || $scope.$apply();
    } else {
      throw new FormValidationError('form is not valid');
    }
  };

  $scope.ngModel = $scope;
});
// CONCATENATED MODULE: ./shared/components/formDisplay/link.js
/* harmony default export */ var formDisplay_link = (async function (scope, element, attrs) {
  const {
    type,
    clientId
  } = attrs;
  scope.clientId = clientId;
  await scope.loadForm({
    type
  });
  await scope.loadResource({
    type,
    client_id: clientId
  });
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/heading/style.less
var style = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/heading/template.html
var template = __webpack_require__(2);
var template_default = /*#__PURE__*/__webpack_require__.n(template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/heading/index.js


/* harmony default export */ var heading = ({
  style: style_default.a,
  template: template_default.a
});
// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/autocomplete/controller.js
/* harmony default export */ var autocomplete_controller = (function ($scope, $http) {
  $scope.querySearch = async function (searchText) {
    let response = await $http.get($scope.question.source.url);
    return response.data;
  };
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/autocomplete/template.html
var autocomplete_template = __webpack_require__(3);
var autocomplete_template_default = /*#__PURE__*/__webpack_require__.n(autocomplete_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/autocomplete/index.js


/* harmony default export */ var autocomplete = ({
  controller: autocomplete_controller,
  template: autocomplete_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/checkBoxList/controller.js
/* harmony default export */ var checkBoxList_controller = (function ($scope) {
  $scope.question.answer = [];

  $scope.toggle = function (item, list) {
    if (!list) {
      list = [];
      $scope.question.answer = list;
    }

    var idx = list.indexOf(item.name);

    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(item.name);
    }
  };

  $scope.exists = function (item, list) {
    return list && list.indexOf(item.name) > -1;
  };
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/checkBoxList/template.html
var checkBoxList_template = __webpack_require__(4);
var checkBoxList_template_default = /*#__PURE__*/__webpack_require__.n(checkBoxList_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/checkBoxList/index.js


/* harmony default export */ var checkBoxList = ({
  controller: checkBoxList_controller,
  template: checkBoxList_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/longText/template.html
var longText_template = __webpack_require__(5);
var longText_template_default = /*#__PURE__*/__webpack_require__.n(longText_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/longText/index.js

/* harmony default export */ var longText = ({
  template: longText_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/radioButtonList/template.html
var radioButtonList_template = __webpack_require__(6);
var radioButtonList_template_default = /*#__PURE__*/__webpack_require__.n(radioButtonList_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/radioButtonList/index.js

/* harmony default export */ var radioButtonList = ({
  template: radioButtonList_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/shortText/template.html
var shortText_template = __webpack_require__(7);
var shortText_template_default = /*#__PURE__*/__webpack_require__.n(shortText_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/shortText/index.js

/* harmony default export */ var shortText = ({
  template: shortText_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/partials/index.js





/* harmony default export */ var partials = ({
  autocomplete: autocomplete,
  checkBoxList: checkBoxList,
  longText: longText,
  radioButtonList: radioButtonList,
  shortText: shortText
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/template.html
var displays_template = __webpack_require__(8);
var displays_template_default = /*#__PURE__*/__webpack_require__.n(displays_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/displays/index.js


/* harmony default export */ var displays = ({
  partials: partials,
  template: displays_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/validators/style.less
var validators_style = __webpack_require__(9);
var validators_style_default = /*#__PURE__*/__webpack_require__.n(validators_style);

// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/validators/template.html
var validators_template = __webpack_require__(10);
var validators_template_default = /*#__PURE__*/__webpack_require__.n(validators_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/validators/index.js


/* harmony default export */ var validators = ({
  style: validators_style_default.a,
  template: validators_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/partials/index.js


/* harmony default export */ var question_partials = ({
  displays: displays,
  validators: validators
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/style.less
var question_style = __webpack_require__(11);
var question_style_default = /*#__PURE__*/__webpack_require__.n(question_style);

// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/partials/question/template.html
var question_template = __webpack_require__(12);
var question_template_default = /*#__PURE__*/__webpack_require__.n(question_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/question/index.js



/* harmony default export */ var question = ({
  partials: question_partials,
  style: question_style_default.a,
  template: question_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/partials/index.js


/* harmony default export */ var content_partials = ({
  heading: heading,
  question: question
});
// EXTERNAL MODULE: ./shared/components/formDisplay/partials/content/template.html
var content_template = __webpack_require__(13);
var content_template_default = /*#__PURE__*/__webpack_require__.n(content_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/partials/content/index.js


/* harmony default export */ var content = ({
  partials: content_partials,
  template: content_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formDisplay/partials/index.js

/* harmony default export */ var formDisplay_partials = ({
  content: content
});
// CONCATENATED MODULE: ./shared/components/formDisplay/scope.js
/* harmony default export */ var formDisplay_scope = ({
  ngModel: '='
});
// EXTERNAL MODULE: ./shared/components/formDisplay/template.html
var formDisplay_template = __webpack_require__(14);
var formDisplay_template_default = /*#__PURE__*/__webpack_require__.n(formDisplay_template);

// CONCATENATED MODULE: ./shared/components/formDisplay/index.js





/* harmony default export */ var formDisplay = ({
  controller: controller,
  link: formDisplay_link,
  partials: formDisplay_partials,
  scope: formDisplay_scope,
  template: formDisplay_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formEditor/components/dragHandle/style.less
var dragHandle_style = __webpack_require__(15);
var dragHandle_style_default = /*#__PURE__*/__webpack_require__.n(dragHandle_style);

// EXTERNAL MODULE: ./shared/components/formEditor/components/dragHandle/template.html
var dragHandle_template = __webpack_require__(16);
var dragHandle_template_default = /*#__PURE__*/__webpack_require__.n(dragHandle_template);

// CONCATENATED MODULE: ./shared/components/formEditor/components/dragHandle/index.js


/* harmony default export */ var dragHandle = ({
  style: dragHandle_style_default.a,
  template: dragHandle_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formEditor/components/editingMenu/i18n/pl.i18n.json
var pl_i18n = __webpack_require__(17);

// CONCATENATED MODULE: ./shared/components/formEditor/components/editingMenu/i18n/index.js

/* harmony default export */ var i18n = ({
  pl: pl_i18n
});
// EXTERNAL MODULE: ./shared/components/formEditor/components/editingMenu/style.less
var editingMenu_style = __webpack_require__(18);
var editingMenu_style_default = /*#__PURE__*/__webpack_require__.n(editingMenu_style);

// EXTERNAL MODULE: ./shared/components/formEditor/components/editingMenu/template.html
var editingMenu_template = __webpack_require__(19);
var editingMenu_template_default = /*#__PURE__*/__webpack_require__.n(editingMenu_template);

// CONCATENATED MODULE: ./shared/components/formEditor/components/editingMenu/index.js



/* harmony default export */ var editingMenu = ({
  i18n: i18n,
  style: editingMenu_style_default.a,
  template: editingMenu_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formEditor/components/index.js


/* harmony default export */ var formEditor_components = ({
  dragHandle: dragHandle,
  editingMenu: editingMenu
});
// CONCATENATED MODULE: ./shared/components/formEditor/controller.js
/* harmony default export */ var formEditor_controller = (function ($scope, $timeout, $mdMedia) {
  var defaultQuestion = {
    type: 'question',
    question: {
      options: [{}],
      type: 'radioButtonList'
    }
  };
  var defaultHeading = {
    type: 'heading'
  };
  var sections;
  $scope.editingItem;
  $scope.editingSection;
  $scope.sortable = {
    options: {
      accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
        var isTheSameScope = sourceItemHandleScope.sortableScope.$id === destSortableScope.$id;

        var isLocked = _.get(destItemScope, 'item.settings.locked');

        return isTheSameScope && !isLocked;
      }
    }
  };

  $scope.copyItem = function (item) {
    var duplicate = angular.copy(item);
    $scope.editingSection.items.push(duplicate);
    $scope.setEditingItem(duplicate);
  };

  $scope.deleteItem = function (item) {
    var index = $scope.editingSection.items.indexOf(item);
    $scope.editingSection.items.splice(index, 1);
  };

  $scope.addNewItemFromTemplate = function (itemTemplate) {
    var item = angular.copy(itemTemplate);
    $scope.editingSection.items.push(item);
    $scope.setEditingItem(item, $scope.editingSection);
    return item;
  };

  $scope.addNewQuestion = function () {
    return $scope.addNewItemFromTemplate(defaultQuestion);
  };

  $scope.addNewHeading = function () {
    return $scope.addNewItemFromTemplate(defaultHeading);
  };

  $scope.addNewSection = function () {
    if (!$scope.hasSections($scope.form)) {
      $scope.form.items = [{
        type: 'section',
        items: $scope.form.items
      }];
    }

    $scope.form.items.push({
      type: 'section',
      items: []
    });
  };

  $scope.setEditingItem = function (item, section, $event) {
    $scope.editingSection = section;
    $scope.editingItem = item;

    if ($event) {
      let currentTarget = $event.currentTarget;
      currentTarget.select && currentTarget.select();
      $event.stopPropagation();
    }
  };

  $scope.hasSections = function (form) {
    return form.items[0].type === 'section';
  };

  $scope.getSections = function () {
    if ($scope.hasSections($scope.form)) {
      return $scope.form.items;
    } else {
      sections = sections || [{
        type: 'section',
        items: $scope.form.items
      }];
      return sections;
    }
  };

  var placeEditingMenuPosition = function () {
    const editingMenu = document.querySelector('form-editor_editing-menu');
    let editable = document.querySelector('.editable.editing');

    if (!editable) {
      editable = document.querySelector('.editable');
    }

    if (!editable) {
      return;
    }

    var {
      top,
      left,
      width,
      height
    } = editable.getBoundingClientRect();
    angular.element(editingMenu).css({
      top,
      left: left + width + 15
    });
    angular.element(editingMenu).css('display', 'block');
  };

  $scope.$watch('editingItem', function () {
    $timeout(function () {
      if ($mdMedia('gt-sm')) {
        placeEditingMenuPosition();
      }
    });
  });
  const formEditor = document.querySelector('form-editor');
  $scope.$watch(() => formEditor.getBoundingClientRect().top, () => {
    const editingMenu = document.querySelector('form-editor_editing-menu');
    let top = Math.max(editingMenu.getBoundingClientRect().top, 0);
    const formEditorBoundingClientRect = formEditor.getBoundingClientRect();
    const minTop = formEditorBoundingClientRect.top;
    const maxTop = formEditorBoundingClientRect.top + formEditorBoundingClientRect.height - editingMenu.getBoundingClientRect().height;
    top = Math.min(Math.max(top, minTop), maxTop);
    angular.element(editingMenu).css({
      top
    });
  });
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/heading/style.less
var heading_style = __webpack_require__(20);
var heading_style_default = /*#__PURE__*/__webpack_require__.n(heading_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/heading/template.html
var heading_template = __webpack_require__(21);
var heading_template_default = /*#__PURE__*/__webpack_require__.n(heading_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/heading/index.js


/* harmony default export */ var partials_heading = ({
  style: heading_style_default.a,
  template: heading_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/properties/controller.js
/* harmony default export */ var properties_controller = (function ($scope) {
  $scope.getProperties = function () {
    return $scope.form.items.filter(x => x.type === 'property');
  };
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/properties/style.less
var properties_style = __webpack_require__(22);
var properties_style_default = /*#__PURE__*/__webpack_require__.n(properties_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/properties/template.html
var properties_template = __webpack_require__(23);
var properties_template_default = /*#__PURE__*/__webpack_require__.n(properties_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/properties/index.js



/* harmony default export */ var properties = ({
  controller: properties_controller,
  style: properties_style_default.a,
  template: properties_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/controller.js
/* harmony default export */ var question_controller = (function ($scope, $mdMenu) {
  $scope.$mdMenu = $mdMenu;

  $scope.setQuestionType = function (type) {
    $scope.question.type = type;
  };

  $scope.toggleValidation = function (question) {
    if (question.validation) {
      delete question.validation;
    } else {
      question.validation = {};
    }
  };
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/i18n/pl.i18n.json
var i18n_pl_i18n = __webpack_require__(24);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/i18n/index.js

/* harmony default export */ var question_i18n = ({
  pl: i18n_pl_i18n
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/autocomplete/template.html
var partials_autocomplete_template = __webpack_require__(25);
var partials_autocomplete_template_default = /*#__PURE__*/__webpack_require__.n(partials_autocomplete_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/autocomplete/index.js

/* harmony default export */ var partials_autocomplete = ({
  template: partials_autocomplete_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/checkBoxList/template.html
var partials_checkBoxList_template = __webpack_require__(26);
var partials_checkBoxList_template_default = /*#__PURE__*/__webpack_require__.n(partials_checkBoxList_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/checkBoxList/index.js

/* harmony default export */ var partials_checkBoxList = ({
  template: partials_checkBoxList_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/longText/i18n/pl.i18n.json
var longText_i18n_pl_i18n = __webpack_require__(27);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/longText/i18n/index.js

/* harmony default export */ var longText_i18n = ({
  pl: longText_i18n_pl_i18n
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/longText/style.less
var longText_style = __webpack_require__(28);
var longText_style_default = /*#__PURE__*/__webpack_require__.n(longText_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/longText/template.html
var partials_longText_template = __webpack_require__(29);
var partials_longText_template_default = /*#__PURE__*/__webpack_require__.n(partials_longText_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/longText/index.js



/* harmony default export */ var partials_longText = ({
  i18n: longText_i18n,
  style: longText_style_default.a,
  template: partials_longText_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/controller.js
/* harmony default export */ var options_controller = (function ($scope, $timeout) {
  $scope.item = $scope.$parent.item;
  $scope.question = $scope.$parent.question;
  $scope.setEditingItem = $scope.$parent.setEditingItem;

  $scope.addNewOption = function ($event) {
    var focusAddedOption = () => {
      $($event.currentTarget).closest('.answer-editor').find('input').last().focus();
    };

    $scope.question.options.push({});
    $timeout(focusAddedOption);
  };

  $scope.deleteOption = function (option) {
    var index = $scope.question.options.indexOf(option);
    $scope.question.options.splice(index, 1);
  };

  $scope.sortable = {
    options: {
      accept: function (sourceItemHandleScope, destSortableScope) {
        var isTheSameScope = sourceItemHandleScope.sortableScope.$id === destSortableScope.$id;
        return isTheSameScope;
      }
    }
  };
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/partials/item/controller.js
/* harmony default export */ var item_controller = (function ($scope) {
  $scope.handleKeyUp = function ($event) {
    if ($event.keyCode == 13) {
      $scope.addNewOption($event);
    }
  };
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/partials/item/style.less
var item_style = __webpack_require__(30);
var item_style_default = /*#__PURE__*/__webpack_require__.n(item_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/partials/item/template.html
var item_template = __webpack_require__(31);
var item_template_default = /*#__PURE__*/__webpack_require__.n(item_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/partials/item/index.js



/* harmony default export */ var item = ({
  controller: item_controller,
  style: item_style_default.a,
  template: item_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/partials/placeholder/style.less
var placeholder_style = __webpack_require__(32);
var placeholder_style_default = /*#__PURE__*/__webpack_require__.n(placeholder_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/partials/placeholder/template.html
var placeholder_template = __webpack_require__(33);
var placeholder_template_default = /*#__PURE__*/__webpack_require__.n(placeholder_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/partials/placeholder/index.js


/* harmony default export */ var placeholder = ({
  style: placeholder_style_default.a,
  template: placeholder_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/partials/index.js


/* harmony default export */ var options_partials = ({
  item: item,
  placeholder: placeholder
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/scope.js
/* harmony default export */ var options_scope = ({
  type: '@'
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/style.less
var options_style = __webpack_require__(34);
var options_style_default = /*#__PURE__*/__webpack_require__.n(options_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/template.html
var options_template = __webpack_require__(35);
var options_template_default = /*#__PURE__*/__webpack_require__.n(options_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/options/index.js





/* harmony default export */ var options = ({
  controller: options_controller,
  partials: options_partials,
  scope: options_scope,
  style: options_style_default.a,
  template: options_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/radioButtonList/template.html
var partials_radioButtonList_template = __webpack_require__(36);
var partials_radioButtonList_template_default = /*#__PURE__*/__webpack_require__.n(partials_radioButtonList_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/radioButtonList/index.js

/* harmony default export */ var partials_radioButtonList = ({
  template: partials_radioButtonList_template_default.a
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/shortText/i18n/pl.i18n.json
var shortText_i18n_pl_i18n = __webpack_require__(37);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/shortText/i18n/index.js

/* harmony default export */ var shortText_i18n = ({
  pl: shortText_i18n_pl_i18n
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/shortText/style.less
var shortText_style = __webpack_require__(38);
var shortText_style_default = /*#__PURE__*/__webpack_require__.n(shortText_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/shortText/template.html
var partials_shortText_template = __webpack_require__(39);
var partials_shortText_template_default = /*#__PURE__*/__webpack_require__.n(partials_shortText_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/shortText/index.js



/* harmony default export */ var partials_shortText = ({
  i18n: shortText_i18n,
  style: shortText_style_default.a,
  template: partials_shortText_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/partials/index.js






/* harmony default export */ var editors_partials = ({
  autocomplete: partials_autocomplete,
  checkBoxList: partials_checkBoxList,
  longText: partials_longText,
  options: options,
  radioButtonList: partials_radioButtonList,
  shortText: partials_shortText
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/editors/index.js

/* harmony default export */ var editors = ({
  partials: editors_partials
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/typeSelectMenu/controller.js
/* harmony default export */ var typeSelectMenu_controller = (function ($scope) {});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/typeSelectMenu/i18n/pl.i18n.json
var typeSelectMenu_i18n_pl_i18n = __webpack_require__(40);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/typeSelectMenu/i18n/index.js

/* harmony default export */ var typeSelectMenu_i18n = ({
  pl: typeSelectMenu_i18n_pl_i18n
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/typeSelectMenu/link.js
/* harmony default export */ var typeSelectMenu_link = (function (scope, element, attrs) {
  scope.$element = element;
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/typeSelectMenu/style.less
var typeSelectMenu_style = __webpack_require__(41);
var typeSelectMenu_style_default = /*#__PURE__*/__webpack_require__.n(typeSelectMenu_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/typeSelectMenu/template.html
var typeSelectMenu_template = __webpack_require__(42);
var typeSelectMenu_template_default = /*#__PURE__*/__webpack_require__.n(typeSelectMenu_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/typeSelectMenu/index.js





/* harmony default export */ var typeSelectMenu = ({
  controller: typeSelectMenu_controller,
  i18n: typeSelectMenu_i18n,
  link: typeSelectMenu_link,
  style: typeSelectMenu_style_default.a,
  template: typeSelectMenu_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/validators/controller.js
/* harmony default export */ var validators_controller = (function ($scope) {
  const validatorMap = [[['number', 'gt'], 'gt'], [['number', 'gte'], 'gte'], [['number', 'lt'], 'lt'], [['number', 'lte'], 'lte'], [['number', 'eq'], 'eq'], [['number', 'ne'], 'ne'], [['text', 'contains'], 'contains'], [['text', 'notContains'], 'notContains'], [['text', 'isEmail'], 'isEmail'], [['text', 'isURL'], 'isURL', {
    require_tld: false
  }], [['regex', 'matches'], 'matches'], [['regex', 'notMatches'], 'notMatches']];
  const hasTextParam = ['contains', 'notContains', 'matches', 'notMatches'];
  const hasNumberParam = ['gt', 'gte', 'lt', 'lte', 'eq', 'ne'];
  const defaultValidator = {
    group: validatorMap[0][0][0],
    name: validatorMap[0][0][1]
  };

  if ($scope.question.validation) {
    $scope.question.validation.items = $scope.question.validation.items || [defaultValidator];
    var item = $scope.question.validation.items[0];
    $scope.validator = {
      group: validatorMap.filter(x => x[1] === item.name)[0][0][0],
      name: validatorMap.filter(x => x[1] === item.name)[0][0][1],
      param: item.param,
      message: item.message
    };
  }

  $scope.validator = $scope.validator || {
    group: 'number',
    name: 'gt',
    param: undefined
  };

  $scope.getValidatorsForGroup = function (group) {
    return validatorMap.filter(entry => entry[0][0] === group);
  };

  $scope.hasParam = function (type) {
    const name = $scope.validator.name;

    if (type === 'text') {
      return hasTextParam.indexOf(name) !== -1;
    } else if (type === 'number') {
      return hasNumberParam.indexOf(name) !== -1;
    }
  };

  $scope.$watch('validator.group', (group, oldGroup) => {
    if (group === oldGroup) {
      return;
    }

    delete $scope.validator.param;
    const validatorItem = validatorMap.filter(x => x[0][0] === group)[0];
    $scope.validator.name = validatorItem[1];
  });
  $scope.$watch('validator', validator => {
    const validatorItem = validatorMap.filter(x => x[1] === validator.name)[0];
    let param = validator.param || validatorItem[2];
    $scope.question.validation.items = [{
      name: validator.name,
      param,
      message: validator.message
    }];
  }, true);
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/validators/i18n/en.i18n.json
var en_i18n = __webpack_require__(43);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/validators/i18n/pl.i18n.json
var validators_i18n_pl_i18n = __webpack_require__(44);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/validators/i18n/index.js


/* harmony default export */ var validators_i18n = ({
  en: en_i18n,
  pl: validators_i18n_pl_i18n
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/validators/style.less
var partials_validators_style = __webpack_require__(45);
var partials_validators_style_default = /*#__PURE__*/__webpack_require__.n(partials_validators_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/partials/validators/template.html
var partials_validators_template = __webpack_require__(46);
var partials_validators_template_default = /*#__PURE__*/__webpack_require__.n(partials_validators_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/validators/index.js




/* harmony default export */ var partials_validators = ({
  controller: validators_controller,
  i18n: validators_i18n,
  style: partials_validators_style_default.a,
  template: partials_validators_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/partials/index.js



/* harmony default export */ var partials_question_partials = ({
  editors: editors,
  typeSelectMenu: typeSelectMenu,
  validators: partials_validators
});
// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/style.less
var partials_question_style = __webpack_require__(47);
var partials_question_style_default = /*#__PURE__*/__webpack_require__.n(partials_question_style);

// EXTERNAL MODULE: ./shared/components/formEditor/partials/question/template.html
var partials_question_template = __webpack_require__(48);
var partials_question_template_default = /*#__PURE__*/__webpack_require__.n(partials_question_template);

// CONCATENATED MODULE: ./shared/components/formEditor/partials/question/index.js





/* harmony default export */ var partials_question = ({
  controller: question_controller,
  i18n: question_i18n,
  partials: partials_question_partials,
  style: partials_question_style_default.a,
  template: partials_question_template_default.a
});
// CONCATENATED MODULE: ./shared/components/formEditor/partials/index.js



/* harmony default export */ var formEditor_partials = ({
  heading: partials_heading,
  properties: properties,
  question: partials_question
});
// EXTERNAL MODULE: ./shared/components/formEditor/style.less
var formEditor_style = __webpack_require__(49);
var formEditor_style_default = /*#__PURE__*/__webpack_require__.n(formEditor_style);

// EXTERNAL MODULE: ./shared/components/formEditor/template.html
var formEditor_template = __webpack_require__(50);
var formEditor_template_default = /*#__PURE__*/__webpack_require__.n(formEditor_template);

// CONCATENATED MODULE: ./shared/components/formEditor/index.js





/* harmony default export */ var formEditor = ({
  components: formEditor_components,
  controller: formEditor_controller,
  partials: formEditor_partials,
  style: formEditor_style_default.a,
  template: formEditor_template_default.a
});
// CONCATENATED MODULE: ./shared/components/index.js


/* harmony default export */ var shared_components = ({
  formDisplay: formDisplay,
  formEditor: formEditor
});
// EXTERNAL MODULE: /Users/marekmicek/Documents/GitHub/forms/src/assets/libs/validator-js/validator.js
var validator = __webpack_require__(0);
var validator_default = /*#__PURE__*/__webpack_require__.n(validator);

// CONCATENATED MODULE: ./shared/directives/questionValidator.js

/* harmony default export */ var questionValidator = (function () {
  angular.extend(validator_default.a, {
    gt: function (value, param) {
      return validator_default.a.isInt(value, {
        gt: param
      });
    },
    lt: function (value, param) {
      return validator_default.a.isInt(value, {
        lt: param
      });
    },
    gte: function (value, param) {
      return validator_default.a.isInt(value, {
        min: param
      });
    },
    lte: function (value, param) {
      return validator_default.a.isInt(value, {
        max: param
      });
    },
    eq: function (value, param) {
      return value === param;
    },
    ne: function (value, param) {
      return value !== param;
    },
    notContains: function (value, param) {
      return !validator_default.a.contains(value, param);
    },
    notMatches: function (value, param) {
      return !validator_default.a.matches(value, param);
    }
  });
  return {
    require: 'ngModel',
    link: function (scope, elem, attr, ngModel) {
      var validationItem = scope.question.validation ? scope.question.validation.items[0] : undefined;

      if (validationItem) {
        //For DOM -> model validation
        ngModel.$parsers.unshift(function (value) {
          var isValid = value ? validator_default.a[validationItem.name](value.toString(), validationItem.param) : false;
          ngModel.$setValidity(validationItem.name, isValid);
          return isValid ? value : undefined;
        }); //For model -> DOM validation

        ngModel.$formatters.unshift(function (value) {
          var isValid = value ? validator_default.a[validationItem.name](value.toString(), validationItem.param) : false;
          ngModel.$setValidity(validationItem.name, isValid);
          return value;
        });
      }
    }
  };
});
// CONCATENATED MODULE: ./shared/directives/index.js

/* harmony default export */ var directives = ({
  questionValidator: questionValidator
});
// CONCATENATED MODULE: ./shared/services/FormResource.js
/* harmony default export */ var FormResource = (function ($resource, $parse, Config) {
  const endpoint = Config.forms.api.endpoint;
  const resource = $resource(`${endpoint}/resources`);

  resource.fromForm = form => {
    let objectMap = form.items.map(item => item.type === 'section' ? item.items : item).flat().filter(item => item.type === 'question').map(({
      question,
      answer
    }) => ({
      key: question.ask,
      value: question.answer
    }));
    let object = {};
    objectMap.forEach(({
      key,
      value
    }) => $parse(key).assign(object, value));
    Object.assign(object, form.request);
    return object;
  };

  resource.toForm = (form, resource) => {
    const items = form.items.map(item => item.type === 'section' ? item.items : item).flat().filter(item => item.type === 'question');

    for (let item of items) {
      item.question.answer = $parse(item.question.ask)(resource);
    }
  };

  return resource;
});
// CONCATENATED MODULE: ./shared/services/index.js

/* harmony default export */ var services = ({
  FormResource: FormResource
});
// CONCATENATED MODULE: /Users/marekmicek/Documents/GitHub/forms/node_modules/happenize/utils/registerNamespace.js
/* harmony default export */ var registerNamespace = (function (components, func, ns) {
	if (components.async) {
		return;
	}

	var App = this && ((typeof (func) === 'string' && this[func]) || this.compileProvider) ? this : window.App;

	ns = ns && `${ns}.` || '';

	func = typeof (func) === 'string' ? App[func] : func;

	Object
	.getOwnPropertyNames(components)
	.filter(x => x.match(/^[A-Za-z].+$/) != null)
	.forEach(x => func(`${ns}${x}`, components[x]));
});;

// CONCATENATED MODULE: /Users/marekmicek/Documents/GitHub/forms/node_modules/happenize/utils/registerComponent.js
/* harmony default export */ var registerComponent = (function (component, ns) {
    var controller = component.controller;
    var link = component.link;

    //component.replace = component.replace || true;

    function loadObjectFromNamespace(obj, ns) {
        return ns.split('.').reduce((o, i) => o[i] = o[i] || {}, obj)
    }

    component.controller = function ($rootScope, $scope, $controller, $injector) {
        var $state = $injector.has('$state') ? $injector.get('$state') : null;

        if (component.viewState) {
            $scope.viewState = component.viewState;

            var viewState = {};
            // load settings from the local scope
            angular.merge(loadObjectFromNamespace(viewState, ns), $scope.viewState);

            // load currently saved settings
            angular.merge(viewState, App.ViewState);

            // merge any other default values that are not present in root viewState yet
            // e.g. were added a little bit later, so we will just use default values
            angular.merge(App.ViewState, viewState);

            $rootScope.$watch('viewState', viewState => {
                if (viewState) {
                    $scope.viewState = loadObjectFromNamespace(viewState, ns);
                }
            });
        }

        if (controller) {
            var locals = { $scope, $namespace: ns };
            if ($state) {
                function resolveGlobals() {
                    if ($state.$current.locals) {
                        return $state.$current.locals.globals;
                    }

                    const globals = {};
                    const resolvables = $state.getCurrentPath().flatMap(x => x.resolvables)
                    for (let resolvable of resolvables) {
                        if (typeof resolvable.token === 'string') {
                            globals[resolvable.token] = resolvable.data;
                        }
                    }
                }

                const globals = resolveGlobals($state.transition);

                angular.extend(locals, globals);
            }

            return $controller(controller, locals);
        }
    };

    component.link = {
        pre: component.link ? component.link.pre : undefined,
        post: function (scope, element, attrs) {
            const camelCaseToDashes = input => input.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
            const nsToDirectiveTagName = input => camelCaseToDashes(input).replace(/\./g, '_');

            const tagName = nsToDirectiveTagName(ns);

            element.attr(`_c_${tagName}`, '');

            if (link && typeof link === 'function') {
                link.apply(this, arguments);
            }

            if (link && link.post) {
                link.post.apply(this, arguments);
            }
        }
    };

    component.ns = ns;

    return component;
});;

// CONCATENATED MODULE: /Users/marekmicek/Documents/GitHub/forms/node_modules/happenize/utils/themeable.js
/* harmony default export */ var themeable = (function (component, ns) {

    if (component.template) {
        var templateUrl = `template/${ns}`;

        var $templateCache = angular.element('body').injector().get('$templateCache');

        if (!$templateCache.get(templateUrl)) {
            $templateCache.put(templateUrl, component.template);
        }

        component.templateUrl = templateUrl;
        delete component.template;
    }

    return component;
});

// CONCATENATED MODULE: /Users/marekmicek/Documents/GitHub/forms/node_modules/happenize/utils/registerPartials.js




function registerPartials(components, ns, isThemeable = false) {
    var App = this && this.compileProvider ? this : window.App;

	var dotsToCamelCase = input => input.replace(/\.([a-z])/g, x => x[1].toUpperCase());

	var registerPartial = function (name, partial) {
		var ns = name;

		var registrator = isThemeable ? () => registerComponent.bind(this)(themeable(partial, ns), ns) : () => registerComponent.bind(this)(partial, ns);

		// so we could use underscores '_' instead of dots '.' (this way the tag can be handled by CSS/LESS)
		name = dotsToCamelCase(ns);

		var directive = typeof (partial) === 'function' ? partial : registrator;

		App.compileProvider.directive(name, directive);
	};

	if (components) {
		registerNamespace(components, registerPartial.bind(this), ns);
		registerNamespace(
			components,
			(name, x) => x.partials && registerPartials.bind(this)(x.partials, ns && `${ns}.${name}` || name, isThemeable));
		registerNamespace(
			components,
			(name, x) => x.partials && registerPartials.bind(this)(x.components, ns && `${ns}.${name}` || name, isThemeable));
	}
}

// EXTERNAL MODULE: ./assets/styles/style.less
var styles_style = __webpack_require__(53);

// EXTERNAL MODULE: ./shared/i18n/en.i18n.json
var i18n_en_i18n = __webpack_require__(51);

// EXTERNAL MODULE: ./shared/i18n/pl.i18n.json
var shared_i18n_pl_i18n = __webpack_require__(52);

// CONCATENATED MODULE: ./shared/i18n/index.js


/* harmony default export */ var shared_i18n = ({
  en: i18n_en_i18n,
  pl: shared_i18n_pl_i18n
});
// CONCATENATED MODULE: ./module.js
/* global angular */







const Config = {
  api: {
    endpoint: 'http://localhost:8011/api/v1'
  }
};

if (false) {}

var dependencies = ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngSanitize', 'as.sortable', 'pascalprecht.translate', 'ui.ace'];
var module_App = angular.module('hpForms', dependencies);
registerNamespace.bind(module_App)(directives, 'directive');
registerNamespace.bind(module_App)(services, 'service');
module_App.config(["$compileProvider", function ($compileProvider) {
  module_App.Config = Config;
  module_App.ViewState = {};
  module_App.compileProvider = $compileProvider;
  var isThemeable = false;
  registerPartials.bind(module_App)(shared_components, null, isThemeable);
}]);
module_App.config(["$translateProvider", "$translatePartialLoaderProvider", function ($translateProvider, $translatePartialLoaderProvider) {
  angular.lowercase = angular.lowercase || angular.$$lowercase;
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '{part}{lang}.i18n.json'
  });
  $translatePartialLoaderProvider.addPart('/modules/forms/assets/i18n/');
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.preferredLanguage('en');
}]);
module_App.service('Config', () => Config);

/***/ })
/******/ ]);
//# sourceMappingURL=forms.js.map