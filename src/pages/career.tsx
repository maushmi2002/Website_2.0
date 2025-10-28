"use client";

import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import HomePage from "@/components/Career/HomePage";
import JobsPage from "@/components/Career/JobsPage";
import WhatWeDoPage from "@/components/Career/WhatWeDoPage";

type Page = "home" | "jobs" | "what-we-do";

const Career = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // ✅ This function will handle navigation between pages
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  // ✅ Render pages with correct props
  const renderPage = () => {
    switch (currentPage) {
      case "jobs":
        return <JobsPage onNavigate={handleNavigate} />;
      case "what-we-do":
        return <WhatWeDoPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return <Layout>{renderPage()}</Layout>;
};

export default Career;
