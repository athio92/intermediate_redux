import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//for redux-promise to work,the Promise in Actions object have to be wrapped
//inside 'payload' property, Ex: {type="AN_ACTION_TYPE", payload:aPromiseObject}.
//So redux-promise stops the action entirely, and once the Promise is resolved,
//it dispatches a new action with payload : (result of the promise).
import ReduxPromise from 'redux-promise'; 

import App from './components/app';
import reducers from './reducers';

//note: applyMiddleware(middleWare) returns the following:
//return function (createStore) {
//     return function (reducer, preloadedState, enhancer) {
//        var store = createStore(reducer, preloadedState, enhancer);
//        (more code)
//     }
// }  

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
