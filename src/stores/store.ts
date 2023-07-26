import { configureStore } from "@reduxjs/toolkit";

import piecesSlice from "../slices/piecesSlice";

export const store = configureStore({
	reducer: {
		pieces: piecesSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
