
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Search, MapPin, Briefcase } from "lucide-react";

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
      className="overflow-hidden relative hero-gradient" 
      id="hero" 
      style={{
        padding: isMobile ? '120px 16px 60px' : '140px 24px 80px'
      }}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
      <div className="absolute -top-[20%] -right-[10%] w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-96 h-96 bg-white/5 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 sm:mb-8 opacity-0 animate-fade-in text-white" 
            style={{ animationDelay: "0.1s" }}
          >
            Find Your <span className="text-gradient bg-white">Dream Job</span> Today
          </h1>
          
          <p 
            style={{ animationDelay: "0.3s" }} 
            className="text-xl sm:text-2xl text-white/90 mb-12 sm:mb-16 max-w-3xl mx-auto opacity-0 animate-fade-in leading-relaxed"
          >
            Connect with top employers and discover opportunities that match your skills and ambitions.
          </p>

          {/* Job Search Bar */}
          <div 
            className="max-w-5xl mx-auto glass-card p-6 sm:p-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="search-input pl-14"
                />
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <MapPin className="h-6 w-6 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="search-input pl-14"
                />
              </div>
              
              <button
                onClick={handleSearch}
                className="button-primary flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <Search className="h-5 w-5" />
                Search Jobs
              </button>
            </div>
          </div>

          {/* Popular Categories */}
          <div 
            className="mt-12 sm:mt-16 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-white/80 mb-6 text-lg">Popular Categories:</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {["Technology", "Healthcare", "Finance", "Marketing", "Sales", "Remote"].map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-white font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
