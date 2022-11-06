import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UseEffect from "./UseEffect";
import UserAuth from "./UserAuth";
import QrCode from "./QrCode";
import UseRef from "./UseRef";
import Portal from "./Portal";
import MultiTab from "./MultiTab";
import QrScanner from "./QrScanner";
import AnotherScanner from "./AnotherScanner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffect /> */}
    {/* <UserAuth /> */}

    {/* <QrCode /> */}
    {/* <Portal /> */}
    {/* <UseRef /> */}
    {/* <MultiTab /> */}
    <QrScanner />
    {/* <AnotherScanner /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
