import React from "react";
import ReactDom from "react-dom/client";
import "./main.css";
import App from "./App.jsx";

const entryPoint = document.getElementById("root");
ReactDom.createRoot(entryPoint).render(<App></App>);
