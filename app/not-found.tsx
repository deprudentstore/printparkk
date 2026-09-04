import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-brand font-bold text-sm mb-2">404</p>
      <h1 className="text-3xl font-extrabold text-dark mb-3">Page not found</h1>
      <p className="text-black/50 mb-6 max-w-sm">The page you're looking for doesn't exist or has moved.</p>
      <Link href="/" className="bg-brand text-dark font-semibold px-6 py-3 rounded-lg">
        Back to Home
      </Link>
    </main>
  );
}
