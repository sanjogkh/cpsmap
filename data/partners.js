// Partner Organisations by District
// District names follow official Nepal administrative boundary names
// Each partner entry includes the thematic area codes they work on in that district
// (e.g. "HR", "W", "DM" — shown as-is on the map).
//
// Optional: to display full theme names as tooltips, fill in THEME_LEGEND at the
// bottom of this file, e.g. THEME_LEGEND = { "HR": "Human Rights", "W": "WASH" }

const PARTNER_DATA = {
  "Siraha": {
    partners: [
      { org: "COCAP", themes: ["HR", "W"] },
      { org: "SNP", themes: ["HR"] },
      { org: "APEC", themes: ["CSM", "DM"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["DM", "TJ"] },
      { org: "CDWN", themes: ["W"] },
      { org: "AF", themes: ["TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Saptari": {
    partners: [
      { org: "COCAP", themes: ["HR", "W"] },
      { org: "HURF", themes: ["DM", "Y"] },
      { org: "APEC", themes: ["DM", "PE"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["DM", "TJ"] },
      { org: "CDWN", themes: ["PE", "W"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Dhanusha": {
    partners: [
      { org: "COCAP", themes: ["DP", "HR"] },
      { org: "SNP", themes: ["W"] },
      { org: "APEC", themes: ["DM", "W"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["DM", "TJ"] },
      { org: "CDWN", themes: ["PE", "W"] },
      { org: "AF", themes: ["TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Mahottari": {
    partners: [
      { org: "COCAP", themes: ["HR", "W"] },
      { org: "SNP", themes: ["G"] },
      { org: "APEC", themes: ["DM", "Y"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["HR", "TJ"] },
      { org: "CDWN", themes: ["PE"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Sarlahi": {
    partners: [
      { org: "COCAP", themes: ["DP", "HR"] },
      { org: "SNP", themes: ["DM"] },
      { org: "APEC", themes: ["DM", "PE"] },
      { org: "CDWN", themes: ["PE"] }
    ]
  },
  "Rautahat": {
    partners: [
      { org: "COCAP", themes: ["HR"] },
      { org: "SNP", themes: ["DM"] },
      { org: "APEC", themes: ["DM", "PE"] },
      { org: "Mandala Theatre", themes: ["PE", "TJ"] },
      { org: "CDWN", themes: ["PE", "Y"] }
    ]
  },
  "Bara": {
    partners: [
      { org: "COCAP", themes: ["HR"] },
      { org: "APEC", themes: ["DM", "PE"] },
      { org: "CDWN", themes: ["G"] }
    ]
  },
  "Parsa": {
    partners: [
      { org: "COCAP", themes: ["HR"] },
      { org: "APEC", themes: ["DM", "PE"] },
      { org: "CDWN", themes: ["PE", "Y"] }
    ]
  },
  "Solukhumbu": {
    partners: [
      { org: "HURF", themes: ["DM", "W"] },
      { org: "AF", themes: ["TJ"] }
    ]
  },
  "Okhaldhunga": {
    partners: [
      { org: "HURF", themes: ["DM", "W"] }
    ]
  },
  "Khotang": {
    partners: [
      { org: "HURF", themes: ["DM", "W"] }
    ]
  },
  "Udayapur": {
    partners: [
      { org: "HURF", themes: ["DM", "W"] }
    ]
  },
  "Bhojpur": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"] }
    ]
  },
  "Sankhuwasabha": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"] },
      { org: "Mandala Theatre", themes: ["PE", "TJ"] },
      { org: "WHR", themes: ["DM", "TJ"] }
    ]
  },
  "Sunsari": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"] },
      { org: "WHR", themes: ["DM", "TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Morang": {
    partners: [
      { org: "HURF", themes: ["DM", "W"] },
      { org: "WHR", themes: ["HR", "TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Jhapa": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"] },
      { org: "WHR", themes: ["HR", "TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Ilam": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"] },
      { org: "WHR", themes: ["HR", "TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Panchthar": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"] }
    ]
  },
  "Taplejung": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"] }
    ]
  },
  "Dhankuta": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"] }
    ]
  },
  "Terhathum": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"] }
    ]
  },
  "Bajhang": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"] }
    ]
  },
  "Humla": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"] }
    ]
  },
  "Bardiya": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "CVC Bardiya", themes: ["TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] },
      { org: "NA", themes: ["TJ", "Y"] }
    ]
  },
  "Mustang": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"] }
    ]
  },
  "Kathmandu": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"] },
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "Pro Public", themes: ["DM"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["HR", "TJ"] },
      { org: "CDWN", themes: ["HR"] },
      { org: "AF", themes: ["TJ"] },
      { org: "NPI", themes: ["TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] },
      { org: "BGTBK", themes: ["PE", "TJ"] },
      { org: "NA", themes: ["MH", "PE"] }
    ]
  },
  "Lalitpur": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "Pro Public", themes: ["DM"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["HR", "TJ"] },
      { org: "CDWN", themes: ["DM"] },
      { org: "NPI", themes: ["TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] },
      { org: "BGTBK", themes: ["PE", "TJ"] },
      { org: "NA", themes: ["MH", "PE"] }
    ]
  },
  "Bhaktapur": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "Pro Public", themes: ["DM"] },
      { org: "CDWN", themes: ["DM"] },
      { org: "NPI", themes: ["TJ"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Kavrepalanchok": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "CDWN", themes: ["DM"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Ramechhap": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "CDWN", themes: ["DM"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Sindhuli": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "CDWN", themes: ["DM"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Dolakha": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["HR", "TJ"] },
      { org: "CDWN", themes: ["DM", "HR"] },
      { org: "NNDCV", themes: ["PE", "TJ"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Sindhupalchok": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "CDWN", themes: ["HR"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Rasuwa": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "CDWN", themes: ["HR"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Nuwakot": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "CDWN", themes: ["HR"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Dhading": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "CDWN", themes: ["HR"] },
      { org: "NNDCV", themes: ["PE", "TJ"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Chitwan": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "CDWN", themes: ["DM"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Makawanpur": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"] },
      { org: "Pro Public", themes: ["DM"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["HR", "TJ"] },
      { org: "CDWN", themes: ["DM"] },
      { org: "BGTBK", themes: ["PE", "TJ"] }
    ]
  },
  "Kapilbastu": {
    partners: [
      { org: "Pro Public", themes: ["DM"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["G", "W"] },
      { org: "NNDCV", themes: ["PE", "TJ"] },
      { org: "NA", themes: ["MH", "W"] },
      { org: "MAHURI Home", themes: ["DM", "HR"] }
    ]
  },
  "Nawalparasi East": {
    partners: [
      { org: "Pro Public", themes: ["DM"] },
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "NA", themes: ["PE", "Y"] }
    ]
  },
  "Kailali": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["TJ", "W"] },
      { org: "AF", themes: ["Y"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Kanchanpur": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "AF", themes: ["Y"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Surkhet": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["TJ", "W"] },
      { org: "AF", themes: ["Y"] },
      { org: "NPI", themes: ["TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Rukum West": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "AF", themes: ["Y"] },
      { org: "NPI", themes: ["TJ"] }
    ]
  },
  "Banke": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["G", "W"] },
      { org: "NPI", themes: ["TJ"] },
      { org: "NNDCV", themes: ["PE", "TJ"] },
      { org: "NA", themes: ["MH"] }
    ]
  },
  "Dang": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["G", "W"] },
      { org: "NNDCV", themes: ["PE", "TJ"] },
      { org: "NA", themes: ["MH"] },
      { org: "MAHURI Home", themes: ["DM", "HR"] }
    ]
  },
  "Rukum East": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"] },
      { org: "WHR", themes: ["TJ", "W"] },
      { org: "NPI", themes: ["TJ"] }
    ]
  },
  "Achham": {
    partners: [
      { org: "WHR", themes: ["TJ", "W"] }
    ]
  },
  "Doti": {
    partners: [
      { org: "WHR", themes: ["TJ", "W"] },
      { org: "AF", themes: ["TJ"] }
    ]
  },
  "Dadeldhura": {
    partners: [
      { org: "WHR", themes: ["TJ", "W"] },
      { org: "AF", themes: ["HR"] }
    ]
  },
  "Kalikot": {
    partners: [
      { org: "WHR", themes: ["TJ", "W"] },
      { org: "AF", themes: ["HR"] }
    ]
  },
  "Myagdi": {
    partners: [
      { org: "WHR", themes: ["G", "W"] }
    ]
  },
  "Kaski": {
    partners: [
      { org: "WHR", themes: ["G", "W"] },
      { org: "AF", themes: ["TJ"] }
    ]
  },
  "Lamjung": {
    partners: [
      { org: "WHR", themes: ["G", "W"] }
    ]
  },
  "Dailekh": {
    partners: [
      { org: "AF", themes: ["HR"] }
    ]
  },
  "Rolpa": {
    partners: [
      { org: "AF", themes: ["TJ"] }
    ]
  },
  "Baglung": {
    partners: [
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Gorkha": {
    partners: [
      { org: "NNDCV", themes: ["PE", "TJ"] }
    ]
  },
  "Arghakhanchi": {
    partners: [
      { org: "NA", themes: ["PE", "Y"] }
    ]
  },
  "Nawalparasi West": { partners: [] },
};

// ─────────────────────────────────────────────────────────
// Organization Registry — full names, acronyms, and consortium membership
// Every partner org (mapped or not yet mapped to a district) is listed here.
// "consortiums" is an array because some orgs belong to multiple consortia
// (e.g. Advocacy Forum Nepal works under both KURVE Wustrow and PBI).
//
// Add new organizations here first; once they're assigned to districts in
// PARTNER_DATA above, they'll automatically appear on the map.
// ─────────────────────────────────────────────────────────
const ORG_REGISTRY = {
  // ── GIZ-CPS partners ──
  "TSK":             { full: "The Story Kitchen", consortiums: ["GIZ-CPS"] },
  "Pro Public":      { full: "Pro Public", consortiums: ["GIZ-CPS"] },
  "Mandala Theatre": { full: "Mandala Theatre", consortiums: ["GIZ-CPS"] },
  "HURF":            { full: "Human Rights Forum", consortiums: ["GIZ-CPS"] },
  "APEC":            { full: "All People Development Center (SAMAGRA)", consortiums: ["GIZ-CPS"] },
  "CVC Bardiya":     { full: "Conflict Victims Committee (CVC) - Bardiya", consortiums: ["GIZ-CPS"] },
  "NNDCV":           { full: "National Network of Disabled Conflict Victims", consortiums: ["GIZ-CPS"] },
  "AMARC-AP":        { full: "AMARC Asia-Pacific", consortiums: ["GIZ-CPS"] },

  // ── KURVE Wustrow partners ──
  "WHR":             { full: "Women for Human Rights", consortiums: ["KURVE Wustrow"] },
  "CDWN":            { full: "Center for Dalit Women Nepal", consortiums: ["KURVE Wustrow"] },
  "NA":              { full: "Nagarik Aawaz", consortiums: ["KURVE Wustrow"] },
  "AF":              { full: "Advocacy Forum Nepal", consortiums: ["KURVE Wustrow", "PBI"] },
  "BGTBK":           { full: "Nepal Bikalpa Gyan Tatha Bikas Kendra", consortiums: ["KURVE Wustrow"] },
  "SNP":             { full: "Support Nepal", consortiums: ["KURVE Wustrow"] },
  "NTTP-I":          { full: "Nepal Transition to Peace Institute", consortiums: ["KURVE Wustrow"] }, // not yet active in any district
  "NPI":             { full: "Nepal Peacebuilding Initiative", consortiums: ["KURVE Wustrow"] },

  // ── PBI (Peace Brigades International) partners ──
  "MAHURI Home":     { full: "Madesh Human Rights Home", consortiums: ["PBI"] },
  "COCAP":           { full: "Collective Campaign For Peace", consortiums: ["PBI"] },
};

// Optional: full names for theme codes (shown as tooltip on hover, if filled in)
const THEME_LEGEND = {
  // "HR": "Human Rights",
  // "W": "Water & Sanitation",
  // "DP": "Disaster Preparedness",
  // "DM": "Disaster Management",
  // "G": "Governance",
  // "Y": "Youth",
  // "PE": "Peacebuilding & Empowerment",
  // "TJ": "Transitional Justice",
  // "CSM": "Civil Society Mobilization",
  // "MH": "Mental Health",
};
