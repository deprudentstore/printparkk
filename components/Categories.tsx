import { connectDB } from "@/lib/mongodb";
import CategoryModel from "@/models/Category";
import { Icon } from "./Icons";

const FALLBACK_CATEGORIES = [
  { name: "Streetwear", icon: "shirt" },
  { name: "Typography", icon: "type" },
  { name: "Anime", icon: "sparkles" },
  { name: "Animals", icon: "paw" },
  { name: "Vintage", icon: "camera" },
  { name: "Adventure", icon: "mountain" },
  { name: "Funny", icon: "smile" },
  { name: "Custom", icon: "wrench" }
];

async function getCategories() {
  try {
    await connectDB();
    const categories = await CategoryModel.find().sort({ order: 1 }).lean();
    return categories.length ? categories : FALLBACK_CATEGORIES;
  } catch {
    return FALLBACK_CATEGORIES;
  }
}

export default async function Categories() {
  const categories = await getCategories();
  return (
    <aside className="bg-white rounded-2xl border border-black/5 p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-extrabold text-dark">
          Browse by <span className="block text-brand -mt-1">Categories</span>
        </h3>
        <a href="/categories" className="text-xs font-semibold text-black/50 hover:text-brand">View All Categories</a>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {categories.map((c: any) => (
          <a
            key={c.name}
            href={`/categories#${c.name.toLowerCase()}`}
            className="flex flex-col items-center justify-center gap-2 aspect-square rounded-xl border border-black/10 hover:border-brand hover:bg-brand/5 transition text-dark/70"
          >
            <Icon name={c.icon} className="w-6 h-6" />
            <span className="text-[11px] font-medium text-center leading-tight">{c.name}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
