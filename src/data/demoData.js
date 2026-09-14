export const SAMPLE_ROUTES = {
  delhi_gurugram: {
    id: "delhi_gurugram",
    name: "Delhi (Connaught Place) ➔ Gurugram (Cyber City)",
    city: "Delhi-NCR",
    center: [28.5500, 77.1300],
    zoom: 11,
    start: { name: "Connaught Place, New Delhi", coords: [28.6315, 77.2167] },
    end: { name: "Cyber City, DLF Phase 2, Gurugram", coords: [28.4900, 77.0890] },
    fastRoute: {
      name: "Fastest Route (via NH-48 Expressway)",
      distanceKm: 31.4,
      durationMins: 44,
      avgAQI: 335,
      aqiCategory: "Very Poor",
      aqiColor: "#ef4444",
      pm25InhaledUg: 46.8,
      pm10InhaledUg: 88.2,
      congestion: "Heavy Traffic (Dhaula Kuan)",
      ecoPoints: 10,
      path: [
        [28.6315, 77.2167],
        [28.6180, 77.1950],
        [28.5950, 77.1650],
        [28.5600, 77.1250],
        [28.5200, 77.0950],
        [28.4900, 77.0890]
      ],
      segments: [
        { name: "CP to Dhaula Kuan", aqi: 290, color: "#f97316", status: "Poor" },
        { name: "NH48 Mahipalpur Bottleneck", aqi: 385, color: "#ef4444", status: "Severe" },
        { name: "Sirhaul Border to Cyber Hub", aqi: 330, color: "#ef4444", status: "Very Poor" }
      ]
    },
    ecoRoute: {
      name: "Eco-Route (via Mehrauli Ridge Green Corridor)",
      distanceKm: 33.8,
      durationMins: 48,
      avgAQI: 165,
      aqiCategory: "Moderate",
      aqiColor: "#10b981",
      pm25InhaledUg: 21.4,
      pm10InhaledUg: 41.0,
      pollutionReductionPct: 54,
      congestion: "Free Flowing",
      ecoPoints: 95,
      path: [
        [28.6315, 77.2167],
        [28.5900, 77.2250],
        [28.5400, 77.2050],
        [28.5150, 77.1700],
        [28.4850, 77.1200],
        [28.4900, 77.0890]
      ],
      segments: [
        { name: "Lodhi Garden Green Corridor", aqi: 130, color: "#10b981", status: "Moderate" },
        { name: "Sanjay Van / Ridge Bypass", aqi: 110, color: "#10b981", status: "Clean" },
        { name: "MG Road Entry", aqi: 210, color: "#f59e0b", status: "Moderate-Poor" }
      ]
    }
  },
  mumbai_vashi: {
    id: "mumbai_vashi",
    name: "Mumbai (BKC) ➔ Navi Mumbai (Vashi Plaza)",
    city: "Mumbai",
    center: [19.0400, 72.9300],
    zoom: 12,
    start: { name: "Bandra Kurla Complex (BKC)", coords: [19.0657, 72.8680] },
    end: { name: "Vashi Plaza, Navi Mumbai", coords: [19.0770, 72.9980] },
    fastRoute: {
      name: "Standard Route (via Sion-Panvel Highway)",
      distanceKm: 23.2,
      durationMins: 41,
      avgAQI: 235,
      aqiCategory: "Poor",
      aqiColor: "#f97316",
      pm25InhaledUg: 34.5,
      pm10InhaledUg: 65.0,
      congestion: "High Emission Zone (Chembur Junction)",
      ecoPoints: 15,
      path: [
        [19.0657, 72.8680],
        [19.0450, 72.8900],
        [19.0550, 72.9250],
        [19.0600, 72.9600],
        [19.0770, 72.9980]
      ],
      segments: [
        { name: "BKC to Sion Junction", aqi: 210, color: "#f59e0b", status: "Moderate" },
        { name: "Chembur Industrial Belt", aqi: 280, color: "#ef4444", status: "Poor" },
        { name: "Vashi Creek Bridge", aqi: 190, color: "#f59e0b", status: "Moderate" }
      ]
    },
    ecoRoute: {
      name: "Eco-Route (via Coastal Connector & Marine Strip)",
      distanceKm: 25.1,
      durationMins: 38,
      avgAQI: 98,
      aqiCategory: "Satisfactory",
      aqiColor: "#10b981",
      pm25InhaledUg: 13.8,
      pm10InhaledUg: 28.2,
      pollutionReductionPct: 60,
      congestion: "Smooth Sea Breeze Flow",
      ecoPoints: 110,
      path: [
        [19.0657, 72.8680],
        [19.0200, 72.8800],
        [19.0100, 72.9150],
        [19.0350, 72.9700],
        [19.0770, 72.9980]
      ],
      segments: [
        { name: "Freeway Coastal Link", aqi: 85, color: "#10b981", status: "Good" },
        { name: "Marine Bay Breeze Corridor", aqi: 75, color: "#10b981", status: "Good" },
        { name: "Vashi Approach", aqi: 120, color: "#10b981", status: "Moderate" }
      ]
    }
  },
  blr_whitefield: {
    id: "blr_whitefield",
    name: "Bengaluru (Koramangala) ➔ Whitefield (ITPL)",
    city: "Bengaluru",
    center: [12.9550, 77.6800],
    zoom: 12,
    start: { name: "Koramangala 4th Block", coords: [12.9352, 77.6245] },
    end: { name: "ITPL Main Gate, Whitefield", coords: [12.9866, 77.7380] },
    fastRoute: {
      name: "Standard Route (via Outer Ring Road)",
      distanceKm: 18.6,
      durationMins: 52,
      avgAQI: 198,
      aqiCategory: "Moderate",
      aqiColor: "#f59e0b",
      pm25InhaledUg: 28.4,
      pm10InhaledUg: 58.0,
      congestion: "Severe Dust & Construction (Marathahalli)",
      ecoPoints: 12,
      path: [
        [12.9352, 77.6245],
        [12.9280, 77.6600],
        [12.9450, 77.6950],
        [12.9550, 77.7050],
        [12.9866, 77.7380]
      ],
      segments: [
        { name: "Bellandur Tech Corridor", aqi: 195, color: "#f59e0b", status: "Moderate" },
        { name: "Marathahalli Dust Zone", aqi: 245, color: "#f97316", status: "Poor" },
        { name: "ITPL Approach", aqi: 155, color: "#f59e0b", status: "Moderate" }
      ]
    },
    ecoRoute: {
      name: "Eco-Route (via Old Airport Road & Green Pockets)",
      distanceKm: 19.8,
      durationMins: 46,
      avgAQI: 84,
      aqiCategory: "Good",
      aqiColor: "#10b981",
      pm25InhaledUg: 11.2,
      pm10InhaledUg: 22.5,
      pollutionReductionPct: 61,
      congestion: "Tree-Covered Avenue",
      ecoPoints: 105,
      path: [
        [12.9352, 77.6245],
        [12.9550, 77.6400],
        [12.9600, 77.6700],
        [12.9750, 77.7100],
        [12.9866, 77.7380]
      ],
      segments: [
        { name: "HAL Canopy Avenue", aqi: 72, color: "#10b981", status: "Good" },
        { name: "Wind Tunnel Green Belt", aqi: 68, color: "#10b981", status: "Good" },
        { name: "Whitefield Inner Link", aqi: 110, color: "#10b981", status: "Moderate" }
      ]
    }
  }
};

