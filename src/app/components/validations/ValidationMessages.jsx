import { helper } from "@/services";
import React from "react";

export default function ValidationMessages({ errors, label = "" }) {
  return (
    <>
      {!helper.isEmpty(errors) && !helper.isEmpty(errors.message) && (
        <div className="invalid-input ">{errors.message}</div>
      )}

      {!helper.isEmpty(errors) &&
        Array.isArray(errors) &&
        errors.map((error, i) => (
          <div key={i} className={`invalid-input text-danger`}>
            {error.replace(":attribute", label.trim(":")).replace("*", "")}
          </div>
        ))}
    </>
  );
}
