import Board from "./components/Board/Board";
// import RightPanel from "./sections/RightPanel";
import "./App.css";
import "./App.scss";
// import BoardPiecesCtx from "./context/BoardPieces";
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

export type TBoardPieces = any[][];
export interface IDefaultState {
	boardPieces: TBoardPieces;
	setBoardPieces?: Dispatch<SetStateAction<TBoardPieces>>;
	test?: string;
	setTest?: Dispatch<SetStateAction<any>>;
}

const defaultState: IDefaultState = {
	boardPieces: [],
};

export const BoardPiecesCtx = createContext(defaultState);

function App() {
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

	const [test, setTest] = useState<any>("fwef");

	const defaultState: IDefaultState = {
		boardPieces: boardPieces,
		setBoardPieces: setBoardPieces,
		test: test,
		setTest,
	};

	// useEffect(() => {
	// 	console.log(`from app`);
	// 	console.log(boardPieces);
	// }, [boardPieces]);

	// const BoardPiecesCtx = createContext(defaultState);

	return (
		<BoardPiecesCtx.Provider value={defaultState}>
			<div className="gg-app">
				<Board />
				{/* <RightPanel /> */}
			</div>
		</BoardPiecesCtx.Provider>
	);
}

export default App;
