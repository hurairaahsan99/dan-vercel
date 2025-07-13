import React, { useState, useRef, useEffect } from 'react';
import { Box, ChevronDownIcon } from '@chakra-ui/icons';
import './CustomSelect.css';

interface Option {
  value: string;
  label: {
    en: string;
    ar: string;
  };
}

interface CustomSelectProps {
  options: any;
  isRTL: any;
  placeholder: any;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, isRTL, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select" dir={isRTL ? 'rtl' : 'ltr'} ref={selectRef}>
      <Box
              className={`select-box ${isOpen ? 'open' : ''}`}
              p={'0.75rem'}

_hover={{
    border: "2px solid #552A0E4D",
       p:'0.75rem'
}}
        onClick={handleToggle}
      >
        <span className={`selected-value ${!selectedValue ? 'placeholder' : ''}`}>
          {selectedValue ? (isRTL ? selectedValue.label.ar : selectedValue.label.en) : placeholder}
        </span>
        <span className="arrow">
          <ChevronDownIcon color="#552A0E" />
        </span>
      </Box>
      {isOpen && (
        <ul className="options" >
          {options.map((option:any) => (
            <li style={{ backgroundColor: '#faf7f3' }} key={option.value} onClick={() => handleSelect(option)}>
              {isRTL ? option.label.ar : option.label.en}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;