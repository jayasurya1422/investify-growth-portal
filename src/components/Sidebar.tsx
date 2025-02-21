
import { motion } from "framer-motion";
import { 
  LineChart, 
  Coins, 
  CircleDollarSign, 
  Warehouse, 
  Users,
  ChevronLeft,
  ChevronRight 
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: LineChart, label: "Stocks", href: "/stocks" },
    { icon: Warehouse, label: "Fixed Deposits", href: "/fixed" },
    { icon: Coins, label: "Mutual Funds", href: "/mutual-funds" },
    { icon: CircleDollarSign, label: "Gold ETFs", href: "/gold-etfs" },
    { icon: Users, label: "Community", href: "/community" },
  ];

  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: isOpen ? 0 : -200 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-16 h-screen bg-white border-r border-gray-200 z-40"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-10 top-4 bg-white p-2 rounded-full shadow-lg border border-gray-200"
      >
        {isOpen ? (
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        )}
      </button>
      
      <div className={`w-64 p-4 space-y-4`}>
        {menuItems.map((item) => (
          <motion.div key={item.label} whileHover={{ x: 5 }}>
            <Link
              to={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <item.icon className={`w-5 h-5 ${
                location.pathname === item.href ? "text-primary" : "text-gray-500"
              }`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
