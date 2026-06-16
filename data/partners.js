// Partner Organisations by District
// District names follow official Nepal administrative boundary names.
//
// IMPORTANT: Consortium membership is tracked PER DISTRICT ASSIGNMENT, not
// per organization — because some orgs (e.g. Advocacy Forum Nepal) work
// under different consortiums in different districts. Each partner entry
// below has its own "consortium" field reflecting which CPS consortium
// (GIZ-CPS / KURVE Wustrow / PBI) funds/coordinates that specific
// organization-district assignment.
//
// Each partner entry also includes the thematic area codes they work on in
// that district (e.g. "HR", "W", "DM" — shown as-is on the map, full names
// available as hover tooltips via THEME_LEGEND below).

const PARTNER_DATA = {
  "Siraha": {
    partners: [
      { org: "COCAP", themes: ["HR", "W"], consortium: "PBI" },
      { org: "SNP", themes: ["HR"], consortium: "KURVE Wustrow" },
      { org: "APEC", themes: ["CSM", "DM"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["DM", "TJ"], consortium: "KURVE Wustrow" },
      { org: "CDWN", themes: ["W"], consortium: "KURVE Wustrow" },
      { org: "AF", themes: ["TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Saptari": {
    partners: [
      { org: "COCAP", themes: ["HR", "W"], consortium: "PBI" },
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" },
      { org: "APEC", themes: ["DM", "PE"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["DM", "TJ"], consortium: "KURVE Wustrow" },
      { org: "CDWN", themes: ["PE", "W"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Dhanusha": {
    partners: [
      { org: "COCAP", themes: ["DP", "HR"], consortium: "PBI" },
      { org: "SNP", themes: ["W"], consortium: "KURVE Wustrow" },
      { org: "APEC", themes: ["DM", "W"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["DM", "TJ"], consortium: "KURVE Wustrow" },
      { org: "CDWN", themes: ["PE", "W"], consortium: "KURVE Wustrow" },
      { org: "AF", themes: ["TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Mahottari": {
    partners: [
      { org: "COCAP", themes: ["HR", "W"], consortium: "PBI" },
      { org: "SNP", themes: ["G"], consortium: "KURVE Wustrow" },
      { org: "APEC", themes: ["DM", "Y"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["HR", "TJ"], consortium: "KURVE Wustrow" },
      { org: "CDWN", themes: ["PE"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Sarlahi": {
    partners: [
      { org: "COCAP", themes: ["DP", "HR"], consortium: "PBI" },
      { org: "SNP", themes: ["DM"], consortium: "KURVE Wustrow" },
      { org: "APEC", themes: ["DM", "PE"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["PE"], consortium: "KURVE Wustrow" }
    ]
  },
  "Rautahat": {
    partners: [
      { org: "COCAP", themes: ["HR"], consortium: "PBI" },
      { org: "SNP", themes: ["DM"], consortium: "KURVE Wustrow" },
      { org: "APEC", themes: ["DM", "PE"], consortium: "GIZ-CPS" },
      { org: "Mandala Theatre", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["PE", "Y"], consortium: "KURVE Wustrow" }
    ]
  },
  "Bara": {
    partners: [
      { org: "COCAP", themes: ["HR"], consortium: "PBI" },
      { org: "APEC", themes: ["DM", "PE"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["G"], consortium: "KURVE Wustrow" }
    ]
  },
  "Parsa": {
    partners: [
      { org: "COCAP", themes: ["HR"], consortium: "PBI" },
      { org: "APEC", themes: ["DM", "PE"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["PE", "Y"], consortium: "KURVE Wustrow" }
    ]
  },
  "Solukhumbu": {
    partners: [
      { org: "HURF", themes: ["DM", "W"], consortium: "GIZ-CPS" },
      { org: "AF", themes: ["TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Okhaldhunga": {
    partners: [
      { org: "HURF", themes: ["DM", "W"], consortium: "GIZ-CPS" }
    ]
  },
  "Khotang": {
    partners: [
      { org: "HURF", themes: ["DM", "W"], consortium: "GIZ-CPS" }
    ]
  },
  "Udayapur": {
    partners: [
      { org: "HURF", themes: ["DM", "W"], consortium: "GIZ-CPS" }
    ]
  },
  "Bhojpur": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" }
    ]
  },
  "Sankhuwasabha": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" },
      { org: "Mandala Theatre", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["DM", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Sunsari": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["DM", "TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Morang": {
    partners: [
      { org: "HURF", themes: ["DM", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["HR", "TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Jhapa": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["HR", "TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Ilam": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["HR", "TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Panchthar": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" }
    ]
  },
  "Taplejung": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" }
    ]
  },
  "Dhankuta": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" }
    ]
  },
  "Terhathum": {
    partners: [
      { org: "HURF", themes: ["DM", "Y"], consortium: "GIZ-CPS" }
    ]
  },
  "Bajhang": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Humla": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Bardiya": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "CVC Bardiya", themes: ["TJ"], consortium: "GIZ-CPS" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "NA", themes: ["TJ", "Y"], consortium: "KURVE Wustrow" }
    ]
  },
  "Mustang": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Kathmandu": {
    partners: [
      { org: "Mandala Theatre", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "Pro Public", themes: ["DM"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["HR", "TJ"], consortium: "KURVE Wustrow" },
      { org: "CDWN", themes: ["HR"], consortium: "KURVE Wustrow" },
      { org: "AF", themes: ["TJ"], consortium: "KURVE Wustrow" },
      { org: "NPI", themes: ["TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" },
      { org: "NA", themes: ["MH", "PE"], consortium: "KURVE Wustrow" }
    ]
  },
  "Lalitpur": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "Pro Public", themes: ["DM"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["HR", "TJ"], consortium: "KURVE Wustrow" },
      { org: "CDWN", themes: ["DM"], consortium: "KURVE Wustrow" },
      { org: "NPI", themes: ["TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" },
      { org: "NA", themes: ["MH", "PE"], consortium: "KURVE Wustrow" }
    ]
  },
  "Bhaktapur": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "Pro Public", themes: ["DM"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["DM"], consortium: "KURVE Wustrow" },
      { org: "NPI", themes: ["TJ"], consortium: "KURVE Wustrow" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Kavrepalanchok": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["DM"], consortium: "KURVE Wustrow" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Ramechhap": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["DM"], consortium: "KURVE Wustrow" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Sindhuli": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["DM"], consortium: "KURVE Wustrow" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Dolakha": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["HR", "TJ"], consortium: "KURVE Wustrow" },
      { org: "CDWN", themes: ["DM", "HR"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Sindhupalchok": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["HR"], consortium: "KURVE Wustrow" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Rasuwa": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["HR"], consortium: "KURVE Wustrow" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Nuwakot": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["HR"], consortium: "KURVE Wustrow" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Dhading": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["HR"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Chitwan": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "CDWN", themes: ["DM"], consortium: "KURVE Wustrow" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Makawanpur": {
    partners: [
      { org: "AMARC-AP", themes: ["CSM", "DP"], consortium: "GIZ-CPS" },
      { org: "Pro Public", themes: ["DM"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["HR", "TJ"], consortium: "KURVE Wustrow" },
      { org: "CDWN", themes: ["DM"], consortium: "KURVE Wustrow" },
      { org: "BGTBK", themes: ["PE", "TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Kapilbastu": {
    partners: [
      { org: "Pro Public", themes: ["DM"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["G", "W"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "NA", themes: ["MH", "W"], consortium: "KURVE Wustrow" },
      { org: "MAHURI Home", themes: ["DM", "HR"], consortium: "PBI" }
    ]
  },
  "Nawalparasi East": {
    partners: [
      { org: "Pro Public", themes: ["DM"], consortium: "GIZ-CPS" },
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "NA", themes: ["PE", "Y"], consortium: "KURVE Wustrow" }
    ]
  },
  "Kailali": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["TJ", "W"], consortium: "KURVE Wustrow" },
      { org: "AF", themes: ["Y"], consortium: "PBI" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Kanchanpur": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "AF", themes: ["Y"], consortium: "PBI" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Surkhet": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["TJ", "W"], consortium: "KURVE Wustrow" },
      { org: "AF", themes: ["Y"], consortium: "PBI" },
      { org: "NPI", themes: ["TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Rukum West": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "AF", themes: ["Y"], consortium: "KURVE Wustrow" },
      { org: "NPI", themes: ["TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Banke": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["G", "W"], consortium: "KURVE Wustrow" },
      { org: "NPI", themes: ["TJ"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "NA", themes: ["MH"], consortium: "KURVE Wustrow" },
      { org: "MAHURI Home", themes: ["DM", "HR"], consortium: "PBI" }
    ]
  },
  "Dang": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["G", "W"], consortium: "KURVE Wustrow" },
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" },
      { org: "NA", themes: ["MH"], consortium: "KURVE Wustrow" },
      { org: "MAHURI Home", themes: ["DM", "HR"], consortium: "PBI" }
    ]
  },
  "Rukum East": {
    partners: [
      { org: "TSK", themes: ["TJ", "W"], consortium: "GIZ-CPS" },
      { org: "WHR", themes: ["TJ", "W"], consortium: "KURVE Wustrow" },
      { org: "NPI", themes: ["TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Achham": {
    partners: [
      { org: "WHR", themes: ["TJ", "W"], consortium: "KURVE Wustrow" }
    ]
  },
  "Doti": {
    partners: [
      { org: "WHR", themes: ["TJ", "W"], consortium: "KURVE Wustrow" },
      { org: "AF", themes: ["TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Dadeldhura": {
    partners: [
      { org: "WHR", themes: ["TJ", "W"], consortium: "KURVE Wustrow" },
      { org: "AF", themes: ["HR"], consortium: "KURVE Wustrow" }
    ]
  },
  "Kalikot": {
    partners: [
      { org: "WHR", themes: ["TJ", "W"], consortium: "KURVE Wustrow" },
      { org: "AF", themes: ["HR"], consortium: "KURVE Wustrow" }
    ]
  },
  "Myagdi": {
    partners: [
      { org: "WHR", themes: ["G", "W"], consortium: "KURVE Wustrow" }
    ]
  },
  "Kaski": {
    partners: [
      { org: "WHR", themes: ["G", "W"], consortium: "KURVE Wustrow" },
      { org: "AF", themes: ["TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Lamjung": {
    partners: [
      { org: "WHR", themes: ["G", "W"], consortium: "KURVE Wustrow" }
    ]
  },
  "Dailekh": {
    partners: [
      { org: "AF", themes: ["HR"], consortium: "KURVE Wustrow" }
    ]
  },
  "Rolpa": {
    partners: [
      { org: "AF", themes: ["TJ"], consortium: "KURVE Wustrow" }
    ]
  },
  "Baglung": {
    partners: [
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Gorkha": {
    partners: [
      { org: "NNDCV", themes: ["PE", "TJ"], consortium: "GIZ-CPS" }
    ]
  },
  "Arghakhanchi": {
    partners: [
      { org: "NA", themes: ["PE", "Y"], consortium: "KURVE Wustrow" }
    ]
  },
  "Nawalparasi West": { partners: [] },
};
// ─────────────────────────────────────────────────────────
// Organization Registry — full names for every partner organization.
// Consortium membership is NOT listed here since it varies per district
// (see "consortium" field on each partner entry in PARTNER_DATA above).
//
// Add new organizations here first; once they're assigned to districts in
// PARTNER_DATA above (with a consortium per assignment), they'll
// automatically appear on the map.
// ─────────────────────────────────────────────────────────
const ORG_REGISTRY = {
  "TSK":             { full: "The Story Kitchen" },
  "Pro Public":      { full: "Pro Public" },
  "Mandala Theatre": { full: "Mandala Theatre" },
  "HURF":            { full: "Human Rights Forum" },
  "APEC":            { full: "All People Development Center (SAMAGRA)" },
  "CVC Bardiya":     { full: "Conflict Victims Committee (CVC) - Bardiya" },
  "NNDCV":           { full: "National Network of Disabled Conflict Victims" },
  "AMARC-AP":        { full: "AMARC Asia-Pacific" },
  "WHR":             { full: "Women for Human Rights" },
  "CDWN":            { full: "Center for Dalit Women Nepal" },
  "NA":              { full: "Nagarik Aawaz" },
  "AF":              { full: "Advocacy Forum Nepal" },
  "BGTBK":           { full: "Nepal Bikalpa Gyan Tatha Bikas Kendra" },
  "SNP":             { full: "Support Nepal" },
  "NTTP-I":          { full: "Nepal Transition to Peace Institute" }, // not yet active in any district
  "NPI":             { full: "Nepal Peacebuilding Initiative" },
  "MAHURI Home":     { full: "Madesh Human Rights Home" },
  "COCAP":           { full: "Collective Campaign For Peace" },
};

// Full names for theme codes — shown as tooltip on hover
const THEME_LEGEND = {
  "HR": "Human Rights",
  "W": "Women's Empowerment",
  "DP": "Digital Peacebuilding",
  "DM": "Dialogue / Mediation",
  "G": "Governance",
  "Y": "Youth Work",
  "PE": "Peace Education",
  "TJ": "Transitional Justice",
  "CSM": "Conflict-sensitive Media & Journalism",
  "MH": "Mental Health & Psycho-Social Support",
};
