import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Bookmark } from "lucide-react";
import featuredJobsIllustration from "@/assets/featured-jobs.webp";
import techCorpLogo from "@/assets/logos/techcorp-logo.webp";
import innovateCoLogo from "@/assets/logos/innovateco-logo.webp";
import designStudioLogo from "@/assets/logos/designstudio-logo.webp";
import dataFlowLogo from "@/assets/logos/dataflow-logo.webp";
import growthLabsLogo from "@/assets/logos/growthlabs-logo.webp";
import cloudTechLogo from "@/assets/logos/cloudtech-logo.webp";

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      logo: techCorpLogo,
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
      logo: innovateCoLogo,
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
      logo: designStudioLogo,
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
      logo: dataFlowLogo,
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
      logo: growthLabsLogo,
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
      logo: cloudTechLogo,
      description: "Manage cloud infrastructure and CI/CD pipelines. Experience with Kubernetes, Docker, and cloud platforms required.",
      tags: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      posted: "1 day ago",
      featured: true
    }
  ];

  const featuredJobs = jobs.filter(job => job.featured);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100" id="featured-jobs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Featured Jobs
            </h2>
            <p className="text-lg text-gray-600">
              Know your worth and find the job that qualify your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJobs.slice(0, 8).map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={job.logo} 
                      alt={`${job.company} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.company}</p>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1 mb-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {job.type}
                    </div>
                  </div>

                  <div className="text-blue-600 font-semibold text-sm mb-4">
                    {job.salary}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {job.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={`/job/${job.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center block"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;