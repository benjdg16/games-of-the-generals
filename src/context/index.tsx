// import { createContext, useState } from "react";

import { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
// 	const [boardPieces, setBoardPieces] = useState<any[][]>(() => [
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[0, 0, 0, 0, 0, 0, 0, 0, 0],
// 		[1, 1, 1, 1, 1, 1, 1, 1, 1],
// 		[1, 1, 1, 1, 1, 1, "G5_W", 1, 1],
// 		[1, 1, 1, 1, 1, 1, 1, 1, 1],
// 		[1, 1, 1, 1, 1, 1, 1, 1, "FLAG_W"],
// 	]);

// 	const defaultState = {
// 		boardPieces: boardPieces,
// 		setBoardPieces: setBoardPieces,
// 	};

// 	const BoardPiecesCtx = createContext(defaultState);

// export default {BoadPi};

interface TInitialState {
	boardPieces: any[][];
	setBoardPieces?: React.Dispatch<React.SetStateAction<any[][]>>;
	sample?: any;
	setSample?: React.Dispatch<React.SetStateAction<any>>;
}

const initialState: TInitialState = {
	boardPieces: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }: any) => {
	// const [state, dispatch] = useReducer(AppReducer, initialState);

	const [boardPieces, setBoardPieces] = useState<any[][]>([
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, "G5_W", 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, "FLAG_W"],
	]);

	const [sample, setSample] = useState<any>();

	return (
		<AppContext.Provider
			value={{
				// state,
				// dispatch,
				boardPieces,
				setBoardPieces,
				sample,
				setSample,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
