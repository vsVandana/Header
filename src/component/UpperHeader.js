import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const UpperHeader = ({ shownav, handleNavClick }) => {
  const middleImages = [
    "https://innovist.com/cdn/shop/files/bare-logo_b27e2e10-7e5e-40d2-a5be-1fbbb44dd79a.png?v=1677248586",
    "https://innovist.com/cdn/shop/files/Artboard_1_1.png?v=1654863164",
    "https://innovist.com/cdn/shop/files/Artboard_1_2051f510-a6ca-4798-8036-c9e632a81cab.png?v=1654863229",
  ];

  return (
    <div className="upper-part flex items-center justify-between gap-4">
      <div className="text-white text-2xl cursor-pointer lg:hidden" onClick={handleNavClick}>
        <GiHamburgerMenu />
      </div>
      <img
        src="https://innovist.com/cdn/shop/files/Final_Innovist_Logo-04_170x@2x.png?v=1706178919"
        alt="logo"
        className="w-48"
      />

      <ul className={`lg:flex gap-10 hidden`}>
        {middleImages.map((image, index) => (
          <li key={index}>
            <img src={image} alt="123" className="w-24" />
          </li>
        ))}
      </ul>
      <input type="text" placeholder="search" className="w-80 p-1 lg:block hidden" />
      <ul className="text-3xl text-white flex gap-5 ">
        <li>
          <FaRegUser />
        </li>
        <li>
          <IoCartOutline />
        </li>
      </ul>
    </div>
  );
};

export default UpperHeader;