export const CITY_AQI_DATA = [
  { city: "Delhi", state: "Delhi-NCR", aqi: 328, status: "Very Poor", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30", pm25: 192, pm10: 310, no2: 82, co: 2.5, dominant: "PM2.5" },
  { city: "Mumbai", state: "Maharashtra", aqi: 138, status: "Moderate", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", pm25: 54, pm10: 105, no2: 44, co: 1.1, dominant: "PM10" },
  { city: "Bengaluru", state: "Karnataka", aqi: 76, status: "Satisfactory", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", pm25: 26, pm10: 58, no2: 22, co: 0.8, dominant: "O3" },
  { city: "Kolkata", state: "West Bengal", aqi: 262, status: "Poor", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30", pm25: 138, pm10: 215, no2: 65, co: 1.8, dominant: "PM2.5" },
  { city: "Hyderabad", state: "Telangana", aqi: 112, status: "Moderate", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", pm25: 42, pm10: 84, no2: 30, co: 1.0, dominant: "PM10" },
  { city: "Pune", state: "Maharashtra", aqi: 88, status: "Satisfactory", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", pm25: 31, pm10: 68, no2: 26, co: 0.9, dominant: "PM2.5" },
];

export const POLLUTION_SECTORS = [
  { name: "Vehicular Emissions", share: 38, color: "bg-orange-500", desc: "Tailpipe particulate matter (PM2.5, NOx) from high traffic density and idling." },
  { name: "Industrial & Power Plants", share: 26, color: "bg-rose-500", desc: "Combustion of coal, heavy fuels, and refinery effluents." },
  { name: "Construction & Road Dust", share: 20, color: "bg-amber-500", desc: "Suspended airborne particulate matter (PM10) from excavation and unpaved roads." },
  { name: "Biomass & Stubble Burning", share: 16, color: "bg-purple-500", desc: "Seasonal agricultural burning and open municipal solid waste incineration." }
];

export const ECO_PRODUCTS = [
  { id: 1, name: "Smart Air Quality Portable Monitor", category: "Hardware", price: "₹2,499", rating: 4.8, ecoScore: "+92 pts", desc: "Real-time laser sensor for PM2.5 and TVOC with Bluetooth phone alerts.", tag: "Popular" },
  { id: 2, name: "HEPA Activated Carbon Cabin Filter", category: "Mobility", price: "₹899", rating: 4.9, ecoScore: "+65 pts", desc: "99.97% microscopic particulate capture for in-car clean air routing.", tag: "Best Seller" },
  { id: 3, name: "Solar Commuter Backpack", category: "Daily Life", price: "₹1,899", rating: 4.7, ecoScore: "+80 pts", desc: "Integrated 10W flexible solar panel with USB fast charging on the go.", tag: "Eco Choice" },
  { id: 4, name: "Smart Plug Energy Optimizer", category: "Energy", price: "₹749", rating: 4.6, ecoScore: "+45 pts", desc: "Auto cut-off phantom load and scheduled energy consumption tracking.", tag: "Save 20%" },
  { id: 5, name: "Bamboo Fiber Insulated Tumbler", category: "Daily Life", price: "₹499", rating: 4.9, ecoScore: "+30 pts", desc: "100% biodegradable zero-plastic thermal mug for daily travel.", tag: "Zero Waste" },
  { id: 6, name: "Foldable Electric Commuter Bike", category: "Mobility", price: "₹24,999", rating: 4.9, ecoScore: "+250 pts", desc: "45km range on single charge, zero emissions, fits directly in metro trains.", tag: "Flagship" },
];

export const LEADERBOARD_DATA = [
  { rank: 1, name: "Arjun Sharma", city: "Delhi", score: 980, cleanerKm: 420, co2SavedKg: 52, badge: "Eco Champion 🌿" },
  { rank: 2, name: "Priya Nair", city: "Bengaluru", score: 945, cleanerKm: 395, co2SavedKg: 48, badge: "Clean Air Pioneer 🍃" },
  { rank: 3, name: "Rohan Varma", city: "Mumbai", score: 910, cleanerKm: 360, co2SavedKg: 44, badge: "Ridge Guardian 🌲" },
  { rank: 4, name: "Ananya Iyer", city: "Pune", score: 885, cleanerKm: 330, co2SavedKg: 39, badge: "Green Commuter ⭐" },
  { rank: 5, name: "Kunal Ghosh", city: "Kolkata", score: 860, cleanerKm: 310, co2SavedKg: 36, badge: "Green Commuter ⭐" },
];

export const ECO_CHALLENGES = [
  { id: 1, title: "7-Day Clean Route Streak", desc: "Choose the low-pollution route for 7 consecutive commutes.", reward: "+150 Eco Credits", progress: 5, total: 7, active: true },
  { id: 2, title: "Sub-100 AQI Hero", desc: "Keep total daily inhalation exposure under 25µg for 3 days.", reward: "+100 Eco Credits", progress: 2, total: 3, active: true },
  { id: 3, title: "Public Transit Weekend", desc: "Log at least 2 weekend trips using metro or electric buses.", reward: "+80 Eco Credits", progress: 1, total: 2, active: false },
];
