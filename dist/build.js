/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./comp.js":
/*!*****************!*\
  !*** ./comp.js ***!
  \*****************/
/***/ (() => {

eval("const GoodList = Vue.component('goods-list', {\n  props: ['goods'],\n  template: `\n        <div class=\"goods-list d-flex flex-wrap justify-content-center\">\n            <goods-item v-for=\"good in goods\" :good=\"good\"></goods-item>\n        </div>\n    `\n});\nconst GoodItem = Vue.component('goods-item', {\n  props: ['good'],\n  methods: {\n    makePOSTRequest(url, data, callback) {\n      let xhr;\n      if (window.XMLHttpRequest) {\n        xhr = new XMLHttpRequest();\n      } else if (window.ActiveXObject) {\n        xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\n      }\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n          callback(xhr.responseText);\n        }\n      };\n      xhr.open('POST', url, true);\n      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');\n      xhr.send(data);\n    },\n    addToCart() {\n      this.makePOSTRequest('/addToCart', JSON.stringify(this.good));\n    }\n  },\n  template: `\n        <div class=\"goods-item\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{good.product_name}}</h5>\n                    <h6 class=\"card-subtitle mb-2 text-body-secondary\">Card subtitle</h6>\n                    <p class=\"card-text\">Цена: {{good.price}} р</p>\n                    <button class=\"btn btn-outline-secondary\" @click=\"addToCart\">Добавить</button>                  \n                </div>\n            </div>\n        </div>\n    `\n});\n\n//# sourceURL=webpack://advancedjs/./comp.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("const app = new Vue({\n  el: '#app',\n  data: {\n    goods: [],\n    filteredGoods: [],\n    searchLine: ''\n  },\n  methods: {\n    makeGETRequest(url, callback) {\n      let xhr;\n      if (window.XMLHttpRequest) {\n        xhr = new XMLHttpRequest();\n      } else if (window.ActiveXObject) {\n        xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\n      }\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n          callback(xhr.responseText);\n        }\n      };\n      xhr.open('GET', url, true);\n      xhr.send();\n    },\n    filterGoods(value) {\n      const regexp = new RegExp(value, 'i');\n      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));\n    },\n    searchHandler() {\n      this.filterGoods(document.querySelector('#search_input').value);\n    }\n  },\n  mounted() {\n    this.makeGETRequest('/catalogData', goods => {\n      this.goods = JSON.parse(goods);\n      this.filteredGoods = JSON.parse(goods);\n    });\n  }\n});\n\n//# sourceURL=webpack://advancedjs/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./comp.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;