import * as React from "react";
import ReactDOM from "react-dom/client";
import { HarryPotter } from "./components/harry-potter-page/harry-potter/HarryPotter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HarryPotter />
  </React.StrictMode>,
);
