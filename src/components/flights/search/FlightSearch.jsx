import React from 'react';
import './FlightSearch.css';
import useDynamicDropdown from './useDynamicDropdown';

const FlightSearch = ({ flights, setFlights, setFetch, fetch }) => {
  const {
    ...dropdownProps1
  } = useDynamicDropdown("Dropdown 1", [
    "Option 1A",
    "Option 1B",
    "Option 1C",
  ]);

  const {
    ...dropdownProps2
  } = useDynamicDropdown("Dropdown 2", [
    "Option 2A",
    "Option 2B",
    "Option 2C",
  ]);

  return (
    <div className='pparent'>
    <div className='DropParent'>
      <div className="dropdown">
        From
        <button onClick={dropdownProps1.toggleDropdown} className="dropbtn">
          
          {dropdownProps1.buttonText}
        </button>

        <div
          id="myDropdown1"
          className={`dropdown-content ${dropdownProps1.isDropdownOpen ? "show" : ""}`}
        >
          <input
            type="text"
            placeholder="Search.."
            id="myInput1"
            value={dropdownProps1.filterText}
            onChange={(e) => dropdownProps1.setFilterText(e.target.value)}
          />
          {dropdownProps1.filteredOptions.map((option, index) => (
            <a key={index} onClick={() => dropdownProps1.handleItemClick(option)}>
              {option}
            </a>
          ))}
        </div>
      </div>

      <div className="dropdown">
        To
        <button onClick={dropdownProps2.toggleDropdown} className="dropbtn">
          {dropdownProps2.buttonText}
        </button>

        <div
          id="myDropdown2"
          className={`dropdown-content ${dropdownProps2.isDropdownOpen ? "show" : ""}`}
        >
          <input
            type="text"
            placeholder="Search.."
            id="myInput2"
            value={dropdownProps2.filterText}
            onChange={(e) => dropdownProps2.setFilterText(e.target.value)}
          />
          {dropdownProps2.filteredOptions.map((option, index) => (
            <a key={index} onClick={() => dropdownProps2.handleItemClick(option)}>
              {option}
            </a>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default FlightSearch;
