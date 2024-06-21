import ValidationMessages from "@/components/validations/ValidationMessages";
import { helper } from "@/services";
import React from "react";
import Select from "react-select";

const ReactSelect = ({
  placeholder,
  className = "",
  name,
  value,
  error,
  onChange,
  register,
  options = [],
  defaultValue,
  isClearable = false,
  fRef,
  label,
  isSearchable,
  style = {},
}) => {
  if (helper.isDefined(options) && typeof options[0] != "object") {
    options = options.map((_value) => {
      return {
        label: _value,
        value: _value,
      };
    });
  }

  options = [
    {
      label: placeholder ? placeholder : "Select...",
      value: "",
    },
    ...options,
  ];

  let selectedValues = helper.isDefined(options)
    ? options.find((e) => {
        return value == e.value;
      })
    : null;

  const customStyles = {
    groupHeading: (provided) => ({
      ...provided,
      fontWeight: "bold",
      color: "#252525",
      backgroundColor: "#F2F2F2",
      height: "20px",
      fontSize: "10px",
      lineHeight: "20px",
      padding: " 0 10px !important",
      margin: 0,
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "10px",
      height: "23px",
      lineHeight: "23px",
      color: "#252525",
      padding: " 0 10px !important",
      margin: 0,
    }),
  };
  return (
    <>
      {name && (
        <>
          {label && (
            <label
              htmlFor={label}
              className="form-label font-10 text-theme-placeholder mb-0 text-capitalize"
            >
              {label}
            </label>
          )}
          <Select
            className={`custom-select ${className}`}
            options={options}
            name={name}
            id="hh"
            placeholder={placeholder}
            onChange={(e) => {
              onChange({
                target: {
                  name,
                  value: e?.value,
                },
              });
            }}
            value={selectedValues}
            defaultValue={defaultValue}
            register={register}
            error={error}
            backspaceRemovesValue={true}
            escapeClearsValue={true}
            isClearable={isClearable}
            ref={fRef}
            isSearchable={isSearchable}
            style={style}
            theme={(theme) => ({
              ...theme,
              borderRadius: "4px",
              colors: {
                ...theme.colors,
                primary25: "#f2f2f2",
                primary: "#337ab7",
              },
            })}
          />
        </>
      )}

      {!name && (
        <>
          {label && (
            <label
              htmlFor={label}
              className="form-label font-10 text-theme-placeholder mb-0 text-capitalize"
            >
              {label}
            </label>
          )}
          <Select
            className={`custom-select ${className}`}
            options={options}
            id="hh"
            placeholder={placeholder}
            backspaceRemovesValue={true}
            escapeClearsValue={true}
            isClearable={isClearable}
            onChange={onChange}
            value={selectedValues}
            defaultValue={defaultValue}
            name={name}
            register={register}
            error={error}
            ref={fRef}
            isSearchable={isSearchable}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            theme={(theme) => ({
              ...theme,
              borderRadius: "4px",
              colors: {
                ...theme.colors,
                primary25: "#f2f2f2",
                primary: "#337ab7",
              },
            })}
          />
        </>
      )}

      <ValidationMessages errors={error} label={label} />
    </>
  );
};

export default ReactSelect;
