import React from "react";
import { ArrowRight } from "lucide-react";
import jobCategoriesIllustration from "@/assets/job-categories.webp";

const JobCategories = () => {
  const categories = [
    {
      title: "Technology",
      description: "Software development, IT, and engineering roles",
      jobCount: "2,847",
      icon: "💻",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Healthcare",
      description: "Medical, nursing, and healthcare administration",
      jobCount: "1,923",
      icon: "🏥",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Finance",
      description: "Banking, accounting, and financial services",
      jobCount: "1,456",
      icon: "💰",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Marketing",
      description: "Digital marketing, brand management, and advertising",
      jobCount: "1,234",
      icon: "📊",
      color: "from-pink-500 to-red-600"
    },
    {
      title: "Sales",
      description: "Inside sales, business development, and account management",
      jobCount: "1,098",
      icon: "🛍️",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Education",
      description: "Teaching, training, and educational administration",
      jobCount: "876",
      icon: "📚",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Customer Service",
      description: "Support, success, and customer experience roles",
      jobCount: "743",
      icon: "🎧",
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "Human Resources",
      description: "Recruiting, talent management, and HR operations",
      jobCount: "564",
      icon: "👥",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Operations",
      description: "Project management, logistics, and business operations",
      jobCount: "487",
      icon: "⚙️",
      color: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="job-categories">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Popular Job Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              2020 jobs live - 293 added today.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.slice(0, 6).map((category, index) => (
              <div
                key={category.title}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] cursor-pointer text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  {category.jobCount} Available position
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {categories.slice(6, 9).map((category, index) => (
              <div
                key={category.title}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] cursor-pointer text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {category.jobCount} Available position
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;