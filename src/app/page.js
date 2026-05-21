
import AdoptPets from "@/components/AdoptPets";
import CTASection from "@/components/CTASection";
import HomeSection from "@/components/HomeSection";
import PartnerShelters from "@/components/PartnerShelters";
import SlideSection from "@/components/SlideSection";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {

  return (
    <div>

      <main>
        <SlideSection />
        <HomeSection />
        <AdoptPets />
        <SuccessStories />
        <CTASection />
        <PartnerShelters />
      </main>
    </div>
  );
}
