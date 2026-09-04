import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Design from "@/models/Design";

export async function GET() {
  try {
    await connectDB();
    const designs = await Design.find().sort({ order: 1 }).lean();
    return NextResponse.json({ ok: true, data: designs });
  } catch (err) {
    return NextResponse.json({ ok: false, data: FALLBACK_DESIGNS });
  }
}

const FALLBACK_DESIGNS = [
  { title: "Stay Wild", category: "Streetwear", image: "https://picsum.photos/seed/stay-wild/500/500" },
  { title: "Animals", category: "Animals", image: "https://picsum.photos/seed/animals/500/500" },
  { title: "Explore the Unknown", category: "Space", image: "https://picsum.photos/seed/space/500/500" },
  { title: "Anime", category: "Anime", image: "https://picsum.photos/seed/anime/500/500" },
  { title: "Classic", category: "Vintage", image: "https://picsum.photos/seed/vintage/500/500" },
  { title: "The Howling Call", category: "Adventure", image: "https://picsum.photos/seed/adventure/500/500" }
];
