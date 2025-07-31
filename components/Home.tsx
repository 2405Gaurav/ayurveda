'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Leaf, Heart, Star, User } from 'lucide-react';

// Mock data for demonstration
const backgroundImages = [
  "https://images.unsplash.com/photo-1544967882-63a31b3c7b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
];

const healthCategories = [
  { name: "Digestive Health", icon: "🌿", color: "from-teal-500 to-emerald-500" },
  { name: "Mental Wellness", icon: "🧘", color: "from-emerald-500 to-teal-600" },
  { name: "Joint & Mobility", icon: "💪", color: "from-teal-600 to-emerald-600" },
  { name: "Respiratory Care", icon: "🫁", color: "from-emerald-600 to-teal-700" },
  { name: "Heart Health", icon: "❤️", color: "from-teal-700 to-emerald-700" }
];

const products = [
  {
    id: "AY001",
    name: "Ashwagandha Premium Extract",
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    benefits: ["Stress Relief", "Energy", "Focus"],
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "AY002", 
    name: "Turmeric Golden Blend",
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    benefits: ["Anti-inflammatory", "Joint Health", "Immunity"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "AY003",
    name: "Triphala Detox Formula",
    price: 399,
    originalPrice: 529,
    rating: 4.7,
    benefits: ["Digestion", "Detox", "Gut Health"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "AY004",
    name: "Brahmi Mind Enhancer",
    price: 699,
    originalPrice: 899,
    rating: 4.6,
    benefits: ["Memory", "Focus", "Clarity"],
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const commonDiseases = [
  { name: "Stress & Anxiety", description: "Natural calm", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Digestive Issues", description: "Gut harmony", image: "https://images.unsplash.com/photo-1544967882-63a31b3c7b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Joint Pain", description: "Mobility support", image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Sleep Issues", description: "Restful nights", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Immunity", description: "Natural defense", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Skin Health", description: "Radiant glow", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Hair Care", description: "Healthy roots", image: "https://images.unsplash.com/photo-1544967882-63a31b3c7b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Energy & Vitality", description: "Life force", image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Weight Management", description: "Balanced metabolism", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Heart Health", description: "Cardiovascular support", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100">
      {/* Sacred Geometry Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="lotus" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M100,50 L120,80 L140,50 L160,80 L180,50 L160,20 L140,50 L120,20 L100,50 Z" 
                    fill="currentColor" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lotus)" className="text-teal-600"/>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with sacred geometry overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-2000"
            style={{ 
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              filter: 'brightness(0.3) saturate(1.2)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-emerald-900/70 to-teal-800/80"></div>
          
          {/* Sacred Geometry Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg className="w-96 h-96" viewBox="0 0 400 400">
              {/* Sri Yantra inspired pattern */}
              <g className="text-amber-300" fill="none" stroke="currentColor" strokeWidth="1">
                {[...Array(9)].map((_, i) => (
                  <polygon
                    key={i}
                    points={`200,${50 + i * 15} ${350 - i * 15},${300 + i * 10} ${50 + i * 15},${300 + i * 10}`}
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                ))}
              </g>
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400 opacity-60"/>
            </svg>
          </div>
        </div>

        {/* Floating Search Widget */}
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-2xl w-80">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center mr-3">
                <Search className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-white font-medium text-lg">Find Your Balance</h3>
            </div>
            <div className="space-y-3">
              <select className="w-full px-4 py-3 border border-white/30 rounded-2xl text-teal-800 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm">
                <option>Search by Symptoms</option>
                <option>Stress & Anxiety</option>
                <option>Digestive Issues</option>
                <option>Joint Pain</option>
                <option>Sleep Problems</option>
              </select>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter condition or herb name..."
                  className="w-full px-4 py-3 border border-white/30 rounded-2xl text-teal-800 bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm pr-16"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl text-sm font-medium hover:from-teal-700 hover:to-emerald-700 transition-all duration-200">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center mr-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-light text-amber-300 tracking-wider">RASAYAN</h1>
                <p className="text-sm text-white/80 tracking-[0.2em]">AYURVEDA</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-6xl font-light mb-6 leading-tight">
            Ancient Wisdom<br/>
            <span className="text-amber-300 font-normal">Modern Healing</span>
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Experience 5000 years of Ayurvedic tradition through scientifically crafted formulations that harmonize body, mind, and spirit
          </p>
          
          <div className="flex items-center justify-center space-x-8">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-medium hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Products
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Take Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar - Health Categories */}
          <div className="lg:col-span-3">
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-6">
                <h3 className="text-white font-medium text-lg flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Leaf className="h-4 w-4" />
                  </div>
                  Wellness Categories
                </h3>
              </div>
              <div className="p-2">
                {healthCategories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-4 rounded-2xl mb-2 transition-all duration-200 flex items-center space-x-3 group hover:bg-teal-50 hover:shadow-md"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}>
                      <span className="text-lg">{category.icon}</span>
                    </div>
                    <span className="text-teal-800 font-medium group-hover:text-teal-900">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Men's Health Card */}
            <div className="mt-8 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-8 border border-amber-200/30 shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-medium text-amber-800 mb-3">Men's Vitality</h3>
                <p className="text-amber-700/80 text-sm mb-6 leading-relaxed">
                  Ayurvedic formulations for strength, stamina, and masculine wellness
                </p>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-2xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg">
                  Explore Solutions
                </button>
              </div>
            </div>
          </div>

          {/* Center - Featured Products */}
          <div className="lg:col-span-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-teal-800 mb-4">Featured Formulations</h2>
              <p className="text-teal-600/80 text-lg">Handcrafted wellness solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-teal-800/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {product.id}
                    </div>
                    <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {product.rating}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-medium text-teal-800 mb-3 text-lg group-hover:text-teal-900">
                      {product.name}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-light text-teal-800">₹{product.price}</span>
                      <span className="text-sm text-teal-500 line-through">₹{product.originalPrice}</span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white py-3 rounded-2xl transition-all duration-200 font-medium shadow-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Women's Health */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-rose-200/30 shadow-xl h-full min-h-[600px] flex flex-col justify-between">
              <div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-rose-800 mb-2">Women's Wellness</h3>
                  <p className="text-rose-700/80 text-sm leading-relaxed">
                    Nurturing formulations for feminine health and vitality
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <h4 className="font-medium text-rose-800 mb-1">Hormonal Harmony</h4>
                    <p className="text-xs text-rose-700/80">Natural cycle support</p>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <h4 className="font-medium text-rose-800 mb-1">Reproductive Wellness</h4>
                    <p className="text-xs text-rose-700/80">Fertility & vitality</p>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <h4 className="font-medium text-rose-800 mb-1">Beauty & Radiance</h4>
                    <p className="text-xs text-rose-700/80">Inner glow enhancement</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-2xl font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
                Explore Women's Health
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Common Health Concerns */}
      <section className="relative py-20 bg-gradient-to-br from-teal-100/50 to-emerald-100/50">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-600"/>
            <circle cx="500" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-600"/>
            <circle cx="500" cy="500" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-teal-700"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-teal-800 mb-6">
              <span className="text-amber-600 font-normal">10</span> Common Concerns
            </h2>
            <p className="text-xl text-teal-600/80 max-w-3xl mx-auto">
              Natural solutions for modern life's challenges
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {commonDiseases.map((disease, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full transition-all duration-300 group-hover:from-teal-300 group-hover:to-emerald-300 group-hover:scale-110 shadow-lg"></div>
                  <div className="absolute inset-2 bg-white/80 backdrop-blur-sm rounded-full overflow-hidden">
                    <img
                      src={disease.image}
                      alt={disease.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/0 to-emerald-600/20 rounded-full group-hover:from-teal-600/10 group-hover:to-emerald-600/30 transition-all duration-300"></div>
                </div>
                <h3 className="font-medium text-teal-800 text-lg mb-2 group-hover:text-teal-900 transition-colors">
                  {disease.name}
                </h3>
                <p className="text-sm text-teal-600/80 group-hover:text-teal-700 transition-colors">
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