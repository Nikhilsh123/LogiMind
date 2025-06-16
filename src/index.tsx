import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App"; // Ensure this points to App.tsx
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root")!); // Add non-null assertion
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
