import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Building,
  Calendar,
  CalendarX,
  Briefcase,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  Globe
} from "lucide-react";

const JobDetail = () => {
  const { jobId } = useParams();

  // Sample job data - in a real app, this would come from an API
  const job = {
    id: jobId,
    title: "Product Designer / UI Designer",
    company: "InVision",
    location: "London, UK",
    type: "Full Time",
    salary: "$35k - $45k",
    posted: "11 hours ago",
    logo: "in",
    logoColor: "bg-red-600",
    featured: true,
    urgent: true,
    private: true,
    description: "InVision is looking for a Product Designer to join our fast-growing, ambitious, product and data-driven team. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to propel your career into the FinTech or Big Data arena.",
    responsibilities: [
      "Create wireframes, storyboards, user flows, process flows and site maps to effectively communicate interaction and design ideas",
      "Present and defend designs and key milestone deliverables to peers and executive level stakeholders",
      "Conduct user research and evaluate user feedback",
      "Establish and promote design guidelines, best practices and standards"
    ],
    skills: [
      "2+ years of experience in product design",
      "Proficiency in Figma, Sketch, Adobe Creative Suite",
      "Strong understanding of user-centered design principles",
      "Experience with responsive and mobile design",
      "Knowledge of HTML/CSS is a plus"
    ],
    tags: ["administrative", "android", "wordpress", "design", "react"],
    expirationDate: "April 06, 2021",
    hours: "50h / week",
    rate: "$15 - $25 / hour",
    companySize: "501-1,000",
    founded: "2011",
    industry: "Software",
    phone: "123 456 7890",
    email: "info@invision.com",
    website: "www.invisionapp.com"
  };

  const relatedJobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer, Creator Success",
      company: "MedHub",
      location: "New York, NY",
      type: "Full Time",
      salary: "$80,000 - $120,000",
      posted: "2 days ago",
      logo: "M",
      logoColor: "bg-gray-900"
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Figma",
      location: "Remote",
      type: "Contract",
      salary: "$70,000 - $100,000",
      posted: "1 day ago",
      logo: "F",
      logoColor: "bg-orange-500"
    },
    {
      id: 3,
      title: "Sr. Full Stack Engineer",
      company: "Invision",
      location: "San Francisco, CA",
      type: "Full Time",
      salary: "$90,000 - $130,000",
      posted: "3 days ago",
      logo: "W",
      logoColor: "bg-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-6 py-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-red-600">Home</Link> › 
            <Link to="/browse-jobs" className="hover:text-red-600 ml-1">Find Jobs</Link> › 
            <span className="text-gray-900 ml-1">{job.title}</span>
          </nav>
        </div>
      </div>

      {/* Job Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Job Info */}
            <div className="flex-1">
              <div className="flex items-start gap-6">
                {/* Company Logo */}
                <div className={`w-20 h-20 ${job.logoColor} rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0`}>
                  {job.logo}
                </div>

                {/* Job Details */}
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <Link to="#" className="hover:text-red-600">{job.company}</Link>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-red-600 text-white hover:bg-red-700">Full Time</Badge>
                    <Badge className="bg-orange-500 text-white hover:bg-orange-600">Private</Badge>
                    <Badge variant="secondary" className="bg-orange-50 text-orange-800 hover:bg-orange-100">Urgent</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Apply Button */}
            <div className="lg:w-80">
              <div className="flex items-start gap-2">
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                  Apply for job
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Column - Job Details */}
          <div className="flex-1">
            {/* Job Description */}
            <div className="bg-white rounded-lg border p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-lg border p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill & Experience */}
            <div className="bg-white rounded-lg border p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skill & Experience</h3>
              <ul className="space-y-3">
                {job.skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Share this job</h3>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-9 h-9 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white w-9 h-9 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white w-9 h-9 p-0">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="xl:w-96 space-y-6">
            {/* Job Overview */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Job Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-red-600" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">Date Posted:</span>
                    <p className="text-sm text-gray-900">Posted {job.posted}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarX className="h-4 w-4 text-red-600" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">Expiration date:</span>
                    <p className="text-sm text-gray-900">{job.expirationDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">Location:</span>
                    <p className="text-sm text-gray-900">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-4 w-4 text-red-600" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">Job Title:</span>
                    <p className="text-sm text-gray-900">Designer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-red-600" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">Hours:</span>
                    <p className="text-sm text-gray-900">{job.hours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-4 w-4 text-red-600" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">Rate:</span>
                    <p className="text-sm text-gray-900">{job.rate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-4 w-4 text-red-600" />
                  <div className="flex-1">
                    <span className="text-sm text-gray-600">Salary:</span>
                    <p className="text-sm text-gray-900">{job.salary}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Location */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Job Location</h3>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map View - {job.location}</span>
              </div>
            </div>

            {/* Job Skills */}
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Job Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-orange-50 text-gray-700 hover:bg-orange-100">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Company Profile */}
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${job.logoColor} rounded-lg flex items-center justify-center text-white font-semibold`}>
                  {job.logo}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{job.company}</h3>
                  <Link to="#" className="text-sm text-red-600 hover:text-red-700">View company profile</Link>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Primary Industry:</span>
                  <span className="text-gray-900">{job.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Company Size:</span>
                  <span className="text-gray-900">{job.companySize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Founded:</span>
                  <span className="text-gray-900">{job.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="text-gray-900">{job.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="text-gray-900">{job.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="text-gray-900">{job.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600 w-8 h-8 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600 w-8 h-8 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600 w-8 h-8 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600 w-8 h-8 p-0">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-3">
                <a href={`https://${job.website}`} className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  {job.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Jobs */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Jobs</h2>
            <p className="text-gray-600">2020 jobs live – 293 added today</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedJobs.map((relatedJob) => (
              <Link 
                key={relatedJob.id}
                to={`/job/${relatedJob.id}`}
                className="bg-white rounded-lg border p-6 hover:shadow-lg transition-all duration-200 hover:border-red-200 group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${relatedJob.logoColor} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                    {relatedJob.logo}
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                  {relatedJob.title}
                </h3>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {relatedJob.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {relatedJob.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {relatedJob.posted}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    {relatedJob.salary}
                  </div>
                </div>

                <Badge className="bg-red-600 text-white">
                  {relatedJob.type}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;