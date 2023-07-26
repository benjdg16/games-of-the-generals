import "./DraggablePiece.styles.scss";

// import { Piece, WHITE_PIECES } from "../constants/pieces.const";
// import { BoardPiecesCtx } from "../App";
import { MOVE_INFO } from "../../constants/common";
import { IMoveInfo } from "../../types/common.types";

import { TPosition } from "../../types/common.types";

import { WHITE_PIECES } from "../../constants/pieces.const";

interface IDraggablePiece {
	pieceId: string;
	position: TPosition;
}

const DraggablePiece = ({ pieceId, position }: IDraggablePiece) => {
	const { row, column } = position;
	// const piece = WHITE_PIECES[pieceId];

	// const { setActivePiece } = useContext(BoardPiecesCtx);

	const onDragStartHandler = (e: any) => {
		console.log(`dragStart`);
		// e.preventDefault(); // DO NOT PREVENT DEFAULT HERE
		const moveInfo: IMoveInfo = {
			pieceId,
			position: {
				row,
				column,
			},
		};
		const moveInfoJSON = JSON.stringify(moveInfo);
		e.dataTransfer.setData(MOVE_INFO, moveInfoJSON);
		e.dataTransfer.dropEffect = "move";
		console.log(moveInfoJSON);
	};

	const onDragOverHandler = (e: any) => {
		console.log(`dragOver`);
		e.stopPropagation();
		e.preventDefault();
	};

	return (
		<div
			className="gg-draggable-piece"
			draggable={true}
			onDragStart={onDragStartHandler}
			// onDragOver={onDragOverHandler}
		>
			<img
				src={WHITE_PIECES[pieceId]?.img}
				// onDragStart={onDragStartHandler}
				// onDragOver={onDragOverHandler}
			/>
		</div>
	);
};

export default DraggablePiece;
