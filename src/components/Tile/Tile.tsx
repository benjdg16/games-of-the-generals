import { useContext, useRef, useEffect, useState } from "react";
import "./Tile.styles.scss";
import { BoardPiecesCtx, TBoardPieces } from "../../App";

type TPosition = {
	x: number;
	y: number;
};

interface ITile {
	position: TPosition;
	side: string;
	childPiece?: React.ReactNode;
	borderClass?: string;
	// onDrop: any;
	tileRow: number;
	tileCol: number;
}

const Tile = ({
	position,
	side,
	childPiece,
	borderClass,
	tileRow,
	tileCol,
}: ITile) => {
	const mainState = useContext(BoardPiecesCtx);
	const { boardPieces, setBoardPieces, test, setTest } = mainState;

	const tileRef = useRef<HTMLDivElement>(null);

	interface moveInfo {
		rowIdx: number;
		colIdx: number;
		pieceId: string;
	}

	// useEffect(() => {
	// 	console.log(test);
	// }, [test]);

	const handleTileClick = () => {
		// console.log(position);
		if (setTest) setTest(position);
	};
	useEffect(() => {
		// console.log(`%cBOARDPIECES CHANGED`, "color: green");
		// console.log(boardPieces);
	}, [boardPieces]);

	const x = useRef<any>(null);

	useEffect(() => {
		// console.log(`%cRERENDEr`, "color: red");
	});

	const [internalState, setInternalState] = useState<TBoardPieces>([]);

	// useEffect(() => {
	// 	// console.log(`hello`);
	// 	if (setBoardPieces && internalState.length > 0)
	// 		setBoardPieces(internalState);
	// }, [internalState]);

	const moveHandler = (e: any) => {
		e.preventDefault();

		// e.stopImmediatePropagation();
		// e.stopPropagation();
		// e.preventDefault();
		console.log(e);
		// const toPos = boardPieces[rowIdx][colIdx];

		const moveInfo = e.dataTransfer.getData("moveInfo");
		const moveInfoParse = JSON.parse(moveInfo);
		const { rowIdx, colIdx, pieceId } = moveInfoParse;

		if (setBoardPieces) {
			const _boardPieces = boardPieces;
			// const oldToValue = _boardPieces[tileRow][tileCol];
			_boardPieces[tileRow][tileCol] = pieceId;
			if (rowIdx > 3) {
				_boardPieces[rowIdx][colIdx] = 1;
			} else {
				_boardPieces[rowIdx][colIdx] = 0;
			}
			console.log(_boardPieces);
			// setTest("drag");
			setBoardPieces(_boardPieces);
			// setInternalState(_boardPieces);
			// x.current = _boardPieces;
			// console.log(x.current);
		}
	};

	const onDragEndHandler = () => {
		// console.log(x.current);
		// console.log(2);
		// if (setBoardPieces) setBoardPieces(x.current);
		// if (setTest) setTest(4);
	};

	return (
		<div
			data-row={tileRow}
			data-col={tileCol}
			ref={tileRef}
			className={`gg-tile ${side} ${borderClass ?? ""}`}
			onClick={handleTileClick}
			// onDragEnd={() => onDragEndHandler()}
			onDrop={moveHandler}
			onDragEnter={(e: any) => {
				e.preventDefault();
				e.stopPropagation();
			}}
			onDragOver={(e: any) => {
				e.preventDefault();
				e.stopPropagation();
				// console.log(`gserg`);
			}}
			onDragLeave={(e: any) => {
				e.preventDefault();
				e.stopPropagation();
			}}
			// onMouseEnter={(e: any) => {
			// 	console.log(e.target);

			// 	console.log(tileRef.current);
			// 	const element = e.target as Element;

			// 	const computed = window
			// 		.getComputedStyle(element)
			// 		.getPropertyValue("width");

			// 	console.log(computed);
			// }}
			draggable={true}
		>
			{childPiece}
		</div>
	);
};

export default Tile;
