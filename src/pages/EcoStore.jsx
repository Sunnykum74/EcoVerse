import React, { useState } from 'react';
import { ShoppingBag, Star, ShieldCheck, Sparkles, Filter, Leaf, Zap, Check } from 'lucide-react';
import { ECO_PRODUCTS } from '../data/demoData';

const EcoStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItem, setAddedItem] = useState(null);

  const categories = ['All', 'Mobility', 'Hardware', 'Daily Life', 'Energy'];

  const filteredProducts = selectedCategory === 'All'
    ? ECO_PRODUCTS
    : ECO_PRODUCTS.filter(p => p.category === selectedCategory);

  const handleSimulate = (id) => {
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
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

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 scale-[1.02]'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1"
          >
            {/* Product Image Container */}
            <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-950">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Top Tag Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-extrabold border border-emerald-500/30">
                  {product.category}
                </span>
                {product.tag && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Carbon Savings Badge */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[11px] font-bold text-teal-300 flex items-center gap-1 shadow-md">
                <Leaf className="w-3 h-3 text-emerald-400" />
                <span>{product.carbonSavings}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-500 font-normal">({product.reviews})</span>
                  </div>
                  <span className="text-xs font-extrabold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {product.ecoScore}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {product.desc}
                </p>
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Eco Price</span>
                  <span className="text-xl font-black text-white">{product.price}</span>
                </div>

                <button
                  onClick={() => handleSimulate(product.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                    addedItem === product.id
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 border border-slate-700 hover:border-emerald-400'
                  }`}
                >
                  {addedItem === product.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Claimed!</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5" />
                      <span>Simulate Impact</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default EcoStore;
