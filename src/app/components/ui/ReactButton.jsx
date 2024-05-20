import React from "react";
import { Button } from "react-bootstrap";

const ReactButton = ({
  size = "",
  variant = "",
  children = {},
  className = "",
  ...rest
}) => {
  return (
    <Button
      size={size}
      {...rest}
      variant={variant}
      className={`${className} text-capitalize`}
    >
      {children}
    </Button>
  );
};

export default ReactButton;
