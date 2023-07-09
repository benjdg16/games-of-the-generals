import "./Tile.styles.scss";

type TPosition = {
	x: number;
	y: number;
};

interface ITile {
	position: TPosition;
	side: string;
	childPiece?: React.ReactNode;
	borderClass?: string;
	onDrop: any;
}

const Tile = ({ position, side, childPiece, borderClass, onDrop }: ITile) => {
	const handleTileClick = () => {
		console.log(position);
	};

	return (
		<div
			className={`gg-tile ${side} ${borderClass ?? ""}`}
			onClick={handleTileClick}
			onDrop={() => {
				console.log(`onDrop`);
			}}
			onDragOver={(e: any) => {
				e.stopPropagation();
				e.preventDefault();
				// console.log(`gserg`);
			}}
		>
			{childPiece}
		</div>
	);
};

export default Tile;
