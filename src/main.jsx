import React from "react";
import ReactDOM from "react-dom/client";
import App from "./blog.jsx";
import "./index.css";
import Blog from "./blog.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Blog />
  </BrowserRouter>
);
