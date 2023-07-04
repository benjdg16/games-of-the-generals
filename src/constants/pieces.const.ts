interface IPieceInfo {
	id: string;
	name: string;
	rank: number;
	quantity: number;
	description?: string;
}

const GENERAL_FIVE: IPieceInfo = {
	id: "gen-5",
	name: `General of the Army`,
	rank: 500,
	quantity: 1,
	description: `Eliminates any lower-ranking officer, the Private, and the Flag.`,
};

const COLONEL: IPieceInfo = {
	id: "col",
	name: `Colonel`,
	rank: 400,
	quantity: 1,
	description: `Eliminates any lower-ranking officer, the Private, and the Flag.`,
};

const CAPTAIN: IPieceInfo = {
	id: "capt",
	name: `Captain`,
	rank: 300,
	quantity: 1,
};

const SERGEANT: IPieceInfo = {
	id: "sgt",
	name: `Sergeant`,
	rank: 200,
	quantity: 1,
};

const PRIVATE: IPieceInfo = {
	id: "pvt",
	name: `Private`,
	rank: 100,
	quantity: 6,
};

const SPY: IPieceInfo = {
	id: "spy",
	name: `Spy`,
	rank: -500,
	quantity: 2,
};

const FLAG: IPieceInfo = {
	id: "flag",
	name: `Flag`,
	rank: 0,
	quantity: 1,
};

export { GENERAL_FIVE, COLONEL, CAPTAIN, SERGEANT, PRIVATE, SPY, FLAG };
