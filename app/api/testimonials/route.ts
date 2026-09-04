import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find().lean();
    return NextResponse.json({ ok: true, data: testimonials });
  } catch (err) {
    return NextResponse.json({ ok: false, data: FALLBACK_TESTIMONIALS });
  }
}

const FALLBACK_TESTIMONIALS = [
  {
    name: "James Carter",
    role: "Clothing Brand Owner",
    quote:
      "PrintParkk nailed exactly what I imagined. The design quality is top notch and communication was great!",
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
