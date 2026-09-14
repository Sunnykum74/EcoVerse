import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Wind, Award, ShoppingBag, ArrowRight, ShieldCheck, Zap, TrendingDown, CheckCircle2, Sparkles } from 'lucide-react';
import { CITY_AQI_DATA } from '../data/demoData';

const Home = () => {
  return (
    <div className="min-h-screen">
      
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold mb-6 shadow-sm shadow-emerald-500/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India's 1st Clean-Air & Eco-Route Navigation Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Breathe Cleaner. <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Travel Smarter with EcoVerse.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Traditional GPS only gives you the fastest route. <strong className="text-white font-semibold">EcoVerse</strong> analyzes real-time AQI heatmaps and tailpipe exposures to guide you through green, low-pollution corridors — reducing toxic PM2.5 inhalation by up to <span className="text-emerald-400 font-bold">55%</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/route"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02]"
              >
                <Navigation className="w-5 h-5 fill-slate-950" />
                <span>Explore Eco-Navigation Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/dashboard"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200"
              >
                <Wind className="w-5 h-5 text-emerald-400" />
                <span>Live City AQI Analytics</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14 pt-8 border-t border-slate-800/80 text-left">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <div className="text-2xl lg:text-3xl font-extrabold text-emerald-400">-54%</div>
                <div className="text-xs font-semibold text-slate-300 mt-1">PM2.5 Exposure Reduction</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Average savings on green corridor routes</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <div className="text-2xl lg:text-3xl font-extrabold text-teal-400">12,500+</div>
                <div className="text-xs font-semibold text-slate-300 mt-1">Clean Road Segments</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Live hyper-local street-level monitoring</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 col-span-2 md:col-span-1">
                <div className="text-2xl lg:text-3xl font-extrabold text-cyan-400">+100 pts</div>
                <div className="text-xs font-semibold text-slate-300 mt-1">Eco-Credit Rewards</div>
                <p className="text-[11px] text-slate-500 mt-0.5">Gamified carbon credit & habit scores</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Live Metro City Air Quality Monitor</h3>
            </div>
            <Link to="/dashboard" className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
              <span>View Full Analytics</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CITY_AQI_DATA.map((item) => (
              <div
                key={item.city}
                className={`p-3 rounded-xl ${item.bg} border ${item.border} flex flex-col justify-between transition-transform hover:-translate-y-0.5`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">{item.city}</span>
                  <span className="text-[10px] text-slate-400">{item.dominant}</span>
                </div>
                <div className="mt-2">
                  <span className={`text-xl font-extrabold ${item.color}`}>{item.aqi}</span>
                  <div className="text-[10px] font-medium text-slate-400 truncate">{item.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Engineered for Bharat</span>
          <h2 className="text-3xl font-extrabold text-white mt-2">Why EcoVerse Outperforms Traditional Maps</h2>
          <p className="text-slate-400 text-sm mt-3">
            Standard maps optimize solely for commute duration, routing drivers straight into toxic traffic bottlenecks and heavy smog zones. EcoVerse creates a multi-variable balance of time, health, and emissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Clean Route Guidance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dynamic algorithms calculate total microgram PM2.5 inhalation along each road segment and suggest healthier alternate corridors.
              </p>
            </div>
            <Link to="/route" className="mt-6 text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
              <span>Test Route Comparison</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sectoral AQI Analytics</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Detailed breakdowns of city-level pollution sources including vehicular density, industrial emissions, and construction dust.
              </p>
            </div>
            <Link to="/dashboard" className="mt-6 text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1">
              <span>View Source Analytics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pollution Credit Score</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Simulate your personal carbon footprint and track green commuter points based on your daily transit decisions.
              </p>
            </div>
            <Link to="/pollution-score" className="mt-6 text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              <span>Calculate Eco Score</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sustainable Alternatives</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Curated marketplace featuring verified electric mobility, cabin filters, and smart energy optimization products.
              </p>
            </div>
            <Link to="/eco-store" className="mt-6 text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
              <span>Explore Eco Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ready for Evaluation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Experience the Delhi-NCR Green Navigation Simulator
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Compare how travelling through the Mehrauli Ridge Green Corridor saves over 25µg of inhaled PM2.5 compared to the heavily congested NH-48 highway.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium">⚡ 1-Click Delhi Preset</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium">🌊 Mumbai Coastal Preset</span>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium">🌳 Bengaluru Green Belt</span>
                </div>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <Link
                  to="/route"
                  className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base rounded-2xl shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Navigation className="w-5 h-5 fill-slate-950" />
                  <span>Launch Live Simulator</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
