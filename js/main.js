// ─────────────────────────────────────────────────────────
//  Nepal Partner Map — main.js
//  Requires: Leaflet 1.9+, partners.js (data/partners.js)
// ─────────────────────────────────────────────────────────

// ── Province mapping (district → province name) ──────────
const DISTRICT_PROVINCE = {
  // Province 1 (Koshi)
  "Taplejung":"Koshi","Panchthar":"Koshi","Ilam":"Koshi","Jhapa":"Koshi",
  "Morang":"Koshi","Sunsari":"Koshi","Dhankuta":"Koshi","Terhathum":"Koshi",
  "Sankhuwasabha":"Koshi","Bhojpur":"Koshi","Solukhumbu":"Koshi",
  "Okhaldhunga":"Koshi","Khotang":"Koshi","Udayapur":"Koshi",
  // Province 2 (Madhesh)
  "Saptari":"Madhesh","Siraha":"Madhesh","Dhanusha":"Madhesh","Mahottari":"Madhesh",
  "Sarlahi":"Madhesh","Rautahat":"Madhesh","Bara":"Madhesh","Parsa":"Madhesh",
  // Bagmati
  "Sindhuli":"Bagmati","Ramechhap":"Bagmati","Dolakha":"Bagmati","Sindhupalchok":"Bagmati",
  "Kavrepalanchok":"Bagmati","Lalitpur":"Bagmati","Bhaktapur":"Bagmati","Kathmandu":"Bagmati",
  "Nuwakot":"Bagmati","Rasuwa":"Bagmati","Dhading":"Bagmati","Makawanpur":"Bagmati",
  "Chitwan":"Bagmati",
  // Gandaki
  "Gorkha":"Gandaki","Manang":"Gandaki","Mustang":"Gandaki","Myagdi":"Gandaki",
  "Kaski":"Gandaki","Lamjung":"Gandaki","Tanahu":"Gandaki","Nawalparasi East":"Gandaki",
  "Syangja":"Gandaki","Parbat":"Gandaki","Baglung":"Gandaki",
  // Lumbini
  "Rukum East":"Lumbini","Rolpa":"Lumbini","Pyuthan":"Lumbini","Gulmi":"Lumbini",
  "Arghakhanchi":"Lumbini","Palpa":"Lumbini","Nawalparasi West":"Lumbini",
  "Rupandehi":"Lumbini","Kapilbastu":"Lumbini","Dang":"Lumbini","Banke":"Lumbini",
  "Bardiya":"Lumbini",
  // Karnali
  "Dolpa":"Karnali","Mugu":"Karnali","Humla":"Karnali","Jumla":"Karnali",
  "Kalikot":"Karnali","Dailekh":"Karnali","Jajarkot":"Karnali","Rukum West":"Karnali",
  "Salyan":"Karnali","Surkhet":"Karnali",
  // Sudurpashchim
  "Bajura":"Sudurpashchim","Bajhang":"Sudurpashchim","Darchula":"Sudurpashchim",
  "Baitadi":"Sudurpashchim","Dadeldhura":"Sudurpashchim","Doti":"Sudurpashchim",
  "Achham":"Sudurpashchim","Kailali":"Sudurpashchim","Kanchanpur":"Sudurpashchim"
};

// Colors by number of partners (choropleth)
function getColor(count) {
  if (count === 0) return "#e9ecef";
  if (count === 1) return "#bee3f8";
  if (count <= 3) return "#63b3ed";
  if (count <= 5) return "#2b6cb0";
  if (count <= 8) return "#1a365d";
  return "#0d1f3c";
}

let map, geojsonLayer, labelsLayer, currentFilter = "all";
let selectedLayer = null;

// ── Initialize map ────────────────────────────────────────
function initMap() {
  map = L.map("map", {
    center: [28.3, 83.8],
    zoom: 7,
    minZoom: 6,
    maxZoom: 11,
    zoomControl: true
  });

  // Clean light basemap (less visual noise than OSM)
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a> contributors © <a href="https://carto.com">CARTO</a>',
    maxZoom: 18
  }).addTo(map);

  // Load GeoJSON
  loadGeoJSON();
  buildOrgFilter();

  // Re-draw labels on zoom
  map.on("zoomend", updateLabels);
}

