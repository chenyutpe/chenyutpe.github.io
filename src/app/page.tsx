import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <FeaturedWork />
    </div>
  );
}