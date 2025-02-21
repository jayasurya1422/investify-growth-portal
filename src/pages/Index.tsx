
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import WhyInvest from "../components/WhyInvest";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Sidebar />
      <div className="pl-16 md:pl-64"> {/* Add padding to accommodate sidebar */}
        <Hero />
        <Dashboard />
        <WhyInvest />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
