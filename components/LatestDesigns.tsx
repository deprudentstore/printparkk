import Image from "next/image";
import { connectDB } from "@/lib/mongodb";
import DesignModel from "@/models/Design";
import heroData from "@/data/images.json";

const FALLBACK_DESIGNS = [
  { title: "Stay Wild", category: "Streetwear", image: heroData.designs["Stay Wild"] },
  { title: "Animals", category: "Animals", image: heroData.designs["Animals"] },
  { title: "Explore the Unknown", category: "Space", image: heroData.designs["Explore the Unknown"] },
  { title: "Anime", category: "Anime", image: heroData.designs["Anime"] },
  { title: "Classic", category: "Vintage", image: heroData.designs["Classic"] },
  { title: "The Howling Call", category: "Adventure", image: heroData.designs["The Howling Call"] }
];

async function getDesigns() {
  try {
    await connectDB();
    const designs = await DesignModel.find().sort({ order: 1 }).lean();
    return designs.length ? designs : FALLBACK_DESIGNS;
  } catch {
    return FALLBACK_DESIGNS;
  }
}

export default async function LatestDesigns() {
  const designs = await getDesigns();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-dark">
          Explore Our <span className="text-brand">Latest Designs</span>
        </h2>
        <a href="/portfolio" className="text-sm font-semibold text-dark/60 hover:text-brand hidden sm:block">
          View All Designs →
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {designs.map((d: any, i: number) => (
          <div key={d.title + i} className="group">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-black/5">
              <Image src={d.image} alt={d.title} fill sizes="220px" unoptimized className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <p className="mt-2 text-sm font-semibold text-dark">{d.title}</p>
            <p className="text-xs text-black/50">{d.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
