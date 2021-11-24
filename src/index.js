import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import bleConnectReducer from "./reducer";
import { connectToBluetooth } from "./actions";

const serviceUuid = "e472cea9-3ae8-4d96-951e-7086fe17d416";
const characteristicUuid = "7abd909a-a9e5-4409-96a9-7aa4fa33426f";
var myDescriptor;

let store = createStore(bleConnectReducer, applyMiddleware(thunk));

store.dispatch(connectToBluetooth);

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
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
