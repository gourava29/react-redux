import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducer';
import { Provider, connect } from 'react-redux'

let App = (props) => {
  return (
    <div>
        <p> Hello React !</p>
        <AwesomeComponent {...props}/>
    </div>
  );
};

const store = createStore(Reducer, applyMiddleware(thunk));

const mapStateToProps = (state) => {
  return {
    data: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLikeClick: () => {
      dispatch(function(dispatch, getState){
        dispatch({type: 'INCREMENT'});
      });
    }
  }
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
