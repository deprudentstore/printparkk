import Packages from "@/components/Packages";

export const metadata = { title: "Packages — PrintParkk" };

export default function PackagesPage() {
  return (
    <main>
      <section className="bg-dark text-white py-14 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Our Packages</h1>
        <p className="text-white/50 mt-3 max-w-lg mx-auto px-4">Choose the package that fits your brand and budget.</p>
      </section>
      <Packages />
    </main>
  );
}
