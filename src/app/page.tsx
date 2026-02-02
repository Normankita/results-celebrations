import HeroSection from "@/components/HeroSection";
import RevealSection from "@/components/RevealSection";
import PhotoShowcase from "@/components/PhotoShowcase";
import WordsThatMatter from "@/components/WordsThatMatter";
import CelebrationTrigger from "@/components/CelebrationTrigger";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-gold/30 selection:text-gold">
      <HeroSection />
      <RevealSection />
      <PhotoShowcase />
      <WordsThatMatter />
      <CelebrationTrigger />
      <ClosingSection />
    </main>
  );
}
