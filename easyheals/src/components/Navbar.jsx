import React, { useState } from 'react';

const commonLinkClasses = `
   cursor-pointer 
   hover:underline 
   hover:decoration-underlineColor
   hover:decoration-2 
   hover:underline-offset-8
`;

const navigationLinks = ["Home", "About Us", "Lab Test", "Treatment"];

export const Navbar = () => {
  let [open, setOpen] = useState(false); //to keep track of the menu on small screen devices, if it's open or not 

  return (
    <nav className="flex flex-row justify-between items-center font-[Poppins]">
      <img src="/easyHealsLogo.png" className="md:w-32 lg:w-44" alt="Logo" />
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-2 top-[40px] cursor-pointer md:hidden"
      >
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>
      <ul
        className={`
            mt-4 
            md:flex 
            md:items-center 
            md:gap-x-6 
            lg:gap-x-10 
            items-center 
            md:text-base 
            lg:text-lg 
            absolute 
            md:static 
            bg-white 
            left-0 
            w-full 
            md:w-auto 
            transition-all 
            duration-500 
            ease-in ${
            open ? 'top-20' : 'top-[-490px]'
        }`}
      >
        {navigationLinks.map((linkText, index) => (
          <li
            key={index}
            className={`${commonLinkClasses} mb-4`}
          >
            {linkText}
          </li>
        ))}
        <button className="w-32 h-10 bg-buttonColor text-white rounded-md font-extrabold px-2 -mt-4">
          Contact Us
        </button>
      </ul>
    </nav>
  );
};
