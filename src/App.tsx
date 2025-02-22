
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fixed from "./pages/Fixed";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/fixed" element={<Fixed />} />
        <Route path="/stocks" element={<NotFound />} /> {/* Placeholder until Stocks page is implemented */}
        <Route path="/mutual-funds" element={<NotFound />} /> {/* Placeholder until Mutual Funds page is implemented */}
        <Route path="/gold-etfs" element={<NotFound />} /> {/* Placeholder until Gold ETFs page is implemented */}
        <Route path="/community" element={<NotFound />} /> {/* Placeholder until Community page is implemented */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
