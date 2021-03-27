
import React, { Component, useState } from 'react';
import loadable from '@loadable/component'
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Reducers'
import { Provider } from 'react-redux';
import TEST from './Components/test'
function App(props) {
 
  const middleware = []
  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));

  console.log(middleware)
  return (
    <>

      <Provider store={store}>
        <TEST />
      </Provider>

 

    </>
  );


}

export default App;
