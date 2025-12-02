"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  FaArrowLeft,
  FaBriefcase,
  FaMapPin,
  FaSearchengin,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { FiChevronDown, FiSearch } from "react-icons/fi";

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

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "DSeT Consulting",
    location: "Banglore",
    type: "Full-time",
    category: "Technology",
    salary: "₹12L - ₹16L",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Business Analyst",
    company: "DSeT Consulting",
    location: "Bhubneswar",
    type: "Full-time",
    category: "Business",
    salary: "₹9L - ₹12L",
    posted: "5 days ago",
  },
   {
    id: 7,
    title: "Software Developer Intern",
    company: "DSeT Consulting",
    location: "Banglore",
    type: "Internship",
    category: "Technology",
    salary: "₹15k - ₹25k",
    posted: "1 day ago",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DSeT Consulting",
    location: "Bhubneswar",
    type: "Full-time",
    category: "Design",
    salary: "₹8L - ₹11L",
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DSeT Consulting",
    location: "Banglore",
    type: "Full-time",
    category: "Technology",
    salary: "₹13L - ₹17L",
    posted: "3 days ago",
  },
  {
    id: 5,
    title: "Project Manager",
    company: "DSeT Consulting",
    location: "Banglore",
    type: "Full-time",
    category: "Management",
    salary: "₹10L - ₹14L",
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "DSeT Consulting",
    location: "Bhubneswar",
    type: "Part-time",
    category: "Marketing",
    salary: "₹6L - ₹8L",
    posted: "4 days ago",
  },
];

const JobsPage = () => {
 const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("Location");
    const [selectedType, setSelectedType] = useState("WorkType");
    const [selectedCategory, setSelectedCategory] = useState("JobCategory");

    const [openDropdown, setOpenDropdown] = useState<
        null | "location" | "type" | "category"
    >(null);

    // ✅ Only 2 locations + All + None
    const locations = ["None", "All Locations", "Banglore", "Bhubneswar"];
    const types = ["None", "Full-time", "Part-time", "Contract", "Internship"];
    const categories = [
        "None",
        "Technology",
        "Business",
        "Design",
        "Management",
        "Marketing",
    ];

    // Close dropdown helper
    const closeDropdown = () => setOpenDropdown(null);

    // Toggle dropdown and close others
    const toggleDropdown = (dropdown: "location" | "type" | "category") => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    // Handle job card click → auto-select category
    const handleJobClick = (category: string) => {
        setSelectedCategory(category);
        closeDropdown();
    };

    // ✅ Filter logic (unchanged structure, fully working)
const filteredJobs = jobs.filter((job) => {
    const matchesTitle = job.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
        selectedLocation === "Location" ||
        selectedLocation === "All Locations" ||
        selectedLocation === "None"
            ? true
            : job.location === selectedLocation;

    const matchesType =
        selectedType === "WorkType" || selectedType === "None"
            ? true
            : job.type === selectedType || job.type === "Internship";

    const matchesCategory =
        selectedCategory === "JobCategory" || selectedCategory === "None"
            ? true
            : job.category === selectedCategory;

    return matchesTitle && matchesLocation && matchesType && matchesCategory;
});


  return (
    <div className="min-h-screen bg-[#F4F5F9]">
            {/* Header Section */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
                    <div>
                        <h1 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-1 text-[#0E0E2E]">
                            Find Your Dream Job
                        </h1>
                        <p className="font-['Inter'] text-gray-600">
                            Explore {jobs.length} open positions at DSeT Consulting
                        </p>
                    </div>

                    <Link href="/career">
                        <FaArrowLeft className="w-7 h-7 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform" />
                    </Link>
                </div>
            </div>

            {/* Filter Section */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        {/* Search Bar */}
                        <div className="relative md:col-span-1">
                            <FiSearch
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-black text-black transition-all duration-200 focus:scale-[1.02]"
                            />
                        </div>

                        {/* Reusable Dropdown Component */}
                        {[
                            { key: "location" as const, label: selectedLocation, options: locations, setter: setSelectedLocation },
                            { key: "type" as const, label: selectedType, options: types, setter: setSelectedType },
                            { key: "category" as const, label: selectedCategory, options: categories, setter: setSelectedCategory },
                        ].map(({ key, label, options, setter }) => (
                            <div key={key} className="relative">
                                <button
                                    onClick={() => toggleDropdown(key)}
                                    className="flex justify-between items-center w-full border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02] cursor-pointer group"
                                >
                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        {label}
                                    </span>
                                    <FaChevronDown
                                        size={18}
                                        className={`transition-transform duration-300 group-hover:rotate-180 ${openDropdown === key ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {openDropdown === key && (
                                    <div className="absolute z-20 w-full bg-white border border-gray-200 mt-2 rounded-md shadow-lg animate-fadeInDown">
                                        {/* Close Button */}
                                        <div className="flex justify-end p-2 border-b">
                                            <button
                                                onClick={closeDropdown}
                                                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 hover:scale-110"
                                            >
                                                <FaTimes size={14} />
                                            </button>
                                        </div>

                                        {options.map((option) => (
                                            <div
                                                key={option}
                                                onClick={() => {
                                                    setter(option);
                                                    closeDropdown();
                                                }}
                                                className={`px-4 py-2 cursor-pointer hover:bg-cyan-100 transition-all duration-200 ${label === option
                                                    ? "bg-cyan-100 text-gray-800 scale-100"
                                                    : "text-gray-700 hover:scale-100"
                                                    }`}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
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

                <div className="space-y-6">
                    {filteredJobs.map((job) => (
                        <div
                            key={job.id}
                            onClick={() => handleJobClick(job.category)}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group/job border border-gray-100 overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div className="flex-1 min-w-0">
                                    <Link href="/career/jobs/jobDetails" onClick={(e) => e.stopPropagation()}>
                                        <h3
                                            className={`font-['Poppins'] font-bold text-xl mb-2 text-[#4E00FF]
                                     group-hover/job:text-[#3a00cc]
                                      transition-all duration-300
                                      hover:tracking-wide
                                      hover:font-extrabold
                                      inline-flex
                                      leading-tight
                                      overflow-hidden
                                      text-ellipsis
                                      whitespace-nowrap`}
                                        >
                                            {job.title}
                                        </h3>
                                    </Link>

                                    <p className="font-['Inter'] text-gray-700 mb-3 transition-colors duration-300 group-hover/job:text-gray-900 truncate">
                                        {job.company}
                                    </p>

                                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                        <div className="flex items-center gap-1 text-gray-600 font-['Inter'] transition-all duration-300 group-hover/job:text-gray-800 group-hover/job:translate-x-1">
                                            <FaMapPin size={15} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600 font-['Inter'] transition-all duration-300 group-hover/job:text-gray-800 group-hover/job:translate-x-1">
                                            <FaBriefcase size={15} />
                                            <span>{job.type}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600 font-['Inter'] transition-all duration-300 group-hover/job:text-gray-800 group-hover/job:translate-x-1">
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 items-center text-sm">
                                        <div
                                            className={`bg-gradient-to-r from-purple-50 to-cyan-50 text-[#4E00FF] px-3 py-1.5 rounded-full font-medium
                                     transition-all duration-300
                                   group-hover/job:from-purple-100 group-hover/job:to-cyan-100
                                      group-hover/job:scale-110`}
                                        >
                                            {job.category}
                                        </div>

                                        <div className="text-gray-500 transition-colors duration-300 group-hover/job:text-gray-700">
                                            {job.posted}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Link href="/career/jobs/jobDetails" onClick={(e) => e.stopPropagation()}>
                                        <Button
                                            className="bg-gradient-to-r from-[#4E00FF] to-[#7c3aed] hover:from-[#3a00cc] hover:to-[#6d28d9]
                                    text-white font-medium px-6 py-2.5 rounded-lg
                                    shadow-md hover:shadow-lg
                                    transition-all duration-300
                                    hover:scale-100 hover:-translate-y-1
                                    transform"
                                        >
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <style jsx>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeInDown {
                    animation: fadeInDown 0.3s ease-out;
                }
            `}</style>
        </div>
  );
};

export default JobsPage;
