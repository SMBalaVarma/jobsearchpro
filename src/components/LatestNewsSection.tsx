import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

const LatestNewsSection = () => {
  const news = [
    {
      id: 1,
      title: "The secret to moving this ancient sphinx screening",
      date: "28 Jun, 2021",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      category: "Technology"
    },
    {
      id: 2,
      title: "How to succeed by doing the things you hate",
      date: "25 Jun, 2021", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      category: "Career"
    },
    {
      id: 3,
      title: "Why everyone is talking about tryptamines",
      date: "22 Jun, 2021",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
      category: "Science"
    },
    {
      id: 4,
      title: "New ideas for a low cost marketing campaign",
      date: "20 Jun, 2021",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Marketing"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Latest News
              </h2>
              <p className="text-lg text-gray-600">
                Get the latest news, updates and tips
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;