import React from 'react'

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center" style={{fontFamily: 'Poppins'}}>
        <img src="/easyHealsLogo.png" className="w-44"/>
        <div className="flex flex-row gap-x-10 items-center">
            <a className="
                cursor-pointer 
                hover:underline 
                hover:decoration-underlineColor
                hover:decoration-2 
                hover:underline-offset-8
                text-lg">
                    Home
            </a>
            <a className="
                cursor-pointer 
                hover:underline 
                hover:decoration-underlineColor
                hover:decoration-2 
                hover:underline-offset-8
                text-lg">
                    About Us
            </a>
            <a className="
                cursor-pointer 
                hover:underline 
                hover:decoration-underlineColor
                hover:decoration-2 
                hover:underline-offset-8
                text-lg">
                    Lab Test
            </a>
            <a className="
                cursor-pointer 
                hover:underline 
                hover:decoration-underlineColor
                hover:decoration-2 
                hover:underline-offset-8
                text-lg">
                    Treatment
            </a>
            <button className="w-32 h-10 bg-buttonColor text-white rounded-md text-lg font-extrabold px-2">
                Contact Us
            </button>
        </div>
    </nav>
  )
}
