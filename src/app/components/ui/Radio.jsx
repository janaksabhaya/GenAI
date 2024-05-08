import ValidationMessages from "@/components/validations/ValidationMessages";
import React from "react";

function Radio({ name, value, options, onChange, error, disabled, heading, wrapperClass = "", radioContentClass = "", contentWrapper = "" }) {
	let rendomId = (Math.random() + 1).toString(36).substring(7);
	return (
		<>
			<div className={`dynamic--radio-wrapper ${wrapperClass}`}>
				{heading && <span className="d-block text-capitalize mb-2">{heading}</span>}
				<div className={`dynamic--content-wrapper d-flex align-items-center ${contentWrapper}`}>
					{options?.map((option, index) => {
						return (
							<label
								key={index}
								htmlFor={`dynamic--${rendomId}-${index}`}
								className={`dynamic--radio-content d-flex align-items-center ${radioContentClass}`}
							>
								<input
									type="radio"
									id={`dynamic--${rendomId}-${index}`}
									name={name}
									value={option.value}
									checked={option.value === value}
									onChange={onChange}
									disabled={disabled}
								/>
								<span className="radio--checkmark d-block"></span>
								<p className="text-capitalize">{option.label}</p>
							</label>
						);
					})}
				</div>
			</div>
			<ValidationMessages errors={error} label={heading} />
		</>
	);
}

export default Radio;
