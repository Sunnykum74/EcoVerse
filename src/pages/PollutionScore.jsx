import React, { useState } from 'react';
import { Award, Zap, TrendingUp, ShieldCheck, RefreshCw, Car, Bike, Train, Bus, Sparkles } from 'lucide-react';

const PollutionScore = () => {
  const [commuteKm, setCommuteKm] = useState(24);
  const [transitMode, setTransitMode] = useState('car');
  const [energyHabit, setEnergyHabit] = useState('moderate');

  const calculateScore = () => {
    let baseScore = 70;
    
    if (transitMode === 'metro') baseScore += 20;
    if (transitMode === 'ev') baseScore += 18;
    if (transitMode === 'bike') baseScore += 25;
    if (transitMode === 'car') baseScore -= 15;

    if (commuteKm > 30) baseScore -= 10;
    else if (commuteKm < 15) baseScore += 10;

    if (energyHabit === 'clean') baseScore += 10;
    if (energyHabit === 'high') baseScore -= 10;

    return Math.max(20, Math.min(100, baseScore));
  };

  const score = calculateScore();

  const getScoreRating = (s) => {
    if (s >= 85) return { text: 'Eco Champion 🌿', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' };
    if (s >= 65) return { text: 'Conscious Commuter 🍃', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30' };
    return { text: 'High Emission Footprint ⚠️', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' };
  };

  const rating = getScoreRating(score);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Personal Pollution Credit Algorithm</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Your Personal Eco-Credit Score</h1>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Measure the environmental impact of your daily travel and earn verifiable sustainability points.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <div className="md:col-span-7 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
          <h2 className="text-base font-bold text-white uppercase tracking-wider text-xs">Simulate Daily Habits</h2>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">Daily Commute Distance</span>
              <span className="font-bold text-emerald-400 text-sm">{commuteKm} km / day</span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              value={commuteKm}
              onChange={(e) => setCommuteKm(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>5 km (Local)</span>
              <span>30 km (Intercity)</span>
              <span>60 km (Long)</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-300 block">Primary Commute Mode</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { key: 'car', label: 'Petrol Car', icon: Car },
                { key: 'ev', label: 'EV / Hybrid', icon: Zap },
                { key: 'metro', label: 'Metro Rail', icon: Train },
                { key: 'bike', label: 'Cycle / Walk', icon: Bike },
              ].map((m) => {
                const Icon = m.icon;
                const isSelected = transitMode === m.key;
                return (
                  <button
                    key={m.key}
                    onClick={() => setTransitMode(m.key)}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      isSelected
                        ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-md shadow-emerald-500/10'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-[11px] font-bold">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-300 block">Energy & Appliance Efficiency</span>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { key: 'clean', label: 'Solar / 5-Star' },
                { key: 'moderate', label: 'Standard Mix' },
                { key: 'high', label: 'High AC Load' },
              ].map((e) => (
                <button
                  key={e.key}
                  onClick={() => setEnergyHabit(e.key)}
                  className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                    energyHabit === e.key
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
            💡 <strong>Pro Tip:</strong> Switching from a petrol vehicle to metro transit on your daily {commuteKm}km commute saves approximately <strong className="text-emerald-400 font-bold">3.2 kg CO₂</strong> daily.
          </div>
        </div>

        <div className="md:col-span-5 p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between text-center space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Calculated Score</span>
            
            <div className="my-6 relative w-40 h-40 mx-auto rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-5xl font-black text-white">{score}</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase">out of 100</div>
              </div>
            </div>

            <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-extrabold ${rating.bg} ${rating.border} ${rating.color} border`}>
              {rating.text}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-left">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">Daily Inhaled PM2.5</div>
              <div className="text-lg font-black text-emerald-400 mt-0.5">
                {transitMode === 'metro' || transitMode === 'ev' ? '14.2 µg' : '38.6 µg'}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[10px] text-slate-400">Est. Daily Carbon</div>
              <div className="text-lg font-black text-cyan-400 mt-0.5">
                {transitMode === 'car' ? '4.8 kg' : '1.1 kg'}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default PollutionScore;
