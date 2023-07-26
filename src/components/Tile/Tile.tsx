import { useContext, useRef, useEffect, useState } from "react";
import "./Tile.styles.scss";
import { BoardPiecesCtx, TBoardPieces } from "../../App";
import { useDispatch } from "react-redux";
import { TPosition } from "../../types/common.types";
import { MOVE_INFO } from "../../constants/common";
import { AppContext } from "../../context";

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
	const gameState = useContext(AppContext);
	const { boardPieces, setBoardPieces, sample, setSample } = gameState;

	const onClickHandler = (e: any) => {
		console.log(`onClick`);
	};

	// useEffect(() => {
	// 	console.log(`tile`);
	// }, [boardPieces]);

	// useEffect(() => {
	// 	console.log(`tile - sample`);
	// 	console.log(sample);
	// }, [sample]);

	const onDropHandler = (e: any) => {
		console.log(e);
		e.preventDefault();
		const moveInfo = e.dataTransfer.getData(MOVE_INFO);
		const moveInfoParse = JSON.parse(moveInfo);
		const { pieceId, position } = moveInfoParse;
		const { row, column } = position;

		if (setBoardPieces) {
			const _boardPieces = boardPieces;
			_boardPieces[tileRow][tileCol] = pieceId;

			if (row > 3) {
				_boardPieces[row][column] = 1;
			} else {
				_boardPieces[row][column] = 0;
			}
			setSample && setSample(new Date());
			setBoardPieces(_boardPieces);
		}
		console.log(`onDrop`);
	};

	const preventHandler = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
	};

	// const onDragStartHandler = (e: any) => {
	// 	console.log(`dragStart`);
	// 	e.preventDefault();
	// 	console.log(e);
	// 	// const moveInfo: IMoveInfo = {
	// 	// 	pieceId,
	// 	// 	position: {
	// 	// 		row,
	// 	// 		column,
	// 	// 	},
	// 	// };
	// 	// const moveInfoJSON = JSON.stringify(moveInfo);
	// 	// e.dataTransfer.setData(MOVE_INFO, moveInfoJSON);
	// };

	return (
		<div
			data-row={tileRow}
			data-col={tileCol}
			className={`gg-tile ${side} ${borderClass ?? ""}`}
			onClick={onClickHandler}
			// onDragStart={onDragStartHandler}
			onDrop={onDropHandler}
			// onDragEnter={(e: any) => {
			// 	e.stopPropagation();
			// 	e.preventDefault();
			// }}
			onDragOver={(e: any) => {
				// e.stopPropagation();
				e.preventDefault();
				e.dataTransfer.dropEffect = "move";
			}}
			// onDragLeave={preventHandler}
			// onDragEnd={() => {
			// 	console.log(`onDragEnd`);
			// }}
			// draggable={true}
		>
			{childPiece}
		</div>
	);
};

export default Tile;
