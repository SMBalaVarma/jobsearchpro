import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Filter, MapPin, Clock, DollarSign } from "lucide-react";

const BrowseJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      posted: "2 days ago",
      description: "Join our team building next-generation software solutions..."
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLabs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $150k",
      posted: "1 day ago",
      description: "Lead product strategy and development for our flagship products..."
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $120k",
      posted: "3 days ago",
      description: "Create beautiful and intuitive user experiences..."
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataFlow",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $160k",
      posted: "1 week ago",
      description: "Analyze complex datasets to drive business insights..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Jobs</h1>
            <p className="text-gray-600 mb-6">Find your perfect career opportunity</p>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
              </div>
              <button className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Search Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Results */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-5 w-5 text-gray-500" />
                  <h3 className="font-semibold text-gray-900">Filters</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Job Type</h4>
                    <div className="space-y-2">
                      {["Full-time", "Part-time", "Contract", "Freelance"].map((type) => (
                        <label key={type} className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-pulse-500 focus:ring-pulse-500" />
                          <span className="ml-2 text-sm text-gray-600">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Experience Level</h4>
                    <div className="space-y-2">
                      {["Entry Level", "Mid Level", "Senior Level", "Executive"].map((level) => (
                        <label key={level} className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-pulse-500 focus:ring-pulse-500" />
                          <span className="ml-2 text-sm text-gray-600">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">{jobs.length} jobs found</p>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pulse-500 focus:border-transparent">
                  <option>Sort by: Most Recent</option>
                  <option>Sort by: Salary</option>
                  <option>Sort by: Relevance</option>
                </select>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                        <p className="text-pulse-600 font-medium">{job.company}</p>
                      </div>
                      <button className="bg-pulse-500 hover:bg-pulse-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Apply Now
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </div>
                      <span className="text-gray-400">• {job.posted}</span>
                    </div>
                    
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrowseJobs;