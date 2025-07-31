'use client';

import React, { useState } from 'react';
import { Menu, X, Leaf, Search, MapPin, Truck, ShoppingBag, User, Heart, Phone, ChevronDown } from 'lucide-react';

const RasayanNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const mainNavItems = [
    {
      name: "About Rasayan Naturals",
      hasDropdown: true,
      items: ["Our Story", "Mission & Vision", "Quality Assurance", "Certifications", "Research & Development"]
    },
    {
      name: "About Ayurveda",
      hasDropdown: true,
      items: ["What is Ayurveda?", "Doshas & Constitution", "Ayurvedic Principles", "Benefits", "Modern Science"]
    },
    { name: "Product Range", hasDropdown: false },
    { name: "Online Consultation", hasDropdown: false },
    { name: "About Us", hasDropdown: false },
    { name: "Contact Us", hasDropdown: false }
  ];

  const actionButtons = [
    { icon: MapPin, text: "Find Store" },
    { icon: Truck, text: "Free Delivery" },
    { icon: ShoppingBag, text: "Shop Online" },
    { icon: User, text: "Sign up / Login" }
  ];

  return (
    <div className="bg-white shadow-lg relative z-50">
      {/* Compact Top Bar */}
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-8 text-xs">
            <div className="flex items-center space-x-4">
              <span className="text-teal-700 font-medium flex items-center space-x-1">
                <span className="text-yellow-500">✨</span>
                <span>5000+ Years of Ancient Wisdom</span>
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xs">⭐</span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-teal-800 font-semibold hidden sm:block">Rasayan Ayurveda Naturals</span>
              <span className="text-teal-700 font-medium flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>1800-120-RASA</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Compact Logo Section */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-teal-300/30 transition-all duration-300 group-hover:scale-105">
                <Leaf className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Rasayan Ayurveda
              </span>
              <span className="text-xs text-teal-600 tracking-wide font-medium hidden sm:block">
                Ancient Healing • Modern Science
              </span>
            </div>
          </div>

          {/* Compact Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-full pl-4 pr-10 py-2 border border-teal-200 rounded-full focus:border-teal-500 focus:outline-none transition-colors duration-300 bg-teal-50/30 text-sm"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center hover:from-teal-700 hover:to-emerald-700 transition-all duration-300">
                <Search className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>

          {/* Compact Action Buttons - Fixed Layout */}
          <div className="hidden lg:flex items-center space-x-1">
            {actionButtons.map((button, index) => {
              const IconComponent = button.icon;
              return (
                <button
                  key={button.text}
                  className="flex items-center space-x-1 px-3 py-2 text-teal-700 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-all duration-300 group text-xs font-medium whitespace-nowrap"
                >
                  <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="hidden xl:block">{button.text}</span>
                </button>
              );
            })}

            {/* Cart with badge */}
            <button className="relative p-2 text-teal-700 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-all duration-300">
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Wishlist */}
            <button className="p-2 text-teal-700 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-all duration-300">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-teal-700 hover:text-teal-800 hover:bg-teal-50 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Compact Navigation Menu with Dropdowns */}
        <div className="hidden lg:block border-t border-teal-100">
          <div className="flex justify-center items-center space-x-6 py-3">
            {mainNavItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="#"
                  className="relative text-teal-700 hover:text-teal-900 font-medium transition-all duration-300 py-2 text-sm flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                  )}
                </a>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-teal-100 py-2 transition-all duration-300 ${activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                    {item.items.map((dropdownItem, idx) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-teal-700 hover:text-teal-900 hover:bg-teal-50 transition-colors duration-200"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}>
          {/* Mobile Search */}
          <div className="mt-3 mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search medicines..."
                className="w-full pl-4 pr-10 py-2 border border-teal-200 rounded-full focus:border-teal-500 focus:outline-none transition-colors duration-300 bg-teal-50/30 text-sm"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Search className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="block px-4 py-2 text-teal-700 hover:text-teal-900 hover:bg-teal-50 rounded-lg transition-all duration-300 font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Action Buttons - Fixed Grid Layout */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {actionButtons.map((button) => {
              const IconComponent = button.icon;
              return (
                <button
                  key={button.text}
                  className="flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 text-xs font-medium"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{button.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RasayanNavbar;