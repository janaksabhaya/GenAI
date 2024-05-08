import React from "react";
import Draggable from "react-draggable";
import * as ReactModal from "react-modal";
import { Icon } from "@iconify/react";
import ReactButton from "@/components/ui/ReactButton";

const ReactDynamicModal = ({ isOpen = {}, title = "", onClose = {}, children, footerContent = {}, additionalStyle = {} }) => {
	const modalStyle = {
		overlay: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: "9999",
			background: "rgba(0, 0, 0, 0.2)",
		},
		content: {
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			overflow: "visible",
			background: "none",
			width: "50%",
			...(additionalStyle.hasOwnProperty("content") && additionalStyle.content),
		},
	};

	return (
		<ReactModal isOpen={isOpen} style={modalStyle}>
			<Draggable handle=".handle">
				<div className="draggable-wrapper bg-static-white modal-shadow">
					<div className="padded-modal-top">
						<div className="help--modal handle d-flex align-items-center justify-content-between bg-static-light">
							<h4 className="mb-0 text-white-primary text-capitalize font-20">{title}</h4>
							<ReactButton size="sm" variant="transparent" className="p-0 text-white-primary" onClick={onClose}>
								<Icon icon="ic:round-close" className="d-block" />
							</ReactButton>
						</div>
						<div className="modal--body">{children}</div>
						{footerContent && <div className="modal--footer">{footerContent}</div>}
					</div>
				</div>
			</Draggable>
		</ReactModal>
	);
};

export default ReactDynamicModal;
