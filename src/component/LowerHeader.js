import React from 'react';

const LowerHeader = ({ shownav }) => {
  const navList = ["Bestseller", "HairCare", "SkinCare", "Blogs", "Brands", "Concerns", "Know us better"];

  return (
    <div className={`lg:flex ${shownav ? 'block' : 'hidden'}`}>
      <ul className={`flex flex-col items-center gap-8 text-white text-xl lg:flex-row`}>
        {navList.map((nav, index) => (
          <li key={index}>{nav}</li>
        ))}
      </ul>
    </div>
  );
};

export default LowerHeader;