// ── Load Nepal district boundaries ───────────────────────
function loadGeoJSON() {
  fetch("data/nepal_districts.geojson")
    .then(r => {
      if (!r.ok) throw new Error("GeoJSON not found");
      return r.json();
    })
    .then(data => {
      window._nepalGeoJSON = data;
      geojsonLayer = L.geoJSON(data, {
        style: featureStyle,
        onEachFeature: onEachFeature
      }).addTo(map);

      map.fitBounds(geojsonLayer.getBounds(), { padding: [10, 10] });

      // Add dim overlay outside Nepal using SVG mask
      addNepalMask(data);

      // Add district labels
      labelsLayer = L.layerGroup().addTo(map);
      addDistrictLabels(data);
    })
    .catch(err => {
      console.error("GeoJSON load error:", err);
      document.getElementById("sidebar-content").innerHTML =
        `<div class="empty-state"><div class="icon">⚠️</div>
         <p><strong>GeoJSON not found.</strong><br>Place <code>nepal_districts.geojson</code> inside the <code>data/</code> folder.<br>
         See README for download instructions.</p></div>`;
    });
}

// ── Style a district feature ──────────────────────────────
function featureStyle(feature) {
  const name = feature.properties.DISTRICT || feature.properties.district ||
               feature.properties.NAME_3 || feature.properties.name || "";
  const partners = getPartnersForDistrict(name);
  const count = (currentFilter === "all")
    ? partners.length
    : partners.includes(currentFilter) ? 1 : 0;

  const highlighted = count > 0 || currentFilter === "all";

  return {
    fillColor: (currentFilter === "all") ? getColor(partners.length)
             : partners.includes(currentFilter) ? "#e53e3e" : "#e9ecef",
    weight: 1.2,
    opacity: 1,
    color: "#fff",
    fillOpacity: highlighted ? 0.82 : 0.35
  };
}

// ── Attach events to each district ───────────────────────
function onEachFeature(feature, layer) {
  const rawName = feature.properties.DISTRICT || feature.properties.district ||
                  feature.properties.NAME_3 || feature.properties.name || "Unknown";
  const name = normalizeDistrictName(rawName);

  layer.on({
    mouseover: e => highlightFeature(e, name),
    mouseout:  e => resetHighlight(e),
    click:     e => selectDistrict(e, name, layer)
  });
}

function highlightFeature(e, name) {
  const layer = e.target;
  if (layer !== selectedLayer) {
    layer.setStyle({ weight: 2.5, color: "#ff9900", fillOpacity: 0.9 });
    layer.bringToFront();
  }
}

function resetHighlight(e) {
  const layer = e.target;
  if (layer !== selectedLayer) {
    geojsonLayer.resetStyle(layer);
  }
}

function selectDistrict(e, name, layer) {
  // Deselect previous
  if (selectedLayer && selectedLayer !== layer) {
    geojsonLayer.resetStyle(selectedLayer);
  }
  selectedLayer = layer;
  layer.setStyle({ weight: 3, color: "#ff9900", fillOpacity: 0.9 });
  layer.bringToFront();

  showDistrictInfo(name);
  L.DomEvent.stopPropagation(e);
}

// ── Show district info in sidebar ────────────────────────
function showDistrictInfo(districtName) {
  const partners = getPartnersForDistrict(districtName);
  const province = DISTRICT_PROVINCE[districtName] || "Nepal";

  let html = `
    <div id="district-name">${districtName}</div>
    <div id="district-province">${province} Province</div>`;

  if (partners.length === 0) {
    html += `<div class="section-label">Partner Organisations</div>
             <div class="no-partners">No partners registered in this district.</div>`;
  } else {
    html += `<div class="section-label">Partner Organisations (${partners.length})</div>`;
    partners.forEach(org => {
      const themes = (THEMATIC_AREAS && THEMATIC_AREAS[org]) || [];
      html += `<div class="partner-card">
        <div class="partner-name">${org}</div>
        <div class="section-label" style="margin-top:6px;margin-bottom:4px;">Thematic Areas</div>`;
      if (themes.length > 0) {
        html += `<div class="thematic-tags">`;
        themes.forEach(t => { html += `<span class="theme-tag">${t}</span>`; });
        html += `</div>`;
      } else {
        html += `<div class="theme-placeholder">— To be added —</div>`;
      }
      html += `</div>`;
    });
  }

  document.getElementById("sidebar-content").innerHTML = html;
  document.querySelector("#sidebar-header h2").textContent = "District Details";
}

