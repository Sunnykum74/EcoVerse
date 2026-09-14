import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navigation, BarChart3, Award, ShoppingBag, Wind, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Eco Navigation', path: '/route', icon: Navigation },
    { name: 'Live AQI & Analytics', path: '/dashboard', icon: BarChart3 },
    { name: 'Pollution Score', path: '/pollution-score', icon: Award },
    { name: 'Eco Store', path: '/eco-store', icon: ShoppingBag },
    { name: 'Leaderboard', path: '/leaderboard', icon: Wind },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              <Navigation className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent">
                EcoVerse
              </span>
              <p className="text-[10px] text-slate-400 font-medium -mt-0.5">Clean Air Navigation</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/route"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-lg shadow-md shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Try Navigator</span>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium ${
                  active
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5 text-emerald-400" />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              to="/route"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-center text-sm font-semibold text-slate-950 bg-emerald-400 rounded-lg"
            >
              <Navigation className="w-4 h-4" />
              <span>Launch Eco-Navigator</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
