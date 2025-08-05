import React from "react";
import { ArrowRight } from "lucide-react";

const ApplyDirectlySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Apply Directly
              </h2>
              <p className="text-lg text-gray-600">
                Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam 
                nec eros id magna hendrerit sagittis. Nullam sed mi non odio 
                feugiat volutpat sit amet nec elit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Nam vel lacus eu nisl bibendum</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Accumsan vitae vitae nibh</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Nam nec eros id magna hendrerit</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
                      <div className="text-6xl">📝</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Easy Application
                    </h3>
                    <p className="text-gray-600">
                      Apply directly to your dream job
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyDirectlySection;