import Tile from "../Tile/Tile";
import {
	COLS_VALUE,
	ROWS_VALUE,
	COLS_ARRAY,
	ROWS_ARRAY,
} from "../../constants/common";

import "./Board.styles.scss";
import { useEffect } from "react";
import DraggablePiece_Test from "../DraggablePiece_Test";

const Board = () => {
	const boardArray = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1],
	];

	const renderTiles = () => {
		// return ROWS_ARRAY.forEach((_value, rowIdx) => {
		// 	COLS_ARRAY.forEach((_value, colIdx) => {
		// 		const side = rowIdx >= ROWS_VALUE / 2 ? "dark" : "light";

		// 		return <Tile side={side} />;
		// 	});
		// });
		return (
			<>
				{boardArray.map((rowValue, rowIdx) => {
					return rowValue.map((colValue, colIdx) => {
						// TODO: Refactor CSS style here
						let borderClass = undefined;
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

						let childPiece = undefined;
						if (rowIdx === 5 && colIdx === 5) {
							childPiece = <DraggablePiece_Test row={rowIdx} col={colIdx} />;
						}

						return (
							<Tile
								key={`${rowIdx}${colIdx}`} // TODO: Refactor this
								position={{
									x: rowIdx,
									y: colIdx,
								}}
								side={colValue ? "light" : "dark"}
								childPiece={childPiece}
								borderClass={borderClass}
								onDrop={(e: any) => {
									console.log(e.dataTransfer.getData("row"));
									e.dataTransfer.getData("col");
								}}
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
