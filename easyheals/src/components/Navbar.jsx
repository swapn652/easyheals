import React from 'react';

const commonLinkClasses = `
   cursor-pointer 
   hover:underline 
   hover:decoration-underlineColor
   hover:decoration-2 
   hover:underline-offset-8
`;

const navigationLinks = ["Home", "About Us", "Lab Test", "Treatment"];

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center" style={{ fontFamily: 'Poppins' }}>
      <img src="/easyHealsLogo.png" className="md:w-32 lg:w-44" alt="Logo" />   
      <div className="flex flex-row md:gap-x-6 lg:gap-x-10 items-center md:text-base lg:text-lg">
        <ul className="flex flex-row md:gap-x-6 lg:gap-x-10">
          {navigationLinks.map((linkText, index) => (
            <li key={index} className={commonLinkClasses}>{linkText}</li>
          ))}
        </ul>
        <button className="w-32 h-10 bg-buttonColor text-white rounded-md font-extrabold px-2">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
