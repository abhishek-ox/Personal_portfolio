import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18

import App from "./App";
import "./index.css";

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
