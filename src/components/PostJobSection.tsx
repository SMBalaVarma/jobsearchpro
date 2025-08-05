import React from "react";
import { ArrowRight } from "lucide-react";

const PostJobSection = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Looking To Post a Job
              </h2>
              <p className="text-xl text-blue-100">
                We'll help you find the right talent
              </p>
              <p className="text-blue-100">
                Post your job in minutes and get qualified applications 
                from our network of professionals.
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                Post a Job
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-6">
                      <div className="text-6xl">💼</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Hire Top Talent
                    </h3>
                    <p className="text-blue-100">
                      Connect with qualified candidates
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

export default PostJobSection;