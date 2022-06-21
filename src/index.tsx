import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import reportWebVitals from "./reportWebVitals";
import i18n from "./i18n/config";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import AppMode from "./AppMode";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="reset_css">
          <AppMode />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
