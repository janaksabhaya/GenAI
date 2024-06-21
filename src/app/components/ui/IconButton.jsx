import { Icon } from "@iconify/react";
import React from "react";

const IconButton = ({ icon, onClick }) => {
  return (
    <div className="icon--btn" onClick={onClick}>
      <Icon icon={icon} />
    </div>
  );
};

export default IconButton;
