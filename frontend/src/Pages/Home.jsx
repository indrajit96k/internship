import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../Components/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Briefcase, Users, TrendingUp, Building, ArrowRight, IndianRupee } from "lucide-react";

export default function Home() {
  const featuredJobs = [
    {
      title: "Software Engineer",
      company: "Tech Mahindra",
      location: "Bangalore",
      salary: "₹8,00,000 - ₹12,00,000",
      type: "Full-time",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=face",
    },
    {
      title: "Data Analyst",
      company: "Infosys",
      location: "Pune",
      salary: "₹6,00,000 - ₹9,00,000",
      type: "Full-time",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=64&h=64&fit=crop&crop=face",
    },
    {
      title: "Product Manager",
      company: "Flipkart",
      location: "Delhi",
      salary: "₹15,00,000 - ₹25,00,000",
      type: "Full-time",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=face",
    },
  ];

  const topCompanies = [
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "HCL", logo: "https://logo.clearbit.com/hcltech.com" },
    { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
    { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
    { name: "United Nations Volunteers", logo: "https://logo.clearbit.com/unv.org" },
    { name: "VSO ", logo: "https://logo.clearbit.com/vsointernational.org" },
    { name: "The Intern Group", logo: "https://logo.clearbit.com/theinterngroup.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
    { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
    { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
    { name: "Volunteer World", logo: "https://logo.clearbit.com/volunteerworld.com" },
    { name: "Projects Abroad", logo: "https://logo.clearbit.com/projects-abroad.org" },
    { name: "AIESEC", logo: "https://logo.clearbit.com/aiesec.org" },
    { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
    { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
    { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
    { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
    { name: "World Endeavors", logo: "https://logo.clearbit.com/worldendeavors.com" },
    { name: "Frontier", logo: "https://logo.clearbit.com/bestgapyear.co.uk" },
  ];
  // Duplicate companies for seamless infinite scroll
  const marqueeCompanies = [...topCompanies, ...topCompanies];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Dream Internship and Volunteering Opportunity <span className="text-yellow-400">WorldWide</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">

             Connect with leading companies, startups, universities & NGOs around the world-remote or on‑site.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-xl shadow-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Job title or keyword"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900">
                      <option>All Locations</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                      <option>Pune</option>
                      <option>Hyderabad</option>
                      <option>Noida</option>
                    </select>
                  </div>
                  <Link to={createPageUrl("Jobs")}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                      Search Jobs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Jobs")}>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                  Browse Jobs
                </Button>
              </Link>
              <Link to={createPageUrl("Internships")}>
                <Button
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Find Internships
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-600">Active Jobs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1M+</h3>
              <p className="text-gray-600">Registered Users</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Internships</h2>
            <p className="text-xl text-gray-600">Discover opportunities from top companies across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-semibold flex items-center">
                          <IndianRupee className="w-4 h-4 mr-1" />
                          {job.salary}
                        </span>
                        <Link to={createPageUrl("Internships")}>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Internships")}>
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                View All Internships
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Companies Hiring</h2>
            <p className="text-xl text-gray-600">Join thousands of professionals at World's leading companies</p>
          </div>

          <div className="overflow-x-hidden w-full">
            <div
              className="flex animate-marquee whitespace-nowrap"
              style={{ animation: "marquee 90s linear infinite" }}
            >
              {marqueeCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/6 px-4 text-center group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-200">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 object-contain"
                      style={{ background: "#fff" }}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/64?text=Logo";
                      }}
                    />
                  </div>
                  <p className="font-medium text-gray-900">{company.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students and professionals who have found their dream jobs through CareerNest
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("StudentAuth")}>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                  Student Sign In
                </Button>
              </Link>
              <Link to={createPageUrl("RecruiterAuth")}>
                <Button variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                  Recruiter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
