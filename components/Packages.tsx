import { connectDB } from "@/lib/mongodb";
import PackageModel from "@/models/Package";
import { Icon } from "./Icons";

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

async function getPackages() {
  try {
    await connectDB();
    const packages = await PackageModel.find().sort({ order: 1 }).lean();
    return packages.length ? packages : FALLBACK_PACKAGES;
  } catch {
    return FALLBACK_PACKAGES;
  }
}

export default async function Packages() {
  const packages = await getPackages();
  return (
    <section className="bg-neutral-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-8">
              Choose the Perfect <span className="block text-brand -mt-1">Package for You</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {packages.map((p: any) => (
                <div
                  key={p.name}
                  className={`relative rounded-2xl p-6 border ${p.popular ? "border-brand bg-dark text-white shadow-xl scale-[1.03]" : "border-black/10 bg-white text-dark"}`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-dark text-[10px] font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  <p className={`font-bold ${p.popular ? "text-brand" : "text-dark"}`}>{p.name}</p>
                  <p className={`text-xs mt-1 ${p.popular ? "text-white/60" : "text-black/50"}`}>{p.tagline}</p>
                  <p className="mt-4 text-3xl font-extrabold">
                    ${p.price}
                    <span className="text-xs font-medium opacity-60">/design</span>
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {p.features.map((f: string) => (
                      <li key={f} className="flex items-start gap-2">
                        <Icon name="check" className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-brand" : "text-brand"}`} />
                        <span className={p.popular ? "text-white/80" : "text-black/70"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block text-center mt-6 font-semibold text-sm py-3 rounded-lg transition ${
                      p.popular ? "bg-brand text-dark hover:brightness-110" : "border border-black/15 text-dark hover:bg-black/5"
                    }`}
                  >
                    Select & Pay
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark text-white rounded-2xl p-6 h-fit">
            <div className="flex items-center gap-2 mb-6">
              <Icon name="lock" className="w-5 h-5 text-brand" />
              <h3 className="font-bold">Secure Checkout</h3>
            </div>
            <ol className="space-y-5">
              {[
                { t: "Select Package", d: "Choose the best package for your needs." },
                { t: "Provide Details", d: "Share your requirements and reference." },
                { t: "Secure Payment", d: "Pay safely using your preferred method." },
                { t: "Get Your Design", d: "Receive your unique design and own it." }
              ].map((s, i) => (
                <li key={s.t} className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand text-dark text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">{s.t}</p>
                    <p className="text-xs text-white/50">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-[11px] text-white/40 mb-3">We accept all major payment methods</p>
              <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-white/70">
                {["Visa", "Mastercard", "Amex", "PayPal", "Stripe"].map((m) => (
                  <span key={m} className="border border-white/15 rounded px-2 py-1">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
