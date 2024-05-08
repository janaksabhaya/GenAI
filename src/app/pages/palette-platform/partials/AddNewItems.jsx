import React from "react";
import ReactDynamicModal from "@/components/ui/ReactDynamicModal";
import ReactButton from "@/components/ui/ReactButton";
import { Table } from "react-bootstrap";
import Textinput from "@/components/ui/TextInput";

const modalStyle = {
	content: {
		width: "40%",
	},
};

export default function AddNewItems({ isOpen, onClose, onSave }) {
	return (
		<ReactDynamicModal
			title="Tasks - New Item"
			isOpen={isOpen}
			onClose={onClose}
			additionalStyle={modalStyle}
			footerContent={
				<div className="d-flex align-items-center justify-content-end gap-2">
					<ReactButton size="sm" onClick={onSave} className="globel--btn text-white-primary bg-btn-theme border-0">
						Ok
					</ReactButton>
					<ReactButton size="sm" onClick={onClose} className="globel--btn text-white-primary bg-btn-theme border-0">
						Cancle
					</ReactButton>
				</div>
			}
		>
			<Table responsive borderless className="align-middle mb-0 task--table w-100">
				<tbody>
					<tr>
						<td>
							<p className="mb-0 text-capitalize font-14 text-static-black">
								title <span className="text-theme-danger">*</span>
							</p>
						</td>
						<td>
							<Textinput type="text" inputClass="shadow-none font-14" />
						</td>
					</tr>
					<tr>
						<td>
							<p className="mb-0 text-capitalize font-14 text-static-black">
								title <span className="text-theme-danger">*</span>
							</p>
						</td>
						<td>
							<Textinput type="text" inputClass="shadow-none font-14" />
						</td>
					</tr>
				</tbody>
			</Table>
		</ReactDynamicModal>
	);
}
