export default function StructuredData() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://printparkk.onrender.com";

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PrintParkk",
    url: base,
    logo: `${base}/icon.svg`,
    description: "We create original, custom and trendy T-Shirt designs that help your brand stand out from the crowd.",
    telephone: "+1-234-567-8900",
    sameAs: []
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom T-Shirt Design",
    provider: { "@type": "Organization", name: "PrintParkk" },
    areaServed: "Worldwide",
    offers: [
      { "@type": "Offer", name: "Basic Package", price: "49", priceCurrency: "USD" },
      { "@type": "Offer", name: "Standard Package", price: "99", priceCurrency: "USD" },
      { "@type": "Offer", name: "Business Package", price: "179", priceCurrency: "USD" }
    ]
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a custom T-shirt design take?",
        acceptedAnswer: { "@type": "Answer", text: "Most designs are delivered within 2-5 business days depending on the package you choose." }
      },
      {
        "@type": "Question",
        name: "Do I own the rights to my design?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Every design comes with full commercial usage rights once payment is complete." }
      },
      {
        "@type": "Question",
        name: "How many revisions are included?",
        acceptedAnswer: { "@type": "Answer", text: "The Basic package includes 2 revisions, while Standard and Business packages include unlimited revisions." }
      },
      {
        "@type": "Question",
        name: "What file formats will I receive?",
        acceptedAnswer: { "@type": "Answer", text: "You'll receive high-resolution PNG and print-ready source files (AI/PSD) depending on your package." }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
