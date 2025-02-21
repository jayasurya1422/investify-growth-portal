
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        {/* Aurora background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-teal-400/20 animate-gradient" />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
        {/* Animated aurora lines */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 transform animate-aurora"
              style={{
                background: `linear-gradient(${i * 45}deg, transparent, rgba(128, 0, 255, 0.1), transparent)`,
                animation: `aurora ${10 + i * 2}s infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect, Learn, <span className="gradient-text">Earn</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Unlock the potential of digital investments and grow your wealth effortlessly.
              Experience secure, real-time, and AI-driven investment strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-white text-primary border border-primary rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
