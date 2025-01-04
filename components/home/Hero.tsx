import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid gap-24 lg:grid-cols-2">
      <article>
        <h1 className="max-w-2xl text-4xl sm:text-6xl font-bold tracking-tight">
          We are changing the way people shop
        </h1>
        <h4 className="mt-10 text-lg text-muted-foreground tracking-normal leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </h4>
        <Button asChild className="mt-8 text-white px-6" size="lg">
          <Link href="/products">Our products</Link>
        </Button>
      </article>
      <article className="hidden lg:block place-self-center ">
        <HeroCarousel />
      </article>
    </section>
  );
}
export default Hero;
