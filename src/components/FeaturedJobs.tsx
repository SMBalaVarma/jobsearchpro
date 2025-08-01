import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Bookmark } from "lucide-react";

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      logo: "🏢",
      description: "Join our innovative team to build next-generation software solutions. We're looking for a passionate developer with 5+ years of experience.",
      tags: ["React", "TypeScript", "Node.js", "AWS"],
      posted: "2 days ago",
      featured: true
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateCo",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $150k",
      logo: "🚀",
      description: "Lead product strategy and execution for our flagship product. Experience with agile methodologies and user research required.",
      tags: ["Product Strategy", "Agile", "Analytics", "Leadership"],
      posted: "3 days ago",
      featured: true
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $120k",
      logo: "🎨",
      description: "Create beautiful and intuitive user experiences. Portfolio of mobile and web design projects required.",
      tags: ["UI/UX", "Figma", "Design Systems", "Mobile"],
      posted: "1 week ago",
      featured: false
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataFlow",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $160k",
      logo: "📊",
      description: "Analyze complex datasets to drive business insights. Strong background in Python, machine learning, and statistical analysis required.",
      tags: ["Python", "ML", "Statistics", "SQL"],
      posted: "4 days ago",
      featured: true
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "GrowthLabs",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$70k - $100k",
      logo: "📈",
      description: "Drive marketing campaigns and brand awareness. Experience with digital marketing, content creation, and analytics tools required.",
      tags: ["Digital Marketing", "Content", "Analytics", "SEO"],
      posted: "5 days ago",
      featured: false
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$130k - $170k",
      logo: "☁️",
      description: "Manage cloud infrastructure and CI/CD pipelines. Experience with Kubernetes, Docker, and cloud platforms required.",
      tags: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      posted: "1 day ago",
      featured: true
    }
  ];

  const featuredJobs = jobs.filter(job => job.featured);

  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="featured-jobs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="job-chip mx-auto mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Featured Jobs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Top Job Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover hand-picked job opportunities from leading companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-2px] overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{job.logo}</div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-pulse-500 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-pulse-600 font-semibold mb-4">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-pulse-50 text-pulse-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{job.posted}</span>
                    <Link 
                      to={`/job/${job.id}`}
                      className="bg-pulse-500 hover:bg-pulse-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-white border border-pulse-500 text-pulse-500 hover:bg-pulse-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              View All Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;