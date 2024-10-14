import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Context from "./Utils/Context.jsx";

createRoot(document.getElementById("root")).render(
  <Context>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Context>
);
