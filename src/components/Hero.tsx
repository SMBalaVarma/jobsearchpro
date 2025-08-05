
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Search, MapPin, Briefcase } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.webp";

const Hero = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSearch = () => {
    // Handle job search logic
    console.log("Searching for:", searchKeyword, "in", location);
  };
  
  return (
    <section 
      className="relative bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen flex items-center" 
      id="hero"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Join us & Explore{" "}
                <span className="text-blue-600">Thousands of Jobs</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Find your dream career! Explore the latest job opportunities from top companies around the world.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 mb-4">Popular: Designer, Programming, Digital Marketing, Video, Animation</p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:block">
            <img 
              src={heroIllustration} 
              alt="Job search illustration" 
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
