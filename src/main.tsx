import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "./App";
import "./styles/tailwind.css";
import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </HashRouter>
  </React.StrictMode>,
);


