// Footer.jsx
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Company Description */}
        <div className="col-span-2">
          <h2 className="text-white text-lg font-semibold mb-4">CS — Ticket System</h2>
          <p className="text-gray-400 text-sm text-left">
            Customer Support Zone is a web application designed to help track and manage customer tickets efficiently, providing a smooth support workflow.

          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
            <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Join Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaTwitter className="w-4 h-4" /> @CS — Ticket System
            </a>
            </li>

            <li className="flex items-center gap-2 hover:text-white transition">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaLinkedinIn className="w-4 h-4" /> @CS — Ticket System
            </a>
            </li>

            <li className="flex items-center gap-2 hover:text-white transition">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaFacebookF className="w-4 h-4" /> @CS — Ticket System
            </a>
            </li>

            <li className="flex items-center gap-2 hover:text-white transition">
            <a href="#" className="flex items-center gap-2">
                <HiOutlineMail className="w-4 h-4" /> support@cst.com
            </a>
            </li>

          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}
