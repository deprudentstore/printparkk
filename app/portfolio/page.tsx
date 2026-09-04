import LatestDesigns from "@/components/LatestDesigns";

export const metadata = { title: "Portfolio — PrintParkk" };

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-dark text-white py-14 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Our Portfolio</h1>
        <p className="text-white/50 mt-3 max-w-lg mx-auto px-4">A look at some of the custom T-shirt designs we've created for our clients.</p>
      </section>
      <LatestDesigns />
    </main>
  );
}
