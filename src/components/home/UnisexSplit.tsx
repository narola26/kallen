import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/images";

const SIDES = [
  { label: "Shop men", href: "/shop?gender=Men", image: img("split-men", 1000, 1300) },
  { label: "Shop women", href: "/shop?gender=Women", image: img("split-women", 1000, 1300) },
];

export default function UnisexSplit() {
  return (
    <section className="grid w-full grid-cols-1 sm:grid-cols-2">
      {SIDES.map((side, i) => (
        <Reveal key={side.href} delay={i * 100} className="block">
          <Link href={side.href} className="group relative block aspect-[4/5] w-full overflow-hidden bg-ink sm:aspect-auto sm:h-[80vh]">
            <Image
              src={side.image}
              alt={side.label}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="kallen-img object-cover transition-transform duration-section ease-entrance group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-void/20 transition-colors duration-section group-hover:bg-void/0" />
            <span className="absolute bottom-8 left-8 font-body text-sm font-light uppercase tracking-nav text-bone sm:bottom-10 sm:left-10">
              {side.label}
            </span>
          </Link>
        </Reveal>
      ))}
    </section>
  );
}
