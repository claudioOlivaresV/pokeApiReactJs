// ...existing code...
import { configureStore } from "@reduxjs/toolkit";
// importa el reducer del theme slice (ajusta la ruta)
import themeReducer from "./themeSlice";
import authSlice from "./authSlice";
import generationSlice from "./generationSlice";

export const store = configureStore({
  reducer: {
    // usa una clave coherente y el reducer importado
    theme: themeReducer,
    auth: authSlice,
    generation: generationSlice,
  },
});
// ...existing code...
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
