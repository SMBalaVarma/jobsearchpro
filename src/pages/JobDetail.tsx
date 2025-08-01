import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Globe,
  User
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
    logo: "In",
    logoColor: "bg-blue-600",
    featured: true,
    urgent: true,
    private: true,
    description: "As a Product Designer, you will work within a Product Delivery Team tasked with UI, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to propel your career into the FinTech or Big Data arenas.",
    responsibilities: [
      "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.",
      "Work with BAs, product managers and tech teams to lead the Product Design.",
      "Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.",
      "Accurately estimate design tickets during planning sessions.",
      "Contribute to developing reusable UI components/style. Design and consider UI deliverables including sketch files, style guides, high fidelity wireframes, prototypes, micro interactions and pattern libraries.",
      "Ensure design choices are data-led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.",
      "Design pixel perfect responsive UI's and understand the underlying browser behavior and limitations.",
      "Present your work to the wider business at Show & Tell sessions."
    ],
    skills: [
      "You have at least 3 years' experience working as a Product Designer.",
      "You have experience using Sketch and Invision or Figma &",
      "You have some previous experience working in an agile environment – Think two-week sprints.",
      "You are familiar using Jira and Confluence in your workflow."
    ],
    tags: ["administrative", "android", "wordpress", "design", "react"],
    expirationDate: "April 06, 2021",
    hours: "50h / week",
    rate: "$15 - $25 / hour",
    companySize: "501-1,000",
    founded: "2011",
    industry: "Software",
    phone: "+123 456 7890",
    email: "info@invision.com",
    website: "www.invisionapp.com"
  };

  const relatedJobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer, Creator Success",
      company: "MedHub",
      location: "London, UK",
      type: "Full Time",
      salary: "$50k - $70k",
      posted: "17 hours ago",
      logo: "M",
      logoColor: "bg-gray-900"
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Figma",
      location: "London, UK",
      type: "Full Time",
      salary: "$30k - $50k",
      posted: "17 hours ago",
      logo: "F",
      logoColor: "bg-orange-500"
    },
    {
      id: 3,
      title: "Sr. Full Stack Engineer",
      company: "Invision",
      location: "London, UK",
      type: "Full Time",
      salary: "$50k - $70k",
      posted: "17 hours ago",
      logo: "W",
      logoColor: "bg-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Job Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Job Info */}
            <div className="flex-1">
              <div className="flex items-start gap-6 mb-6">
                {/* Company Logo */}
                <div className={`w-16 h-16 ${job.logoColor} rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0`}>
                  {job.logo}
                </div>

                {/* Job Details */}
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-3">{job.title}</h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <Link to="#" className="hover:text-primary">{job.company}</Link>
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
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Full Time</Badge>
                    <Badge className="bg-green-500 text-white hover:bg-green-600">Private</Badge>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Urgent</Badge>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/059cbced-4a85-4f87-aa86-7a3a818a3647.png" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Apply Button */}
            <div className="lg:w-80">
              <div className="flex items-start gap-2 mb-6">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Apply for job
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Job Overview */}
              <div className="bg-card rounded-lg border p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-5">Job Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Date Posted:</span>
                      <p className="text-sm text-foreground">Posted {job.posted}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarX className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Expiration date:</span>
                      <p className="text-sm text-foreground">{job.expirationDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Location:</span>
                      <p className="text-sm text-foreground">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Job Title:</span>
                      <p className="text-sm text-foreground">Designer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Hours:</span>
                      <p className="text-sm text-foreground">{job.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Rate:</span>
                      <p className="text-sm text-foreground">{job.rate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">Salary:</span>
                      <p className="text-sm text-foreground">{job.salary}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Location */}
              <div className="bg-card rounded-lg border p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Job Location</h3>
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <span className="text-foreground font-medium">{job.location}</span>
                  </div>
                </div>
              </div>

              {/* Job Skills */}
              <div className="bg-card rounded-lg border p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Job Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Company Profile */}
              <div className="bg-card rounded-lg border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${job.logoColor} rounded-lg flex items-center justify-center text-white font-semibold`}>
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{job.company}</h3>
                    <Link to="#" className="text-sm text-primary hover:text-primary/80">View company profile</Link>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Primary Industry:</span>
                    <span className="text-foreground">{job.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company Size:</span>
                    <span className="text-foreground">{job.companySize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded:</span>
                    <span className="text-foreground">{job.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="text-foreground">{job.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="text-foreground">{job.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground">{job.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-8 h-8 p-0">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-8 h-8 p-0">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-8 h-8 p-0">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary w-8 h-8 p-0">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-3">
                  <a href={`https://${job.website}`} className="text-primary hover:text-primary/80 text-sm flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    {job.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Column - Job Details */}
          <div className="flex-1">
            {/* Job Description */}
            <div className="bg-card rounded-lg border p-6 mb-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Job Description</h2>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-card rounded-lg border p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill & Experience */}
            <div className="bg-card rounded-lg border p-6 mb-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Skill & Experience</h3>
              <ul className="space-y-3">
                {job.skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share */}
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Share this job</h3>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-4">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white px-4">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white px-4">
                  Google+
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="xl:w-96">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-bold text-foreground mb-6">Contact Us</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                  <Input placeholder="Enter your name" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea placeholder="Write your message..." rows={6} />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Related Jobs */}
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Related Jobs</h2>
            <p className="text-muted-foreground">2020 jobs live – 293 added today</p>
          </div>

          <div className="space-y-4">
            {relatedJobs.map((relatedJob) => (
              <Link 
                key={relatedJob.id}
                to={`/job/${relatedJob.id}`}
                className="block bg-card border rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:border-primary/20 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${relatedJob.logoColor} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                      {relatedJob.logo}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {relatedJob.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
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
                      
                      <div className="mt-2">
                        <Badge className="bg-primary text-primary-foreground text-xs">
                          {relatedJob.type}
                        </Badge>
                        <Badge className="bg-green-500 text-white text-xs ml-2">
                          Urgent
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
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