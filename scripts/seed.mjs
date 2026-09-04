import mongoose from "mongoose";
import { readFile } from "fs/promises";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI env var. Run: MONGODB_URI='...' npm run seed");
  process.exit(1);
}

// Real photo URLs — replaced by scripts/fetch-images.mjs once you add a
// free Pexels API key. Falls back to picsum placeholders until then.
const images = JSON.parse(await readFile(new URL("../data/images.json", import.meta.url)));

const DesignSchema = new mongoose.Schema({ title: String, category: String, image: String, order: Number });
const CategorySchema = new mongoose.Schema({ name: String, icon: String, order: Number });
const PackageSchema = new mongoose.Schema({ name: String, tagline: String, price: Number, popular: Boolean, features: [String], order: Number });
const TestimonialSchema = new mongoose.Schema({ name: String, role: String, quote: String, avatar: String, rating: Number });

const Design = mongoose.model("Design", DesignSchema);
const Category = mongoose.model("Category", CategorySchema);
const Package = mongoose.model("Package", PackageSchema);
const Testimonial = mongoose.model("Testimonial", TestimonialSchema);

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

async function run() {
  await mongoose.connect(MONGODB_URI);
  await Promise.all([Design.deleteMany({}), Category.deleteMany({}), Package.deleteMany({}), Testimonial.deleteMany({})]);
  await Design.insertMany(designs);
  await Category.insertMany(categories);
  await Package.insertMany(packages);
  await Testimonial.insertMany(testimonials);
  console.log("Seed complete ✅");
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
