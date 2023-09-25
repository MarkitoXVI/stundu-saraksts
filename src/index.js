import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. Iegust elementu no idex.html
const elementNoHTML = document.getElementById("root");
// 2. Elementu pārvērš par REACT
const sakne = ReactDOM.createRoot(elementNoHTML);
// 3. Rendere
sakne.render(<App />);