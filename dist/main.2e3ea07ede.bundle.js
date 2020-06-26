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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/cross3.svg":
/*!****************************!*\
  !*** ./src/img/cross3.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/cross3.svg\");\n\n//# sourceURL=webpack:///./src/img/cross3.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_load_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/load-video */ \"./src/js/load-video.js\");\n/* harmony import */ var _js_load_video__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_load_video__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mobile-menu */ \"./src/js/mobile-menu.js\");\n/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/on-scroll */ \"./src/js/on-scroll.js\");\n/* harmony import */ var _js_on_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_on_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_shop_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/shop-overlay */ \"./src/js/shop-overlay.js\");\n/* harmony import */ var _js_shop_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_shop_overlay__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_cross3_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/cross3.svg */ \"./src/img/cross3.svg\");\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/load-video.js":
/*!******************************!*\
  !*** ./src/js/load-video.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const video = document.querySelector(\".video-container\");\n// const loadButton = document.getElementById(\"load-video\");\n// loadButton.addEventListener(\"click\", () => {\n//     const videoContainer = document.createElement(\"div\");\n//     videoContainer.setAttribute(\"class\", \"video-container\");\n//     const video1 = '<iframe class=\"video-2\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/7krpt6JchzQ?start=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>';\n//     const video2 = '<iframe class=\"video-2\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/7krpt6JchzQ?start=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>';\n//     videoContainer.innerHTML = video1 + video2;\n//     video.appendChild(videoContainer);\n// });\n\n//# sourceURL=webpack:///./src/js/load-video.js?");

/***/ }),

/***/ "./src/js/mobile-menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile-menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toggler = document.querySelector(\"input[name=checkbox]\");\nvar menu = document.querySelector(\".menu-mobile\");\nvar menuOverlay = document.querySelector(\".menu-overlay\");\ntoggler.addEventListener(\"change\", function (e) {\n  // toggle menu visibility \n  if (e.target.checked) {\n    menu.style.visibility = \"visible\";\n    menuOverlay.style.transform = \"translateX(0%)\";\n    menuOverlay.style.transition = \"transform .15s ease\";\n    document.body.setAttribute(\"class\", \"noscroll\");\n  } else {\n    menu.style.visibility = \"hidden\";\n    menuOverlay.style.transform = \"translateX(100%)\";\n    menuOverlay.style.transition = \"transform .15s ease\";\n    document.body.removeAttribute(\"class\", \"noscroll\");\n  }\n});\n\n//# sourceURL=webpack:///./src/js/mobile-menu.js?");

/***/ }),

/***/ "./src/js/on-scroll.js":
/*!*****************************!*\
  !*** ./src/js/on-scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var scroll = window.requestAnimationFrame || function (callback) {\n  window.setTimeout(callback, 1000 / 60);\n};\n\nvar elementsToShow = document.querySelectorAll(\".show-on-scroll\");\n\nfunction loop() {\n  elementsToShow.forEach(function (element) {\n    if (isElementInViewport(element)) {\n      element.classList.add(\"is-visible\");\n    } else {\n      element.classList.remove(\"is-visible\");\n    }\n  });\n  scroll(loop);\n}\n\nloop();\n\nfunction isElementInViewport(el) {\n  // special bonus for those using jQuery\n  if (typeof jQuery === \"function\" && el instanceof jQuery) {\n    el = el[0];\n  }\n\n  var rect = el.getBoundingClientRect();\n  return rect.top <= 0 && rect.bottom >= 0 || rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight) || rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);\n}\n\n//# sourceURL=webpack:///./src/js/on-scroll.js?");

/***/ }),

