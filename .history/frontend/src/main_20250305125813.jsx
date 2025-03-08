import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { chakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <chakraProvider>
      <App />
    </chakraProvider>
  </StrictMode>
);
