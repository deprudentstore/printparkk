import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icons";
import heroData from "@/data/images.json";

const FEATURES = [
  { label: "100% Original\nCustom Designs" },
  { label: "Unlimited\nRevisions" },
  { label: "Fast\nDelivery" },
  { label: "100% Money\nBack Guarantee" }
];

export default function Hero() {
  const heroImages = heroData.hero;

  return (
    <section className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-[11px] tracking-widest font-semibold text-brand border border-brand/40 rounded-full px-3 py-1 mb-5">
            PROFESSIONAL T-SHIRT DESIGN SERVICES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Premium T-Shirt Designs That Make an <span className="text-brand">Impact.</span>
          </h1>
          <p className="text-white/60 mt-5 max-w-md">
            We create original, custom and trendy T-Shirt designs that help your brand stand out from the crowd.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link href="/portfolio" className="bg-brand text-dark font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition flex items-center gap-2">
              View Portfolio <Icon name="arrow" className="w-4 h-4" />
            </Link>
            <Link href="/packages" className="border border-white/25 font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Choose a Package
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10 pt-8 border-t border-white/10">
            {FEATURES.map((f) => (
              <div key={f.label} className="text-xs text-white/70 whitespace-pre-line">
                {f.label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {heroImages.map((src: string, i: number) => (
            <div key={src} className={`relative aspect-[3/4] rounded-xl overflow-hidden bg-white/5 ${i === 1 ? "translate-y-[-12px]" : ""}`}>
              <Image
                src={src}
                alt="PrintParkk custom t-shirt design"
                fill
                sizes="200px"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
