import React, { useState } from "react";
import { Menu, MenuItem, Button, Typography, Box } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
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
    { label: "One Way", icon: <ArrowRightAltIcon /> },
    { label: "Multi-City", icon: <MultipleStopIcon /> },
  ];

  const getIcon = () => {
    const option = options.find((o) => o.label === travelMode);
    return option ? option.icon : <SwapHorizIcon />;
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        onClick={handleClick}
        className={`flex items-center px-4 py-2 text-sm font-normal focus:outline-none ${
          anchorEl ? "border-b-2 border-blue-600" : "text-gray-600"
        }`}
        disableRipple
        sx={{
          backgroundColor: anchorEl ? "#e8f0fe" : "transparent",
          textTransform: "none",
          fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "0.2px",
          lineHeight: "20px",
          color: "#70757a",
          borderRadius: "0px",
          borderBottom: anchorEl
            ? "2px solid #1a73e8"
            : "2px solid transparent",
          "&:hover": {
            backgroundColor: "#e8f0fe",
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
              display: "flex",
              alignItems: "center",
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
            {option.label === travelMode ? (
              <CheckIcon sx={{ color: "#1a73e8", marginRight: "8px" }} />
            ) : (
              <Box sx={{ width: "24px", marginRight: "8px" }} />
            )}
            <Typography sx={{ flexGrow: 1 }}>{option.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default TravelModeComponent;
