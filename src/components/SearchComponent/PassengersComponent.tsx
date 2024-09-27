import React, { useState } from "react";
import { Menu, Button } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ControlButton from "./ControlButtonComponent";
import LabelWithSublabel from "./LabelSublabelComponent";

// Declare types for passenger keys
type PassengerKey =
  | "Adults"
  | "Children"
  | "Infants In seat"
  | "Infants On lap";

interface Passengers {
  Adults: number;
  Children: number;
  "Infants In seat": number;
  "Infants On lap": number;
}

const PassengersComponent: React.FC = () => {
  const [passengers, setPassengers] = useState<Passengers>({
    Adults: 1,
    Children: 0,
    "Infants In seat": 0,
    "Infants On lap": 0,
  });
  const [tempPassengers, setTempPassengers] = useState<Passengers>({
    ...passengers,
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTempPassengers({ ...passengers });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (applyChanges: boolean) => {
    if (applyChanges) {
      setPassengers({ ...tempPassengers });
    }
    setAnchorEl(null);
  };

  const increment = (key: PassengerKey) => {
    setTempPassengers((prev) => {
      const newValue = prev[key] + 1;
      if (newValue > 9) return prev;
      return { ...prev, [key]: newValue };
    });
  };

  const decrement = (key: PassengerKey, min: number) => {
    setTempPassengers((prev) => {
      const newValue = prev[key] - 1;
      if (newValue < min) return prev;
      return { ...prev, [key]: newValue };
    });
  };

  const totalPassengers = Object.values(passengers).reduce(
    (total, num) => total + num,
    0
  );

  // Info about labels/sublabels in the menu
  const rows: {
    label: string;
    subLabel?: string;
    min: number;
    key: PassengerKey;
    incrementTooltip: string;
    decrementTooltip: string;
  }[] = [
    {
      label: "Adults",
      min: 1,
      key: "Adults",
      incrementTooltip: "Add adult",
      decrementTooltip: "Remove adult",
    },
    {
      label: "Children",
      subLabel: "Aged 2-11",
      min: 0,
      key: "Children",
      incrementTooltip: "Add child",
      decrementTooltip: "Remove child",
    },
    {
      label: "Infants",
      subLabel: "In seat",
      min: 0,
      key: "Infants In seat",
      incrementTooltip: "Add infant in a seat",
      decrementTooltip: "Remove infant in a seat",
    },
    {
      label: "Infants",
      subLabel: "On lap",
      min: 0,
      key: "Infants On lap",
      incrementTooltip: "Add infant on a lap",
      decrementTooltip: "Remove infant on a lap",
    },
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Button to open the menu */}
      <Button
        onClick={handleClick}
        className={`flex items-center px-4 py-2 text-sm font-normal focus:outline-none transition-colors duration-200`}
        disableRipple
        sx={{
          backgroundColor: isMenuOpen ? "#e8f0fe" : "transparent",
          color: "#70757a", // Gray when closed
          textTransform: "none",
          fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "0.2px",
          lineHeight: "20px",
          borderRadius: 0,
          borderBottom: isMenuOpen
            ? "2px solid #1a73e8"
            : "2px solid transparent",
          "&:hover": {
            backgroundColor: "#e8f0fe",
          },
        }}
        endIcon={<ArrowDropDownIcon />}
      >
        <PersonOutlineOutlinedIcon
          className="mr-2"
          sx={{
            fontSize: "20px",
            color: "#70757a",
          }}
        />
        <span className="mr-2">{totalPassengers}</span>
      </Button>

      {/* Dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={() => handleClose(false)}
        MenuListProps={{
          className: "p-0",
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
          className: "mt-1 rounded-md shadow-lg",
          style: { minWidth: "300px" },
        }}
      >
        <div
          className="p-4"
          style={{
            paddingTop: "10px", // Reduce the top padding to 10px
          }}
        >
          {rows.map((row) => (
            <div
              key={row.key}
              className="flex items-center justify-between py-2"
              style={{
                marginBottom: "10px", // 10px space between rows
              }}
            >
              {/* Labels */}
              <LabelWithSublabel
                label={row.label}
                subLabel={row.subLabel}
              />

              {/* Controls */}
              <div className="flex items-center">
                {/* Decrement button */}
                <ControlButton
                  disabled={tempPassengers[row.key] === row.min}
                  onClickFunc={() => decrement(row.key, row.min)}
                  icon={<RemoveIcon fontSize="small" />}
                  tooltip={row.decrementTooltip}
                />

                {/* Count */}
                <span className="mx-2 w-6 text-center text-[#70757a]">
                  {tempPassengers[row.key]}
                </span>

                {/* Increment button */}
                <ControlButton
                  disabled={tempPassengers[row.key] === 9}
                  onClickFunc={() => increment(row.key)}
                  icon={<AddIcon fontSize="small" />}
                  tooltip={row.incrementTooltip}
                />
              </div>
            </div>
          ))}
          {/* Action buttons */}
          <div className="flex justify-end mt-2 mb-4" style={{ gap: "16px" }}>
            <Button
              onClick={() => handleClose(false)}
              className="mr-4"
              disableRipple
              sx={{
                color: "#1a73e8",
                borderRadius: "12px",
                "&:hover": {
                  color: "#135ba1",
                },
                "&:active": {
                  color: "#104e8b",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleClose(true)}
              disableRipple
              sx={{
                color: "#1a73e8",
                borderRadius: "12px",
                "&:hover": {
                  color: "#135ba1",
                },
                "&:active": {
                  color: "#104e8b",
                },
              }}
            >
              Done
            </Button>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default PassengersComponent;
