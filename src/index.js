import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import LoginForm from "./components/loginForm";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById("root")
);
