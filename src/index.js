import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookPage from "./page/bookPage/BookPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
