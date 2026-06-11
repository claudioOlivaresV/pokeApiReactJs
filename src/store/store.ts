// ...existing code...
import { configureStore } from "@reduxjs/toolkit";
// importa el reducer del theme slice (ajusta la ruta)
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    // usa una clave coherente y el reducer importado
    theme: themeReducer,
  },
});
// ...existing code...
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
