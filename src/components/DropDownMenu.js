import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (e) => {
    console.log(e.target.value)
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Dropdown</button>
      {isOpen && (
      <select onChange={handleMenuItemClick}>
       <option onClick={handleMenuItemClick} value="Item1">Item 1</option>
      <option onClick={handleMenuItemClick} value="Item2">Item 2</option>
      <option onClick={handleMenuItemClick} value="Item3">Item 3</option>

         </select>
      )}
      
    </div>
  );
};

export default DropdownMenu;