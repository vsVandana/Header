import React, { useState } from 'react';
import LowerHeader from "./LowerHeader";
import UpperHeader from "./UpperHeader";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="flex flex-col gap-5 bg-black px-4 py-2">
      <UpperHeader shownav={showNav} handleNavClick={handleNavClick} />
      <LowerHeader shownav={showNav} />
    </div>
  );
};

export default Header;
