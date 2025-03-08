// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react"; // Import ChakraProvider
import App from "./App.jsx";
i;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    {" "}
    {/* Wrap your app with ChakraProvider */}
    <App />
  </ChakraProvider>
);
