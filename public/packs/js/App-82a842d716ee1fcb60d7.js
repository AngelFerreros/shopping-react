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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/App.jsx":
/*!**************************************!*\
  !*** ./app/javascript/packs/App.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/app/javascript/packs/App.jsx: Identifier 'index' has already been declared (59:8)\n\n  57 |   getProd(name,index){\n  58 |     let prodName = name\n> 59 |     let index = index\n     |         ^\n  60 |     this.setState ({prod_name: name, prod_index: index})\n  61 | \n  62 |     console.log('prod name & index are:', prodName + index)\n    at Object.raise (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:6975:17)\n    at ScopeHandler.checkRedeclarationInScope (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:4255:12)\n    at ScopeHandler.declareName (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:4221:12)\n    at Object.checkLVal (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:8808:22)\n    at Object.parseVarId (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11329:10)\n    at Object.parseVar (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11304:12)\n    at Object.parseVarStatement (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11126:10)\n    at Object.parseStatementContent (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:10723:21)\n    at Object.parseStatement (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Object.parseBlockBody (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Object.parseBlock (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11203:10)\n    at Object.parseFunctionBody (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:10222:24)\n    at Object.parseFunctionBodyAndFinish (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:10192:10)\n    at Object.parseMethod (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:10146:10)\n    at Object.pushClassMethod (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11637:30)\n    at Object.parseClassMemberWithIsStatic (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11556:12)\n    at Object.parseClassMember (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11498:10)\n    at /Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11453:14\n    at Object.withTopicForbiddingContext (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:10531:14)\n    at Object.parseClassBody (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11430:10)\n    at Object.parseClass (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11404:22)\n    at Object.parseStatementContent (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:10698:21)\n    at Object.parseStatement (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:10656:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11232:25)\n    at Object.parseBlockBody (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:11219:10)\n    at Object.parseTopLevel (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:10587:10)\n    at Object.parse (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:12097:10)\n    at parse (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/parser/lib/index.js:12148:38)\n    at parser (/Users/AngelFerreros/SEIassignment/Unit-4/shopping-react/node_modules/@babel/core/lib/transformation/normalize-file.js:168:34)");

/***/ })

/******/ });
//# sourceMappingURL=App-82a842d716ee1fcb60d7.js.map