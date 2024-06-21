import React from "react";

export default function Loader({ isLoader }) {
  return (
    <>
      {isLoader && (
        <div className="loader-1 center">
          <span></span>
        </div>
      )}
    </>
  );
}
