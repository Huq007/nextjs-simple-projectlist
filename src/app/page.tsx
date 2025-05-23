import FeaturedProjects from "@/componetns/FeaturedProjects";
import HeroSection from "@/componetns/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedProjects />
    </main>
  );
}
