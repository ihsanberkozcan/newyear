import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface colorType {
  color: {
    background: string;
  };
}
const initialState: colorType = {
  color: {
    background: "#eb9694",
  },
};

const color = createSlice({
  name: "color",
  initialState,
  reducers: {
    updateColor(state, action: PayloadAction<string>) {
      state.color.background = action.payload;
    },
  },
});

export const { updateColor } = color.actions;
export default color.reducer;
