import { CSSProperties } from "react";

interface IBasePiece {
	id: string;
	name: string;
	rank: number;
	quantity: number;
	moves: Array<number>;
	active: boolean;
	draggable: boolean;

	player: string;
}

export default class BasePiece {
	id: string;
	name: string;
	rank: number;
	quantity: number;
	moves: Array<number>;
	active: boolean;
	draggable: boolean;

	player: string;

	constructor({
		id,
		name,
		rank,
		quantity,
		moves,
		active,
		draggable,
		player,
	}: IBasePiece) {
		this.id = id;
		this.name = name;
		this.rank = rank;
		this.quantity = quantity;
		this.moves = moves;
		this.active = active;
		this.draggable = draggable;
		this.player = player;
	}
}