// ── Build org filter dropdown ─────────────────────────────
function buildOrgFilter() {
  const allOrgs = new Set();
  Object.values(PARTNER_DATA).forEach(d => d.partners.forEach(o => allOrgs.add(o)));

  const select = document.getElementById("org-filter");
  Array.from(allOrgs).sort().forEach(org => {
    const opt = document.createElement("option");
    opt.value = org;
    opt.textContent = org;
    select.appendChild(opt);
  });

  select.addEventListener("change", e => {
    currentFilter = e.target.value;
    if (selectedLayer) {
      geojsonLayer.resetStyle(selectedLayer);
      selectedLayer = null;
    }
    document.getElementById("sidebar-content").innerHTML = defaultSidebarHTML();
    document.querySelector("#sidebar-header h2").textContent = "Click a district";
    geojsonLayer.eachLayer(l => geojsonLayer.resetStyle(l));
  });
}

// ── Utility: get partners, normalizing GeoJSON name ───────
function getPartnersForDistrict(name) {
  const normalized = normalizeDistrictName(name);
  return (PARTNER_DATA[normalized] && PARTNER_DATA[normalized].partners) || [];
}

// Normalize GeoJSON district names (ALL CAPS) to match our data keys (Title Case)
// Exact names taken directly from the GeoJSON DISTRICT property
const NAME_OVERRIDES = {
  "ACHHAM": "Achham",
  "ARGHAKHANCHI": "Arghakhanchi",
  "BAGLUNG": "Baglung",
  "BAITADI": "Baitadi",
  "BAJHANG": "Bajhang",
  "BAJURA": "Bajura",
  "BANKE": "Banke",
  "BARA": "Bara",
  "BARDIYA": "Bardiya",
  "BHAKTAPUR": "Bhaktapur",
  "BHOJPUR": "Bhojpur",
  "CHITWAN": "Chitwan",
  "DADELDHURA": "Dadeldhura",
  "DAILEKH": "Dailekh",
  "DANG": "Dang",
  "DARCHULA": "Darchula",
  "DHADING": "Dhading",
  "DHANKUTA": "Dhankuta",
  "DHANUSA": "Dhanusha",
  "DOLAKHA": "Dolakha",
  "DOLPA": "Dolpa",
  "DOTI": "Doti",
  "EASTERN RUKUM": "Rukum East",
  "GORKHA": "Gorkha",
  "GULMI": "Gulmi",
  "HUMLA": "Humla",
  "ILAM": "Ilam",
  "JAJARKOT": "Jajarkot",
  "JHAPA": "Jhapa",
  "JUMLA": "Jumla",
  "KAILALI": "Kailali",
  "KALIKOT": "Kalikot",
  "KANCHANPUR": "Kanchanpur",
  "KAPILVASTU": "Kapilbastu",
  "KASKI": "Kaski",
  "KATHMANDU": "Kathmandu",
  "KAVREPALANCHOWK": "Kavrepalanchok",
  "KHOTANG": "Khotang",
  "LALITPUR": "Lalitpur",
  "LAMJUNG": "Lamjung",
  "MAHOTTARI": "Mahottari",
  "MAKWANPUR": "Makawanpur",
  "MANANG": "Manang",
  "MORANG": "Morang",
  "MUGU": "Mugu",
  "MUSTANG": "Mustang",
  "MYAGDI": "Myagdi",
  "NAWALPUR": "Nawalparasi East",
  "NUWAKOT": "Nuwakot",
  "OKHALDHUNGA": "Okhaldhunga",
  "PALPA": "Palpa",
  "PANCHTHAR": "Panchthar",
  "PARASI": "Nawalparasi West",
  "PARBAT": "Parbat",
  "PARSA": "Parsa",
  "PYUTHAN": "Pyuthan",
  "RAMECHHAP": "Ramechhap",
  "RASUWA": "Rasuwa",
  "RAUTAHAT": "Rautahat",
  "ROLPA": "Rolpa",
  "RUPANDEHI": "Rupandehi",
  "SALYAN": "Salyan",
  "SANKHUWASABHA": "Sankhuwasabha",
  "SAPTARI": "Saptari",
  "SARLAHI": "Sarlahi",
  "SINDHULI": "Sindhuli",
  "SINDHUPALCHOK": "Sindhupalchok",
  "SIRAHA": "Siraha",
  "SOLUKHUMBU": "Solukhumbu",
  "SUNSARI": "Sunsari",
  "SURKHET": "Surkhet",
  "SYANGJA": "Syangja",
  "TANAHU": "Tanahu",
  "TAPLEJUNG": "Taplejung",
  "TEHRATHUM": "Terhathum",
  "UDAYAPUR": "Udayapur",
  "WESTERN RUKUM": "Rukum West",
};

