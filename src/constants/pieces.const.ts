interface IPieceInfo {
	id: string;
	name: string;
	rank: number;
	quantity: number;
	// img: string;
	description?: string;
}

// interface IPiece {}
export class Piece {
	id: string;
	name: string;
	rank: number;
	quantity: number;
	img: string;
	description?: string;

	constructor({ id, name, rank, quantity, description = "" }: IPieceInfo) {
		this.id = id;
		this.name = name;
		this.rank = rank;
		this.quantity = quantity;
		this.img = `/src/assets/svg/pieces/${id}.svg`;
		this.description = description;
	}
}

const G5_W = new Piece({
	id: "G5_W",
	name: `General`,
	rank: 505,
	quantity: 1,
	description: `Eliminates any lower-ranking officer, the Private, and the Flag.`,
});

const G4_W = new Piece({
	id: "G4_W",
	name: `General`,
	rank: 504,
	quantity: 1,
	description: `Eliminates any lower-ranking officer, the Private, and the Flag.`,
});

const G3_W = new Piece({
	id: "G3_W",
	name: `General`,
	rank: 503,
	quantity: 1,
	description: `Eliminates any lower-ranking officer, the Private, and the Flag.`,
});

const G2_W = new Piece({
	id: "G2_W",
	name: `General`,
	rank: 502,
	quantity: 1,
	description: `Eliminates any lower-ranking officer, the Private, and the Flag.`,
});

const G1_W = new Piece({
	id: "G1_W",
	name: `General`,
	rank: 501,
	quantity: 1,
	description: `Eliminates any lower-ranking officer, the Private, and the Flag.`,
});

const PVT_W = new Piece({
	id: "PVT_W",
	name: `Private`,
	rank: 1,
	quantity: 6,
	description: `Eliminates the Spy, and the Flag.`,
});

const FLAG_W = new Piece({
	id: "FLAG_W",
	name: `Flag`,
	rank: 0,
	quantity: 1,
	description: `Eliminates the opposing Flag as long as it takes the aggressive action against the enemy Flag.`,
});

const WHITE_PIECES: { [k: string]: Piece } = {
	G5_W,
	G4_W,
	G3_W,
	G2_W,
	G1_W,
	PVT_W,
	FLAG_W,
};

export { WHITE_PIECES };
