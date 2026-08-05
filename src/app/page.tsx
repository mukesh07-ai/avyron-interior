import { Hero } from "@/components/sections/hero";
import { LogoTicker } from "@/components/sections/logo-ticker";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/before-after";
import { Portfolio } from "@/components/sections/portfolio";
import { ProjectPlanner } from "@/components/sections/project-planner";
import { TestimonialsFAQ } from "@/components/sections/testimonials-faq";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <LogoTicker />
      <Services />
      <BeforeAfter />
      <Portfolio />
      <ProjectPlanner />
      <TestimonialsFAQ />
    </div>
  );
}
