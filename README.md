# 🇳🇵 Nepal Partner Organisation Map

An interactive map showing partner organisations working across Nepal's 77 districts, with district-level filtering, zoom controls, and a sidebar that shows which organisations are active in each district.

---

## 📁 Project Structure

```
nepal-partner-map/
├── index.html              ← Open this in a browser
├── css/
│   └── style.css
├── js/
│   └── main.js
├── data/
│   ├── partners.js         ← Your partner/district data (edit this)
│   └── nepal_districts.geojson  ← Download separately (see below)
└── README.md
```

---

## 🚀 Getting Started

### Step 1 — Download the Nepal district GeoJSON

The map needs an official Nepal district boundary file. Download it from one of these sources:

**Option A (recommended) — HDX (OCHA):**
1. Go to: https://data.humdata.org/dataset/cod-ab-npl
2. Download: `npl_admbnda_adm3_nd_20201117.geojson` (district level)
3. Rename it to `nepal_districts.geojson`
4. Place it in the `data/` folder

**Option B — gadm.org:**
1. Go to: https://gadm.org/download_country.html
2. Select Nepal → GeoJSON → Level 3
3. Rename to `nepal_districts.geojson` → place in `data/`

> **Note:** The GeoJSON must have a `DISTRICT` or `NAME_3` property containing district names in English.

### Step 2 — Run locally

Because the app loads a local `.geojson` file, you need a simple local web server (browsers block `file://` fetches).

**Python (easiest):**
```bash
cd nepal-partner-map
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

**Node.js:**
```bash
npx serve .
```

**VS Code:** Install the "Live Server" extension, right-click `index.html` → Open with Live Server.

### Step 3 — Open the map

Navigate to `http://localhost:8080` and you should see the interactive map.

---

## 📝 How to Add Thematic Areas (Future)

Open `data/partners.js` and fill in the `THEMATIC_AREAS` object at the bottom:

```js
const THEMATIC_AREAS = {
  "COCAP":          ["Child Protection", "Education"],
  "WHR":            ["Health", "WASH", "GBV"],
  "TSK":            ["Livelihoods", "DRR"],
  "Mandala Theatre":["Arts & Culture", "Peacebuilding"],
  // ... add more
};
```

The sidebar will automatically show the thematic tags as coloured badges once you add them.

---

## ➕ How to Add New Partners

Open `data/partners.js` and update the `PARTNER_DATA` object:

```js
const PARTNER_DATA = {
  // existing entries...
  "Jumla": { partners: ["New Org Name"] },
};
```

District names must match the official Nepal administrative names exactly (Title Case).

---

## 🌐 Deploying to GitHub Pages

1. Create a GitHub repository
2. Push all files (including the downloaded `.geojson`)
3. Go to **Settings → Pages → Source → main branch / root**
4. Your map will be live at `https://<username>.github.io/<repo-name>/`

---

## ✅ Features

- [x] District choropleth map (colour intensity = number of partners)
- [x] Click any district → see partner list in sidebar
- [x] Filter by organisation (highlights coverage districts in red)
- [x] Zoom in/out + pan
- [x] Summary stats in header
- [x] Thematic area placeholder (ready to fill in)
- [ ] Thematic area filter (add when data is available)
- [ ] Export to PDF/PNG (future enhancement)

---

## 📋 Partner Organisations Included

| Abbreviation | Note |
|---|---|
| AF | |
| AMARC-AP | |
| APEC | |
| BGTBK | |
| CDWN | |
| COCAP | |
| CVC Bardiya | |
| HURF | |
| MAHURI Home | |
| Mandala Theatre | |
| NA | |
| NNDCV | |
| NPI | |
| Pro Public | |
| SNP | |
| TSK | |
| WHR | |

---

## 🛠️ Tech Stack

- [Leaflet.js](https://leafletjs.com/) — interactive maps
- Vanilla HTML/CSS/JavaScript — no build tools needed
- GeoJSON — Nepal administrative boundaries
