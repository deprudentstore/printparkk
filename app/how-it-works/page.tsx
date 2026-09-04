import HowItWorks from "@/components/HowItWorks";

export const metadata = { title: "How It Works — PrintParkk" };

export default function HowItWorksPage() {
  return (
    <main>
      <section className="bg-dark text-white py-14 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold">How It Works</h1>
        <p className="text-white/50 mt-3 max-w-lg mx-auto px-4">A simple, easy process from brief to delivery.</p>
      </section>
      <HowItWorks />
    </main>
  );
}
