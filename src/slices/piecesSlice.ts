import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WHITE_PIECES } from "../constants/pieces.const";

const initialState = {
	whitePieces: [WHITE_PIECES.G5_W, WHITE_PIECES.FLAG_W],
};

const piecesSlice = createSlice({
	name: "pieces",
	initialState,
	reducers: {
		movePiece: (state: any, action: PayloadAction<any>) => {
			console.log(state.whitePieces);
			console.log(action);
			const { pieceId, to } = action.payload;

			state.whitePieces.find((piece: any) => piece.id === pieceId).position =
				to;
		},
	},
});

export const { movePiece } = piecesSlice.actions;

export default piecesSlice.reducer;
