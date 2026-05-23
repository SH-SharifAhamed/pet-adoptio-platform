
import AdoptPets from "@/components/AdoptPets";
import CTASection from "@/components/CTASection";
import HomeSection from "@/components/HomeSection";
import PartnerShelters from "@/components/PartnerShelters";
import SlideSection from "@/components/SlideSection";
import SuccessStories from "@/components/SuccessStories";

export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`, {
    cache: "no-store",
  });

  const data = await res.json();


  return (
    <div>

      <main>
        <SlideSection data={data} />
        <HomeSection />
        <AdoptPets />
        <SuccessStories />
        <CTASection />
        <PartnerShelters />
      </main>
    </div>
  );
}
