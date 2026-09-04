import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";

export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find().sort({ order: 1 }).lean();
    return NextResponse.json({ ok: true, data: categories });
  } catch (err) {
    return NextResponse.json({ ok: false, data: FALLBACK_CATEGORIES });
  }
}

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
