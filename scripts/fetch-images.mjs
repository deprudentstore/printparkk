// Fetches REAL, legally-licensed photos from the Pexels API (free, no
// attribution required — https://www.pexels.com/license/) and writes them
// to data/images.json. seed.mjs and Hero.tsx read from that file, so once
// you run this once, the whole site is showing real working photographs
// instead of random picsum placeholders.
//
// Get a free key (instant, no card required): https://www.pexels.com/api/
// Then run:  PEXELS_API_KEY="your-key" npm run fetch-images

import { writeFile } from "fs/promises";

const KEY = process.env.PEXELS_API_KEY;
if (!KEY) {
  console.error("Missing PEXELS_API_KEY. Get a free key at https://www.pexels.com/api/");
  console.error('Then run: PEXELS_API_KEY="your-key" npm run fetch-images');
  process.exit(1);
}

async function search(query, per_page = 1) {
  const res = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${per_page}&orientation=square`, {
    headers: { Authorization: KEY }
  });
  if (!res.ok) throw new Error(`Pexels error ${res.status} for "${query}"`);
  const json = await res.json();
  return json.photos.map((p) => p.src.large);
}

const DESIGN_QUERIES = {
  "Stay Wild": "streetwear black t-shirt model",
  Animals: "lion graphic t-shirt",
  "Explore the Unknown": "astronaut space t-shirt design",
  Anime: "anime style illustration art",
  Classic: "vintage retro t-shirt",
  "The Howling Call": "wolf mountain adventure design"
};

const HERO_QUERIES = ["black graphic t-shirt hanging", "white t-shirt mockup studio", "streetwear t-shirt hanger"];

async function run() {
  console.log("Fetching real photos from Pexels...");
  const designs = {};
  for (const [title, query] of Object.entries(DESIGN_QUERIES)) {
    const [url] = await search(query, 1);
    designs[title] = url;
    console.log(`  ✓ ${title} → ${query}`);
  }

  const hero = [];
  for (const query of HERO_QUERIES) {
    const [url] = await search(query, 1);
    hero.push(url);
    console.log(`  ✓ hero → ${query}`);
  }

  await writeFile(new URL("../data/images.json", import.meta.url), JSON.stringify({ designs, hero }, null, 2));
  console.log("\nSaved to data/images.json ✅  Now run: npm run seed");
}

run().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
