import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ff3c3c] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm items-center">
        <div>
          <h2 className="text-xl font-bold text-yellow-100 mb-2">Darbhanga Dairy</h2>
          <p className="mb-4">
            Your trusted partner for fresh and organic groceries, delivered conveniently to your home. We prioritize quality and customer satisfaction.
          </p>
          <div className="flex gap-4 text-lg text-white">
            <FaFacebookF className="hover:text-yellow-300 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-300 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-300 cursor-pointer" />
          </div>
        </div>

        <div className="max-md:hidden">
          <h3 className="text-yellow-100 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
            <li><NavLink to="/products" className="hover:underline">Our Products</NavLink></li>
            <li><NavLink to="/faqs" className="hover:underline">FAQs</NavLink></li>
            <li><NavLink to="/delivery" className="hover:underline">Delivery Information</NavLink></li>
            <li><NavLink to="/support" className="hover:underline">Customer Support</NavLink></li>
          </ul>
        </div>

        {/*
        <div>
          <h3 className="text-yellow-100 font-semibold mb-3">Top Categories</h3>
          <ul className="space-y-2">
            <li><NavLink to="/categories/fresh-produce" className="hover:underline">Fresh Produce</NavLink></li>
            <li><NavLink to="/categories/dairy-eggs" className="hover:underline">Dairy & Eggs</NavLink></li>
            <li><NavLink to="/categories/pantry-staples" className="hover:underline">Pantry Staples</NavLink></li>
            <li><NavLink to="/categories/beverages" className="hover:underline">Beverages</NavLink></li>
            <li><NavLink to="/categories/organic-vegan" className="hover:underline">Organic & Vegan</NavLink></li>
          </ul>
        </div> */}

        <div>
          <h3 className="text-yellow-100 font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Jamshedpur</li>
            <li className="flex items-center gap-2"><FaPhone /> +1 (123) 456-7890</li>
            <li className="flex items-center gap-2"><FaEnvelope /> aacd@gmail.com</li>
            <li className="flex items-center gap-2"><FaClock /> Mon - Sat: 8:00 AM - 9:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-yellow-200 mt-10">
        © 2025 Maraki IT Solutions. All rights reserved. Designed with <span className="text-white">♥</span> for Fresh Living.
      </div>
    </footer>
  );
};

export default Footer;