import ValidationMessages from "@/components/validations/ValidationMessages";
import React from "react";
import { Form } from "react-bootstrap";

const Textarea = ({
	type,
	label,
	placeholder = "",
	className = "",
	name,
	readonly,
	value,
	error,
	icon,
	disabled,
	id,
	onChange,
	cols = 5,
	row = 5,
	style,
	...rest
}) => {
	return (
		<div className="dynamic-textarea--wrap">
			{label && (
				<Form.Label htmlFor={id} className="form-label dynamic-textarea--title text-capitalize">
					{label}
				</Form.Label>
			)}
			<textarea
				{...rest}
				className={`form-control ${className}`}
				placeholder={placeholder}
				readOnly={readonly}
				disabled={disabled}
				id={id}
				cols={cols}
				row={row}
				name={name}
				onChange={onChange}
				style={style}
				value={value === (undefined || null) ? "" : value}
			/>
			<ValidationMessages errors={error} label={label} />
		</div>
	);
};

export default Textarea;
