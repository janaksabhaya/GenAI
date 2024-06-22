import React from "react";

const Chekbox = ({ id, label, value, onChange, dataAll, checked, className = "", disabled = false }) => {
	return (
		<>
			<label htmlFor={id} className={`checkbox-wrapper d-flex align-items-center ${className}`}>
				<input type="checkbox" name="form-check" id={id} value={value} data-all={dataAll} onChange={onChange} checked={checked} disabled={disabled} />
				<span className="checkmark d-block"></span>
				<span className="label d-block font-12 ms-2 text-color">{label}</span>
			</label>
		</>
	);
};

export default Chekbox;
