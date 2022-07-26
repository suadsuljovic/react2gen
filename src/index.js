import React from "react";
import ReactDOM from "react-dom/client";
import Tabs from "./components/functional/Tabs";
import TabsExample from "./components/functional/TabsExample";
import Website from "./components/functional/Website";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
