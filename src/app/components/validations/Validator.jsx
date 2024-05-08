import React, { createContext, useEffect, useState } from "react";
import Validator from "validatorjs";
import { helper } from "@/services";
import { validationMessages } from "@/constant/data";

export const ValidationContext = createContext(null);

const imageValidationMessagesModification = (errors, rules) => {
	for (let [field, errorMsgs] of Object.entries(errors)) {
		errors[field] = errorMsgs.map((messages) => {
			if (messages.includes(":mime_types")) {
				let attributeMimeTypes = rules[field]
					.split("|")
					.find((e) => e.includes("mimes"))
					.replace("mimes:", "");
				messages = messages.replace(":mime_types", attributeMimeTypes).replace(":attribute", field);
			}

			if (messages.includes(":max_size")) {
				let attributeValue = rules[field]
					.split("|")
					.find((e) => e.includes("max_file_size"))
					.replace("max_file_size:", "");
				messages = messages.replace(":max_size", formatBytes(attributeValue));
			}

			if (messages.includes(":min_size")) {
				let attributeValue = rules[field]
					.split("|")
					.find((e) => e.includes("min_file_size"))
					.replace("min_file_size:", "");
				messages = messages.replace(":min_size", formatBytes(attributeValue));
			}

			return messages;
		});
	}

	return errors;
};

const _registerValidations = () => {
	Validator.register(
		"phone",
		function (value, requirement, attribute) {
			return value.match(/^[0-9]+$/);
		},
		"Invalid phone number"
	);

	Validator.setMessages("en", validationMessages);

	_registerStateValidations();
	_registerPostCodeValidations();
	_registerPasswordValidations();
	_registerConfirmPasswordValidations();
	_registerFileuploadValidations();
};

const _registerFileuploadValidations = () => {
	Validator.register(
		"mimes",
		function (value, requirement, attribute) {
			if (typeof value === "string") {
				return true;
			}

			const allowedExtensions = requirement ? requirement.split(",") : [];
			const fileExtension = value.name.split(".").pop();
			if (!allowedExtensions.includes(fileExtension)) {
				return false; // Invalid file type
			}
			return true;
		},
		"The :attribute must be a file of type :mime_types"
	);

	Validator.register(
		"max_file_size",
		function (value, requirement, attribute) {
			if (typeof value === "string") {
				return true;
			}

			if (value.size > Number(requirement)) {
				return false;
			}

			return true;
		},
		"Max file size is :max_size"
	);

	Validator.register(
		"min_file_size",
		function (value, requirement, attribute) {
			if (typeof value === "string") {
				return true;
			}

			if (value.size < Number(requirement)) {
				return false;
			}

			return true;
		},
		"Min file size is :min_size"
	);
};

const _registerStateValidations = () => {
	Validator.register(
		"state",
		function (value, requirement, attribute) {
			return value.match(/^[a-zA-Z\s]+$/);
		},
		"Only alphabets are allowed"
	);
};

const _registerPostCodeValidations = () => {
	Validator.register(
		"postcode",
		function (value, requirement, attribute) {
			return value.match(/^[0-9]+$/);
		},
		"input only number"
	);
};

const _registerPasswordValidations = () => {
	Validator.register(
		"password",
		function (value) {
			_registerConfirmPasswordValidations(value);
			return true;
		},
		""
	);
};

const _registerConfirmPasswordValidations = (password) => {
	Validator.register(
		"confirm_password",
		function (value) {
			return value === password;
		},
		"Passwords must match"
	);
};

export default function Validators({
	registerValidations = null,
	setErrors: errorsData = null,
	customValidationMessages = {},
	formData = {},
	rules = {},
	children,
}) {
	let _formData = { ...formData };

	const [submitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		if (submitted) {
			let _isValidationFail = isValidationFail();
			if (false === _isValidationFail) {
				setErrors({});
			}
		}
	}, [formData]);

	const [errors, setErrors] = useState(null);

	useEffect(() => {
		if (errorsData) {
			setErrors(errorsData);
		}
	}, [errorsData]);

	const onSubmit = (callback) => {
		let isValidationFailed = isValidationFail();
		if (false === isValidationFailed) {
			setErrors({});
			callback(_formData);
			setIsSubmitted(false);
		} else {
			helper.toaster.error("Please fill the required fields with valid format");
			setIsSubmitted(true);
		}
	};

	const resetValidation = () => {
		setErrors({});
		setIsSubmitted(false);
	};

	const isValidationFail = () => {
		_registerValidations(_formData, rules);

		let validation = new Validator(_formData, rules, customValidationMessages);
		validation.setAttributeFormatter(function (attribute) {
			return ":attribute";
		});

		if (validation.fails()) {
			let validationErrors = imageValidationMessagesModification(validation.errors.errors, rules);
			console.log(validationErrors);
			setErrors(validationErrors);
			return true;
		}
		return false;
	};

	return <>{children({ onSubmit, errors, resetValidation })}</>;
}
