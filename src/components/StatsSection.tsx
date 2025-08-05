import React from "react";

const StatsSection = () => {
  const stats = [
    {
      number: "4M",
      label: "Active users",
      description: "Employers"
    },
    {
      number: "12k",
      label: "Open job position",
      description: "Jobs"
    },
    {
      number: "20M",
      label: "Stories shared",
      description: "Stories"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-gray-700">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;