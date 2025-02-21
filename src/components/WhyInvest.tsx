
import { motion } from "framer-motion";
import { DollarSign, Robot, Shield, ChartLine, PercentIcon } from "lucide-react";

const features = [
  {
    icon: ChartLine,
    title: "Accessibility",
    description: "Invest anytime, anywhere via digital platforms",
  },
  {
    icon: DollarSign,
    title: "Lower Costs",
    description: "Fewer middlemen, reduced fees",
  },
  {
    icon: Robot,
    title: "Automation & AI",
    description: "Smart AI-powered investment optimization",
  },
  {
    icon: Shield,
    title: "Security & Transparency",
    description: "Blockchain-backed, encrypted transactions",
  },
  {
    icon: PercentIcon,
    title: "Fractional Investing",
    description: "Own a part of expensive assets",
  },
];

const WhyInvest = () => {
  return (
    <section id="why-invest" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Use Digital Investments?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the future of investing with our cutting-edge digital platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
