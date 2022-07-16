import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, compose } from "redux";
import './index.css';
import App from './App';
import createSagaMiddleware from "redux-saga";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootSaga from './sagas';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './stores/rootReducer';
import { Provider } from 'react-redux';
const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware,logger));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
