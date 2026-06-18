import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GenerationState {
  limit: number;
  offset: number;
}

const initialState: GenerationState = {
  limit: 151,
  offset: 0,
};

const generationSlice = createSlice({
  name: "generation",
  initialState,

  reducers: {
    setPagination: (
      state,
      action: PayloadAction<{ limit: number; offset: number }>,
    ) => {
      state.limit = action.payload.limit;
      state.offset = action.payload.offset;
    },
  },
});

export const { setPagination } = generationSlice.actions;

export default generationSlice.reducer;
