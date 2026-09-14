import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoutePlanner from './pages/RoutePlanner';
import Dashboard from './pages/Dashboard';
import PollutionScore from './pages/PollutionScore';
import EcoStore from './pages/EcoStore';
import Leaderboard from './pages/Leaderboard';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/route" element={<RoutePlanner />} />
          <Route path="/routes" element={<RoutePlanner />} />
          <Route path="/navigation" element={<RoutePlanner />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/insights" element={<Dashboard />} />
          <Route path="/pollution-score" element={<PollutionScore />} />
          <Route path="/pollution" element={<PollutionScore />} />
          <Route path="/eco-store" element={<EcoStore />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
