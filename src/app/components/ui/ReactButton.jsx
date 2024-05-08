import React from "react";
import { Button } from "react-bootstrap";

const ReactButton = ({ size = "", variant = "", children = {}, className = "", onClick = {} }) => {
	return (
		<Button size={size} variant={variant} className={`${className} text-capitalize`} onClick={onClick}>
			{children}
		</Button>
	);
};

export default ReactButton;
