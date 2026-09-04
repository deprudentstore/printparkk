"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err.message);
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-2 text-center">Get a Quote</h1>
      <p className="text-black/50 text-center mb-10">Tell us about your project and we'll get back to you shortly.</p>

      <form onSubmit={submit} className="space-y-4 bg-neutral-50 border border-black/5 rounded-2xl p-6 sm:p-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand"
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <input
          placeholder="Phone Number (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand"
        />
        <textarea
          required
          placeholder="Tell us about your design idea..."
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-brand text-dark font-semibold py-3 rounded-lg hover:brightness-110 transition disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {status === "sending" ? "Sending..." : "Send Message"} <Icon name="arrow" className="w-4 h-4" />
        </button>
        {status === "sent" && <p className="text-green-600 text-sm text-center">Thanks! We'll be in touch soon.</p>}
        {status === "error" && <p className="text-red-600 text-sm text-center">{error}</p>}
      </form>
    </main>
  );
}
