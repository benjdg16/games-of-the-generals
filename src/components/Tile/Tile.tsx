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
}

const Tile = ({ position, side, childPiece, borderClass }: ITile) => {
	const handleTileClick = () => {
		console.log(position);
	};

	return (
		<div
			className={`gg-tile ${side} ${borderClass ?? ""}`}
			onClick={handleTileClick}
		>
			{childPiece}
		</div>
	);
};

export default Tile;
