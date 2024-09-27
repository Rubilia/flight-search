import React from 'react';

interface LabelWithSublabelProps {
  label: string;
  subLabel?: string;
}

const LabelWithSublabel: React.FC<LabelWithSublabelProps> = ({ label, subLabel }) => {
  return (
    <div>
      <p className="text-base font-normal text-[#70757a] leading-6 tracking-[0.1px]">
        {label}
      </p>
      {subLabel && (
        <p className="text-xs font-normal text-[#70757a] leading-4 tracking-[0.3px]">
          {subLabel}
        </p>
      )}
    </div>
  );
};

export default LabelWithSublabel;
