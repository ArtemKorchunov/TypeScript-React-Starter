import * as React from "react";
import * as ReactDOM from "react-dom";

import Routes from "./routes";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import reducers from "./redux/reducers";
import * as actions from "./redux/actions";

import "./index.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
