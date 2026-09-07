import siteData from "../data/siteData.json";
import AdvantagesSection from "./landing/AdvantagesSection";
import BootcampHeader from "./landing/BootcampHeader";
import CurriculumSection from "./landing/CurriculumSection";
import FAQSection from "./landing/FAQSection";
import FinalCtaSection from "./landing/FinalCtaSection";
import GallerySection from "./landing/GallerySection";
import HeroSection from "./landing/HeroSection";
import JourneySection from "./landing/JourneySection";
import SiteFooter from "./landing/SiteFooter";
import TeamSection from "./landing/TeamSection";
import TestimonialsSection from "./landing/TestimonialsSection";

export default function Home() {
  const { hero, advantages, journey, testimonials, team, finalCta, footer, navigation, site } = siteData;

  return (
    <div className="bootcamp-site" id="top">
      <BootcampHeader />
      <main>
        <HeroSection hero={hero} />
        <AdvantagesSection advantages={advantages} />
        <JourneySection section={journey} />
        <CurriculumSection />
        <GallerySection />
        <TestimonialsSection section={testimonials} />
        <TeamSection section={team} />
        <FAQSection />
        <FinalCtaSection finalCta={finalCta} />
      </main>
      <SiteFooter footer={footer} navigation={navigation} site={site} />
    </div>
  );
}
