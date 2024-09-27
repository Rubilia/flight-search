import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';

interface AdvancedDropdownOption {
  label: string;
  icon?: React.ReactNode;
}

interface AdvancedDropdownProps {
  options: AdvancedDropdownOption[];
}

function AdvancedDropdownComponent({ options }: AdvancedDropdownProps) {
  const [selectedOption, setSelectedOption] = useState<AdvancedDropdownOption>(options[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option?: AdvancedDropdownOption) => {
    if (option) {
      setSelectedOption(option);
    }
    setAnchorEl(null);
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        onClick={handleClick}
        disableRipple
        sx={{ textTransform: 'none' }}
        className={`flex items-center px-4 py-2 text-sm font-normal normal-case focus:outline-none border-b-2 bg-transparent border-transparent hover:bg-[#e8f0fe] text-[#989a9e]`}
        endIcon={<ArrowDropDownIcon className="text-[#989a9e]" />}
      >
        {selectedOption.icon &&
          React.cloneElement(selectedOption.icon as React.ReactElement, {
            className: 'mr-2 text-[#989a9e]',
            fontSize: 'small',
          })}
        <span className="mx-2">{selectedOption.label}</span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={() => handleClose()}
        MenuListProps={{
          className: 'p-0',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          className:
            'mt-1 min-w-[160px] rounded-md shadow-[0px_2px_8px_rgba(0,0,0,0.1)]',
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => handleClose(option)}
            selected={option.label === selectedOption.label}
            className={`flex items-center font-normal text-sm leading-5 ${
              option.label === selectedOption.label
                ? 'text-[#989a9e] bg-[#e8f0fe]'
                : 'text-[#70757a]'
            } hover:bg-[#e8f0fe]`}
          >
            {option.label === selectedOption.label ? (
              <CheckIcon className="mr-2 text-[#989a9e]" fontSize="small" />
            ) : (
              <div className="w-6 mr-2" /> 
            )}
            <span className="flex-grow">{option.label}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default AdvancedDropdownComponent;
