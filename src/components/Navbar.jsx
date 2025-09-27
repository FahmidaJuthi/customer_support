import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 bg-white ">
      {/* Logo / Brand */}
      <h1 className="font-bold text-gray-800 text-lg">CS — Ticket System</h1>

      {/* Right Side: Menu + Button */}
      <div className="flex items-center gap-6">
        {/* Menu Items */}
        <ul className="flex gap-4 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-purple-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-purple-600 transition">FAQ</a></li>
          <li><a href="#" className="hover:text-purple-600 transition">Changelog</a></li>
          <li><a href="#" className="hover:text-purple-600 transition">Blog</a></li>
          <li><a href="#" className="hover:text-purple-600 transition">Download</a></li>
          <li><a href="#" className="hover:text-purple-600 transition">Contact</a></li>
        </ul>

        {/* New Ticket Button */}
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 cursor-crosshair rounded hover:opacity-90 transition">
          + New Ticket
        </button>
      </div>
    </nav>
  );
}
