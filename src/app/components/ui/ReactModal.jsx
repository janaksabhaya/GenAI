import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Icon } from "@iconify/react";

export default function ReactModal({ show = {}, onClose = {}, size = "", title = "", className = "", children }) {
	return (
		<Modal show={show} size={size} className={`theme--modal ${className}`} centered>
			<Modal.Header as="div" className="bg-thme-black">
				<Modal.Title as="h4" className="font-16 text-capitalize text-white">
					{title}
				</Modal.Title>
				<Button variant="transparent" className="p-0 d-block border-0" onClick={onClose}>
					<Icon icon="mingcute:close-line" className="font-16 d-block text-white" />
				</Button>
			</Modal.Header>
			<Modal.Body as="div">{children}</Modal.Body>
		</Modal>
	);
}
  