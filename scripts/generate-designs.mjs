// 100% FREE, no signup, no API key — uses Pollinations.ai's URL-based image
// generation (https://pollinations.ai). Each URL below generates a real
// AI image on first request (~10-20s), then it's cached by Pollinations'
// CDN for instant loads after that. Edit the prompts/seeds below and
// re-run `npm run generate-designs` any time you want different artwork.

import { writeFile } from "fs/promises";

function pollinationsUrl(prompt, seed, width = 600, height = 600) {
  const encoded = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encoded}?width=${width}&height=${height}&nologo=true&seed=${seed}&model=flux`;
}

const designs = {
  "Stay Wild": pollinationsUrl("minimalist skull graphic t-shirt design, black and white ink illustration, streetwear style, centered, plain background", 101),
  Animals: pollinationsUrl("bold lion head graphic t-shirt design, geometric line art illustration, black ink, centered, plain background", 102),
  "Explore the Unknown": pollinationsUrl("astronaut in space graphic t-shirt design, retro illustration style, stars and planets, centered, plain background", 103),
  Anime: pollinationsUrl("anime style samurai character graphic t-shirt design, bold line art, centered, plain background", 104),
  Classic: pollinationsUrl("vintage retro badge logo t-shirt design, distressed typography, americana style, centered, plain background", 105),
  "The Howling Call": pollinationsUrl("howling wolf mountain silhouette graphic t-shirt design, adventure outdoor style illustration, centered, plain background", 106)
};

const hero = [
  pollinationsUrl("black t-shirt on wooden hanger with skull graphic design, product photography, studio lighting", 201, 500, 650),
  pollinationsUrl("white t-shirt on wooden hanger with dragon graphic design, product photography, studio lighting", 202, 500, 650),
  pollinationsUrl("black t-shirt on wooden hanger with astronaut space graphic design, product photography, studio lighting", 203, 500, 650)
];

await writeFile(new URL("../data/images.json", import.meta.url), JSON.stringify({ designs, hero }, null, 2));
console.log("Saved real Pollinations.ai image URLs to data/images.json ✅");
console.log("Now run: npm run seed");
