'use client';

import { Phone, Leaf, Package, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-800 via-emerald-800 to-green-900 text-white py-10 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,_theme(colors.green.400)_0%,_transparent_60%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4 group">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-2 rounded-lg mr-3 shadow-md group-hover:scale-105 transition-all duration-300">
                  <Leaf className="h-6 w-6 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                    Gaurav Ayurveda Naturals
                  </h3>
                  <p className="text-xs text-green-200">Ancient Healing • Modern Science</p>
                </div>
              </div>
              <p className="text-green-100 text-xs leading-relaxed">
                5000+ Years of Ancient Wisdom Since Vedic Times.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 text-green-300 text-base">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Our Products', 'Research', 'Quality Assurance'].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-green-100 hover:text-white transition-colors duration-300 text-xs flex items-center group"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full mr-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3 text-green-300 text-base">Services</h4>
              <ul className="space-y-2">
                {['Online Consultation', 'Find Store', 'Free Delivery', 'Shop Online'].map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-green-100 hover:text-white transition-colors duration-300 text-xs flex items-center group"
                    >
                      <span className="w-1 h-1 bg-emerald-400 rounded-full mr-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3 text-green-300 text-base">Contact</h4>
              <div className="space-y-3">
                <div className="bg-green-700/40 backdrop-blur-sm p-3 rounded-lg border border-green-600/20 hover:border-green-500/30 transition-all duration-300 group">
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500 p-1.5 rounded-md">
                      <Phone className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-semibold text-green-100 text-sm">1800-120-AYUR</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-green-100 text-xs font-medium">Gaurav Ayurveda Naturals Pvt. Ltd.</p>
                  <p className="text-green-200 text-xs opacity-80">
                    Certified by Ministry of Gaurav
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-green-700/30 mt-8 pt-6 text-center">
            <div className="bg-green-800/30 backdrop-blur-sm rounded-lg p-4 border border-green-600/20">
              <p className="text-xs text-green-100">
                &copy; 2024 Gaurav Ayurveda Naturals Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced WhatsApp Float Button */}
      <a
        href="https://wa.me/918001207673"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 group"
      >
        <div className="relative">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-3 rounded-full shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105">
            <MessageCircle className="w-5 h-5 transition-transform duration-300" />
          </div>
          {/* Subtle pulse ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 scale-110 animate-ping-slow"></div>
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </a>

      {/* Enhanced Action Buttons */}
      <div className="fixed bottom-4 left-4 space-y-2 z-50">
        <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-green-500/20 transition-all duration-300 text-xs font-medium transform hover:scale-105 border border-green-500/20 backdrop-blur-sm">
          Read Health Articles
        </button>
        
        <button className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-green-600/20 transition-all duration-300 text-xs flex items-center space-x-2 font-medium transform hover:scale-105 border border-green-600/20 backdrop-blur-sm">
          <Package className="h-3 w-3" />
          <span>Track Order</span>
        </button>
      </div>

      {/* Custom CSS for slower ping animation */}
      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}