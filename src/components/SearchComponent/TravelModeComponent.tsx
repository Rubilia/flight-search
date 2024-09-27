// src/components/TravelModeComponent.tsx

import React, { useState } from "react";
import { Menu, MenuItem, Button, Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TimelineIcon from "@mui/icons-material/Timeline";
import CheckIcon from "@mui/icons-material/Check";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function TravelModeComponent() {
  const [travelMode, setTravelMode] = useState("Round Trip");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (mode?: string) => {
    if (mode) {
      setTravelMode(mode);
    }
    setAnchorEl(null);
  };

  const options = [
    { label: "Round Trip", icon: <SwapHorizIcon /> },
    { label: "One Way", icon: <ArrowForwardIcon /> },
    { label: "Multi-City", icon: <TimelineIcon /> },
  ];

  const getIcon = () => {
    const option = options.find((o) => o.label === travelMode);
    return option ? option.icon : <SwapHorizIcon />;
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        onClick={handleClick}
        className={`flex items-center px-4 py-2 rounded-md text-sm font-normal focus:outline-none ${
          anchorEl
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600"
        }`}
        disableRipple
        sx={{
          backgroundColor: "transparent",
          textTransform: "none",
          fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "0.2px",
          lineHeight: "20px",
          color: "#70757a",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "& .MuiSvgIcon-root": {
            color: anchorEl ? "#1a73e8" : "#70757a",
          },
        }}
        endIcon={<ArrowDropDownIcon />}
      >
        {getIcon()}
        <span className="mx-2">{travelMode}</span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
        MenuListProps={{
          sx: {
            padding: 0,
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            mt: 1,
            minWidth: "160px",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => handleClose(option.label)}
            selected={option.label === travelMode}
            sx={{
              fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.2px",
              lineHeight: "20px",
              color: option.label === travelMode ? "#1a73e8" : "#70757a",
              "&:hover": {
                backgroundColor: "#e8f0fe",
              },
              "&.Mui-selected": {
                backgroundColor: "#e8f0fe !important",
              },
            }}
          >
            <Typography sx={{ flexGrow: 1 }}>{option.label}</Typography>
            {option.label === travelMode && (
              <CheckIcon sx={{ color: "#1a73e8", marginLeft: "auto" }} />
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default TravelModeComponent;
