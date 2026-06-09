import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { PokeApi } from "./PokeApi.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokeApi />
  </StrictMode>,
);
