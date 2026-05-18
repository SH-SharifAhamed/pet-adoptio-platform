import Image from "next/image";
import SlideSection from "@/components/SlideSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-300">
      
      <main>
        <SlideSection />
      </main>
      
      <h1>Home Page</h1>
    </div>
  );
}
