
import React from 'react';
import TravelModeComponent from './TravelModeComponent';
import PassengersComponent from './PassengersComponent';
import TicketTypeComponent from './TicketTypeComponent';

const SearchComponent: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-4 mx-[15%]">
      <div className="flex items-center space-x-4 ml-2">
        <TravelModeComponent />
        <PassengersComponent />
        <TicketTypeComponent />
      </div>
    </div>
  );
};

export default SearchComponent;