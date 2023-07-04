import React from "react";
import flag from "../assets/philippines.png";
import "./DraggablePiece_Test.styles.scss";
const DraggablePiece_Test = () => {
	return (
		<div className="test-piece">
			<img src={flag} />
		</div>
	);
};

export default DraggablePiece_Test;
