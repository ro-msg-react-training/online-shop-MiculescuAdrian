import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import {ProductProvider} from "./components/context";
import { createStore } from 'redux';
import {counter} from './components/counter';
import { Provider } from 'react-redux';
import store from "./js/store/index";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingIndicator = props => {
     const { promiseInProgress } = usePromiseTracker();
     return (
       promiseInProgress && 
       <div
             style={{
               width: "100%",
               height: "100",
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
             }}
          >
            <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
           </div>
    );  
   }

ReactDOM.render(
  <Provider store = {store}>
  <ProductProvider> 
    <Router>
    <App>
    <LoadingIndicator/>
      </App>
  </Router> 
  </ProductProvider>
  </Provider>
 , document.getElementById('root')
  


);


