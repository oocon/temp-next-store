import SectionTitle from "@/components/global/SectionTitle";
import db from "@/utils/db";

function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap text-4xl sm:text-6xl gap-4 items-center justify-center font-bold tracking-wide leading-none">
        We love
        <span className="bg-primary px-4 py-2 rounded-lg text-white tracking-widest">
          store
        </span>
      </h1>
      <p className="mt-6 mx-auto text-lg text-muted-foreground leading-8 max-w-2xl tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        reprehenderit fugiat labore? Accusantium, eos consectetur! Dolores
        fugit, ipsum optio quas fuga odit officiis laudantium deserunt, debitis
        reiciendis illo facere omnis.
      </p>
    </section>
  );
}
export default AboutPage;
