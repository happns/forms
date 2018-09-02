/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, process) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof Symbol === "function" && Symbol.iterator || "@@iterator";

	  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? Promise.resolve(value.arg).then(invokeNext, invokeThrow) : Promise.resolve(value).then(function (unwrapped) {
	        // When a yielded Promise is resolved, its final value becomes
	        // the .value of the Promise<{value,done}> result for the
	        // current iteration. If the Promise is rejected, however, the
	        // result for this iteration will be rejected with the same
	        // reason. Note that rejections of yielded Promises are not
	        // thrown back into the generator function, as is the case
	        // when an awaited Promise is rejected. This difference in
	        // behavior between yield and await is important, because it
	        // allows the consumer to decide what to do with the yielded
	        // rejection (swallow it and continue, manually .throw it back
	        // into the generator, abandon iteration, whatever). With
	        // await, by contrast, there is no opportunity to examine the
	        // rejection reason outside the generator function, so the
	        // only option is to throw it from the await expression, and
	        // let the generator function handle the exception.
	        result.value = unwrapped;
	        return result;
	      });
	    }

	    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : new Promise(function (resolve) {
	        resolve(callInvokeWithMethodAndArg());
	      });
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          context._sent = arg;

	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)(module), __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _components = __webpack_require__(5);

	var _components2 = _interopRequireDefault(_components);

	var _registerPartials = __webpack_require__(75);

	var _registerPartials2 = _interopRequireDefault(_registerPartials);

	__webpack_require__(79);

	__webpack_require__(80);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* global angular */
	var Config = {
	    api: {
	        endpoint: ''
	    }
	};

	if (false) {
	    require('angular-material/angular-material.css');

	    require('lodash');

	    require('angular-material');
	    require('angular-animate');
	    require('angular-messages');
	    require('ng-sortable');

	    require('angular-translate-tp/angular-translate');
	    require('angular-translate-loader-partial');
	}

	var dependencies = ['ngMaterial', 'ngAnimate', 'ngMessages', 'as.sortable', 'pascalprecht.translate'];

	var App = angular.module('hpForms', dependencies);

	App.config(function ($compileProvider) {
	    App.Config = Config;
	    App.ViewState = {};
	    App.compileProvider = $compileProvider;

	    var isThemeable = false;
	    _registerPartials2.default.bind(App)(_components2.default, null, isThemeable);
	});

	App.config(function ($translateProvider, $translatePartialLoaderProvider) {
	    angular.lowercase = angular.lowercase || angular.$$lowercase;

	    $translateProvider.useLoader('$translatePartialLoader', {
	        urlTemplate: '{part}{lang}.i18n.json'
	    });

	    $translatePartialLoaderProvider.addPart('/modules/forms/assets/i18n/');

	    $translateProvider.useSanitizeValueStrategy('escape');
	    $translateProvider.preferredLanguage('en');
	});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _formEditor = __webpack_require__(6);

	var _formEditor2 = _interopRequireDefault(_formEditor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { formEditor: _formEditor2.default };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _components = __webpack_require__(7);

	var _components2 = _interopRequireDefault(_components);

	var _controller = __webpack_require__(17);

	var _controller2 = _interopRequireDefault(_controller);

	var _partials = __webpack_require__(18);

	var _partials2 = _interopRequireDefault(_partials);

	var _style = __webpack_require__(73);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(74);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { components: _components2.default, controller: _controller2.default, partials: _partials2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dragHandle = __webpack_require__(8);

	var _dragHandle2 = _interopRequireDefault(_dragHandle);

	var _editingMenu = __webpack_require__(12);

	var _editingMenu2 = _interopRequireDefault(_editingMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { dragHandle: _dragHandle2.default, editingMenu: _editingMenu2.default };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(9);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(11);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { style: _style2.default, template: _template2.default };

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

	module.exports = "<md-icon class=\"drag-handle\"><i class=\"material-icons\">drag_handle</i></md-icon>\r\n";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18n = __webpack_require__(13);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _style = __webpack_require__(15);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(16);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { i18n: _i18n2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(14);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"md-whiteframe-z1 editing-menu\" layout=\"row\" layout-gt-sm=\"column\" layout-align=\"start center\">\r\n    <md-button class=\"md-icon-button\" ng-click=\"addNewQuestion()\">\r\n        <md-tooltip md-direction=\"right\">\r\n            <span translate=\"formEditor.editingMenu.createNewQuestion\">Add new question</span>\r\n        </md-tooltip>\r\n        <md-icon>\r\n            <i class=\"material-icons\">add_circle</i>\r\n        </md-icon>\r\n    </md-button>\r\n    <md-button class=\"md-icon-button\" ng-click=\"addNewHeading()\">\r\n        <md-tooltip md-direction=\"right\">\r\n            <span translate=\"formEditor.editingMenu.createNewHeading\">Add new heading</span>\r\n        </md-tooltip>\r\n        <md-icon>\r\n            <i class=\"material-icons\">text_fields</i>\r\n        </md-icon>\r\n    </md-button>\r\n    <md-button class=\"md-icon-button\">\r\n        <md-tooltip md-direction=\"right\">\r\n            <span translate=\"formEditor.editingMenu.createNewSection\">Add new section</span>\r\n        </md-tooltip>\r\n        <md-icon>\r\n            <i class=\"material-icons\">view_agenda</i>\r\n        </md-icon>\r\n    </md-button>\r\n</div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope, $timeout, $mdMedia) {
	    var defaultQuestion = { type: 'question', question: { options: [{}], type: 'radioButtonList' } };
	    var defaultHeading = { type: 'heading' };

	    $scope.editingItem;

	    $scope.sortable = {
	        options: {
	            accept: function accept(sourceItemHandleScope, destSortableScope, destItemScope) {
	                var isTheSameScope = sourceItemHandleScope.sortableScope.$id === destSortableScope.$id;
	                var isLocked = _.get(destItemScope, 'item.settings.locked');

	                return isTheSameScope && !isLocked;
	            }
	        }
	    };

	    $scope.copyItem = function (item) {
	        var duplicate = angular.copy(item);

	        $scope.form.items.push(duplicate);
	        $scope.setEditingItem(duplicate);
	    };

	    $scope.deleteItem = function (item) {
	        var index = $scope.form.items.indexOf(item);

	        $scope.form.items.splice(index, 1);
	    };

	    $scope.addNewItemFromTemplate = function (itemTemplate) {
	        var item = angular.copy(itemTemplate);

	        $scope.form.items.push(item);
	        $scope.setEditingItem(item);

	        return item;
	    };

	    $scope.addNewQuestion = function () {
	        return $scope.addNewItemFromTemplate(defaultQuestion);
	    };

	    $scope.addNewHeading = function () {
	        return $scope.addNewItemFromTemplate(defaultHeading);
	    };

	    $scope.setEditingItem = function (item, $event) {
	        $scope.editingItem = item;

	        if ($event) {
	            var currentTarget = $event.currentTarget;
	            currentTarget.select && currentTarget.select();
	        }
	    };

	    var placeEditingMenuPosition = function placeEditingMenuPosition() {
	        var editingMenu = document.querySelector('form-editor_editing-menu');
	        var editable = document.querySelector('.editable.editing');

	        if (!editable) {
	            editable = document.querySelector('.editable');
	        }

	        if (!editable) {
	            return;
	        }

	        var _editable$getBounding = editable.getBoundingClientRect(),
	            top = _editable$getBounding.top,
	            left = _editable$getBounding.left,
	            width = _editable$getBounding.width,
	            height = _editable$getBounding.height;

	        angular.element(editingMenu).css({ top: top, left: left + width + 15 });
	        angular.element(editingMenu).css('display', 'block');
	    };

	    $scope.$watch('editingItem', function () {
	        $timeout(function () {
	            if ($mdMedia('gt-sm')) {
	                placeEditingMenuPosition();
	            }
	        });
	    });
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _basic = __webpack_require__(19);

	var _basic2 = _interopRequireDefault(_basic);

	var _heading = __webpack_require__(20);

	var _heading2 = _interopRequireDefault(_heading);

	var _question = __webpack_require__(23);

	var _question2 = _interopRequireDefault(_question);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { basic: _basic2.default, heading: _heading2.default, question: _question2.default };

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(21);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(22);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { style: _style2.default, template: _template2.default };

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"column\" class=\"editable\" ng-class=\"{ 'editing': editingItem === heading, 'locked': item.settings.locked }\" ng-click=\"setEditingItem(item, $event)\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <drag-handle class=\"item-drag-handle editing-ui\" as-sortable-item-handle ng-mousedown=\"setEditingItem(item, $event)\"></drag-handle>\r\n    </div>\r\n    <md-input-container class=\"big\" md-no-float>\r\n        <input ng-model=\"heading.title\" ng-focus=\"setEditingItem(heading, $event)\" placeholder=\"Title\">\r\n    </md-input-container>\r\n\r\n    <md-input-container class=\"small\" md-no-float>\r\n        <input ng-model=\"heading.description\" ng-focus=\"setEditingItem(heading, $event)\" placeholder=\"Description\">\r\n    </md-input-container>\r\n\r\n    <div layout=\"row\" class=\"editing-ui\" layout-align=\"end center\" layout-padding ng-if=\"!item.settings.locked\">\r\n            <md-button class=\"md-icon-button\" ng-click=\"deleteItem(item)\">\r\n                <md-icon><i class=\"material-icons\">delete</i></md-icon>\r\n            </md-button>\r\n        </div>\r\n</div>\r\n";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(24);

	var _controller2 = _interopRequireDefault(_controller);

	var _i18n = __webpack_require__(25);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _partials = __webpack_require__(27);

	var _partials2 = _interopRequireDefault(_partials);

	var _style = __webpack_require__(71);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(72);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, i18n: _i18n2.default, partials: _partials2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope, $mdMenu) {
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
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(26);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _editors = __webpack_require__(28);

	var _editors2 = _interopRequireDefault(_editors);

	var _typeSelectMenu = __webpack_require__(57);

	var _typeSelectMenu2 = _interopRequireDefault(_typeSelectMenu);

	var _validators = __webpack_require__(64);

	var _validators2 = _interopRequireDefault(_validators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { editors: _editors2.default, typeSelectMenu: _typeSelectMenu2.default, validators: _validators2.default };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _partials = __webpack_require__(29);

	var _partials2 = _interopRequireDefault(_partials);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { partials: _partials2.default };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkBoxList = __webpack_require__(30);

	var _checkBoxList2 = _interopRequireDefault(_checkBoxList);

	var _longText = __webpack_require__(32);

	var _longText2 = _interopRequireDefault(_longText);

	var _options = __webpack_require__(37);

	var _options2 = _interopRequireDefault(_options);

	var _radioButtonList = __webpack_require__(50);

	var _radioButtonList2 = _interopRequireDefault(_radioButtonList);

	var _shortText = __webpack_require__(52);

	var _shortText2 = _interopRequireDefault(_shortText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { checkBoxList: _checkBoxList2.default, longText: _longText2.default, options: _options2.default, radioButtonList: _radioButtonList2.default, shortText: _shortText2.default };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _template = __webpack_require__(31);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { template: _template2.default };

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = "<form-editor_question_editors_options></form-editor_question_editors_options>\r\n";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18n = __webpack_require__(33);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _style = __webpack_require__(35);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(36);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { i18n: _i18n2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(34);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n    <span translate=\"formEditor.question.editors.longText.longTextContent\">Long text content</span>\r\n    <br>\r\n    .<br>.<br>.<br>\r\n</div>\r\n";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(38);

	var _controller2 = _interopRequireDefault(_controller);

	var _partials = __webpack_require__(39);

	var _partials2 = _interopRequireDefault(_partials);

	var _scope = __webpack_require__(47);

	var _scope2 = _interopRequireDefault(_scope);

	var _style = __webpack_require__(48);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(49);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, partials: _partials2.default, scope: _scope2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope, $timeout) {
	    $scope.item = $scope.$parent.item;
	    $scope.question = $scope.$parent.question;

	    $scope.setEditingItem = $scope.$parent.setEditingItem;

	    $scope.addNewOption = function ($event) {

	        var focusAddedOption = function focusAddedOption() {
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
	            accept: function accept(sourceItemHandleScope, destSortableScope) {
	                var isTheSameScope = sourceItemHandleScope.sortableScope.$id === destSortableScope.$id;

	                return isTheSameScope;
	            }
	        }
	    };
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _item = __webpack_require__(40);

	var _item2 = _interopRequireDefault(_item);

	var _placeholder = __webpack_require__(44);

	var _placeholder2 = _interopRequireDefault(_placeholder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { item: _item2.default, placeholder: _placeholder2.default };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(41);

	var _controller2 = _interopRequireDefault(_controller);

	var _style = __webpack_require__(42);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(43);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope) {
	    $scope.handleKeyUp = function ($event) {
	        if ($event.keyCode == 13) {
	            $scope.addNewOption($event);
	        }
	    };
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"row\" layout-align=\"start center\">\r\n    <form-editor_drag-handle ng-class=\"{hidden: question.options.length <= 1}\" class=\"editing-ui vertical\" as-sortable-item-handle></form-editor_drag-handle>\r\n    <md-icon ng-if=\"question.type === 'radioButtonList'\"><i class=\"material-icons\">radio_button_unchecked</i></md-icon>\r\n    <md-icon ng-if=\"question.type === 'checkBoxList'\"><i class=\"material-icons\">check_box_outline_blank</i></md-icon>\r\n    <md-input-container md-no-float flex>\r\n        <input ng-model=\"option.name\" placeholder=\"Option\" ng-focus=\"setEditingItem(item, $event)\" ng-keyup=\"handleKeyUp($event)\">\r\n    </md-input-container>\r\n    <md-button class=\"md-icon-button editing-ui\" ng-click=\"deleteOption(option)\" ng-if=\"question.options.length > 1\" tabindex=\"-1\">\r\n        <md-icon md-menu-origin><i class=\"material-icons\">close</i></md-icon>\r\n    </md-button>\r\n</div>\r\n";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(45);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(46);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { style: _style2.default, template: _template2.default };

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"placeholder\" layout=\"row\" layout-align=\"start center\">\r\n    <form-editor_drag-handle class=\"editing-ui\" as-sortable-item-handle style=\"visibility: hidden\"></form-editor_drag-handle>\r\n        <md-icon ng-if=\"question.type === 'radioButtonList'\"><i class=\"material-icons\">radio_button_unchecked</i></md-icon>\r\n    <md-icon ng-if=\"question.type === 'checkBoxList'\"><i class=\"material-icons\">check_box_outline_blank</i></md-icon>\r\n    <md-input-container md-no-float flex>\r\n        <a ng-click=\"addNewOption($event)\">Add new option</a>\r\n    </md-input-container>\r\n</div>\r\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    type: '@'
	};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = "<div as-sortable=\"sortable.options\" ng-model=\"question.options\">\r\n    <form-editor_question_editors_options_item ng-repeat=\"option in question.options\" as-sortable-item></form-editor_question_editors_options_item>\r\n</div>\r\n<form-editor_question_editors_options_placeholder class=\"editing-ui\"></form-editor_question_editors_options_placeholder>\r\n";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _template = __webpack_require__(51);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { template: _template2.default };

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = "<form-editor_question_editors_options></form-editor_question_editors_options>\r\n";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18n = __webpack_require__(53);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _style = __webpack_require__(55);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(56);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { i18n: _i18n2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(54);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n    <span translate=\"formEditor.question.editors.shortText.shortTextContent\">Short text content</span>\r\n</div>\r\n";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(58);

	var _controller2 = _interopRequireDefault(_controller);

	var _i18n = __webpack_require__(59);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _link = __webpack_require__(61);

	var _link2 = _interopRequireDefault(_link);

	var _style = __webpack_require__(62);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(63);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, i18n: _i18n2.default, link: _link2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function ($scope) {};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(60);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (scope, element, attrs) {
	    scope.$element = element;
	};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = "<div layout-align=\"center center\" layout=\"row\">\r\n        <md-select ng-model=\"question.type\">\r\n            <md-option value=\"shortText\">\r\n                <md-icon style=\"margin-right: 10px;\">\r\n                    <i class=\"material-icons\">short_text</i>\r\n                </md-icon>\r\n                <span translate=\"formEditor.question.typeSelectMenu.shortText\">Short text</span>\r\n            </md-option>\r\n            <md-option value=\"longText\">\r\n                <md-icon style=\"margin-right: 10px;\">\r\n                    <i class=\"material-icons\">view_headline</i>\r\n                </md-icon>\r\n                <span translate=\"formEditor.question.typeSelectMenu.longText\">Long text</span>\r\n            </md-option>\r\n            <md-divider></md-divider>\r\n            <md-option value=\"radioButtonList\">\r\n                <md-icon style=\"margin-right: 10px;\">\r\n                    <i class=\"material-icons\">radio_button_checked</i>\r\n                </md-icon>\r\n                <span translate=\"formEditor.question.typeSelectMenu.radioButtons\">Radio buttons</span>\r\n            </md-option>\r\n            <md-option value=\"checkBoxList\">\r\n                <md-icon style=\"margin-right: 10px;\">\r\n                    <i class=\"material-icons\">check_box</i>\r\n                </md-icon>\r\n                <span translate=\"formEditor.question.typeSelectMenu.checkBoxes\">Check boxes</span>\r\n            </md-option>\r\n        </md-select>\r\n</div>";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(65);

	var _controller2 = _interopRequireDefault(_controller);

	var _i18n = __webpack_require__(66);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _style = __webpack_require__(69);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(70);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, i18n: _i18n2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope) {

	    var validatorMap = [[['number', 'gt'], 'gt'], [['number', 'gte'], 'gte'], [['number', 'lt'], 'lt'], [['number', 'lte'], 'lte'], [['number', 'eq'], 'eq'], [['number', 'ne'], 'ne'], [['text', 'contains'], 'contains'], [['text', 'notContains'], 'notContains'], [['text', 'isEmail'], 'isEmail'], [['text', 'isURL'], 'isURL'], [['regex', 'matches'], 'matches'], [['regex', 'notMatches'], 'notMatches']];

	    var hasTextParam = ['contains', 'notContains', 'matches', 'notMatches'];
	    var hasNumberParam = ['gt', 'gte', 'lt', 'lte', 'eq', 'ne'];

	    var defaultValidator = {
	        group: validatorMap[0][0][0],
	        name: validatorMap[0][0][1]
	    };

	    if ($scope.question.validation) {
	        $scope.question.validation.items = $scope.question.validation.items || [defaultValidator];

	        var item = $scope.question.validation.items[0];

	        $scope.validator = {
	            group: validatorMap.filter(function (x) {
	                return x[1] === item.name;
	            })[0][0][0],
	            name: validatorMap.filter(function (x) {
	                return x[1] === item.name;
	            })[0][0][1],
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
	        return validatorMap.filter(function (entry) {
	            return entry[0][0] === group;
	        });
	    };

	    $scope.hasParam = function (type) {
	        var name = $scope.validator.name;
	        if (type === 'text') {
	            return hasTextParam.indexOf(name) !== -1;
	        } else if (type === 'number') {
	            return hasNumberParam.indexOf(name) !== -1;
	        }
	    };

	    $scope.$watch('validator.group', function (group, oldGroup) {
	        if (group === oldGroup) {
	            return;
	        }

	        delete $scope.validator.param;

	        $scope.validator.name = validatorMap.filter(function (x) {
	            return x[0][0] === group;
	        })[0][1];
	    });

	    $scope.$watch('validator', function (validator) {
	        $scope.question.validation.items = [{ name: validator.name, param: validator.param, message: validator.message }];
	    }, true);
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _enI18n = __webpack_require__(67);

	var _enI18n2 = _interopRequireDefault(_enI18n);

	var _plI18n = __webpack_require__(68);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { en: _enI18n2.default, pl: _plI18n2.default };

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"row\" layout-align=\"start start\" flex>\r\n    <md-select ng-model=\"validator.group\">\r\n        <md-option value=\"number\"><span translate=\"formEditor.question.validators.number\">Number</span></md-option>\r\n        <md-option value=\"text\"><span translate=\"formEditor.question.validators.text\">Text</span></md-option>\r\n        <md-option value=\"regex\"><span translate=\"formEditor.question.validators.regex\">Regular expression</span></md-option>\r\n      </md-select>\r\n\r\n      <md-select ng-model=\"validator.name\">\r\n        <md-option ng-repeat=\"v in getValidatorsForGroup(validator.group)\" ng-value=\"v[1]\"><span translate=\"formEditor.question.validators.{{v[0][1]}}\"></span></md-option>\r\n      </md-select>\r\n\r\n      <md-input-container ng-if=\"hasParam('number')\" flex>\r\n        <label><span translate=\"formEditor.question.validators.number\">Number</span></label>\r\n        <input ng-model=\"validator.param\" type=\"number\">\r\n      </md-input-container>\r\n\r\n      <md-input-container ng-if=\"hasParam('text')\" flex>\r\n        <label>\r\n            <span ng-if=\"validator.group !== 'regex'\" translate=\"formEditor.question.validators.text\">Text</span>\r\n            <span ng-if=\"validator.group === 'regex'\" translate=\"formEditor.question.validators.expression\">Expression</span>\r\n        </label>\r\n        <input ng-model=\"validator.param\">\r\n      </md-input-container>\r\n\r\n      <md-input-container flex>\r\n        <label translate=\"formEditor.question.validators.customErrorMessage\">Custom error message</label>\r\n        <input ng-model=\"validator.message\">\r\n      </md-input-container>\r\n\r\n      <md-button class=\"md-icon-button remove-validator-button\" ng-click=\"toggleValidation(question)\">\r\n          <md-icon>\r\n              <i class=\"material-icons\">close</i>\r\n          </md-icon>\r\n      </md-button>\r\n</div>\r\n";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"editable\" ng-class=\"{ 'editing': editingItem === item, 'last': $last }\" ng-click=\"setEditingItem(item, $event)\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <form-editor_drag-handle class=\"item-drag-handle editing-ui\" as-sortable-item-handle ng-mousedown=\"setEditingItem(item, $event)\"></form-editor_drag-handle>\r\n    </div>\r\n    <div class=\"basic-settings\" layout=\"column\" layout-gt-sm=\"row\" layout-align=\"start center\">\r\n        <md-input-container md-no-float class=\"question-input\" flex>\r\n            <input ng-model=\"question.ask\" placeholder=\"Question\" ng-focus=\"setEditingItem(item, $event)\">\r\n        </md-input-container>\r\n        <form-editor_question_type-select-menu class=\"editing-ui\"></form-editor_question_type-select-menu>\r\n    </div>\r\n\r\n    <div  class=\"answer-editor\">\r\n        <form-editor_question_editors_radio-button-list ng-if=\"question.type === 'radioButtonList'\"></form-editor_question_editors_radio-button-list>\r\n        <form-editor_question_editors_check-box-list ng-if=\"question.type === 'checkBoxList'\"></form-editor_question_editors_check-box-list>\r\n        <form-editor_question_editors_short-text ng-if=\"question.type === 'shortText'\"></form-editor_question_editors_short-text>\r\n        <form-editor_question_editors_long-text ng-if=\"question.type === 'longText'\"></form-editor_question_editors_long-text>\r\n    </div>\r\n\r\n    <div class=\"editing-ui\" ng-if=\"question.validation\" flex>\r\n        <form-editor_question_validators flex></form-editor_question_validators>\r\n    </div>\r\n\r\n    <div layout=\"row\" class=\"question-toolbar editing-ui\" layout-align=\"end center\" layout-padding>\r\n        <md-button class=\"md-icon-button\" ng-click=\"copyItem(item)\">\r\n            <md-icon><i class=\"material-icons\">content_copy</i></md-icon>\r\n        </md-button>\r\n        <md-button class=\"md-icon-button\" ng-click=\"deleteItem(item)\">\r\n            <md-icon><i class=\"material-icons\">delete</i></md-icon>\r\n        </md-button>\r\n        <div class=\"divider\"></div>\r\n        <md-switch ng-model=\"question.required\">\r\n            <span translate=\".required\">Required</span>\r\n        </md-switch>\r\n        <md-menu>\r\n            <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\r\n                <md-icon><i class=\"material-icons\">more_vert</i></md-icon>\r\n            </md-button>\r\n            <md-menu-content>\r\n                <md-menu-item>\r\n                    <md-button ng-click=\"toggleValidation(question)\">\r\n                        <md-icon>\r\n                            <i class=\"material-icons\" ng-if=\"question.validation\">checked</i>\r\n                        </md-icon>\r\n                        <span translate=\"formEditor.question.answerValidation\">Answer validation</span>\r\n                    </md-button>\r\n                </md-menu-item>\r\n            </md-menu-content>\r\n        </md-menu>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n    <form-editor_editing-menu></form-editor_editing-menu>\r\n\r\n    <md-content class=\"page md-whiteframe-z1\" flex>\r\n        <div as-sortable=\"sortable.options\" ng-model=\"form.items\">\r\n            <div as-sortable-item ng-repeat=\"item in form.items\">\r\n                <form-editor_heading ng-init=\"heading=item\" ng-if=\"item.type === 'heading'\">\r\n                </form-editor_heading>\r\n                <form-editor_question ng-init=\"question=item.question\" ng-if=\"item.type === 'question'\">\r\n                </form-editor_question>\r\n            </div>\r\n        </div>\r\n    </md-content>\r\n</div>\r\n";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = registerPartials;

	var _registerNamespace = __webpack_require__(76);

	var _registerNamespace2 = _interopRequireDefault(_registerNamespace);

	var _registerComponent = __webpack_require__(77);

	var _registerComponent2 = _interopRequireDefault(_registerComponent);

	var _themeable = __webpack_require__(78);

	var _themeable2 = _interopRequireDefault(_themeable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function registerPartials(components, ns) {
		var _this2 = this;

		var isThemeable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		var App = this && this.compileProvider ? this : window.App;

		var dotsToCamelCase = function dotsToCamelCase(input) {
			return input.replace(/\.([a-z])/g, function (x) {
				return x[1].toUpperCase();
			});
		};

		var registerPartial = function registerPartial(name, partial) {
			var _this = this;

			var ns = name;

			var registrator = isThemeable ? function () {
				return _registerComponent2.default.bind(_this)((0, _themeable2.default)(partial, ns), ns);
			} : function () {
				return _registerComponent2.default.bind(_this)(partial, ns);
			};

			// so we could use underscores '_' instead of dots '.' (this way the tag can be handled by CSS/LESS)
			name = dotsToCamelCase(ns);

			var directive = typeof partial === 'function' ? partial : registrator;

			App.compileProvider.directive(name, directive);
		};

		if (components) {
			(0, _registerNamespace2.default)(components, registerPartial.bind(this), ns);
			(0, _registerNamespace2.default)(components, function (name, x) {
				return x.partials && registerPartials.bind(_this2)(x.partials, ns && ns + '.' + name || name, isThemeable);
			});
			(0, _registerNamespace2.default)(components, function (name, x) {
				return x.partials && registerPartials.bind(_this2)(x.components, ns && ns + '.' + name || name, isThemeable);
			});
		}
	}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (components, func, ns) {
		var App = this && this.compileProvider ? this : window.App;

		ns = ns && ns + '.' || '';

		func = typeof func === 'string' ? App[func] : func;

		Object.getOwnPropertyNames(components).filter(function (x) {
			return x.match(/^[A-Za-z].+$/) != null;
		}).forEach(function (x) {
			return func('' + ns + x, components[x]);
		});
	};

	;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (component, ns) {
	    var controller = component.controller;
	    var link = component.link;

	    //component.replace = component.replace || true;

	    function loadObjectFromNamespace(obj, ns) {
	        return ns.split('.').reduce(function (o, i) {
	            return o[i] = o[i] || {};
	        }, obj);
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

	            $rootScope.$watch('viewState', function (viewState) {
	                if (viewState) {
	                    $scope.viewState = loadObjectFromNamespace(viewState, ns);
	                }
	            });
	        }

	        if (controller) {
	            var locals = { $scope: $scope, $namespace: ns };
	            if ($state) {
	                angular.extend(locals, $state.$current.locals.globals);
	            }

	            $controller(controller, locals);
	        }
	    };

	    component.link = function (scope, element, attrs) {
	        var tagName = ns.replace('.', '_');
	        element.attr('_c_' + tagName, '');

	        if (link) {
	            link.apply(this, arguments);
	        }
	    };

	    return component;
	};

	;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (component, ns) {

	    if (component.template) {
	        var templateUrl = 'template/' + ns;

	        var $templateCache = angular.element('body').injector().get('$templateCache');

	        if (!$templateCache.get(templateUrl)) {
	            $templateCache.put(templateUrl, component.template);
	        }

	        component.templateUrl = templateUrl;
	        delete component.template;
	    }

	    return component;
	};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _enI18n = __webpack_require__(81);

	var _enI18n2 = _interopRequireDefault(_enI18n);

	var _plI18n = __webpack_require__(82);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { en: _enI18n2.default, pl: _plI18n2.default };

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);