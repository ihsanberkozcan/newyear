import { configureStore } from "@reduxjs/toolkit";

import color from "./color";

const store = configureStore({
  reducer: {
    color,
  },
});

export default store;
