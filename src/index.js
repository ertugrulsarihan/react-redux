import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./Components/redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

const root = document.getElementById("root");

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  root
);
