import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./Components/App";
import { AppContextProvider } from "./Context/app";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
