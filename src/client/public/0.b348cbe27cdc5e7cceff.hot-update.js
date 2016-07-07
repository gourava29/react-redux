webpackHotUpdate(0,{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(150); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(150);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(166);

	var _AwesomeComponent = __webpack_require__(253);

	var _AwesomeComponent2 = _interopRequireDefault(_AwesomeComponent);

	var _redux = __webpack_require__(264);

	var _Reducer = __webpack_require__(283);

	var _Reducer2 = _interopRequireDefault(_Reducer);

	var _reactRedux = __webpack_require__(257);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(props) {
	  console.log(props);
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'p',
	      null,
	      ' Hello React !'
	    ),
	    _react2.default.createElement(_AwesomeComponent2.default, props)
	  );
	};
	var store = (0, _redux.createStore)(_Reducer2.default);
	console.log(store.getState());
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    data: state
	  };
	};
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onLikeClick: function onLikeClick() {
	      dispatch({ type: 'INCREMENT' });
	    }
	  };
	};
	App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(App, null)
	), document.getElementById('app'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(254); if (makeExportsHot(module, __webpack_require__(150))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})