import { Geist, Geist_Mono } from "next/font/google";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import TransformationNarrative from "../components/home/TransformationNarrative";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Hero />
        <TransformationNarrative />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </div>
    </Layout>
  );
}
