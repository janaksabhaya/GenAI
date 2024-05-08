import React from "react";
import ReactButton from "@/components/ui/ReactButton";
import ReactSelect from "@/components/ui/ReactSelect";
import ReactDynamicModal from "@/components/ui/ReactDynamicModal";

const modalStyle = {
	content: {
		width: "20%",
	},
};

const CurrencyModal = ({ isOpen, onClose, onSave }) => {
	return (
		<>
			<ReactDynamicModal
				title="Select Currency"
				isOpen={isOpen}
				additionalStyle={modalStyle}
				onClose={onClose}
				footerContent={
					<div className="d-flex align-items-center justify-content-center gap-2">
						<ReactButton size="sm" onClick={onSave} className="globel--btn text-white-primary bg-btn-theme border-0">
							Ok
						</ReactButton>
						<ReactButton size="sm" onClick={onClose} className="globel--btn text-white-primary bg-btn-theme border-0">
							Cancle
						</ReactButton>
					</div>
				}
			>
				<ReactSelect
					value="Canadian Dollar"
					options={[
						{ label: "Canadian Dollar", value: "Canadian Dollar" },
						{ label: "Danish krone", value: "Danish krone" },
						{ label: "Euro", value: "Euro" },
						{ label: "Hong Kong dollar", value: "Hong Kong dollar" },
						{ label: "Japanese Yen", value: "Japanese Yen" },
						{ label: "Pound Sterling", value: "Pound Sterling" },
						{ label: "Swedish krona/kronor", value: "Swedish krona/kronor" },
						{ label: "Swiss franc", value: "Swiss franc" },
						{ label: "United States Dollar", value: "United States Dollar" },
					]}
					onChange={() => {}}
				/>
			</ReactDynamicModal>
		</>
	);
};

export default CurrencyModal;
