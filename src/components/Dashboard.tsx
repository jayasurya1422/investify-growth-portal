
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 2017, value: 0.29 },
  { year: 2018, value: 0.45 },
  { year: 2019, value: 0.78 },
  { year: 2020, value: 1.2 },
  { year: 2021, value: 1.8 },
  { year: 2022, value: 2.4 },
  { year: 2023, value: 2.87 },
  { year: 2024, value: 3.5 },
  { year: 2025, value: 4.2 },
  { year: 2026, value: 4.8 },
  { year: 2027, value: 5.2 },
];

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital Investment Growth
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The digital investment market has shown remarkable growth over the years,
            with projections indicating continued expansion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-12"
        >
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#6b7280" }}
                  tickLine={{ stroke: "#6b7280" }}
                />
                <YAxis
                  tick={{ fill: "#6b7280" }}
                  tickLine={{ stroke: "#6b7280" }}
                  tickFormatter={(value) => `$${value}B`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                  }}
                  formatter={(value) => [`$${value}B`, "Market Size"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Market Growth",
              value: "$2.87B",
              description: "Current market value, grown tenfold since 2017",
            },
            {
              title: "Projected Growth",
              value: "$5.2T",
              description: "Expected market size by 2027",
            },
            {
              title: "Growth Rate",
              value: "63%",
              description: "Projected growth rate until 2027",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
