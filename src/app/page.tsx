import Link from "next/link";

function HomePage() {
  return (
    <main>
      <header className="px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link href={"/"} className="text-lg font-semibold">
            Emersion
          </Link>
        </nav>
      </header>
      <section className="mt-16 px-8">
        <h1 className="text-8xl py-6 font-extrabold bg-clip-text bg-gradient-to-r text-transparent from-stone-700 via-stone-300 to-stone-700">
          Code. Innovate. Emerge.
        </h1>
        <p className="text-stone-500">
          Join Emersion, the ultimate coding bootcamp, where you'll transform
          your passion for technology into a professional career. Dive deep into
          immersive learning and emerge with the skills to lead in the tech
          industry.
        </p>
      </section>
    </main>
  );
}

export default HomePage;
