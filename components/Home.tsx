'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Leaf, Heart, Star, User } from 'lucide-react';

const backgroundImages = [
  'https://images.pexels.com/photos/16615698/pexels-photo-16615698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', // Ayurvedic herbs and spices
  'https://images.pexels.com/photos/16166725/pexels-photo-16166725.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', // Traditional Ayurvedic bowls and oil
  'https://images.pexels.com/photos/6740740/pexels-photo-6740740.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',   // Ayurvedic massage items
  'https://images.pexels.com/photos/16615819/pexels-photo-16615819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', // Ayurvedic medicine preparation
];

const womenHealthImages = [
  'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
  'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
  'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
];

const maleHealthImages = [
  'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
  'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
  'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
];

const healthCategories = [
  { name: 'Skin Care', icon: '🌿', color: 'from-green-400 to-emerald-500' },
  { name: 'Children', icon: '👶', color: 'from-emerald-400 to-teal-500' },
  { name: 'Male Health', icon: '👨', color: 'from-teal-400 to-cyan-500' },
  { name: 'Female Health', icon: '👩', color: 'from-green-500 to-emerald-600' },
  { name: 'Lifestyle', icon: '🧘‍♂️', color: 'from-emerald-500 to-green-600' },
  { name: 'Joint Care', icon: '🦴', color: 'from-teal-500 to-green-600' },
  { name: 'Mental Health', icon: '🧠', color: 'from-green-400 to-teal-500' },
  { name: 'Respiratory', icon: '🫁', color: 'from-emerald-400 to-green-500' },
  { name: 'Digestive', icon: '🌱', color: 'from-teal-400 to-emerald-500' },
  { name: 'Immunity', icon: '🛡️', color: 'from-green-500 to-teal-600' },
  { name: 'Detox', icon: '🍃', color: 'from-emerald-500 to-teal-600' },
];

const commonDiseases = [
  {
    name: 'Back Pain',
    image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Natural relief for chronic back pain'
  },
  {
    name: 'Hypertension',
    image: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Ayurvedic blood pressure management'
  },
  {
    name: 'Digestive Issues',
    image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Herbal solutions for digestion'
  },
  {
    name: 'Stress & Anxiety',
    image: 'https://images.pexels.com/photos/3985334/pexels-photo-3985334.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Natural stress relief remedies'
  },
  {
    name: 'Hair Loss',
    image: 'https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Ayurvedic hair growth solutions'
  },
  {
    name: 'Joint Pain',
    image: 'https://images.pexels.com/photos/5207104/pexels-photo-5207104.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Natural joint pain relief'
  },
  {
    name: 'Diabetes',
    image: 'https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Herbal diabetes management'
  },
  {
    name: 'Weight Management',
    image: 'https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Natural weight loss support'
  },
  {
    name: 'Liver Health',
    image: 'https://images.pexels.com/photos/5207337/pexels-photo-5207337.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Ayurvedic liver detox'
  },
  {
    name: 'Immunity Boost',
    image: 'https://images.pexels.com/photos/6975518/pexels-photo-6975518.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    description: 'Natural immunity enhancement'
  },
];

