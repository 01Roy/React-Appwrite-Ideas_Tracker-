import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./lib/context/user.jsx";
import { IdeasProvider } from "./lib/context/ideas.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <IdeasProvider>
        <App />
      </IdeasProvider>
    </UserProvider>
  </React.StrictMode>
);
