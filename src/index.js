import React from "react";
import ReactDOM from "react-dom/client";
import Composition from "./components/functional/Composition";
import MainButton from "./components/functional/MainButton";
import SearchMock from "./components/functional/SearchMock";

import SimpleForm from "./components/functional/SimpleForm";
import TemperatureConverter from "./components/functional/TemperatureConverter";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MainButton text="Pritisni" color="white" />
    <MainButton text="Pritisni" color="dark" />
    <MainButton text="Pritisni" color="yellow" />
    <MainButton text="Pritisni" color="red" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
