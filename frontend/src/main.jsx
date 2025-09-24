import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthContext from "./Context/AuthContext.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <UserContext>
        <App />
        </UserContext>
    </AuthContext>
  </BrowserRouter>
);
