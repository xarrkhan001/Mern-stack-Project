import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";

// Get the root element
const rootElement = document.getElementById("root");

// Check if root element exists before rendering
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found in the DOM");
}
