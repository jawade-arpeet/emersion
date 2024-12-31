import Link from "next/link";

import Button from "@/components/ui/button";

function HomePage() {
  return (
    <main>
      <header className="px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link href={"/"} className="text-lg font-semibold">
            Emersion
          </Link>
          <div className="flex items-center gap-x-4">
            <Link href={"/sign-in"}>
              <Button variant="outline">Login</Button>
            </Link>
            <Link href={"/sign-up"} passHref={true}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>
      <section className="mt-16 px-8">
        <h1 className="text-8xl pb-4 font-extrabold bg-clip-text bg-gradient-to-r text-transparent from-stone-700 via-stone-300 to-stone-700">
          Code. Innovate. Emerge.
        </h1>
        <p className="text-stone-500">
          Join Emersion, the ultimate coding bootcamp, where you&apos;ll
          transform your passion for technology into a professional career. Dive
          deep into immersive learning and emerge with the skills to lead in the
          tech industry.
        </p>
      </section>
    </main>
  );
}

export default HomePage;
