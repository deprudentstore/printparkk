import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Quote from "@/models/Quote";
import { sendQuoteNotification } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Name, email and message are required." }, { status: 400 });
    }
    await connectDB();
    await Quote.create({ name, email, phone, message });
    sendQuoteNotification({ name, email, phone, message }).catch(() => {});
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
