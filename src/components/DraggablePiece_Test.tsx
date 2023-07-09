import React, { useEffect } from "react";
// import flag from "../assets/philippines.png";

// import flag from "../assets/svg/pieces/FLAG-W.svg";

import "./DraggablePiece_Test.styles.scss";

import { Piece, WHITE_PIECES } from "../constants/pieces.const";

interface Iint {
	rowIdx: number;
	colIdx: number;
	pieceId: string;
}

const DraggablePiece_Test = ({ rowIdx, colIdx, pieceId }: Iint) => {
	const piece = WHITE_PIECES[pieceId];

	return (
		<div className="test-piece">
			<img
				src={WHITE_PIECES[pieceId]?.img}
				draggable={true}
				onDrop={(e: any) => {
					console.log(e);
				}}
				onDragStart={(e: any) => {
					console.log(`onDragStart`);
					console.log(e);
					const moveInfoJSON = JSON.stringify({
						rowIdx,
						colIdx,
						pieceId,
					});
					e.dataTransfer.setData("moveInfo", moveInfoJSON);
					// e.dataTransfer.setData("col", col);
				}}
				onDragOver={(e: any) => {
					e.stopPropagation();

					e.preventDefault();
				}}
				// onDrop={(e: any) => {
				// 	e.preventDefault();
				// 	const _x = e.dataTransfer.getData("x");
				// 	const _y = e.dataTransfer.getData("y");
				// 	console.log();
				// }}
			/>
		</div>
	);
};

export default DraggablePiece_Test;
