import React, { useState } from 'react';
import { BarChart3, Wind, Droplets, Factory, Car, HardHat, Flame, ShieldAlert, ArrowUpRight, Search, Activity } from 'lucide-react';
import { CITY_AQI_DATA, POLLUTION_SECTORS } from '../data/demoData';

const Dashboard = () => {
  const [selectedCity, setSelectedCity] = useState(CITY_AQI_DATA[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = CITY_AQI_DATA.filter((c) =>
    c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Activity className="w-4 h-4" />
            <span>Real-Time Environmental Intelligence</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Live Air Quality & Source Analytics</h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Hyperlocal pollutant breakdown and sector contributions across Indian metropolitan corridors.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search city or state..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {filteredCities.map((item) => {
          const isSelected = selectedCity.city === item.city;
          return (
            <button
              key={item.city}
              onClick={() => setSelectedCity(item)}
              className={`p-4 rounded-2xl text-left transition-all border ${
                isSelected
                  ? 'bg-slate-900 border-teal-500 shadow-lg shadow-teal-500/15 scale-[1.02]'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-xs font-bold text-slate-200">{item.city}</div>
              <div className="text-[10px] text-slate-400">{item.state}</div>
              <div className="mt-3 flex items-baseline justify-between">
                <span className={`text-2xl font-black ${item.color}`}>{item.aqi}</span>
                <span className="text-[10px] font-semibold text-slate-400">{item.status}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Monitoring Station</span>
              <h2 className="text-2xl font-black text-white">{selectedCity.city} Air Quality Hub</h2>
              <p className="text-xs text-slate-400 mt-0.5">{selectedCity.state}, India</p>
            </div>
            <div className={`px-4 py-2 rounded-2xl ${selectedCity.bg} border ${selectedCity.border} text-center`}>
              <div className={`text-3xl font-black ${selectedCity.color}`}>{selectedCity.aqi}</div>
              <div className="text-[10px] font-bold text-slate-300 uppercase">{selectedCity.status}</div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Critical Pollutant Levels</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>PM2.5 (Fine Smog)</span>
                  <span className="font-bold text-red-400">{selectedCity.pm25} µg/m³</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-red-500 h-full rounded-full" style={{ width: `${Math.min((selectedCity.pm25 / 250) * 100, 100)}%` }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>PM10 (Coarse Dust)</span>
                  <span className="font-bold text-orange-400">{selectedCity.pm10} µg/m³</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-orange-500 h-full rounded-full" style={{ width: `${Math.min((selectedCity.pm10 / 350) * 100, 100)}%` }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>NO2 (Traffic Tailpipe)</span>
                  <span className="font-bold text-amber-400">{selectedCity.no2} ppb</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: `${Math.min((selectedCity.no2 / 100) * 100, 100)}%` }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>CO (Carbon Monoxide)</span>
                  <span className="font-bold text-emerald-400">{selectedCity.co} mg/m³</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${Math.min((selectedCity.co / 5) * 100, 100)}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-amber-300">Public Advisory:</strong> Air quality in {selectedCity.city} is currently{' '}
              <strong className="text-white">{selectedCity.status}</strong>. When commuting, activate EcoVerse clean corridor routing and keep vehicle windows closed.
            </div>
          </div>

        </div>

        <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Source Apportionment</span>
            <h2 className="text-xl font-black text-white mt-0.5">Pollution Contribution by Sector</h2>
            <p className="text-xs text-slate-400">Estimated breakdown of primary PM2.5 and NOx emission sources in urban areas.</p>
          </div>

          <div className="space-y-4">
            {POLLUTION_SECTORS.map((sector) => (
              <div key={sector.name} className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-teal-400" />
                    <span className="text-sm font-bold text-slate-100">{sector.name}</span>
                  </div>
                  <span className="text-sm font-black text-teal-400">{sector.share}%</span>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className={`${sector.color} h-full rounded-full`} style={{ width: `${sector.share}%` }} />
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
