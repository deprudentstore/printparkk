import { Icon } from "./Icons";

const STEPS = [
  { icon: "package", t: "Choose a Package", d: "Pick the package that suits you" },
  { icon: "type", t: "Submit Your Brief", d: "Share your idea, text or reference" },
  { icon: "lock", t: "Make Payment", d: "Secure your order with safe payment" },
  { icon: "shirt", t: "Get Your Design", d: "Receive your unique design on time" }
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-brand font-semibold text-sm mb-1">How It Works</p>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-10">Simple &amp; Easy Process</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STEPS.map((s, i) => (
          <div key={s.t} className="relative">
            <div className="w-14 h-14 rounded-full bg-dark text-brand flex items-center justify-center mb-4">
              <Icon name={s.icon} className="w-6 h-6" />
            </div>
            <p className="font-bold text-dark">{i + 1}. {s.t}</p>
            <p className="text-sm text-black/50 mt-1">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
