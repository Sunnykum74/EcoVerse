import React, { useState, useEffect, useRef } from 'react';
import { Navigation, Clock, ShieldCheck, Wind, Sparkles, MapPin, ArrowRight, CheckCircle2, AlertTriangle, RefreshCw, Layers } from 'lucide-react';
import { SAMPLE_ROUTES } from '../data/demoData';
import L from 'leaflet';

const RoutePlanner = () => {
  const [selectedRouteKey, setSelectedRouteKey] = useState('delhi_gurugram');
  const [activeTab, setActiveTab] = useState('comparison');
  const activeRouteData = SAMPLE_ROUTES[selectedRouteKey];

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const layerGroupRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapContainerRef.current, {
        center: activeRouteData.center,
        zoom: activeRouteData.zoom,
        zoomControl: true,
        attributionControl: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(mapInstanceRef.current);

      layerGroupRef.current = L.layerGroup().addTo(mapInstanceRef.current);
    } else {
      mapInstanceRef.current.setView(activeRouteData.center, activeRouteData.zoom);
    }

    if (layerGroupRef.current) {
      layerGroupRef.current.clearLayers();

      const { fastRoute, ecoRoute, start, end } = activeRouteData;

      const createMarkerIcon = (color, text) => {
        return L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: ${color}; color: #000; font-weight: 800; font-size: 11px; padding: 4px 8px; border-radius: 9999px; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.5); white-space: nowrap;">${text}</div>`,
          iconSize: [80, 24],
          iconAnchor: [40, 12]
        });
      };

      L.marker(start.coords, { icon: createMarkerIcon('#10b981', 'START 🚩') })
        .bindPopup(`<b>${start.name}</b>`)
        .addTo(layerGroupRef.current);

      L.marker(end.coords, { icon: createMarkerIcon('#38bdf8', 'DESTINATION 🏁') })
        .bindPopup(`<b>${end.name}</b>`)
        .addTo(layerGroupRef.current);

      const fastLine = L.polyline(fastRoute.path, {
        color: '#ef4444',
        weight: 5,
        opacity: activeTab === 'eco' ? 0.25 : 0.85,
        dashArray: '8, 8',
      }).addTo(layerGroupRef.current);
      fastLine.bindPopup(`<b>${fastRoute.name}</b><br/>AQI: ${fastRoute.avgAQI} (${fastRoute.aqiCategory})<br/>PM2.5: ${fastRoute.pm25InhaledUg} µg`);

      const ecoLine = L.polyline(ecoRoute.path, {
        color: '#10b981',
        weight: 6,
        opacity: activeTab === 'fast' ? 0.25 : 0.95,
      }).addTo(layerGroupRef.current);
      ecoLine.bindPopup(`<b>${ecoRoute.name}</b><br/>AQI: ${ecoRoute.avgAQI} (${ecoRoute.aqiCategory})<br/>PM2.5 Inhaled: ${ecoRoute.pm25InhaledUg} µg (Cleaner!)`);

      ecoRoute.path.forEach((pt, idx) => {
        if (idx > 0 && idx < ecoRoute.path.length - 1) {
          const segInfo = ecoRoute.segments[idx - 1] || { name: 'Clean Corridor Segment', aqi: 120 };
          L.circleMarker(pt, {
            radius: 6,
            color: '#10b981',
            fillColor: '#34d399',
            fillOpacity: 0.9,
            weight: 2
          }).bindPopup(`<b>${segInfo.name}</b><br/>AQI Level: ${segInfo.aqi}`).addTo(layerGroupRef.current);
        }
      });
    }

  }, [selectedRouteKey, activeTab]);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Clean Route Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Eco-Navigation Simulator</h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Real-time multi-variable pathfinding comparing high-pollution expressways against clean air green corridors.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-slate-400 mr-1">Demo Presets:</span>
          {Object.entries(SAMPLE_ROUTES).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setSelectedRouteKey(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedRouteKey === key
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {item.city}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="lg:col-span-5 space-y-5">
          
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Selected Transit Corridor</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                LIVE SIMULATION
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400">Origin Point</div>
                  <div className="text-xs font-bold text-slate-100">{activeRouteData.start.name}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Navigation className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400">Destination Point</div>
                  <div className="text-xs font-bold text-slate-100">{activeRouteData.end.name}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            
            <div
              onClick={() => setActiveTab(activeTab === 'eco' ? 'comparison' : 'eco')}
              className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border-2 relative overflow-hidden ${
                activeTab === 'eco' || activeTab === 'comparison'
                  ? 'bg-gradient-to-br from-emerald-950/40 to-slate-900 border-emerald-500/80 shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-900/60 border-slate-800 opacity-60'
              }`}
            >
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>RECOMMENDED ECO-ROUTE</span>
              </div>

              <div className="pr-20">
                <h3 className="text-base font-extrabold text-white flex items-center gap-1.5">
                  <span>{activeRouteData.ecoRoute.name}</span>
                </h3>
                <p className="text-xs text-emerald-400 font-medium mt-0.5">
                  {activeRouteData.ecoRoute.congestion} • +{activeRouteData.ecoRoute.ecoPoints} Eco-Credits
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-center">
                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">Avg AQI</div>
                  <div className="text-lg font-black text-emerald-400">{activeRouteData.ecoRoute.avgAQI}</div>
                  <div className="text-[9px] text-emerald-400 font-bold">{activeRouteData.ecoRoute.aqiCategory}</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">PM2.5 Exposure</div>
                  <div className="text-lg font-black text-emerald-400">{activeRouteData.ecoRoute.pm25InhaledUg} <span className="text-[10px]">µg</span></div>
                  <div className="text-[9px] text-emerald-400 font-bold">-{activeRouteData.ecoRoute.pollutionReductionPct}% Less Smog</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-medium">Duration / Dist</div>
                  <div className="text-base font-bold text-slate-200 mt-0.5">{activeRouteData.ecoRoute.durationMins}m</div>
                  <div className="text-[9px] text-slate-400">{activeRouteData.ecoRoute.distanceKm} km</div>
                </div>
              </div>

              <div className="mt-3 space-y-1.5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Segment Air Quality</div>
                <div className="flex gap-1.5 flex-wrap">
                  {activeRouteData.ecoRoute.segments.map((s, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {s.name}: {s.aqi} AQI
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveTab(activeTab === 'fast' ? 'comparison' : 'fast')}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border relative ${
                activeTab === 'fast' || activeTab === 'comparison'
                  ? 'bg-slate-900/80 border-red-500/40'
                  : 'bg-slate-900/40 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-200">{activeRouteData.fastRoute.name}</h3>
                  <p className="text-xs text-red-400 font-medium">{activeRouteData.fastRoute.congestion}</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-[10px] font-bold border border-red-500/20">
                  HIGH EMISSION ROUTE
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-slate-800/80 text-center">
                <div>
                  <div className="text-[10px] text-slate-400">Avg AQI</div>
                  <div className="text-base font-extrabold text-red-400">{activeRouteData.fastRoute.avgAQI}</div>
                  <div className="text-[9px] text-red-400">{activeRouteData.fastRoute.aqiCategory}</div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400">PM2.5 Inhaled</div>
                  <div className="text-base font-extrabold text-red-400">{activeRouteData.fastRoute.pm25InhaledUg} µg</div>
                  <div className="text-[9px] text-red-400 font-semibold">+Heavy Exposure</div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400">Duration / Dist</div>
                  <div className="text-sm font-bold text-slate-300 mt-0.5">{activeRouteData.fastRoute.durationMins}m</div>
                  <div className="text-[9px] text-slate-400">{activeRouteData.fastRoute.distanceKm} km</div>
                </div>
              </div>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-emerald-400 font-bold">Health Insight:</strong> Choosing the Eco-Route only adds{' '}
              <strong className="text-white font-semibold">
                {activeRouteData.ecoRoute.durationMins - activeRouteData.fastRoute.durationMins > 0 
                  ? `${activeRouteData.ecoRoute.durationMins - activeRouteData.fastRoute.durationMins} minutes` 
                  : '0 extra minutes'}
              </strong>{' '}
              to your journey but cuts your total particulate inhalation exposure by{' '}
              <strong className="text-emerald-400 font-bold">{activeRouteData.ecoRoute.pollutionReductionPct}%</strong>.
            </div>
          </div>

        </div>

        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          <div className="relative w-full h-[520px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
            
            <div ref={mapContainerRef} className="w-full h-full" />

            <div className="absolute top-4 right-4 z-[400] p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 shadow-xl space-y-2 text-xs">
              <div className="font-bold text-slate-200 text-[11px]">Map Legend</div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-1 bg-emerald-500 rounded-full" />
                <span className="text-slate-300 text-[10px]">Eco-Route (Clean Corridor)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-1 bg-red-500 rounded-full border-b border-dashed" />
                <span className="text-slate-300 text-[10px]">Fast Route (High Pollution)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-slate-300 text-[10px]">Clean Segment Checkpoint</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 z-[400] flex items-center gap-2 p-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 shadow-xl">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  activeTab === 'comparison' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Side-by-Side
              </button>
              <button
                onClick={() => setActiveTab('eco')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  activeTab === 'eco' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Eco Only
              </button>
              <button
                onClick={() => setActiveTab('fast')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  activeTab === 'fast' ? 'bg-red-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Fast Only
              </button>
            </div>

          </div>

          <div className="text-center text-xs text-slate-500">
            💡 Click on any green checkpoint or colored path on the map to inspect live segment air quality levels.
          </div>

        </div>

      </div>

    </div>
  );
};

export default RoutePlanner;