/***/ "./src/js/shop-overlay.js":
/*!********************************!*\
  !*** ./src/js/shop-overlay.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* SHOP-ITEM CONTENT */\nvar items = [{\n  title: \"Go Surfing\",\n  released: \"Released November 22, 2019\",\n  anton: \"Anton Goudsmit - Guitar\",\n  maarten: \"Maarten Hogenhuis - Alto & Tenor Saxophones\",\n  folkert: \"Folkert Oosterbeek - Hammond Organ\",\n  thomas: \"Thomas Rolff - Double Bass\",\n  felix: \"Felix Schlarmann - Drums\",\n  produced: \"Produced by BRUUT!\",\n  available: \"Available on: VINYL | CD | DIGITAL\",\n  image: \"./img/album-go-surfing.jpg\",\n  buyURL: \"https://bruut.bandcamp.com/album/superjazz\"\n}, {\n  title: \"V\",\n  released: \"Released November 30, 2018\",\n  maarten: \"Maarten Hogenhuis - Alto & Tenor Saxophones\",\n  folkert: \"Folkert Oosterbeek - Hammond Organ, Farfisa Compact, Vox Continental, Korg Polysix, Mellotron, Piano and Harmonium\",\n  thomas: \"Thomas Rolff - Double Bass\",\n  felix: \"Felix Schlarmann - Drums\",\n  produced: \"Produced by BRUUT! & Paul Willemsen\",\n  available: \"Available on: VINYL | CD | DIGITAL\",\n  image: \"./img/album-v.jpg\",\n  buyURL: \"https://bruut.bandcamp.com/album/v\"\n}, {\n  title: \"Superjazz\",\n  released: \"Released February 3, 2017\",\n  maarten: \"Maarten Hogenhuis - Alto & Tenor Saxophones\",\n  folkert: \"Folkert Oosterbeek - Hammond Organ & Mellotron\",\n  thomas: \"Thomas Rolff - Double Bass\",\n  felix: \"Felix Schlarmann - Drums\",\n  produced: \"Produced by BRUUT!\",\n  available: \"Available on: VINYL | CD | DIGITAL\",\n  image: \"./img/album-superjazz.jpg\",\n  buyURL: \"https://bruut.bandcamp.com/album/superjazz\"\n}, {\n  title: \"Mad Pack\",\n  released: \"Released March 6, 2015\",\n  maarten: \"Maarten Hogenhuis - Alto Saxophone, Tenor Saxophone & Tambourine\",\n  folkert: \"Folkert Oosterbeek - Hammond Organ, Mannborg Suitcase Harmonium & Vox Continental Organ\",\n  thomas: \"Thomas Rolff - Double Bass\",\n  felix: \"Felix Schlarmann - Drums & Tambourine\",\n  produced: \"Produced by BRUUT!\",\n  available: \"Available on: VINYL | CD | DIGITAL\",\n  image: \"./img/album-madpack.jpg\",\n  buyURL: \"https://bruut.bandcamp.com/album/mad-pack\"\n}, {\n  title: \"Fire\",\n  released: \"Released November 8, 2013\",\n  maarten: \"Maarten Hogenhuis - Alto & Tenor Saxophone\",\n  folkert: \"Folkert Oosterbeek - Hammond Organ\",\n  thomas: \"Thomas Rolff - Double Bass\",\n  felix: \"Felix Schlarmann - Drums\",\n  produced: \"Produced by BRUUT!\",\n  available: \"Available on: VINYL | CD | DIGITAL\",\n  image: \"./img/album-fire.jpg\",\n  buyURL: \"https://bruut.bandcamp.com/album/fire\"\n}, {\n  title: \"BRUUT!\",\n  released: \"Released January 10, 2012\",\n  maarten: \"Maarten Hogenhuis - Alto & Tenor Saxophone\",\n  folkert: \"Folkert Oosterbeek - Hammond Organ, Farfisa Compact, Vox Continental, Korg Polysix, Mellotron, Piano and Harmonium\",\n  thomas: \"Thomas Rolff - Double Bass\",\n  felix: \"Felix Schlarmann - Drums\",\n  produced: \"Produced by BRUUT!\",\n  available: \"Available on: CD | DIGITAL\",\n  image: \"./img/album-bruut.jpg\",\n  buyURL: \"https://bruut.bandcamp.com/album/bruut-2\"\n}];\n/***** EVENT LISTENERS *****/\n// On click -> toggle overlay ON\n// const test = Array.from(document.querySelectorAll(\".overlay\"));\n// test.forEach(item => item.addEventListener(\"click\", () => overlayOn()));\n// On click -> create initial content\n// document.querySelector(\"#goSurfing\").addEventListener(\"click\", () => createContent(items[0]));\n// document.querySelector(\"#v\").addEventListener(\"click\", () => createContent(items[1]));\n// document.querySelector(\"#superjazz\").addEventListener(\"click\", () => createContent(items[2]));\n// document.querySelector(\"#madpack\").addEventListener(\"click\", () => createContent(items[3]));\n// document.querySelector(\"#fire\").addEventListener(\"click\", () => createContent(items[4]));\n// document.querySelector(\"#bruut\").addEventListener(\"click\", () => createContent(items[5]));\n//NEW: on click create overlay, then create item content\n\ndocument.querySelector(\"#goSurfing\").addEventListener(\"click\", function () {\n  return overlayOn(items[0]);\n});\ndocument.querySelector(\"#v\").addEventListener(\"click\", function () {\n  return overlayOn(items[1]);\n});\ndocument.querySelector(\"#superjazz\").addEventListener(\"click\", function () {\n  return overlayOn(items[2]);\n});\ndocument.querySelector(\"#madpack\").addEventListener(\"click\", function () {\n  return overlayOn(items[3]);\n});\ndocument.querySelector(\"#fire\").addEventListener(\"click\", function () {\n  return overlayOn(items[4]);\n});\ndocument.querySelector(\"#bruut\").addEventListener(\"click\", function () {\n  return overlayOn(items[5]);\n});\n\nfunction overlayOn(item) {\n  var container = document.querySelector(\"#overlay-shop\");\n  container.style.display = \"block\"; // set body to .noscroll \n\n  document.body.setAttribute(\"class\", \"noscroll\"); // Create .overlay-wrapper\n\n  var overlayWrapper = document.createElement(\"div\");\n  overlayWrapper.setAttribute(\"class\", \"overlay-wrapper\");\n  container.appendChild(overlayWrapper); // Create .top-bar-wrapper\n\n  var topBarWrapper = document.createElement(\"div\");\n  topBarWrapper.setAttribute(\"class\", \"top-bar-wrapper\");\n  overlayWrapper.appendChild(topBarWrapper); // Create .left-bar-wrapper\n\n  var leftBarWrapper = document.createElement(\"div\");\n  leftBarWrapper.setAttribute(\"class\", \"left-bar-wrapper no-selection\");\n  leftBarWrapper.setAttribute(\"id\", \"previous-item\");\n  overlayWrapper.appendChild(leftBarWrapper); // CREATE PREV ARROW SVG\n\n  var prevSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n  prevSvg.setAttribute(\"width\", \"44\");\n  prevSvg.setAttribute(\"height\", \"74\");\n  var prevPath = document.createElementNS(\"http://www.w3.org/2000/svg\", 'path');\n  prevPath.setAttribute(\"d\", \"M1.181 39.885l32.93 32.929a4.018 4.018 0 002.861 1.182 4.02 4.02 0 002.863-1.182l2.425-2.424a4.053 4.053 0 000-5.725L14.608 37.013 42.291 9.331a4.021 4.021 0 001.182-2.861c0-1.085-.42-2.101-1.182-2.864l-2.425-2.424A4.019 4.019 0 0037.002 0c-1.084 0-2.1.42-2.862 1.182L1.18 34.141A4.024 4.024 0 000 37.011a4.023 4.023 0 001.18 2.874z\");\n  prevPath.setAttribute(\"fill\", \"#fff\");\n  leftBarWrapper.appendChild(prevSvg);\n  prevSvg.appendChild(prevPath); // Create .content-wrapper\n\n  var contentWrapper = document.createElement(\"div\");\n  contentWrapper.setAttribute(\"class\", \"content-wrapper\");\n  overlayWrapper.appendChild(contentWrapper); // Create .right-bar-wrapper\n\n  var rightBarWrapper = document.createElement(\"div\");\n  rightBarWrapper.setAttribute(\"class\", \"right-bar-wrapper no-selection\");\n  rightBarWrapper.setAttribute(\"id\", \"next-item\");\n  overlayWrapper.appendChild(rightBarWrapper); // CREATE  NEXT ARROW SVG\n\n  var nextSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n  nextSvg.setAttribute(\"width\", \"44\");\n  nextSvg.setAttribute(\"height\", \"74\");\n  var nextPath = document.createElementNS(\"http://www.w3.org/2000/svg\", 'path');\n  nextPath.setAttribute(\"d\", \"M42.292 34.11L9.362 1.183A4.018 4.018 0 006.5 0C5.416 0 4.4.42 3.638 1.182L1.213 3.607a4.053 4.053 0 000 5.724l27.651 27.652L1.182 64.665A4.021 4.021 0 000 67.526c0 1.085.42 2.101 1.182 2.864l2.425 2.424a4.02 4.02 0 002.862 1.182 4.02 4.02 0 002.863-1.182l32.96-32.959a4.024 4.024 0 001.18-2.87 4.023 4.023 0 00-1.18-2.874z\");\n  nextPath.setAttribute(\"fill\", \"#fff\");\n  rightBarWrapper.appendChild(nextSvg);\n  nextSvg.appendChild(nextPath); // Create .button-close container\n\n  var buttonContainer = document.createElement(\"div\");\n  buttonContainer.setAttribute(\"class\", \"button-close\");\n  topBarWrapper.appendChild(buttonContainer); // Add close button image\n\n  var cross = document.createElement(\"img\");\n  cross.setAttribute(\"src\", \"./img/cross3.svg\");\n  buttonContainer.appendChild(cross); // Listen on close-button\n\n  document.querySelector(\".button-close\").addEventListener(\"click\", function () {\n    container.style.display = \"none\";\n    overlayWrapper.remove();\n    document.body.removeAttribute(\"class\");\n  });\n  createContent(item);\n}\n\nfunction createContent(item) {\n  // Get .content-wrapper\n  var contentWrapper = document.querySelector(\".content-wrapper\"); // Create .content-container inside content-wrapper\n\n  var contentContainer = document.createElement(\"div\");\n  contentContainer.setAttribute(\"class\", \"content-container\");\n  contentWrapper.appendChild(contentContainer); // Create .image-container\n\n  var imageContainer = document.createElement(\"div\");\n  imageContainer.setAttribute(\"class\", \"image-container\"); // Create item image\n\n  var image = document.createElement(\"img\");\n  image.setAttribute(\"src\", item.image);\n  contentContainer.appendChild(imageContainer);\n  imageContainer.appendChild(image); // Create .info-container\n\n  var infoContainer = document.createElement(\"div\");\n  infoContainer.setAttribute(\"class\", \"info-container\");\n  contentContainer.appendChild(infoContainer); // Create header\n\n  var heading = document.createElement(\"h2\");\n  var title = document.createTextNode(item.title); // Create paragraphs\n\n  var p1 = document.createElement(\"p\");\n  var text1 = document.createTextNode(item.released);\n  var p2 = document.createElement(\"p\");\n  var text2 = document.createTextNode(item.maarten);\n  var p3 = document.createElement(\"p\");\n  var text3 = document.createTextNode(item.folkert);\n  var p4 = document.createElement(\"p\");\n  var text4 = document.createTextNode(item.thomas);\n  var p5 = document.createElement(\"p\");\n  var text5 = document.createTextNode(item.felix);\n  var p6 = document.createElement(\"p\");\n  var text6 = document.createTextNode(item.produced);\n  var p7 = document.createElement(\"p\");\n  var text7 = document.createTextNode(item.available); // Create .para-container for p2-p5\n\n  var paraContainer = document.createElement(\"div\");\n  paraContainer.setAttribute(\"class\", \"para-container\"); // add header and paragraphs to the DOM \n\n  infoContainer.appendChild(heading);\n  heading.appendChild(title); // add first paragraph\n\n  infoContainer.appendChild(p1);\n  p1.appendChild(text1); // add .para-container    \n\n  infoContainer.appendChild(paraContainer); // Check if Anton should be added to .para-container \n\n  if (item.anton) {\n    var pAnton = document.createElement(\"p\");\n    var antonText = document.createTextNode(item.anton);\n    paraContainer.appendChild(pAnton);\n    pAnton.appendChild(antonText);\n  } // add p2-p5 to .para-container    \n\n\n  paraContainer.appendChild(p2);\n  p2.appendChild(text2);\n  paraContainer.appendChild(p3);\n  p3.appendChild(text3);\n  paraContainer.appendChild(p4);\n  p4.appendChild(text4);\n  paraContainer.appendChild(p5);\n  p5.appendChild(text5); // add last 2 paragraphs to .info-container    \n\n  infoContainer.appendChild(p6);\n  p6.appendChild(text6);\n  infoContainer.appendChild(p7);\n  p7.appendChild(text7); // .buttons-container     \n\n  var buttonsContainer = document.createElement(\"div\");\n  buttonsContainer.setAttribute(\"class\", \"buttons-container\");\n  infoContainer.appendChild(buttonsContainer); // a tags with .button\n\n  var buttonShopBuy = document.createElement(\"a\");\n  buttonShopBuy.setAttribute(\"href\", item.buyURL);\n  buttonShopBuy.setAttribute(\"target\", \"_blank\");\n  buttonShopBuy.setAttribute(\"class\", \"button button__shop--buy\");\n  var buy = document.createTextNode(\"BUY\");\n  var shopSpan = document.createElement(\"span\");\n  shopSpan.setAttribute(\"class\", \"shopping\");\n  var shopSvg = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"23\" height=\"23\"><path fill=\"#FBFBFB\" d=\"M16.036 16.148a2.47 2.47 0 00-2.471 2.471 2.47 2.47 0 002.471 2.471 2.47 2.47 0 002.471-2.471c-.024-1.354-1.116-2.471-2.471-2.471zm4.348-11.783c-.048 0-.119-.024-.19-.024H5.227L4.989 2.75A2.127 2.127 0 002.875.92H.95a.953.953 0 00-.95.95c0 .523.428.95.95.95h1.924c.119 0 .214.095.238.214L4.585 13.06a2.606 2.606 0 002.566 2.209h9.882a2.64 2.64 0 002.566-2.091l1.544-7.721a.938.938 0 00-.759-1.092zM9.978 18.5a2.456 2.456 0 00-2.447-2.352 2.485 2.485 0 00-2.376 2.565 2.436 2.436 0 002.423 2.353h.048c1.354-.072 2.423-1.212 2.352-2.566z\"/></svg>';\n  var buttonShopStream = document.createElement(\"a\");\n  buttonShopStream.setAttribute(\"href\", item.buyURL);\n  buttonShopStream.setAttribute(\"target\", \"_blank\");\n  buttonShopStream.setAttribute(\"class\", \"button button__shop--stream\");\n  var stream = document.createTextNode(\"STREAM\");\n  var streamSpan = document.createElement(\"span\");\n  streamSpan.setAttribute(\"class\", \"stream\");\n  var streamSvg = '<svg width=\"19\" height=\"11\" viewBox=\"0 0 19 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.26804 0L9.23399 4.53252L13.1999 0H18.468L9.23399 10.5531L0 0H5.26804Z\" fill=\"white\"/></svg>'; // add buttons to the DOM \n\n  shopSpan.innerHTML = shopSvg;\n  streamSpan.innerHTML = streamSvg;\n  buttonsContainer.appendChild(buttonShopBuy);\n  buttonShopBuy.appendChild(shopSpan);\n  buttonShopBuy.appendChild(buy);\n  buttonsContainer.appendChild(buttonShopStream);\n  buttonShopStream.appendChild(streamSpan);\n  buttonShopStream.appendChild(stream); // Listen on #previous-item, on click -> create new content\n\n  document.querySelector(\"#previous-item\").addEventListener(\"click\", function () {\n    var prevItem = items[items.indexOf(item) - 1];\n\n    if (prevItem) {\n      contentWrapper.removeChild(contentContainer);\n      createContent(prevItem);\n    } else {\n      return null;\n    }\n  }); // Listen on #next-item, on click -> create new content\n\n  document.querySelector(\"#next-item\").addEventListener(\"click\", function () {\n    var nextItem = items[items.indexOf(item) + 1];\n\n    if (nextItem) {\n      contentWrapper.removeChild(contentContainer);\n      createContent(nextItem);\n    } else {\n      return null;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/shop-overlay.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });