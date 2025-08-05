import React from "react";
import { ArrowRight } from "lucide-react";

const FindMatchSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Illustration */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
                      <div className="text-6xl">🎯</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Perfect Match
                    </h3>
                    <p className="text-gray-600">
                      Find your ideal job opportunity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Find Your Match
              </h2>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Sed do eiusmod tempor incididunt</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                Learn More
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindMatchSection;