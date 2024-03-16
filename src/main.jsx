import React from "react";
import ReactDOM from "react-dom/client";
import App from "./blog.jsx";
import "./index.css";
import Blog from "./blog.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  </Provider>
);
