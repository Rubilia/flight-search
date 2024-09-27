import React from "react";
import PassengersComponent from "./PassengersComponent";
import AdvancedDropdownComponent from "./AdvancedDropdownComponent";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowForwardIcon from "@mui/icons-material/ArrowRightAlt";
import TimelineIcon from "@mui/icons-material/MultipleStop";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import LocationSearchComponent from "./LocationSearchComponent";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

interface Triplet {
  icon: React.ReactNode;
  text: string;
  subtext: string;
}

const SearchComponent: React.FC = () => {
  const travelOptions = [
    { label: "Round Trip", icon: <SwapHorizIcon /> },
    { label: "One Way", icon: <ArrowForwardIcon /> },
    { label: "Multi-City", icon: <TimelineIcon /> },
  ];

  const tickerTypeOptions = [
    { label: "Economy", icon: null },
    { label: "Premium Economy", icon: null },
    { label: "Business", icon: null },
    { label: "First", icon: null },
  ];

  const DepartureOptions: Triplet[] = [
    {
      icon: <PlaceOutlinedIcon />,
      text: "Phoenix, Arizona",
      subtext: "City in Arizona",
    },
    {
      icon: <AirplanemodeActiveOutlinedIcon />,
      text: "Tongren Phoenix Airport",
      subtext: "Airport in China",
    },
    {
      icon: <AirplanemodeActiveOutlinedIcon />,
      text: "Tongren Phoenix Airport",
      subtext: "Airport in China",
    },
    {
      icon: <AirplanemodeActiveOutlinedIcon />,
      text: "Sanya Phoenix International Airport",
      subtext: "Airport in Sanya, China",
    },
    {
      icon: <PlaceOutlinedIcon />,
      text: "Phoenixville, Pennsylvania",
      subtext: "Borough in Pennsylvania",
    },
    {
      icon: <PlaceOutlinedIcon />,
      text: "Vacoas-Phoenix, Mauritius",
      subtext: "Town in Mauritius",
    },
  ];

  const DestinationOptions: Triplet[] = [
    {
      icon: <LanguageOutlinedIcon />,
      text: "Anywhere",
      subtext: "Search for trips to anywhere in the world",
    },
    {
      icon: <ScheduleOutlinedIcon />,
      text: "Paris",
      subtext: "All airports",
    },
    {
      icon: <ScheduleOutlinedIcon />,
      text: "Phoenix Sky Harbor International Airport",
      subtext: "PHX",
    },
    {
      icon: <ScheduleOutlinedIcon />,
      text: "Phoenix",
      subtext: "All airports",
    },
    {
      icon: <PlaceOutlinedIcon />,
      text: "Phoenixville, Pennsylvania",
      subtext: "Borough in Pennsylvania",
    },
    {
      icon: <PlaceOutlinedIcon />,
      text: "Vacoas-Phoenix, Mauritius",
      subtext: "Town in Mauritius",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-4 mx-[15%]">
      <div className="flex items-center space-x-4 ml-2">
        <AdvancedDropdownComponent options={travelOptions} />
        <PassengersComponent />
        <AdvancedDropdownComponent options={tickerTypeOptions} />
      </div>
      <div className="flex items-center space-x-4 ml-2">
        <LocationSearchComponent
          searchbarIcon={<CircleOutlinedIcon />}
          initialText={"Phoenix, Arizona"}
          options={DepartureOptions}
        />
        <LocationSearchComponent
          searchbarIcon={<PlaceOutlinedIcon />}
          initialText={"Anywhere"}
          options={DestinationOptions}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
