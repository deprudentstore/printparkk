import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Design from "@/models/Design";
import Category from "@/models/Category";
import Package from "@/models/Package";
import Testimonial from "@/models/Testimonial";
import images from "@/data/images.json";

// One-time remote seeding endpoint — lets you populate MongoDB straight
// from the deployed Render app without running anything locally (no
// npm install needed on your phone). Protected by SEED_SECRET so random
// visitors can't wipe/reseed your data.
//
// Usage after deploy — either works:
//   1. Visit in Chrome:  https://<your-app>.onrender.com/api/admin/seed?key=<your SEED_SECRET>
//   2. curl -X POST https://<your-app>.onrender.com/api/admin/seed \
//        -H "x-seed-key: <your SEED_SECRET>"

async function runSeed() {
  await connectDB();

  const designs = [
    { title: "Stay Wild", category: "Streetwear", image: images.designs["Stay Wild"], order: 1 },
    { title: "Animals", category: "Animals", image: images.designs["Animals"], order: 2 },
    { title: "Explore the Unknown", category: "Space", image: images.designs["Explore the Unknown"], order: 3 },
    { title: "Anime", category: "Anime", image: images.designs["Anime"], order: 4 },
    { title: "Classic", category: "Vintage", image: images.designs["Classic"], order: 5 },
    { title: "The Howling Call", category: "Adventure", image: images.designs["The Howling Call"], order: 6 }
  ];

  const categories = [
    { name: "Streetwear", icon: "shirt", order: 1 },
    { name: "Typography", icon: "type", order: 2 },
    { name: "Anime", icon: "sparkles", order: 3 },
    { name: "Animals", icon: "paw", order: 4 },
    { name: "Vintage", icon: "camera", order: 5 },
    { name: "Adventure", icon: "mountain", order: 6 },
    { name: "Funny", icon: "smile", order: 7 },
    { name: "Custom", icon: "wrench", order: 8 }
  ];

  const packages = [
    {
      name: "Basic",
      tagline: "Perfect for startups & individuals",
      price: 49,
      popular: false,
      order: 1,
      features: ["1 Custom T-Shirt Design", "2 Revisions", "3-5 Business Days Delivery", "High-Resolution File"]
    },
    {
      name: "Standard",
      tagline: "Great for growing brands",
      price: 99,
      popular: true,
      order: 2,
      features: ["2 Custom T-Shirt Designs", "Unlimited Revisions", "2-3 Business Days Delivery", "Source File Included"]
    },
    {
      name: "Business",
      tagline: "For businesses & bulk orders",
      price: 179,
      popular: false,
      order: 3,
      features: ["5 Custom T-Shirt Designs", "Unlimited Revisions", "1-2 Business Days Delivery", "Source File + Mockups"]
    }
  ];

  const testimonials = [
    {
      name: "James Carter",
      role: "Clothing Brand Owner",
      quote: "PrintParkk nailed exactly what I imagined. The design quality is top notch and communication was great!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      quote: "Fast delivery, unlimited revisions and amazing creativity. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    }
  ];

  await Promise.all([Design.deleteMany({}), Category.deleteMany({}), Package.deleteMany({}), Testimonial.deleteMany({})]);
  await Design.insertMany(designs);
  await Category.insertMany(categories);
  await Package.insertMany(packages);
  await Testimonial.insertMany(testimonials);
}

function isAuthorized(req: Request) {
  const url = new URL(req.url);
  const headerKey = req.headers.get("x-seed-key");
  const queryKey = url.searchParams.get("key");
  const key = headerKey || queryKey;
  return Boolean(process.env.SEED_SECRET) && key === process.env.SEED_SECRET;
}

// GET — so you can just paste the link into Chrome's address bar
export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized — check ?key= matches SEED_SECRET" }, { status: 401 });
  }
  try {
    await runSeed();
    return NextResponse.json({ ok: true, message: "Seeded designs, categories, packages, testimonials." });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  try {
    await runSeed();
    return NextResponse.json({ ok: true, message: "Seeded designs, categories, packages, testimonials." });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
