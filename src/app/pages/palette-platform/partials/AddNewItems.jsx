import React from "react";
import ReactDynamicModal from "@/components/ui/ReactDynamicModal";
import ReactButton from "@/components/ui/ReactButton";
import Textinput from "@/components/ui/TextInput";
import Textarea from "@/components/ui/Textarea";
import DatePickerUi from "@/components/ui/DatePickerUi";
import { Table } from "react-bootstrap";
import { Icon } from "@iconify/react";

const modalStyle = {
	content: {
		width: "35%",
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
			<Table responsive borderless className="mb-0 task--table w-100">
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
							<p className="mb-0 text-capitalize font-14 text-static-black">Priority</p>
						</td>
						<td>
							<Textinput type="text" inputClass="shadow-none font-14" />
						</td>
					</tr>
					<tr>
						<td>
							<p className="mb-0 text-capitalize font-14 text-static-black">Status</p>
						</td>
						<td>
							<Textinput type="text" inputClass="shadow-none font-14" />
						</td>
					</tr>
					<tr>
						<td>
							<p className="mb-0 text-capitalize font-14 text-static-black">Assigned To</p>
						</td>
						<td>
							<div className="d-flex align-items-center gap-2">
								<Textinput type="text" inputClass="shadow-none font-14" className="w-100" />
								<ReactButton size="sm" className="p-0">
									<Icon icon="vaadin:user-check" className="d-block" />
								</ReactButton>
								<ReactButton size="sm" className="p-0">
									<Icon icon="noto-v1:open-book" className="d-block" />
								</ReactButton>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<p className="mb-0 text-capitalize font-14 text-static-black">Description</p>
						</td>
						<td>
							<Textarea />
						</td>
					</tr>
					<tr>
						<td>
							<p className="mb-0 text-capitalize font-14 text-static-black">Start Date</p>
						</td>
						<td>
							<DatePickerUi />
						</td>
					</tr>
					<tr>
						<td>
							<p className="mb-0 text-capitalize font-14 text-static-black">Due Date</p>
						</td>
						<td>
							<DatePickerUi />
						</td>
					</tr>
					<tr>
						<td>
							<p className="mb-0 text-capitalize font-14 text-static-black">
								Super Household <span className="text-theme-danger">*</span>
							</p>
						</td>
						<td>
							<Textinput type="text" inputClass="shadow-none font-14" className="w-100" />
						</td>
					</tr>
				</tbody>
			</Table>
		</ReactDynamicModal>
	);
}
