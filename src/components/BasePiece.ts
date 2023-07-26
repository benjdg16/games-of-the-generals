import { TPlayer, TPosition } from "../types/common.types";
interface IBasePiece {
	id: string;
	name: string;
	rank: number;
	quantity: number;
	active: boolean;
	position: TPosition;
	player: TPlayer;
}

export default class BasePiece {
	id: string;
	name: string;
	rank: number;
	quantity: number;
	active: boolean;
	position: TPosition;
	player: string;

	constructor({
		id,
		name,
		rank,
		quantity,
		active,
		position,
		player,
	}: IBasePiece) {
		this.id = id;
		this.name = name;
		this.rank = rank;
		this.quantity = quantity;
		this.active = active;
		this.position = position;
		this.player = player;
	}

	static isValidMove() {
		return;
	}
}
