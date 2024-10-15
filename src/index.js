import { createRoot } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./styles/GlobalStyles.css";
import { store } from "./app/store";

// Wait for the DOM to load before rendering the app
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
});
