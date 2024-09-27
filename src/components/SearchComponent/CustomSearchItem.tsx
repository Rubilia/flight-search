import React from "react";

interface CustomSearchItemProps {
  icon: React.ReactNode;
  text: string;
  subtext: string;
  onClick: () => void;
}

const CustomSearchItem: React.FC<CustomSearchItemProps> = ({
  icon,
  text,
  subtext,
  onClick,
}) => {
  return (
    <div
      className="flex items-start p-2 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="mr-3 text-[#5f6368]">
        {React.cloneElement(icon as React.ReactElement, { fontSize: "small" })}
      </div>
      <div>
        <p className="text-sm font-normal text-[#5f6368]">{text}</p>
        <p className="text-xs text-[#5f6368]">{subtext}</p>
      </div>
    </div>
  );
};

export default CustomSearchItem;
