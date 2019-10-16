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

	var _directives = __webpack_require__(114);

	var _directives2 = _interopRequireDefault(_directives);

	var _services = __webpack_require__(117);

	var _services2 = _interopRequireDefault(_services);

	var _registerNamespace = __webpack_require__(119);

	var _registerNamespace2 = _interopRequireDefault(_registerNamespace);

	var _registerPartials = __webpack_require__(120);

	var _registerPartials2 = _interopRequireDefault(_registerPartials);

	__webpack_require__(123);

	__webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Config = {
	    api: {
	        endpoint: 'http://localhost:8011/api/v1'
	    }
	}; /* global angular */


	if (false) {
	    require('marekmicek-material/angular-material.css');

	    require('lodash');

	    require('marekmicek-material');
	    require('angular-animate');
	    require('angular-messages');
	    require('angular-sanitize');
	    require('ng-sortable');

	    require('angular-translate-tp/angular-translate');
	    require('angular-translate-loader-partial');

	    require('ace-builds/src-min-noconflict/ace');
	    require('angular-ui-ace/ui-ace');
	}

	var dependencies = ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngSanitize', 'as.sortable', 'pascalprecht.translate', 'ui.ace'];

	var App = angular.module('hpForms', dependencies);

	_registerNamespace2.default.bind(App)(_directives2.default, 'directive');
	_registerNamespace2.default.bind(App)(_services2.default, 'service');

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

	App.service('Config', function () {
	    return Config;
	});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _formDisplay = __webpack_require__(6);

	var _formDisplay2 = _interopRequireDefault(_formDisplay);

	var _formEditor = __webpack_require__(41);

	var _formEditor2 = _interopRequireDefault(_formEditor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { formDisplay: _formDisplay2.default, formEditor: _formEditor2.default };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(7);

	var _controller2 = _interopRequireDefault(_controller);

	var _link = __webpack_require__(8);

	var _link2 = _interopRequireDefault(_link);

	var _partials = __webpack_require__(9);

	var _partials2 = _interopRequireDefault(_partials);

	var _scope = __webpack_require__(39);

	var _scope2 = _interopRequireDefault(_scope);

	var _template = __webpack_require__(40);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, link: _link2.default, partials: _partials2.default, scope: _scope2.default, template: _template2.default };

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function _callee4($scope, $resource, FormResource, Config) {
	    var _this = this;

	    var endpoint;
	    return regeneratorRuntime.async(function _callee4$(_context4) {
	        while (1) {
	            switch (_context4.prev = _context4.next) {
	                case 0:
	                    endpoint = Config.forms.api.endpoint;


	                    $scope.loadForm = function _callee(_ref) {
	                        var type = _ref.type;
	                        var form;
	                        return regeneratorRuntime.async(function _callee$(_context) {
	                            while (1) {
	                                switch (_context.prev = _context.next) {
	                                    case 0:
	                                        _context.next = 2;
	                                        return regeneratorRuntime.awrap($resource(endpoint + "/forms/request?@type=" + encodeURIComponent(type)).get().$promise);

	                                    case 2:
	                                        form = _context.sent;


	                                        $scope.form = form;
	                                        $scope.$apply();

	                                    case 5:
	                                    case "end":
	                                        return _context.stop();
	                                }
	                            }
	                        }, null, _this);
	                    };

	                    $scope.loadResource = function _callee2(_ref2) {
	                        var type = _ref2.type,
	                            client_id = _ref2.client_id;
	                        var resources;
	                        return regeneratorRuntime.async(function _callee2$(_context2) {
	                            while (1) {
	                                switch (_context2.prev = _context2.next) {
	                                    case 0:
	                                        _context2.next = 2;
	                                        return regeneratorRuntime.awrap($resource(endpoint + "/resources?@type=" + encodeURIComponent(type)).query({
	                                            client_id: client_id
	                                        }).$promise);

	                                    case 2:
	                                        resources = _context2.sent;


	                                        $scope.resource = resources[0] || angular.copy($scope.form.request);
	                                        FormResource.toForm($scope.form, $scope.resource);

	                                        $scope.$apply();

	                                    case 6:
	                                    case "end":
	                                        return _context2.stop();
	                                }
	                            }
	                        }, null, _this);
	                    };

	                    $scope.save = function _callee3() {
	                        var client_id;
	                        return regeneratorRuntime.async(function _callee3$(_context3) {
	                            while (1) {
	                                switch (_context3.prev = _context3.next) {
	                                    case 0:
	                                        client_id = $scope.clientId;


	                                        Object.assign($scope.resource, FormResource.fromForm($scope.form));

	                                        $scope.ngForm.$setSubmitted();

	                                        if (!$scope.ngForm.$valid) {
	                                            _context3.next = 10;
	                                            break;
	                                        }

	                                        _context3.next = 6;
	                                        return regeneratorRuntime.awrap(FormResource.save({ formId: $scope.form._id, client_id: client_id }, $scope.resource).$promise);

	                                    case 6:
	                                        $scope.resource = _context3.sent;


	                                        $scope.ngForm.$setPristine();
	                                        $scope.ngForm.$setUntouched();

	                                        $scope.$$phase || $scope.$apply();

	                                    case 10:
	                                    case "end":
	                                        return _context3.stop();
	                                }
	                            }
	                        }, null, _this);
	                    };

	                    $scope.ngModel = $scope;

	                case 5:
	                case "end":
	                    return _context4.stop();
	            }
	        }
	    }, null, this);
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function _callee(scope, element, attrs) {
	    var type, clientId;
	    return regeneratorRuntime.async(function _callee$(_context) {
	        while (1) {
	            switch (_context.prev = _context.next) {
	                case 0:
	                    type = attrs.type, clientId = attrs.clientId;


	                    scope.clientId = clientId;

	                    _context.next = 4;
	                    return regeneratorRuntime.awrap(scope.loadForm({ type: type }));

	                case 4:
	                    _context.next = 6;
	                    return regeneratorRuntime.awrap(scope.loadResource({ type: type, client_id: clientId }));

	                case 6:
	                case "end":
	                    return _context.stop();
	            }
	        }
	    }, null, this);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _content = __webpack_require__(10);

	var _content2 = _interopRequireDefault(_content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { content: _content2.default };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _partials = __webpack_require__(11);

	var _partials2 = _interopRequireDefault(_partials);

	var _template = __webpack_require__(38);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { partials: _partials2.default, template: _template2.default };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _heading = __webpack_require__(12);

	var _heading2 = _interopRequireDefault(_heading);

	var _question = __webpack_require__(16);

	var _question2 = _interopRequireDefault(_question);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { heading: _heading2.default, question: _question2.default };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(13);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(15);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { style: _style2.default, template: _template2.default };

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<h2>{{item.title}}</h2>\r\n<span ng-bind-html=\"item.description | linky\"></span>\r\n\r\n<p class=\"required-info\" ng-if=\"$index === 0\">* <span translate=\".required\">Required</span></p>";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _partials = __webpack_require__(17);

	var _partials2 = _interopRequireDefault(_partials);

	var _style = __webpack_require__(36);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(37);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { partials: _partials2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _displays = __webpack_require__(18);

	var _displays2 = _interopRequireDefault(_displays);

	var _validators = __webpack_require__(33);

	var _validators2 = _interopRequireDefault(_validators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { displays: _displays2.default, validators: _validators2.default };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _partials = __webpack_require__(19);

	var _partials2 = _interopRequireDefault(_partials);

	var _template = __webpack_require__(32);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { partials: _partials2.default, template: _template2.default };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _autocomplete = __webpack_require__(20);

	var _autocomplete2 = _interopRequireDefault(_autocomplete);

	var _checkBoxList = __webpack_require__(23);

	var _checkBoxList2 = _interopRequireDefault(_checkBoxList);

	var _longText = __webpack_require__(26);

	var _longText2 = _interopRequireDefault(_longText);

	var _radioButtonList = __webpack_require__(28);

	var _radioButtonList2 = _interopRequireDefault(_radioButtonList);

	var _shortText = __webpack_require__(30);

	var _shortText2 = _interopRequireDefault(_shortText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { autocomplete: _autocomplete2.default, checkBoxList: _checkBoxList2.default, longText: _longText2.default, radioButtonList: _radioButtonList2.default, shortText: _shortText2.default };

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(21);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(22);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, template: _template2.default };

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope, $http) {
	    $scope.querySearch = function _callee(searchText) {
	        var response;
	        return regeneratorRuntime.async(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.next = 2;
	                        return regeneratorRuntime.awrap($http.get($scope.question.source.url));

	                    case 2:
	                        response = _context.sent;
	                        return _context.abrupt("return", response.data);

	                    case 4:
	                    case "end":
	                        return _context.stop();
	                }
	            }
	        }, null, this);
	    };
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"column\">\r\n    <md-autocomplete md-selected-item=\"selectedItem\" md-search-text=\"searchText\" md-items=\"item in querySearch(searchText)\">\r\n        <md-item-template>\r\n            <span class=\"item-title\">\r\n                <md-icon md-svg-icon=\"img/icons/octicon-repo.svg\"></md-icon>\r\n            </span>\r\n            <span class=\"item-metadata\">\r\n                <span>\r\n                    <strong>{{item.title}}</strong>\r\n                </span>\r\n                <span>\r\n                    <strong>{{item.description}}</strong>\r\n                </span>\r\n            </span>\r\n        </md-item-template>\r\n    </md-autocomplete>\r\n</div>\r\n";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(24);

	var _controller2 = _interopRequireDefault(_controller);

	var _template = __webpack_require__(25);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, template: _template2.default };

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope) {
	    $scope.question.answer = [];

	    $scope.toggle = function (item, list) {
	        var idx = list.indexOf(item.name);
	        if (idx > -1) {
	            list.splice(idx, 1);
	        } else {
	            list.push(item.name);
	        }
	    };

	    $scope.exists = function (item, list) {
	        return list.indexOf(item.name) > -1;
	    };
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"column\">\r\n    <md-checkbox ng-repeat=\"option in question.options\" ng-checked=\"exists(option, question.answer)\" ng-click=\"toggle(option, question.answer)\"  class=\"md-primary\" ng-disabled=\"disabled\">\r\n        {{option.name}}\r\n    </md-checkbox>\r\n</div>\r\n";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _template = __webpack_require__(27);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { template: _template2.default };

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = "<md-input-container class=\"md-block\">\r\n    <textarea ng-model=\"question.answer\" md-maxlength=\"2000\" rows=\"5\" md-select-on-focus ng-required=\"question.required\" name=\"{{question.ask}}\" ng-disabled=\"disabled\"></textarea>\r\n</md-input-container>\r\n";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _template = __webpack_require__(29);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { template: _template2.default };

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = "<md-radio-group ng-model=\"question.answer\" ng-required=\"question.required\" name=\"{{question.ask}}\" ng-disabled=\"disabled\">\r\n\r\n    <md-radio-button ng-repeat=\"option in question.options\" value=\"{{option.name}}\" class=\"md-primary\">{{option.name}}</md-radio-button>\r\n\r\n</md-radio-group>\r\n";

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

	module.exports = "<md-input-container>\r\n    <input ng-model=\"question.answer\" ng-required=\"question.required\" name=\"{{question.ask}}\" ng-disabled=\"disabled\" question-validator>\r\n    <form-display_content_question_validators></form-display_content_question_validators>\r\n</md-input-container>";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"display\">\r\n    <form-display_content_question_displays_radio-button-list ng-if=\"question.type === 'radioButtonList'\">\r\n    </form-display_content_question_displays_radio-button-list>\r\n    <form-display_content_question_displays_check-box-list ng-if=\"question.type === 'checkBoxList'\">\r\n    </form-display_content_question_displays_check-box-list>\r\n    <form-display_content_question_displays_short-text ng-if=\"question.type === 'shortText'\">\r\n    </form-display_content_question_displays_short-text>\r\n    <form-display_content_question_displays_long-text ng-if=\"question.type === 'longText'\">\r\n    </form-display_content_question_displays_long-text>\r\n    <form-display_content_question_displays_autocomplete ng-if=\"question.type === 'autocomplete'\">\r\n    </form-display_content_question_displays_autocomplete>\r\n</div>";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(34);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(35);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { style: _style2.default, template: _template2.default };

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = "<ng-messages for=\"ngForm[question.ask].$error\" role=\"alert\" ng-if=\"!disabled && (!ngForm[question.ask].$pristine || ngForm.$submitted)\">\r\n    <ng-message when=\"required\" translate=\".validator.required\">This item is required</ng-message>\r\n    <ng-message ng-repeat=\"validator in question.validation.items\" when=\"{{validator.name}}\">\r\n        <span ng-if=\"!validator.message\" translate=\".validator.{{validator.name}}\" translate-values=\"{ param: validator.param }\"></span>\r\n        <span ng-if=\"validator.message\">{{validator.message}}</span>\r\n    </ng-message>\r\n</ng-messages>";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"question\" layout=\"row\" layout-align=\"start center\">\r\n    <label>{{question.ask}} <span class=\"required\" ng-if=\"question.required\">*</span></label>\r\n\r\n    <form-display_content_question_displays>\r\n    </form-display_content_question_displays>\r\n</div>";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = "<div ng-repeat=\"item in form.items\">\r\n    <form-display_content_heading ng-init=\"heading=item\" ng-if=\"item.type === 'heading'\">\r\n    </form-display_content_heading>\r\n    <form-display_content_question ng-init=\"question=item.question\" ng-if=\"item.type === 'question'\">\r\n    </form-display_content_question>\r\n    <form-display_content ng-init=\"form=item\" ng-if=\"item.type === 'section'\">\r\n    </form-display_content>\r\n</div>";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    ngModel: '='
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n    <form-display_content ng-form=\"ngForm\">\r\n    </form-display_content>\r\n</div>";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _components = __webpack_require__(42);

	var _components2 = _interopRequireDefault(_components);

	var _controller = __webpack_require__(51);

	var _controller2 = _interopRequireDefault(_controller);

	var _partials = __webpack_require__(52);

	var _partials2 = _interopRequireDefault(_partials);

	var _style = __webpack_require__(112);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(113);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { components: _components2.default, controller: _controller2.default, partials: _partials2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dragHandle = __webpack_require__(43);

	var _dragHandle2 = _interopRequireDefault(_dragHandle);

	var _editingMenu = __webpack_require__(46);

	var _editingMenu2 = _interopRequireDefault(_editingMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { dragHandle: _dragHandle2.default, editingMenu: _editingMenu2.default };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(44);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(45);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { style: _style2.default, template: _template2.default };

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = "<md-icon class=\"drag-handle\"><i class=\"material-icons\">drag_handle</i></md-icon>\r\n";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18n = __webpack_require__(47);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _style = __webpack_require__(49);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(50);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { i18n: _i18n2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(48);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"md-whiteframe-z1 editing-menu\" layout=\"row\" layout-gt-sm=\"column\" layout-align=\"start center\">\r\n    <md-button class=\"md-icon-button\" ng-click=\"addNewQuestion()\">\r\n        <md-tooltip md-direction=\"right\">\r\n            <span translate=\"formEditor.editingMenu.createNewQuestion\">Add new question</span>\r\n        </md-tooltip>\r\n        <md-icon>\r\n            <i class=\"material-icons\">add_circle</i>\r\n        </md-icon>\r\n    </md-button>\r\n    <md-button class=\"md-icon-button\" ng-click=\"addNewHeading()\">\r\n        <md-tooltip md-direction=\"right\">\r\n            <span translate=\"formEditor.editingMenu.createNewHeading\">Add new heading</span>\r\n        </md-tooltip>\r\n        <md-icon>\r\n            <i class=\"material-icons\">text_fields</i>\r\n        </md-icon>\r\n    </md-button>\r\n    <md-button class=\"md-icon-button\" ng-click=\"addNewSection()\">\r\n        <md-tooltip md-direction=\"right\">\r\n            <span translate=\"formEditor.editingMenu.createNewSection\">Add new section</span>\r\n        </md-tooltip>\r\n        <md-icon>\r\n            <i class=\"material-icons\">view_agenda</i>\r\n        </md-icon>\r\n    </md-button>\r\n</div>";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope, $timeout, $mdMedia) {
	    var defaultQuestion = { type: 'question', question: { options: [{}], type: 'radioButtonList' } };
	    var defaultHeading = { type: 'heading' };

	    var sections;

	    $scope.editingItem;
	    $scope.editingSection;

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
	            var currentTarget = $event.currentTarget;
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
	            sections = sections || [{ type: 'section', items: $scope.form.items }];
	            return sections;
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

	    var formEditor = document.querySelector('form-editor');

	    $scope.$watch(function () {
	        return formEditor.getBoundingClientRect().top;
	    }, function () {
	        var editingMenu = document.querySelector('form-editor_editing-menu');

	        var top = Math.max(editingMenu.getBoundingClientRect().top, 0);
	        var formEditorBoundingClientRect = formEditor.getBoundingClientRect();

	        var minTop = formEditorBoundingClientRect.top;
	        var maxTop = formEditorBoundingClientRect.top + formEditorBoundingClientRect.height - editingMenu.getBoundingClientRect().height;

	        top = Math.min(Math.max(top, minTop), maxTop);

	        angular.element(editingMenu).css({ top: top });
	    });
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _heading = __webpack_require__(53);

	var _heading2 = _interopRequireDefault(_heading);

	var _properties = __webpack_require__(56);

	var _properties2 = _interopRequireDefault(_properties);

	var _question = __webpack_require__(60);

	var _question2 = _interopRequireDefault(_question);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { heading: _heading2.default, properties: _properties2.default, question: _question2.default };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(54);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(55);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { style: _style2.default, template: _template2.default };

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"column\" class=\"editable\" ng-class=\"{ 'editing': editingItem === heading, 'locked': item.settings.locked }\" ng-click=\"setEditingItem(item, section, $event)\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <form-editor_drag-handle class=\"item-drag-handle editing-ui\" as-sortable-item-handle ng-mousedown=\"setEditingItem(item, section, $event)\"></form-editor_drag-handle>\r\n    </div>\r\n    <md-input-container class=\"big\" md-no-float>\r\n        <input ng-model=\"heading.title\" ng-focus=\"setEditingItem(heading, $event)\" placeholder=\"Title\">\r\n    </md-input-container>\r\n\r\n    <md-input-container class=\"small\" md-no-float>\r\n        <input ng-model=\"heading.description\" ng-focus=\"setEditingItem(heading, $event)\" placeholder=\"Description\">\r\n    </md-input-container>\r\n\r\n    <div layout=\"row\" class=\"editing-ui\" layout-align=\"end center\" layout-padding ng-if=\"!item.settings.locked\">\r\n            <md-button class=\"md-icon-button\" ng-click=\"deleteItem(item)\">\r\n                <md-icon><i class=\"material-icons\">delete</i></md-icon>\r\n            </md-button>\r\n        </div>\r\n</div>\r\n";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(57);

	var _controller2 = _interopRequireDefault(_controller);

	var _style = __webpack_require__(58);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(59);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope) {
	    $scope.getProperties = function () {
	        return $scope.form.items.filter(function (x) {
	            return x.type === 'property';
	        });
	    };
	};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports = "<div ng-repeat=\"property in getProperties()\">\r\n    <div layout=\"row\" layout-align=\"start center\">\r\n        <span class=\"title\">{{property.title}}</span>\r\n        <md-input-container flex>\r\n            <input ng-model=\"property.value\">\r\n        </md-input-container>\r\n    </div>\r\n\r\n    <div ui-ace></div>\r\n</div>";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(61);

	var _controller2 = _interopRequireDefault(_controller);

	var _i18n = __webpack_require__(62);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _partials = __webpack_require__(64);

	var _partials2 = _interopRequireDefault(_partials);

	var _style = __webpack_require__(110);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(111);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, i18n: _i18n2.default, partials: _partials2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(63);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _editors = __webpack_require__(65);

	var _editors2 = _interopRequireDefault(_editors);

	var _typeSelectMenu = __webpack_require__(96);

	var _typeSelectMenu2 = _interopRequireDefault(_typeSelectMenu);

	var _validators = __webpack_require__(103);

	var _validators2 = _interopRequireDefault(_validators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { editors: _editors2.default, typeSelectMenu: _typeSelectMenu2.default, validators: _validators2.default };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _partials = __webpack_require__(66);

	var _partials2 = _interopRequireDefault(_partials);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { partials: _partials2.default };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _autocomplete = __webpack_require__(67);

	var _autocomplete2 = _interopRequireDefault(_autocomplete);

	var _checkBoxList = __webpack_require__(69);

	var _checkBoxList2 = _interopRequireDefault(_checkBoxList);

	var _longText = __webpack_require__(71);

	var _longText2 = _interopRequireDefault(_longText);

	var _options = __webpack_require__(76);

	var _options2 = _interopRequireDefault(_options);

	var _radioButtonList = __webpack_require__(89);

	var _radioButtonList2 = _interopRequireDefault(_radioButtonList);

	var _shortText = __webpack_require__(91);

	var _shortText2 = _interopRequireDefault(_shortText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { autocomplete: _autocomplete2.default, checkBoxList: _checkBoxList2.default, longText: _longText2.default, options: _options2.default, radioButtonList: _radioButtonList2.default, shortText: _shortText2.default };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _template = __webpack_require__(68);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { template: _template2.default };

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = "Autocomplete";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _template = __webpack_require__(70);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { template: _template2.default };

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = "<form-editor_question_editors_options></form-editor_question_editors_options>\r\n";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18n = __webpack_require__(72);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _style = __webpack_require__(74);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(75);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { i18n: _i18n2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(73);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n    <span translate=\"formEditor.question.editors.longText.longTextContent\">Long text content</span>\r\n    <br>\r\n    .<br>.<br>.<br>\r\n</div>\r\n";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(77);

	var _controller2 = _interopRequireDefault(_controller);

	var _partials = __webpack_require__(78);

	var _partials2 = _interopRequireDefault(_partials);

	var _scope = __webpack_require__(86);

	var _scope2 = _interopRequireDefault(_scope);

	var _style = __webpack_require__(87);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(88);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, partials: _partials2.default, scope: _scope2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _item = __webpack_require__(79);

	var _item2 = _interopRequireDefault(_item);

	var _placeholder = __webpack_require__(83);

	var _placeholder2 = _interopRequireDefault(_placeholder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { item: _item2.default, placeholder: _placeholder2.default };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(80);

	var _controller2 = _interopRequireDefault(_controller);

	var _style = __webpack_require__(81);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(82);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 80 */
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
/* 81 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"row\" layout-align=\"start center\">\r\n    <form-editor_drag-handle ng-class=\"{hidden: question.options.length <= 1}\" class=\"editing-ui vertical\" as-sortable-item-handle></form-editor_drag-handle>\r\n    <md-icon ng-if=\"question.type === 'radioButtonList'\"><i class=\"material-icons\">radio_button_unchecked</i></md-icon>\r\n    <md-icon ng-if=\"question.type === 'checkBoxList'\"><i class=\"material-icons\">check_box_outline_blank</i></md-icon>\r\n    <md-input-container md-no-float flex>\r\n        <input ng-model=\"option.name\" placeholder=\"Option\" ng-focus=\"setEditingItem(item, $event)\" ng-keyup=\"handleKeyUp($event)\">\r\n    </md-input-container>\r\n    <md-button class=\"md-icon-button editing-ui\" ng-click=\"deleteOption(option)\" ng-if=\"question.options.length > 1\" tabindex=\"-1\">\r\n        <md-icon md-menu-origin><i class=\"material-icons\">close</i></md-icon>\r\n    </md-button>\r\n</div>\r\n";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style = __webpack_require__(84);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(85);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { style: _style2.default, template: _template2.default };

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"placeholder\" layout=\"row\" layout-align=\"start center\">\r\n    <form-editor_drag-handle class=\"editing-ui\" as-sortable-item-handle style=\"visibility: hidden\"></form-editor_drag-handle>\r\n        <md-icon ng-if=\"question.type === 'radioButtonList'\"><i class=\"material-icons\">radio_button_unchecked</i></md-icon>\r\n    <md-icon ng-if=\"question.type === 'checkBoxList'\"><i class=\"material-icons\">check_box_outline_blank</i></md-icon>\r\n    <md-input-container md-no-float flex>\r\n        <a ng-click=\"addNewOption($event)\">Add new option</a>\r\n    </md-input-container>\r\n</div>\r\n";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    type: '@'
	};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = "<div as-sortable=\"sortable.options\" ng-model=\"question.options\">\r\n    <form-editor_question_editors_options_item ng-repeat=\"option in question.options\" as-sortable-item></form-editor_question_editors_options_item>\r\n</div>\r\n<form-editor_question_editors_options_placeholder class=\"editing-ui\"></form-editor_question_editors_options_placeholder>\r\n";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _template = __webpack_require__(90);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { template: _template2.default };

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	module.exports = "<form-editor_question_editors_options></form-editor_question_editors_options>\r\n";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18n = __webpack_require__(92);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _style = __webpack_require__(94);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(95);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { i18n: _i18n2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(93);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n    <span translate=\"formEditor.question.editors.shortText.shortTextContent\">Short text content</span>\r\n</div>\r\n";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(97);

	var _controller2 = _interopRequireDefault(_controller);

	var _i18n = __webpack_require__(98);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _link = __webpack_require__(100);

	var _link2 = _interopRequireDefault(_link);

	var _style = __webpack_require__(101);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(102);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, i18n: _i18n2.default, link: _link2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function ($scope) {};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _plI18n = __webpack_require__(99);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { pl: _plI18n2.default };

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (scope, element, attrs) {
	    scope.$element = element;
	};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	module.exports = "<div layout-align=\"center center\" layout=\"row\">\r\n        <md-select ng-model=\"question.type\">\r\n            <md-option value=\"shortText\">\r\n                <md-icon style=\"margin-right: 10px;\">\r\n                    <i class=\"material-icons\">short_text</i>\r\n                </md-icon>\r\n                <span translate=\"formEditor.question.typeSelectMenu.shortText\">Short text</span>\r\n            </md-option>\r\n            <md-option value=\"longText\">\r\n                <md-icon style=\"margin-right: 10px;\">\r\n                    <i class=\"material-icons\">view_headline</i>\r\n                </md-icon>\r\n                <span translate=\"formEditor.question.typeSelectMenu.longText\">Long text</span>\r\n            </md-option>\r\n            <md-divider></md-divider>\r\n            <md-option value=\"radioButtonList\">\r\n                <md-icon style=\"margin-right: 10px;\">\r\n                    <i class=\"material-icons\">radio_button_checked</i>\r\n                </md-icon>\r\n                <span translate=\"formEditor.question.typeSelectMenu.radioButtons\">Radio buttons</span>\r\n            </md-option>\r\n            <md-option value=\"checkBoxList\">\r\n                <md-icon style=\"margin-right: 10px;\">\r\n                    <i class=\"material-icons\">check_box</i>\r\n                </md-icon>\r\n                <span translate=\"formEditor.question.typeSelectMenu.checkBoxes\">Check boxes</span>\r\n            </md-option>\r\n        </md-select>\r\n</div>";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _controller = __webpack_require__(104);

	var _controller2 = _interopRequireDefault(_controller);

	var _i18n = __webpack_require__(105);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _style = __webpack_require__(108);

	var _style2 = _interopRequireDefault(_style);

	var _template = __webpack_require__(109);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { controller: _controller2.default, i18n: _i18n2.default, style: _style2.default, template: _template2.default };

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($scope) {

	    var validatorMap = [[['number', 'gt'], 'gt'], [['number', 'gte'], 'gte'], [['number', 'lt'], 'lt'], [['number', 'lte'], 'lte'], [['number', 'eq'], 'eq'], [['number', 'ne'], 'ne'], [['text', 'contains'], 'contains'], [['text', 'notContains'], 'notContains'], [['text', 'isEmail'], 'isEmail'], [['text', 'isURL'], 'isURL', { require_tld: false }], [['regex', 'matches'], 'matches'], [['regex', 'notMatches'], 'notMatches']];

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

	        var validatorItem = validatorMap.filter(function (x) {
	            return x[0][0] === group;
	        })[0];
	        $scope.validator.name = validatorItem[1];
	    });

	    $scope.$watch('validator', function (validator) {
	        var validatorItem = validatorMap.filter(function (x) {
	            return x[1] === validator.name;
	        })[0];
	        var param = validator.param || validatorItem[2];

	        $scope.question.validation.items = [{ name: validator.name, param: param, message: validator.message }];
	    }, true);
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _enI18n = __webpack_require__(106);

	var _enI18n2 = _interopRequireDefault(_enI18n);

	var _plI18n = __webpack_require__(107);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { en: _enI18n2.default, pl: _plI18n2.default };

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"row\" layout-align=\"start start\" flex>\r\n    <md-select ng-model=\"validator.group\">\r\n        <md-option value=\"number\"><span translate=\"formEditor.question.validators.number\">Number</span></md-option>\r\n        <md-option value=\"text\"><span translate=\"formEditor.question.validators.text\">Text</span></md-option>\r\n        <md-option value=\"regex\"><span translate=\"formEditor.question.validators.regex\">Regular expression</span></md-option>\r\n      </md-select>\r\n\r\n      <md-select ng-model=\"validator.name\">\r\n        <md-option ng-repeat=\"v in getValidatorsForGroup(validator.group)\" ng-value=\"v[1]\"><span translate=\"formEditor.question.validators.{{v[0][1]}}\"></span></md-option>\r\n      </md-select>\r\n\r\n      <md-input-container ng-if=\"hasParam('number')\" flex>\r\n        <label><span translate=\"formEditor.question.validators.number\">Number</span></label>\r\n        <input ng-model=\"validator.param\" type=\"number\">\r\n      </md-input-container>\r\n\r\n      <md-input-container ng-if=\"hasParam('text')\" flex>\r\n        <label>\r\n            <span ng-if=\"validator.group !== 'regex'\" translate=\"formEditor.question.validators.text\">Text</span>\r\n            <span ng-if=\"validator.group === 'regex'\" translate=\"formEditor.question.validators.expression\">Expression</span>\r\n        </label>\r\n        <input ng-model=\"validator.param\">\r\n      </md-input-container>\r\n\r\n      <md-input-container flex>\r\n        <label translate=\"formEditor.question.validators.customErrorMessage\">Custom error message</label>\r\n        <input ng-model=\"validator.message\">\r\n      </md-input-container>\r\n\r\n      <md-button class=\"md-icon-button remove-validator-button\" ng-click=\"toggleValidation(question)\">\r\n          <md-icon>\r\n              <i class=\"material-icons\">close</i>\r\n          </md-icon>\r\n      </md-button>\r\n</div>\r\n";

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"editable\" ng-class=\"{ 'editing': editingItem === item, 'last': $last }\" ng-click=\"setEditingItem(item, section, $event);\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <form-editor_drag-handle class=\"item-drag-handle editing-ui\" as-sortable-item-handle ng-mousedown=\"setEditingItem(item, section, $event)\"></form-editor_drag-handle>\r\n    </div>\r\n    <div class=\"basic-settings\" layout=\"column\" layout-gt-sm=\"row\" layout-align=\"start center\">\r\n        <md-input-container md-no-float class=\"question-input\" flex>\r\n            <input ng-model=\"question.ask\" placeholder=\"Question\" ng-focus=\"setEditingItem(item, $event)\">\r\n        </md-input-container>\r\n        <form-editor_question_type-select-menu class=\"editing-ui\"></form-editor_question_type-select-menu>\r\n    </div>\r\n\r\n    <div class=\"answer-editor\">\r\n        <form-editor_question_editors_radio-button-list ng-if=\"question.type === 'radioButtonList'\"></form-editor_question_editors_radio-button-list>\r\n        <form-editor_question_editors_check-box-list ng-if=\"question.type === 'checkBoxList'\"></form-editor_question_editors_check-box-list>\r\n        <form-editor_question_editors_short-text ng-if=\"question.type === 'shortText'\"></form-editor_question_editors_short-text>\r\n        <form-editor_question_editors_long-text ng-if=\"question.type === 'longText'\"></form-editor_question_editors_long-text>\r\n        <form-editor_question_editors_autocomplete ng-if=\"question.type === 'autocomplete'\"></form-editor_question_editors_autocomplete>\r\n    </div>\r\n\r\n    <div class=\"editing-ui\" ng-if=\"question.validation\" flex>\r\n        <form-editor_question_validators flex></form-editor_question_validators>\r\n    </div>\r\n\r\n    <div layout=\"row\" class=\"question-toolbar editing-ui\" layout-align=\"end center\" layout-padding>\r\n        <md-button class=\"md-icon-button\" ng-click=\"copyItem(item)\">\r\n            <md-icon><i class=\"material-icons\">content_copy</i></md-icon>\r\n        </md-button>\r\n        <md-button class=\"md-icon-button\" ng-click=\"deleteItem(item)\">\r\n            <md-icon><i class=\"material-icons\">delete</i></md-icon>\r\n        </md-button>\r\n        <div class=\"divider\"></div>\r\n        <md-switch ng-model=\"question.required\">\r\n            <span translate=\".required\">Required</span>\r\n        </md-switch>\r\n        <md-menu>\r\n            <md-button class=\"md-icon-button\" ng-click=\"$mdMenu.open($event)\">\r\n                <md-icon><i class=\"material-icons\">more_vert</i></md-icon>\r\n            </md-button>\r\n            <md-menu-content>\r\n                <md-menu-item>\r\n                    <md-button ng-click=\"toggleValidation(question)\">\r\n                        <md-icon>\r\n                            <i class=\"material-icons\" ng-if=\"question.validation\">checked</i>\r\n                        </md-icon>\r\n                        <span translate=\"formEditor.question.answerValidation\">Answer validation</span>\r\n                    </md-button>\r\n                </md-menu-item>\r\n            </md-menu-content>\r\n        </md-menu>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n    <form-editor_editing-menu></form-editor_editing-menu>\r\n\r\n    <md-content ng-repeat=\"section in getSections()\" class=\"page md-whiteframe-z1\" flex ng-click=\"setEditingItem(null, section, $event)\">\r\n        <div as-sortable=\"sortable.options\" ng-model=\"section.items\">\r\n            <div as-sortable-item ng-repeat=\"item in section.items\">\r\n                <form-editor_heading ng-init=\"heading=item\" ng-if=\"item.type === 'heading'\">\r\n                </form-editor_heading>\r\n                <form-editor_question ng-init=\"question=item.question\" ng-if=\"item.type === 'question'\">\r\n                </form-editor_question>\r\n            </div>\r\n        </div>\r\n    </md-content>\r\n</div>\r\n";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _questionValidator = __webpack_require__(115);

	var _questionValidator2 = _interopRequireDefault(_questionValidator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { questionValidator: _questionValidator2.default };

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    angular.extend(_validator2.default, {
	        gt: function gt(value, param) {
	            return _validator2.default.isInt(value, { gt: param });
	        },
	        lt: function lt(value, param) {
	            return _validator2.default.isInt(value, { lt: param });
	        },
	        gte: function gte(value, param) {
	            return _validator2.default.isInt(value, { min: param });
	        },
	        lte: function lte(value, param) {
	            return _validator2.default.isInt(value, { max: param });
	        },
	        eq: function eq(value, param) {
	            return value === param;
	        },
	        ne: function ne(value, param) {
	            return value !== param;
	        },
	        notContains: function notContains(value, param) {
	            return !_validator2.default.contains(value, param);
	        },
	        notMatches: function notMatches(value, param) {
	            return !_validator2.default.matches(value, param);
	        }
	    });

	    return {
	        require: 'ngModel',
	        link: function link(scope, elem, attr, ngModel) {
	            var validationItem = scope.question.validation ? scope.question.validation.items[0] : undefined;

	            if (validationItem) {
	                //For DOM -> model validation
	                ngModel.$parsers.unshift(function (value) {
	                    var isValid = value ? _validator2.default[validationItem.name](value.toString(), validationItem.param) : false;

	                    ngModel.$setValidity(validationItem.name, isValid);
	                    return isValid ? value : undefined;
	                });

	                //For model -> DOM validation
	                ngModel.$formatters.unshift(function (value) {
	                    var isValid = value ? _validator2.default[validationItem.name](value.toString(), validationItem.param) : false;

	                    ngModel.$setValidity(validationItem.name, isValid);
	                    return value;
	                });
	            }
	        }
	    };
	};

	var _validator = __webpack_require__(116);

	var _validator2 = _interopRequireDefault(_validator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
	  ( false ? 'undefined' : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.validator = factory();
	})(undefined, function () {
	  'use strict';

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	      _typeof = function _typeof(obj) {
	        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	      };
	    } else {
	      _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
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
	    if ((typeof input === 'undefined' ? 'undefined' : _typeof2(input)) !== "object" || input === null) return input;
	    var prim = input[Symbol.toPrimitive];

	    if (prim !== undefined) {
	      var res = prim.call(input, hint || "default");
	      if ((typeof res === 'undefined' ? 'undefined' : _typeof2(res)) !== "object") return res;
	      throw new TypeError("@@toPrimitive must return a primitive value.");
	    }

	    return (hint === "string" ? String : Number)(input);
	  }

	  function _toPropertyKey(arg) {
	    var key = _toPrimitive(arg, "string");

	    return (typeof key === 'undefined' ? 'undefined' : _typeof2(key)) === "symbol" ? key : String(key);
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
	  var isLatLong = function isLatLong(str) {
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
	  var isPostalCode = function isPostalCode(str, locale) {
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FormResource = __webpack_require__(118);

	var _FormResource2 = _interopRequireDefault(_FormResource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { FormResource: _FormResource2.default };

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($resource, $parse, Config) {
	    var endpoint = Config.forms.api.endpoint;
	    var resource = $resource(endpoint + '/resources');

	    resource.fromForm = function (form) {
	        var objectMap = form.items.map(function (item) {
	            return item.type === 'section' ? item.items : item;
	        }).flat().filter(function (item) {
	            return item.type === 'question';
	        }).map(function (_ref) {
	            var question = _ref.question,
	                answer = _ref.answer;
	            return { key: question.ask, value: question.answer };
	        });

	        var object = {};
	        objectMap.forEach(function (_ref2) {
	            var key = _ref2.key,
	                value = _ref2.value;
	            return $parse(key).assign(object, value);
	        });

	        Object.assign(object, form.request);

	        return object;
	    };

	    resource.toForm = function (form, resource) {
	        var items = form.items.map(function (item) {
	            return item.type === 'section' ? item.items : item;
	        }).flat().filter(function (item) {
	            return item.type === 'question';
	        });

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var item = _step.value;

	                item.question.answer = $parse(item.question.ask)(resource);
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    };

	    return resource;
	};

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (components, func, ns) {
		var App = this && (typeof func === 'string' && this[func] || this.compileProvider) ? this : window.App;

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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = registerPartials;

	var _registerNamespace = __webpack_require__(119);

	var _registerNamespace2 = _interopRequireDefault(_registerNamespace);

	var _registerComponent = __webpack_require__(121);

	var _registerComponent2 = _interopRequireDefault(_registerComponent);

	var _themeable = __webpack_require__(122);

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
/* 121 */
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
	        var camelCaseToDashes = function camelCaseToDashes(input) {
	            return input.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
	        };
	        var nsToDirectiveTagName = function nsToDirectiveTagName(input) {
	            return camelCaseToDashes(input).replace(/\./g, '_');
	        };

	        var tagName = nsToDirectiveTagName(ns);

	        element.attr('_c_' + tagName, '');

	        if (link) {
	            link.apply(this, arguments);
	        }
	    };

	    return component;
	};

	;

/***/ }),
/* 122 */
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
/* 123 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _enI18n = __webpack_require__(125);

	var _enI18n2 = _interopRequireDefault(_enI18n);

	var _plI18n = __webpack_require__(126);

	var _plI18n2 = _interopRequireDefault(_plI18n);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { en: _enI18n2.default, pl: _plI18n2.default };

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);