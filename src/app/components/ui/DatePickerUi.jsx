import ValidationMessages from "@/components/validations/ValidationMessages";
import React from "react";

const DatePickerUi = ({ error, onChange, label, name, value, fRef, className = "d-block", min, max, classLabel = "", ...rest }) => {
	return (
		<div className={`dynamic--date-picker ${className}`}>
			{label && <label className={`date--picker-title text-capitalize ${classLabel}`}>{label}</label>}
			<input
				ref={fRef}
				type="date"
				name={name}
				value={value}
				className="date--picker-input is-invalid"
				min={min}
				max="9999-12-31"
				onChange={onChange}
				{...rest}
				maxLength={8}
			/>
			<ValidationMessages errors={error} name={name} label={label} />
		</div>
	);
};

export default DatePickerUi;
