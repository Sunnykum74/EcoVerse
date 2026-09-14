import React, { useState } from 'react';
import { ShoppingBag, Star, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { ECO_PRODUCTS } from '../data/demoData';

const EcoStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mobility', 'Hardware', 'Daily Life', 'Energy'];

  const filteredProducts = selectedCategory === 'All'
    ? ECO_PRODUCTS
    : ECO_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Verified Green Marketplace</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">EcoVerse Sustainable Store</h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Curated low-emission hardware, mobility gear, and clean air filtration devices.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  {product.category}
                </span>
                <span className="text-xs font-semibold text-cyan-400">{product.ecoScore}</span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                {product.name}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {product.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Price</span>
                <span className="text-lg font-extrabold text-white">{product.price}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EcoStore;
