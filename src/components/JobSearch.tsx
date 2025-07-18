import React, { useState } from "react";
import { Search, MapPin, Filter, Briefcase, Clock, DollarSign } from "lucide-react";

const JobSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("all");
  const [salaryRange, setSalaryRange] = useState("all");

  const jobTypes = [
    { value: "all", label: "All Types" },
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "contract", label: "Contract" },
    { value: "remote", label: "Remote" },
  ];

  const salaryRanges = [
    { value: "all", label: "All Salaries" },
    { value: "30k-50k", label: "$30k - $50k" },
    { value: "50k-75k", label: "$50k - $75k" },
    { value: "75k-100k", label: "$75k - $100k" },
    { value: "100k+", label: "$100k+" },
  ];

  const handleSearch = () => {
    console.log("Searching for:", searchKeyword, "in", location, "type:", jobType, "salary:", salaryRange);
  };

  return (
    <section className="py-12 sm:py-16 bg-white" id="job-search">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Advanced Job Search
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use our advanced filters to find the perfect job opportunities that match your preferences.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-elegant">
            {/* Main Search Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              
              <button
                onClick={handleSearch}
                className="bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" />
                Search Jobs
              </button>
            </div>

            {/* Filter Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none"
                >
                  {jobTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={salaryRange}
                  onChange={(e) => setSalaryRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none"
                >
                  {salaryRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Popular Job Categories */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-2xl font-display font-bold mb-8 text-center">
              Popular Job Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Technology", count: "2,847", icon: "💻" },
                { name: "Healthcare", count: "1,923", icon: "🏥" },
                { name: "Finance", count: "1,456", icon: "💰" },
                { name: "Marketing", count: "1,234", icon: "📊" },
                { name: "Sales", count: "1,098", icon: "🛍️" },
                { name: "Education", count: "876", icon: "📚" },
              ].map((category) => (
                <div
                  key={category.name}
                  className="bg-white rounded-lg p-4 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 cursor-pointer hover:translate-y-[-2px] text-center"
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-1">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.count} jobs</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearch;