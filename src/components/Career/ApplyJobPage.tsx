"use client";

import React, { useState } from "react";
import { ArrowLeft, CheckCircle, Upload } from "lucide-react";
import Link from "next/link";

function ApplyJobPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessDialog(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccessDialog(false);
    window.location.href = "/"; // back to home page
  };

  return (
    <div className="min-h-screen bg-[#F4F5F9] font-['Inter']">
      {/* Back Button */}
    <div className="bg-white border-b">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="flex items-center justify-end">
      <Link href="/career/jobs">
        <ArrowLeft
          className="w-7 h-7 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
        />
      </Link>
    </div>
  </div>
</div>

      {/* Page Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-2 text-[#0E0E2E]">
            Apply for Position
          </h1>
          <p className="text-black-600 text-black">
            Fill out the form below to submit your application.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-8 shadow-md"
          >
            {/* Personal Info */}
            <div className="mb-8">
              <h2 className="font-['Poppins'] font-semibold text-2xl mb-6 text-[#0E0E2E]">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="  text-black  placeholder-gray-400 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4E00FF]"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-black">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="  placeholder-gray-400 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4E00FF] text-black"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="  placeholder-gray-400  text-black w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4E00FF]"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-black">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="  text-black  placeholder-gray-400 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4E00FF]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-2 text-black">
                  LinkedIn Profile (Optional)
                </label>
                <input
                  name="linkedIn"
                  type="url"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  className="  placeholder-gray-400  text-black w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4E00FF]"
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
            </div>

            {/* Application Details */}
            <div className="mb-8">
              <h2 className="font-['Poppins'] font-semibold text-2xl mb-6 text-[#0E0E2E]">
                Application Details
              </h2>

              {/* Resume Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-black">
                  Resume/CV *
                </label>
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#4E00FF] transition-colors bg-white text-center"
                >
                  <div>
                    <Upload className="mx-auto mb-2 text-[#4E00FF]" size={32} />
                    <p className="text-sm text-gray-600 mb-1">
                      {formData.resume
                        ? formData.resume.name
                        : "Click to upload your resume"}
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, or DOCX (Max 5MB)
                    </p>
                  </div>
                  <input
                    id="resume"
                    type="file"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                </label>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Cover Letter *
                </label>
                <textarea
                  name="coverLetter"
                  required
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="  text-black placeholder-gray-400 w-full border border-gray-300 rounded-lg p-3 min-h-[180px] focus:outline-none focus:ring-2 focus:ring-[#4E00FF]"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6 border-t">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#4E00FF] hover:bg-[#4E00FF]/90 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-transform duration-200 hover:scale-105"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#0E0E2E] text-center rounded-xl p-8 max-w-sm w-full border border-[#4E00FF] shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#00F1FF] rounded-full flex items-center justify-center">
                <CheckCircle size={40} className="text-[#0E0E2E]" />
              </div>
            </div>
            <h2 className="font-['Poppins'] font-bold text-2xl text-[#4E00FF]">
              Application Submitted!
            </h2>
            <p className="text-white mt-4">
              Thank you for applying! We’ve received your application and will
              review it carefully. You’ll hear from us within 5–7 business days.
            </p>
            <button
              onClick={handleCloseSuccess}
              className="mt-6 bg-[#4E00FF] hover:bg-[#4E00FF]/90 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyJobPage;
