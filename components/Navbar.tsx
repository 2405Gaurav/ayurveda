'use client';

import { useState } from 'react';
import { Search, ShoppingCart, MapPin, Truck, Package, Phone, Leaf, User, Heart, Star } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(3);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="bg-gradient-to-b from-white to-green-50/30 backdrop-blur-sm shadow-xl sticky top-0 z-50 border-b border-green-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-green-200/50">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-green-700 group cursor-pointer">
              <Leaf className="h-3 w-3 transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-medium group-hover:text-green-800 transition-colors duration-300 text-xs">
                5000+ Years of Ancient Wisdom Since Vedic Times
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-1 text-amber-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
              
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold text-green-800 tracking-wide text-sm">AyurVeda Naturals Pvt. Ltd.</span>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1 rounded-full border border-green-200 hover:from-green-200 hover:to-emerald-200 transition-all duration-300 cursor-pointer group">
              <Phone className="h-3 w-3 text-green-600 group-hover:animate-pulse" />
              <span className="font-bold text-green-800 group-hover:text-green-900 transition-colors text-xs">1800-120-AYUR</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 p-2.5 rounded-xl mr-3 shadow-lg transform transition-all duration-500 group-hover:scale-105">
              <Leaf className="h-6 w-6 text-white transition-transform duration-500 group-hover:rotate-12" />
            </div>
            <div className="transition-transform duration-300 group-hover:translate-x-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-green-800 bg-clip-text text-transparent group-hover:from-green-700 group-hover:via-emerald-700 group-hover:to-green-900 transition-all duration-300">
                AyurVeda Naturals
              </h1>
              <p className="text-xs text-green-600 font-medium tracking-wide group-hover:text-green-700 transition-colors duration-300">
                Ancient Healing • Modern Science • Trusted Wellness
              </p>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="flex-1 max-w-md mx-6">
            <div className={`relative transform transition-all duration-300 ${isSearchFocused ? 'scale-102' : ''}`}>
              <input
                type="text"
                placeholder="Search by medicine name, symptoms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="relative w-full px-4 py-2.5 border-2 border-green-300 rounded-full focus:ring-2 focus:ring-green-500/30 focus:border-green-500 bg-white/90 backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-lg text-gray-700 placeholder-gray-500 text-sm"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white rounded-full hover:from-green-700 hover:via-emerald-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-2">
            <button className="group flex items-center space-x-1.5 text-green-700 hover:text-green-800 transition-all duration-300 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2 rounded-full hover:from-green-100 hover:to-emerald-100 border border-green-200 hover:border-green-300 shadow-sm hover:shadow-md transform hover:scale-105">
              <MapPin className="h-3.5 w-3.5 group-hover:animate-bounce" />
              <span className="text-xs font-medium hidden lg:inline">Find Store</span>
            </button>
            
            <button className="group flex items-center space-x-1.5 text-green-700 hover:text-green-800 transition-all duration-300 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2 rounded-full hover:from-green-100 hover:to-emerald-100 border border-green-200 hover:border-green-300 shadow-sm hover:shadow-md transform hover:scale-105">
              <Truck className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="text-xs font-medium hidden lg:inline">Free Delivery</span>
            </button>
            
            <button className="group flex items-center space-x-1.5 text-green-700 hover:text-green-800 transition-all duration-300 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2 rounded-full hover:from-green-100 hover:to-emerald-100 border border-green-200 hover:border-green-300 shadow-sm hover:shadow-md transform hover:scale-105">
              <Package className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xs font-medium hidden lg:inline">Shop Online</span>
            </button>

            <button className="group flex items-center space-x-1.5 text-green-700 hover:text-white transition-all duration-300 font-medium bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full hover:from-green-600 hover:to-emerald-600 border border-green-300 hover:border-green-600 shadow-sm hover:shadow-md transform hover:scale-105">
              <User className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs hidden md:inline">Sign up / Login</span>
            </button>

            <button className="group relative p-2.5 text-green-700 hover:text-white transition-all duration-300 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full hover:from-green-600 hover:to-emerald-600 border border-green-200 hover:border-green-600 shadow-sm hover:shadow-md transform hover:scale-110">
              <ShoppingCart className="h-4 w-4 group-hover:animate-pulse" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-md animate-pulse border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="group p-2.5 text-green-700 hover:text-red-500 transition-all duration-300 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full hover:from-red-50 hover:to-pink-50 border border-green-200 hover:border-red-300 shadow-sm hover:shadow-md transform hover:scale-110">
              <Heart className="h-4 w-4 group-hover:fill-current group-hover:animate-pulse" />
            </button>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <nav className="border-t border-green-200/50 bg-gradient-to-r from-green-50/30 to-emerald-50/30">
          <div className="flex justify-center space-x-1 py-2.5">
            <div className="relative group">
              <button className="text-green-700 hover:text-green-800 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 transform hover:scale-105 border border-transparent hover:border-green-200 text-sm">
                About AyurVeda Naturals
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-green-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Our Heritage</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Research & Development</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Quality Assurance</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Manufacturing</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Traditional Methods</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Global Presence</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Wellness Centers</a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="text-green-700 hover:text-green-800 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 transform hover:scale-105 border border-transparent hover:border-green-200 text-sm">
                About Ayurveda
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-green-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">What is Ayurveda</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Ayurveda vs Modern Medicine</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Natural & Effective</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Principles of Healing</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Frequently Asked Questions</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-green-700 hover:text-green-800 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 transform hover:scale-105 border border-transparent hover:border-green-200 text-sm">
                Product Range
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-green-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Premium Herbal Formulations</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Ayurvedic Tablets</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Herbal Combinations</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Classical Medicines</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Herbal Extracts</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Ayurvedic Oils</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Wellness Tonics</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-green-700 hover:text-green-800 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 transform hover:scale-105 border border-transparent hover:border-green-200 text-sm">
                Online Consultation
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-green-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Free Consultation</a>
                  <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-800 transition-all duration-300 rounded-lg mx-2">Expert Consultation</a>
                </div>
              </div>
            </div>

            <button className="text-green-700 hover:text-green-800 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 transform hover:scale-105 border border-transparent hover:border-green-200 text-sm">About Us</button>
            <button className="text-green-700 hover:text-green-800 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 transform hover:scale-105 border border-transparent hover:border-green-200 text-sm">Contact Us</button>
          </div>
        </nav>
      </div>
    </header>
  );
}