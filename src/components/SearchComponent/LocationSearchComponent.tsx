import React, { useState, useRef, useEffect } from "react";
import CustomSearchItem from "./CustomSearchItem"; // Adjust the import path accordingly

interface Triplet {
  icon: React.ReactNode;
  text: string;
  subtext: string;
}

interface LocationSearchProps {
  searchbarIcon: React.ReactNode;
  initialText: string;
  options: Triplet[];
}

function LocationSearchComponent({
  searchbarIcon,
  initialText,
  options,
}: LocationSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState(initialText);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleSelect = (text: string) => {
    setInputText(text);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Close the dropdown when clicking outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-sm mb-8 mt-3 text-left"
    >
      {/* Search bar */}
      <div className="flex items-center border border-gray-300 rounded-[5px] py-4 px-4">
        {/* Icon on the left */}
        <div className="mr-2">{searchbarIcon}</div>

        {/* Editable Text */}
        <input
          className="w-full text-[#70757a] bg-transparent border-none outline-none font-sans font-normal tracking-wide leading-5"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onFocus={handleFocus}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg left-0 z-10">
          {options.map((option, index) => (
            <CustomSearchItem
              key={index}
              icon={option.icon}
              text={option.text}
              subtext={option.subtext}
              onClick={() => handleSelect(option.text)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationSearchComponent;
