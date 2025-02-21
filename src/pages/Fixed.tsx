
import React from 'react';
import { Card } from "@/components/ui/card";
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import FDCalculator from '../components/FDCalculator';
import BankComparison from '../components/BankComparison';
import EducationalContent from '../components/EducationalContent';
import FAQ from '../components/Faq';

const Fixed = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      <Navigation />
      <Sidebar />
      <div className="pl-16 md:pl-64">
        <div className="container pt-20">
          <div className="grid gap-8 pb-20">
            {/* Calculator and Comparison Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <FDCalculator />
              <BankComparison />
            </div>
            
            {/* Educational Content and FAQs */}
            <div className="grid md:grid-cols-2 gap-8">
              <EducationalContent />
              <FAQ />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixed;