const products = [
  {
    id: 'AV001',
    name: 'Ashwagandha Supreme',
    price: 450,
    originalPrice: 550,
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 4.8,
    benefits: ['Stress Relief', 'Energy Boost']
  },
  {
    id: 'AV002',
    name: 'Turmeric Gold Capsules',
    price: 380,
    originalPrice: 450,
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 4.9,
    benefits: ['Anti-inflammatory', 'Joint Health']
  },
  {
    id: 'AV003',
    name: 'Triphala Detox',
    price: 320,
    originalPrice: 400,
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 4.7,
    benefits: ['Digestive Health', 'Detox']
  },
  {
    id: 'AV004',
    name: 'Brahmi Mind Tonic',
    price: 420,
    originalPrice: 500,
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 4.6,
    benefits: ['Memory', 'Focus']
  },
  {
    id: 'AV005',
    name: 'Neem Skin Care',
    price: 280,
    originalPrice: 350,
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 4.8,
    benefits: ['Skin Health', 'Purification']
  },
  {
    id: 'AV006',
    name: 'Arjuna Heart Care',
    price: 520,
    originalPrice: 600,
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 4.9,
    benefits: ['Heart Health', 'Circulation']
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [womenImageIndex, setWomenImageIndex] = useState(0);
  const [maleImageIndex, setMaleImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWomenImageIndex((prevIndex) => 
        prevIndex === womenHealthImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMaleImageIndex((prevIndex) => 
        prevIndex === maleHealthImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-emerald-900/30"></div>
        </div>
        
        {/* Search Widget - Top Right Corner */}
        <div className="absolute top-6 right-6 z-20">
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-green-100 w-80">
            <h3 className="text-green-800 font-bold text-lg mb-4 flex items-center justify-center">
              <Search className="h-5 w-5 mr-2" />
              Find Your Natural Solution
            </h3>
            <div className="space-y-3">
              <select className="w-full px-3 py-2 border-2 border-green-200 rounded-lg text-green-700 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm">
                <option>Search by Symptoms</option>
                <option>Stress & Anxiety</option>
                <option>Digestive Issues</option>
                <option>Joint Pain</option>
                <option>Sleep Problems</option>
              </select>
              <select className="w-full px-3 py-2 border-2 border-green-200 rounded-lg text-green-700 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm">
                <option>Search by Product</option>
                <option>Ashwagandha</option>
                <option>Turmeric</option>
                <option>Triphala</option>
                <option>Brahmi</option>
              </select>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter medicine name or condition..."
                  className="w-full px-3 py-2 border-2 border-green-200 rounded-lg text-green-700 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-20"
                />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md text-sm font-medium transition-colors duration-200">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Nature's Wisdom in <span className="text-green-400">Every Drop</span>
            </h1>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Experience the power of 5000-year-old Ayurvedic healing with modern scientific precision
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Health Categories */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white p-6 rounded-t-2xl shadow-lg">
                <h3 className="font-bold text-xl flex items-center">
                  <Leaf className="h-6 w-6 mr-2" />
                  Health Categories
                </h3>
              </div>
              <div className="bg-white shadow-lg rounded-b-2xl overflow-hidden border-x-2 border-b-2 border-green-100">
                {healthCategories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-6 py-4 border-b border-green-100 transition-colors duration-200 flex items-center space-x-3 group hover:bg-green-50"
                  >
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white font-bold`}>
                      <span className="text-lg">{category.icon}</span>
                    </div>
                    <span className="text-green-800 font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Male Health Section */}
            <div className="relative rounded-2xl shadow-xl overflow-hidden h-80">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{ 
                  backgroundImage: `url(${maleHealthImages[maleImageIndex]})`,
                  filter: 'brightness(0.75)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 via-amber-600/40 to-orange-600/50"></div>
              
              {/* Ayurvedic pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3">
                    {/* Ayurvedic leaf/lotus icon */}
                    <svg className="h-6 w-6 mr-2 text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      <circle cx="12" cy="9" r="1"/>
                    </svg>
                    <h3 className="text-xl font-bold text-yellow-100">Men's Health Solutions</h3>
                  </div>
                  <p className="text-sm text-amber-50/95 leading-relaxed">
                    Comprehensive Ayurvedic treatments for men's vitality, strength, and overall wellness through natural herbs and ancient wisdom.
                  </p>
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-500/30 to-orange-500/30 backdrop-blur-sm text-yellow-50 font-bold py-3 px-4 rounded-xl border border-yellow-300/40 transition-all duration-200 hover:from-yellow-400/40 hover:to-orange-400/40 hover:border-yellow-200/60 hover:shadow-lg">
                  Explore Men's Health
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-6">
            {/* Featured Products Section */}
            <div className="py-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
                  <p className="text-gray-600">Discover our premium Ayurvedic formulations</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-emerald-300 overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {product.id}
                        </div>
                        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          ★ {product.rating}
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-lg font-semibold text-gray-900">₹{product.price}</span>
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                        </div>

                        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Women's Health */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl shadow-xl overflow-hidden h-full min-h-[800px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                style={{ 
                  backgroundImage: `url(${womenHealthImages[womenImageIndex]})`,
                  filter: 'brightness(0.75)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/50 via-rose-600/40 to-purple-600/50"></div>
              <div className="relative z-10 p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 mr-3" />
                    <h3 className="text-2xl font-bold">Women&apos;s</h3>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Wellness Journey</h3>
                  <p className="text-sm mb-6 text-white/90 leading-relaxed">
                    Specialized Ayurvedic solutions designed for women's unique health needs, from hormonal balance to reproductive wellness.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <h4 className="font-semibold mb-1">Hormonal Balance</h4>
                      <p className="text-xs text-white/80">Natural herbs for menstrual health</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <h4 className="font-semibold mb-1">Reproductive Wellness</h4>
                      <p className="text-xs text-white/80">Traditional fertility support</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-xl border border-white/30 transition-colors duration-200 hover:bg-white/30">
                  Explore Women's Health
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Diseases Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-800 mb-6">
              <span className="text-emerald-600">10</span> Common Health Concerns
            </h2>
            <p className="text-xl text-green-600 max-w-3xl mx-auto">
              Natural Ayurvedic solutions for the most common health challenges of modern life
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {commonDiseases.map((disease, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative mx-auto w-36 h-36 mb-6">
                  <div className="absolute inset-0 border-4 border-green-400 rounded-full transition-colors duration-200 group-hover:border-emerald-500"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full transition-colors duration-200 group-hover:from-green-200 group-hover:to-emerald-200"></div>
                  <img
                    src={disease.image}
                    alt={disease.name}
                    className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-green-800 transition-colors text-lg mb-2 group-hover:text-emerald-600">
                  {disease.name}
                </h3>
                <p className="text-sm text-green-600 transition-colors group-hover:text-green-700">
                  {disease.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}