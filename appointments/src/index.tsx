import React from "react";
import ReactDOM from "react-dom/client";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { Provider } from "react-redux";
import store from "./store";
import { msalConfig } from "./authConfig";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const publicClientApplication = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MsalProvider instance={publicClientApplication}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MsalProvider>
  </React.StrictMode>
);