import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UiContextProvider } from "./UiContext.tsx";
import { ModalContextProvider } from "./ModalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UiContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </UiContextProvider>
    </BrowserRouter>
  </StrictMode>
);
