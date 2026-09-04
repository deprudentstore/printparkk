import { Icon } from "./Icons";

async function getTestimonials() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  try {
    const res = await fetch(`${base}/api/testimonials`, { cache: "no-store" });
    const json = await res.json();
    return json.data;
  } catch {
    return [];
  }
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();
  return (
    <section className="bg-neutral-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand font-semibold text-sm mb-1">Testimonials</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-10">What Our Clients Say</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t: any) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-black/5">
              <div className="flex gap-1 text-brand mb-3">
                {Array.from({ length: t.rating || 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-dark/80 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-5">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm text-dark">{t.name}</p>
                  <p className="text-xs text-black/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
