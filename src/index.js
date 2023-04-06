import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Create a root React component using ReactDOM.createRoot() and attach it to the 'root' element in the HTML document.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the App component inside the root component, wrapped in a <React.StrictMode> component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
