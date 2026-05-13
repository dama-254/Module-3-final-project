import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Batches from "./pages/Batches";
import FeedManagement from "./pages/FeedManagement";
import Vaccinations from "./pages/Vaccinations";
import Sales from "./pages/Sales";
import Expenses from "./pages/Expenses";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar />

      <div className="flex-1">
        
        <Navbar />

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/feeds" element={<FeedManagement />} />
            <Route path="/vaccinations" element={<Vaccinations />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;