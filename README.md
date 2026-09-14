# 🌿 EcoVerse

> **India's 1st Clean-Air & Eco-Route Navigation Platform**  
> *Selection Round Demo Submission*

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-teal.svg)](https://tailwindcss.com/)

---

## 🚀 Problem Statement

Traditional mapping applications (Google Maps, Apple Maps) optimize routes purely for **travel duration**, consistently directing drivers into high-traffic bottlenecks, toxic highway smog zones, and heavy industrial belts. 

In Indian metropolitan areas (Delhi-NCR, Mumbai, Bengaluru), commuters inadvertently inhale dangerous levels of **PM2.5** and **NOx** during daily transit.

## 💡 The EcoVerse Solution

**EcoVerse** introduces an intelligent, multi-variable clean air navigation engine that:
1. **Maps real-time AQI heatmaps** along every road segment.
2. Computes total **inhalation exposure (µg PM2.5)** for alternate corridors.
3. Suggests green bypasses (e.g. Ridge / Coastal corridors) that reduce toxic exposure by up to **55%** with negligible time difference.
4. Gamifies sustainable commuting through **Personal Pollution Credit Scores**.

---

## 🌟 Core Modules in this Demo

| Module | Features Showcase |
| :--- | :--- |
| 🗺️ **Eco-Navigation Simulator** | • Side-by-side **Fast Route vs Eco Route** comparison.<br>• Real-time PM2.5 inhalation savings (-54% less smog).<br>• 1-Click presets for Delhi-NCR, Mumbai, and Bengaluru.<br>• Interactive Leaflet Map with segment AQI checkpoints. |
| 📊 **Live AQI & Sector Analytics** | • City-level AQI monitoring across major metro stations.<br>• Pollutant matrix (PM2.5, PM10, NO2, CO).<br>• Urban sector emission contributions (Vehicular, Industrial, Construction). |
| 🏆 **Pollution Credit Score** | • Interactive daily commute and energy score simulator (0-100).<br>• Estimated carbon footprint (kg CO2) and actionable reduction tips. |
| 🛒 **EcoVerse Store** | • Verified sustainable products catalog (EV mobility, cabin filters, solar gadgets). |
| 🥇 **Leaderboard & Challenges** | • Gamified national commuter rankings and weekly sustainability streaks. |

---

## ⚡ Quick Start (1 Minute Setup)

This demo repository is designed with **zero external backend dependencies** so evaluators can run and test all interactive features immediately:

```bash
# 1. Clone the repository
git clone https://github.com/Sunnykum74/EcoVerse.git
cd EcoVerse

# 2. Install dependencies
npm install

# 3. Launch local dev server
npm run dev
```

Open **`http://localhost:5173`** in your browser to explore the live demo.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite 5, Tailwind CSS
- **Mapping & Geodata**: Leaflet, OpenStreetMap, CartoDB Dark Tiles
- **Icons & UI**: Lucide React, Plus Jakarta Sans typography
- **Routing**: React Router DOM v6

---

## 👥 Authors & License

Developed for the Hackathon Selection Round.  
Released under the [MIT License](LICENSE).
