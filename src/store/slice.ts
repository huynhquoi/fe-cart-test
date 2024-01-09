import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface State {
  total: string;
}

const initialState: State = {
  total: "",
};

export const Slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    getTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload;
    },
    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTotal, setTotal } = Slice.actions;

export default Slice.reducer;
