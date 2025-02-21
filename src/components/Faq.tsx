
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why should I invest in digital assets?",
    answer: "Digital investments provide real-time tracking, automation, security, and low costs, making them an ideal option for investors.",
  },
  {
    question: "Are digital investments safe?",
    answer: "Yes, top platforms use encryption, blockchain, and compliance measures for security.",
  },
  {
    question: "Can I start investing with a small amount?",
    answer: "Absolutely! Fractional investing lets you invest with as little as a few dollars.",
  },
  {
    question: "How do digital investments provide diversification?",
    answer: "They enable investment across stocks, ETFs, crypto, bonds, and more, reducing risks.",
  },
  {
    question: "What are robo-advisors, and how do they help?",
    answer: "AI-powered robo-advisors help manage portfolios based on your financial goals.",
  },
  {
    question: "How can I track my digital investments?",
    answer: "Most platforms offer live dashboards, analytics, and portfolio insights.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about digital investments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
