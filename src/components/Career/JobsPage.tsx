"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  DollarSign,
  Briefcase,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import Button from "../ui/Button";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  salary: string;
  posted: string;
}

interface JobsPageProps {
  onNavigate: (page: string) => void;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "DSeT Consulting",
    location: "New York, NY",
    type: "Full-time",
    category: "Technology",
    salary: "$120k - $160k",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Business Analyst",
    company: "DSeT Consulting",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Business",
    salary: "$90k - $120k",
    posted: "5 days ago",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DSeT Consulting",
    location: "Remote",
    type: "Full-time",
    category: "Design",
    salary: "$80k - $110k",
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DSeT Consulting",
    location: "Boston, MA",
    type: "Full-time",
    category: "Technology",
    salary: "$130k - $170k",
    posted: "3 days ago",
  },
  {
    id: 5,
    title: "Project Manager",
    company: "DSeT Consulting",
    location: "Chicago, IL",
    type: "Full-time",
    category: "Management",
    salary: "$100k - $140k",
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "DSeT Consulting",
    location: "Remote",
    type: "Part-time",
    category: "Marketing",
    salary: "$60k - $80k",
    posted: "4 days ago",
  },
];

const JobsPage: React.FC<JobsPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("None");
  const [selectedType, setSelectedType] = useState("None");
  const [selectedCategory, setSelectedCategory] = useState("None");

  const [openDropdown, setOpenDropdown] = useState<
    null | "location" | "type" | "category"
  >(null);

  // ✅ Added "None" option
  const locations = [
    "None",
    "All Locations",
    "New York, NY",
    "San Francisco, CA",
    "Boston, MA",
    "Chicago, IL",
    "Remote",
  ];
  const types = ["None", "Full-time", "Part-time", "Contract"];
  const categories = [
    "None",
    "Technology",
    "Business",
    "Design",
    "Management",
    "Marketing",
  ];

  // Filter logic
  const filteredJobs = jobs.filter((job) => {
    const matchesTitle = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      selectedLocation === "All Locations" || selectedLocation === "None"
        ? true
        : job.location === selectedLocation;
    const matchesType =
      selectedType === "All" || selectedType === "None"
        ? true
        : job.type === selectedType;
    const matchesCategory =
      selectedCategory === "All" || selectedCategory === "None"
        ? true
        : job.category === selectedCategory;

    return matchesTitle && matchesLocation && matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F4F5F9]">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          {/* Left side - Title and Description */}
          <div>
            <h1 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-1 text-[#0E0E2E]">
              Find Your Dream Job
            </h1>
            <p className="font-['Inter'] text-gray-600">
              Explore {jobs.length} open positions at DSeT Consulting
            </p>
          </div>

          {/* Right side - Back Button */}
          <ArrowLeft
            className="w-7 h-7 cursor-pointer text-gray-700 hover:text-blue-600"
            onClick={() => onNavigate("home")}
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Search Bar */}
            <div className="relative md:col-span-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "location" ? null : "location"
                  )
                }
                className="flex justify-between items-center w-full border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 hover:bg-gray-50"
              >
                {selectedLocation}
                <ChevronDown size={18} />
              </button>
              {openDropdown === "location" && (
                <div className="absolute z-10 w-full bg-white border border-gray-200 mt-2 rounded-md shadow-lg">
                  {locations.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setOpenDropdown(null);
                      }}
                      className={`px-4 py-2 cursor-pointer hover:bg-cyan-100 ${
                        selectedLocation === loc
                          ? "bg-cyan-100 text-gray-800"
                          : "text-gray-700"
                      }`}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Type Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "type" ? null : "type")
                }
                className="flex justify-between items-center w-full border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 hover:bg-gray-50"
              >
                {selectedType}
                <ChevronDown size={18} />
              </button>
              {openDropdown === "type" && (
                <div className="absolute z-10 w-full bg-white border border-gray-200 mt-2 rounded-md shadow-lg">
                  {types.map((type) => (
                    <div
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setOpenDropdown(null);
                      }}
                      className={`px-4 py-2 cursor-pointer hover:bg-cyan-100 ${
                        selectedType === type
                          ? "bg-cyan-100 text-gray-800"
                          : "text-gray-700"
                      }`}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "category" ? null : "category"
                  )
                }
                className="flex justify-between items-center w-full border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 hover:bg-gray-50"
              >
                {selectedCategory}
                <ChevronDown size={18} />
              </button>
              {openDropdown === "category" && (
                <div className="absolute z-10 w-full bg-white border border-gray-200 mt-2 rounded-md shadow-lg">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setOpenDropdown(null);
                      }}
                      className={`px-4 py-2 cursor-pointer hover:bg-cyan-100 ${
                        selectedCategory === cat
                          ? "bg-cyan-100 text-gray-800"
                          : "text-gray-700"
                      }`}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Jobs List Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="font-['Inter'] text-gray-600">
            Showing {filteredJobs.length}{" "}
            {filteredJobs.length === 1 ? "job" : "jobs"}
          </p>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-['Poppins'] font-semibold text-xl mb-2 text-[#4E00FF]">
                    {job.title}
                  </h3>
                  <p className="font-['Inter'] text-gray-700 mb-3">
                    {job.company}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="flex items-center gap-1 text-gray-600 font-['Inter'] text-sm">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 font-['Inter'] text-sm">
                      <Briefcase size={16} />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 font-['Inter'] text-sm">
                      <DollarSign size={16} />
                      {job.salary}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="bg-[#F4F5F9] text-[#0E0E2E] hover:bg-[#F4F5F9]/80 px-3 py-1 rounded-md text-sm">
                      {job.category}
                    </div>
                    <div className="text-gray-600 text-sm">{job.posted}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button className="bg-[#4E00FF] hover:bg-[#4E00FF]/90 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
