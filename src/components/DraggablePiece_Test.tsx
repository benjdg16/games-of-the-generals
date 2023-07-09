import React, { useEffect } from "react";
// import flag from "../assets/philippines.png";

import flag from "../assets/svg/pieces/FLAG-W.svg";

import "./DraggablePiece_Test.styles.scss";

interface Iint {
	row: number;
	col: number;
}

const DraggablePiece_Test = ({ row, col }: Iint) => {
	return (
		<div className="test-piece">
			<img
				src={flag}
				draggable={true}
				onDragStart={(e: any) => {
					console.log(`onDragStart`);
					console.log(e);
					e.dataTransfer.setData("row", row);
					e.dataTransfer.setData("col", col);
				}}
				onDragOver={(e: any) => {
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
