"use client";

import { useState } from "react";

const LINKS = {
  "Quick Links": ["Home", "Portfolio", "Categories", "Packages"],
  Company: ["About Us", "How It Works", "Contact Us", "FAQ"],
  Legal: ["Terms & Conditions", "Privacy Policy", "Refund Policy", "Cookies Policy"]
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" })
      });
      const json = await res.json();
      if (!json.ok) throw new Error();
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="bg-dark text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center text-dark font-black">P</span>
              <span className="font-extrabold text-lg">PrintParkk</span>
            </div>
            <p className="text-white/50 text-sm mt-4 max-w-xs">
              We design unique, creative and high-quality t-shirt designs that bring your ideas to life.
            </p>
          </div>
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <p className="font-semibold mb-4">{title}</p>
              <ul className="space-y-2.5 text-sm text-white/50">
                {items.map((item) => (
                  <li key={item}><a href="#" className="hover:text-brand transition">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-semibold mb-4">Subscribe to Our Newsletter</p>
            <p className="text-white/50 text-sm mb-3">Get updates on new designs, offers and more.</p>
            <form onSubmit={subscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-white/10 text-sm rounded-lg px-3 py-2.5 placeholder:text-white/40 outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-brand text-dark text-sm font-semibold px-4 rounded-lg shrink-0 disabled:opacity-60"
              >
                {status === "sending" ? "..." : "Subscribe"}
              </button>
            </form>
            {status === "sent" && <p className="text-brand text-xs mt-2">Thanks for subscribing!</p>}
            {status === "error" && <p className="text-red-400 text-xs mt-2">Something went wrong, try again.</p>}
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} PrintParkk. All Rights Reserved.</p>
          <p>Designed by PrintParkk</p>
        </div>
      </div>
    </footer>
  );
}
