import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

import logo from "../assets/images/google.svg";


function Header() {
  const navButtons = [
    { label: "Travel", icon: <ExploreIcon /> },
    { label: "Explore", icon: <ExploreIcon /> },
    { label: "Flights", icon: <FlightIcon /> },
    { label: "Hotels", icon: <HotelIcon /> },
    { label: "Vacation Rentals", icon: <HomeWorkIcon /> },
  ];
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar>
        {/* Left side icons */}
        <IconButton edge="start" aria-label="menu" sx={{ marginRight: 1 }}>
          <MenuIcon />
        </IconButton>

        <IconButton href="https://www.google.com" sx={{ marginRight: 2 }}>
          <img
            src={logo}
            alt="Google Logo"
            style={{ height: "40px", width: "auto" }}
          />
        </IconButton>

        {navButtons.map((button, index) => (
          <Button
            key={index}
            variant="outlined"
            startIcon={button.icon}
            sx={{
              textTransform: "none",
              marginRight: 1,
              borderRadius: 20,
              borderColor: button.label === "Flights" ? "#d2e3fc" : "#e0e0e0",
              color: button.label === "Flights" ? "#1a73e8" : "#5f6368",
              backgroundColor:
                button.label === "Flights" ? "#e8f0fe" : "transparent",
              "&:hover": {
                backgroundColor:
                  button.label === "Flights" ? "#e8f0fe" : "#f1f3f4",
                borderColor: "#d2e3fc",
              },
            }}
          >
            {button.label}
          </Button>
        ))}

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right side icons with tooltips */}

        <Tooltip title="Change Appearance">
          <IconButton sx={{ marginLeft: 1, color: "#5f6368" }}>
            <WbSunnyIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Google Apps">
          <IconButton sx={{ marginLeft: 1, color: "#5f6368" }}>
            <AppsIcon />
          </IconButton>
        </Tooltip>

        <IconButton sx={{ marginLeft: 1, color: "#5f6368" }}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
