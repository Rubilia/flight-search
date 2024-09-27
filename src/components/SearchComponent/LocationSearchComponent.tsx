import React, { useState, useRef, useEffect } from "react";
import CustomSearchItem from "./CustomSearchItem";

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
  const [selectedIcon, setSelectedIcon] =
    useState<React.ReactNode>(searchbarIcon);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleSelect = (icon: React.ReactNode, text: string) => {
    setInputText(text);
    setSelectedIcon(icon);
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
      <div className="flex items-center border border-gray-300 rounded-[5px] py-4 px-4">
        <div className="mr-2 text-[#5f6368]">
          {React.cloneElement(selectedIcon as React.ReactElement, {
            fontSize: "small",
          })}
        </div>

        <input
          className="w-full text-[#5f6368] bg-transparent border-none outline-none font-sans font-normal tracking-wide leading-5"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onFocus={handleFocus}
        />
      </div>

      {isOpen && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg left-0 z-10">
          {options.map((option, index) => (
            <CustomSearchItem
              key={index}
              icon={option.icon}
              text={option.text}
              subtext={option.subtext}
              onClick={() => handleSelect(option.icon, option.text)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationSearchComponent;
