
import React from 'react';
import PassengersComponent from './PassengersComponent';
import TicketTypeComponent from './TicketTypeComponent';
import AdvancedDropdownComponent from './AdvancedDropdownComponent';
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowForwardIcon from "@mui/icons-material/ArrowRightAlt";
import TimelineIcon from "@mui/icons-material/MultipleStop";


const SearchComponent: React.FC = () => {
  const travelOptions = [
    { label: 'Round Trip', icon: <SwapHorizIcon /> },
    { label: 'One Way', icon: <ArrowForwardIcon /> },
    { label: 'Multi-City', icon: <TimelineIcon /> },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-4 mx-[15%]">
      <div className="flex items-center space-x-4 ml-2">
        <AdvancedDropdownComponent options={travelOptions}/>
        <PassengersComponent />
        <TicketTypeComponent />
      </div>
    </div>
  );
};

export default SearchComponent;