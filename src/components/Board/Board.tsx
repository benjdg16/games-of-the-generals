import Tile from "../Tile/Tile";
import {
	COLS_VALUE,
	ROWS_VALUE,
	COLS_ARRAY,
	ROWS_ARRAY,
} from "../../constants/common";

import "./Board.styles.scss";
import { useContext, useEffect, useState } from "react";
// import DraggablePiece_Test from "../DraggablePiece_Test";
import { BoardPiecesCtx } from "../../App";
import DraggablePiece from "../DraggablePiece/DraggablePiece";
import { AppContext } from "../../context";

const Board = () => {
	// const [boardArray, setBoardArray] = useState(() => [
	// 	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	// 	[1, 1, 1, 1, 1, 1, "G5_W", 1, 1],
	// 	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	// 	[1, 1, 1, 1, 1, 1, 1, 1, "FLAG_W"],
	// ]);

	const mainState = useContext(AppContext);
	const { boardPieces: boardArray } = mainState;

	useEffect(() => {
		console.log(`Board`);
		console.log(boardArray);
	}, [boardArray]);

	// useEffect(() => {
	// 	console.log(`HEYHEHYHE`);
	// 	console.log(mainState);
	// }, [mainState]);

	// useEffect(() => {
	// 	console.log(`gersgserg`);
	// 	console.log(test);
	// }, [test]);

	const renderTiles = () => {
		// return ROWS_ARRAY.forEach((_value, rowIdx) => {
		// 	COLS_ARRAY.forEach((_value, colIdx) => {
		// 		const side = rowIdx >= ROWS_VALUE / 2 ? "dark" : "light";

		// 		return <Tile side={side} />;
		// 	});
		// });
		return (
			<>
				{boardArray.map((rowValue: any, rowIdx: number) => {
					return rowValue.map((colValue: any, colIdx: number) => {
						// TODO: Refactor CSS style here
						let borderClass = undefined;
						let childPiece = undefined;

						if (typeof colValue === "number") {
							if (rowIdx === 0) {
								if (colIdx === 0) {
									borderClass = "borderRadius-topLeft";
								} else if (colIdx === rowValue.length - 1) {
									borderClass = "borderRadius-topRight";
								}
							} else if (rowIdx === boardArray.length - 1) {
								if (colIdx === 0) {
									borderClass = "borderRadius-botLeft";
								} else if (colIdx === rowValue.length - 1) {
									borderClass = "borderRadius-botRight";
								}
							}
						} else if (typeof colValue === "string") {
							childPiece = (
								<DraggablePiece
									pieceId={colValue}
									position={{
										row: rowIdx,
										column: colIdx,
									}}
								/>
							);
						}

						// let childPiece = undefined;
						// if (rowIdx === 5 && colIdx === 5) {
						// 	childPiece = <DraggablePiece_Test row={rowIdx} col={colIdx} />;
						// }

						return (
							<Tile
								tileCol={colIdx}
								tileRow={rowIdx}
								key={`${rowIdx}${colIdx}`} // TODO: Refactor this
								position={{
									row: rowIdx,
									column: colIdx,
								}}
								side={colValue ? "light" : "dark"}
								childPiece={childPiece}
								borderClass={borderClass}
							/>
						);
					});
				})}
			</>
		);
	};
	// useEffect(() => {
	//     document.
	// }, [])

	return (
		<div className="gg-board-container gg-grid-item">
			<div className="gg-board">{renderTiles()}</div>
		</div>
	);
};

export default Board;
