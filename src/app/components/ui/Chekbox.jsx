import React from "react";

const Chekbox = ({ id, label, value, onChange, dataAll, checked, className = "", disabled = false }) => {
	return (
		<>
			<label htmlFor={id} className={`checkbox-wrapper ${className}`}>
				<input type="checkbox" name="form-check" id={id} value={value} data-all={dataAll} onChange={onChange} checked={checked} disabled={disabled} />
				<span className="checkmark d-block"></span>
				<span className="label d-block font13">{label}</span>
			</label>
		</>
	);
};

export default Chekbox;
