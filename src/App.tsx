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
	activePiece?: any;
	setActivePiece?: Dispatch<SetStateAction<any>>;
}

const defaultState: IDefaultState | null = {
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
	const [activePiece, setActivePiece] = useState<any>();

	const defaultState: IDefaultState = {
		boardPieces: boardPieces,
		setBoardPieces: setBoardPieces,
		test: test,
		setTest,
		activePiece,
		setActivePiece,
	};

	// useEffect(() => {
	// 	console.log(`from app`);
	// 	console.log(boardPieces);
	// }, [boardPieces]);

	// const BoardPiecesCtx = createContext(defaultState);

	return (
		<div className="gg-app">
			<Board />
			{/* <RightPanel /> */}
		</div>
	);
}

export default App;
