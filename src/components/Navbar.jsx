import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => setIsMenu(!isMenu);

  return (
    <nav className="">
      <div className="flex justify-between items-center p-2">
        <h1 className="font-bold text-gray-800 text-lg">CS — Ticket System</h1>
        <div className="flex items-center gap-6">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Tickets</li>
          <li className="hover:text-blue-500 cursor-pointer">Analytics</li>
          <li className="hover:text-blue-500 cursor-pointer">Reports</li>
          <li className="hover:text-blue-500 cursor-pointer">Settings</li>
        </ul>

        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded">
          New Ticket
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenu ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenu && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Tickets</li>
          <li className="hover:text-blue-500 cursor-pointer">Analytics</li>
          <li className="hover:text-blue-500 cursor-pointer">Reports</li>
          <li className="hover:text-blue-500 cursor-pointer">Settings</li>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            New Ticket
          </button>
        </ul>
      )}
      </div>

    </nav>
  );
}
