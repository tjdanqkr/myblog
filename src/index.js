import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";
import createSagaMiddleWare from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
