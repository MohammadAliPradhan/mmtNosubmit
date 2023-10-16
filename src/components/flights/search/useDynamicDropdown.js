import React, { useState } from "react";

function useDynamicDropdown(initialButtonText, initialOptions) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [buttonText, setButtonText] = useState(initialButtonText);
  const options = initialOptions;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (option) => {
    setButtonText(option);
    setDropdownOpen(false);
    setFilterText("");
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filterText.toLowerCase())
  );

  const dropdownProps = {
    isDropdownOpen,
    filterText,
    buttonText,
    toggleDropdown,
    handleItemClick,
    filteredOptions,
    setFilterText
  };

  return dropdownProps;
}

export default useDynamicDropdown;
