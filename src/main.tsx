import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store/store";

import "./index.css";
import { PokeApi } from "./PokeApi.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PokeApi />
    </Provider>
  </StrictMode>,
);
