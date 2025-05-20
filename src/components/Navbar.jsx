import React from 'react'
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  return (
    <div>
        <nav className='flex justify-between p-6 bg-gray-700  text-white'>
            <img className='rounded' width={"40px"} height={"40px"} src="https://static.vecteezy.com/system/resources/thumbnails/008/826/851/small/abstract-initial-letter-mz-logo-in-black-color-isolated-in-white-background-applied-for-clothing-brand-logo-also-suitable-for-the-brands-or-companies-that-have-an-initial-name-zm-vector.jpg" alt="" />
            <ul className='md:flex gap-10 hidden  font-extrabold'>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <button className='bg-green-500 lg:block hidden w-20 h-10 rounded-lg text-black'>login</button>
            <CiMenuBurger className='text-white lg: hidden' />
        </nav>
    </div>
  )
}

export default Navbar