const FAQS = [
  { q: "How long does a custom T-shirt design take?", a: "Most designs are delivered within 2-5 business days depending on the package you choose." },
  { q: "Do I own the rights to my design?", a: "Yes. Every design comes with full commercial usage rights once payment is complete." },
  { q: "How many revisions are included?", a: "The Basic package includes 2 revisions, while Standard and Business packages include unlimited revisions." },
  { q: "What file formats will I receive?", a: "You'll receive high-resolution PNG and print-ready source files (AI/PSD) depending on your package." }
];

export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-dark mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {FAQS.map((f) => (
          <details key={f.q} className="group bg-neutral-50 border border-black/5 rounded-xl p-5">
            <summary className="font-semibold text-dark cursor-pointer list-none flex items-center justify-between">
              {f.q}
              <span className="text-brand group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="text-sm text-black/60 mt-3 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
