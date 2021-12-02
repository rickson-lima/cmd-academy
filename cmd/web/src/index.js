import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SessionProvider } from "./providers/userSession";

ReactDOM.render(
  <SessionProvider>
    <App />
  </SessionProvider>,
  document.getElementById("root")
);
