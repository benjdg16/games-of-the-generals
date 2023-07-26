import { BLACK, WHITE } from "../constants/common";

export type TPlayer = typeof BLACK | typeof WHITE;

export type TPosition = {
	row: number | undefined;
	column: number | undefined;
};

export interface IMoveInfo {
	pieceId: string;
	position: TPosition;
}
