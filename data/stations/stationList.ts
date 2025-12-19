export type Zone = "All" | "Zone 1" | "Zone 2" | "Zone 3";

export const ZONES: Zone[] = ["All", "Zone 1", "Zone 2", "Zone 3"];


export type Station = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  zone: "Zone 1" | "Zone 2" | "Zone 3";
  city: string;
  importanceScore: number; // 1–100
  featuredRank?: number;   // 1, 2, 3 = Top Stations
};
export const STATIONS: Station[] = [
  // ===== FEATURED / CORE =====
  {
    id: "calgary-downtown",
    name: "Calgary Downtown",
    tagline: "Central Business District",
    image: "/stations/calgary-downtown.png",
    city: "Calgary",
    zone: "Zone 1",
    importanceScore: 98,
    featuredRank: 1,
  },
  {
    id: "red-deer-central",
    name: "Red Deer Central",
    tagline: "Midway City Hub",
    image: "/stations/red-deer.png",
    city: "Red Deer",
    zone: "Zone 2",
    importanceScore: 92,
    featuredRank: 2,
  },
  {
    id: "edmonton-downtown",
    name: "Edmonton Downtown",
    tagline: "Urban Core Hub",
    image: "/stations/edmonton-downtown.png",
    city: "Edmonton",
    zone: "Zone 1",
    importanceScore: 96,
    featuredRank: 4,
  },
  {
    id: "bow-valley",
    name: "BowValley College",
    tagline: "Small Shops",
    image: "/stations/bow-valley.png",
    city: "Calgary",
    zone: "Zone 1",
    importanceScore: 90,
    featuredRank: 3,
  },

  // ===== MAJOR CONNECTORS =====
  {
    id: "calgary-yyc",
    name: "Calgary YYC",
    tagline: "International Gateway",
    image: "/stations/yyc.png",
    city: "Calgary",
    zone: "Zone 1",
    importanceScore: 90,
  },
  {
    id: "airdrie",
    name: "Airdrie",
    tagline: "Regional Connector",
    image: "/stations/airdrie.png",
    city: "Airdrie",
    zone: "Zone 2",
    importanceScore: 82,
  },
  {
    id: "leduc",
    name: "Leduc",
    tagline: "South Edmonton Access",
    image: "/stations/leduc.png",
    city: "Leduc",
    zone: "Zone 2",
    importanceScore: 78,
  },

  // ===== COMMUNITY STOPS =====
  {
    id: "olds",
    name: "Olds",
    tagline: "College Town Stop",
    image: "/stations/olds.png",
    city: "Olds",
    zone: "Zone 3",
    importanceScore: 65,
  },
  {
    id: "ponoka",
    name: "Ponoka",
    tagline: "Community Access Point",
    image: "/stations/ponoka.png",
    city: "Ponoka",
    zone: "Zone 3",
    importanceScore: 60,
  },
  {
    id: "wetaskiwin",
    name: "Wetaskiwin",
    tagline: "Southern Gateway",
    image: "/stations/wetaskiwin.png",
    city: "Wetaskiwin",
    zone: "Zone 3",
    importanceScore: 62,
  },
];
