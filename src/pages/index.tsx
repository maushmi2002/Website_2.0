import { Poppins } from "next/font/google";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import TransformationNarrative from "../components/home/TransformationNarrative";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  // You can specify the weights you want to load
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <Layout>
      <div className={`${poppins.variable} font-sans`}>
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