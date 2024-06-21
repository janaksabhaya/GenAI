import React from "react";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import ReactModal from "react-modal";

export default function ReactDynamicModal({ show = {}, onClose = {}, additionalStyle = {}, size = "", title = "", className = "", children }) {
	const modalStyle = {
		overlay: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: "9999",
			background: "rgba(0, 0, 0, 0.24)",
			...(additionalStyle.hasOwnProperty("overlay") && additionalStyle.overlay),
		},
		content: {
			width: "100%",
			borderRadius: "2px",
			background: "rgba(255,255,255,1)",
			overflow: "hidden",
			boxShadow: "1px 4px 8px 0px rgba(0, 0, 0, 0.12)",
			outline: "none",
			...(additionalStyle.hasOwnProperty("content") && additionalStyle.content),
		},
	};
	return (
		<ReactModal isOpen={show} style={modalStyle} className={`${className} theme--modal`}>
			<div className="bg-static-black d-flex align-items-center justify-content-between modal--header">
				<h4 className="font-16 text-capitalize text-theme-color mb-0">{title}</h4>
				<Button variant="transparent" className="p-0 d-block border-0" onClick={onClose}>
					<Icon icon="mingcute:close-line" className="font-16 d-block text-theme-color" />
				</Button>
			</div>
			<div className="modal-body">{children}</div>
		</ReactModal>
	);
}