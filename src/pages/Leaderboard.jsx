import React from 'react';
import { Award, Trophy, Wind, CheckCircle2, Flame, ArrowUpRight } from 'lucide-react';
import { LEADERBOARD_DATA, ECO_CHALLENGES } from '../data/demoData';

const Leaderboard = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      <div>
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
          <Trophy className="w-4 h-4" />
          <span>Social Gamification & Impact</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">EcoVerse Commuter Leaderboard</h1>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Compete with fellow citizens to reduce urban smog and unlock community badges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">Top Green Commuters (National)</h2>

          <div className="space-y-2.5">
            {LEADERBOARD_DATA.map((user) => (
              <div
                key={user.rank}
                className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                    user.rank === 1 ? 'bg-amber-400 text-slate-950' :
                    user.rank === 2 ? 'bg-slate-300 text-slate-950' :
                    user.rank === 3 ? 'bg-amber-700 text-white' : 'bg-slate-800 text-slate-300'
                  }`}>
                    #{user.rank}
                  </div>

                  <div>
                    <div className="text-sm font-bold text-slate-100 flex items-center gap-2">
                      <span>{user.name}</span>
                      <span className="text-[10px] text-slate-400 font-medium">({user.city})</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-semibold">{user.badge}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-base font-black text-emerald-400">{user.score} <span className="text-[10px]">pts</span></div>
                  <div className="text-[10px] text-slate-400">{user.cleanerKm} km Clean Route</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Active Challenges</h2>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">Week 37</span>
          </div>

          <div className="space-y-3.5">
            {ECO_CHALLENGES.map((challenge) => (
              <div key={challenge.id} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-100">{challenge.title}</h3>
                  <span className="text-[10px] font-bold text-cyan-400">{challenge.reward}</span>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {challenge.desc}
                </p>

                <div>
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                    <span>Progress: {challenge.progress} / {challenge.total} days</span>
                    <span>{Math.round((challenge.progress / challenge.total) * 100)}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-400 h-full rounded-full"
                      style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Leaderboard;
