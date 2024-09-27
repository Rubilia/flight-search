import React from "react";
import { IconButton, Tooltip } from "@mui/material";

interface ControlButtonProps {
  disabled: boolean;
  onClickFunc: () => void;
  icon: React.ReactElement;
  tooltip: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({
  disabled,
  onClickFunc,
  icon,
  tooltip,
}) => {
  return (
    <Tooltip title={tooltip} arrow>
      <span>
        <IconButton
          onClick={onClickFunc}
          disabled={disabled}
          className={`${disabled ? "cursor-not-allowed" : ""}`}
          sx={{
            backgroundColor: disabled ? "#e7e8e8" : "#dfeafd",
            color: disabled ? "#babdbd" : "#285bad",
            borderRadius: "2px",
            width: "32px",
            height: "32px",
            "&:hover": {
              backgroundColor: disabled ? "#e7e8e8" : "#dfeafd",
            },
          }}
        >
          {icon}
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ControlButton;
