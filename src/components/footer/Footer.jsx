import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#07233B] text-white py-12 px-8">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-semibold leading-snug">
            All kinds of services <br /> for renting cars
          </h2>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p>Bangladesh</p>
          <p>452, Rajapurlane, Anderkilla, Chattogram</p>
        </div>

        {/* Say Hello */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Say Hello</h3>
          <p>skn@email.com</p>
          <p className="mt-1">+8801234567891</p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-blue-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition">
            Blog
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Services
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Contacts
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          RentalWheels © 2025. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
