import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Package from "@/models/Package";

export async function GET() {
  try {
    await connectDB();
    const packages = await Package.find().sort({ order: 1 }).lean();
    return NextResponse.json({ ok: true, data: packages });
  } catch (err) {
    return NextResponse.json({ ok: false, data: FALLBACK_PACKAGES });
  }
}

const FALLBACK_PACKAGES = [
  {
    name: "Basic",
    tagline: "Perfect for startups & individuals",
    price: 49,
    popular: false,
    features: ["1 Custom T-Shirt Design", "2 Revisions", "3-5 Business Days Delivery", "High-Resolution File"]
  },
  {
    name: "Standard",
    tagline: "Great for growing brands",
    price: 99,
    popular: true,
    features: ["2 Custom T-Shirt Designs", "Unlimited Revisions", "2-3 Business Days Delivery", "Source File Included"]
  },
  {
    name: "Business",
    tagline: "For businesses & bulk orders",
    price: 179,
    popular: false,
    features: ["5 Custom T-Shirt Designs", "Unlimited Revisions", "1-2 Business Days Delivery", "Source File + Mockups"]
  }
];