function normalizeDistrictName(raw) {
  const upper = raw.toUpperCase().trim();
  if (NAME_OVERRIDES[upper]) return NAME_OVERRIDES[upper];
  // Fallback: title-case (handles any unexpected names)
  return raw.trim().replace(/\b\w/g, c => c.toUpperCase());
}

// ── Nepal mask: dims everything outside Nepal ────────────
function addNepalMask(geojsonData) {
  // Big bounding rectangle covering the whole world
  const world = [[-90, -180], [-90, 180], [90, 180], [90, -180], [-90, -180]];

  // Collect all Nepal coordinates as holes in the rectangle
  // We use a single large polygon with Nepal cut out as a hole
  const nepalCoords = [];
  geojsonData.features.forEach(f => {
    const geom = f.geometry;
    const polys = geom.type === "Polygon" ? [geom.coordinates]
                : geom.type === "MultiPolygon" ? geom.coordinates : [];
    polys.forEach(poly => {
      poly.forEach(ring => {
        nepalCoords.push(ring.map(c => [c[1], c[0]])); // [lon,lat] → [lat,lon]
      });
    });
  });

  // Build a GeoJSON Feature: world rectangle with Nepal holes
  const maskCoords = [
    [[-90,-180],[-90,180],[90,180],[90,-180],[-90,-180]], // outer world
    ...geojsonData.features.flatMap(f => {
      const g = f.geometry;
      const polys = g.type === "Polygon" ? [g.coordinates]
                  : g.type === "MultiPolygon" ? g.coordinates : [];
      return polys.flatMap(p => p.map(ring => ring.map(c => [c[0], c[1]])));
    })
  ];

  L.geoJSON({
    type: "Feature",
    geometry: { type: "Polygon", coordinates: maskCoords }
  }, {
    style: {
      fillColor: "#f0f4f8",
      fillOpacity: 0.72,
      color: "none",
      weight: 0,
      interactive: false
    }
  }).addTo(map);
}

// ── District labels ───────────────────────────────────────
function addDistrictLabels(geojsonData) {
  if (!labelsLayer) return;
  labelsLayer.clearLayers();

  const zoom = map.getZoom();
  // Only show labels from zoom 7 upward; smaller font at lower zoom
  if (zoom < 7) return;

  const fontSize = zoom >= 9 ? 11 : zoom >= 8 ? 9 : 8;

  geojsonData.features.forEach(f => {
    const rawName = f.properties.DISTRICT || f.properties.district || "";
    const name = normalizeDistrictName(rawName);

    // Get centroid approximation from bounds
    const layer = L.geoJSON(f);
    const center = layer.getBounds().getCenter();

    const label = L.marker(center, {
      icon: L.divIcon({
        className: "",
        html: `<div style="
          font-size:${fontSize}px;
          font-weight:600;
          color:#1a3c5e;
          text-shadow: 1px 1px 2px rgba(255,255,255,0.9), -1px -1px 2px rgba(255,255,255,0.9),
                       1px -1px 2px rgba(255,255,255,0.9), -1px 1px 2px rgba(255,255,255,0.9);
          white-space:nowrap;
          pointer-events:none;
          user-select:none;
          text-align:center;
          transform:translate(-50%,-50%);
        ">${name}</div>`,
        iconSize: [0, 0],
        iconAnchor: [0, 0]
      }),
      interactive: false
    });

    labelsLayer.addLayer(label);
  });
}

function updateLabels() {
  // Re-fetch stored data reference to redraw labels
  if (window._nepalGeoJSON) addDistrictLabels(window._nepalGeoJSON);
}

function defaultSidebarHTML() {
  return `<div class="empty-state">
    <div class="icon">🗺️</div>
    <p>Click on any district to see which partner organisations are working there.</p>
  </div>`;
}

// ── Reset map selection when clicking blank area ──────────
document.addEventListener("DOMContentLoaded", () => {
  initMap();

  // Stats
  const totalDistricts = Object.keys(PARTNER_DATA).length;
  const totalOrgs = new Set(Object.values(PARTNER_DATA).flatMap(d => d.partners)).size;
  document.getElementById("stat-districts").textContent = totalDistricts;
  document.getElementById("stat-orgs").textContent = totalOrgs;
});
