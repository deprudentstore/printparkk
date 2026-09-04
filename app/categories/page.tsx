import Categories from "@/components/Categories";

export const metadata = { title: "Categories — PrintParkk" };

export default function CategoriesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-8 text-center">Browse by Categories</h1>
      <Categories />
    </main>
  );
}
