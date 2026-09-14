import React from 'react';
import { Navigation, Heart, Shield, Award, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                <Navigation className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-white">EcoVerse</span>
            </div>
            <p className="text-slate-400 max-w-sm text-xs sm:text-sm leading-relaxed">
              India's clean-air navigation and personal pollution credit platform. Helping millions breathe easier by choosing green, low-exposure travel routes.
            </p>
            <div className="flex items-center gap-3 text-xs text-emerald-400">
              <Shield className="w-4 h-4" />
              <span>Live AQI Inhalation Exposure Algorithmic Model</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Core Modules</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/route" className="hover:text-emerald-400 transition-colors">Eco-Route Navigation</Link></li>
              <li><Link to="/dashboard" className="hover:text-emerald-400 transition-colors">City AQI Analytics</Link></li>
              <li><Link to="/pollution-score" className="hover:text-emerald-400 transition-colors">Pollution Credit Score</Link></li>
              <li><Link to="/eco-store" className="hover:text-emerald-400 transition-colors">Sustainable Store</Link></li>
              <li><Link to="/leaderboard" className="hover:text-emerald-400 transition-colors">Leaderboard & Challenges</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Submission</h4>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <Award className="w-4 h-4" />
                <span>Selection Round Demo</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Standalone frontend showcase with pre-seeded route simulation datasets and live metrics.
              </p>
              <a
                href="https://github.com/Sunnykum74/EcoVerse"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white pt-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 EcoVerse Platform. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for a cleaner, greener India <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
