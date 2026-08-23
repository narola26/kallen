import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import CurrentDrop from "@/components/home/CurrentDrop";
import UnisexSplit from "@/components/home/UnisexSplit";
import CommunityWall from "@/components/home/CommunityWall";
import ClubTeaser from "@/components/home/ClubTeaser";
import CoreLabel from "@/components/home/CoreLabel";
import IdentityBanner from "@/components/home/IdentityBanner";
import PassportStrip from "@/components/home/PassportStrip";
import Journal from "@/components/home/Journal";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <CurrentDrop />
      <UnisexSplit />
      <CommunityWall />
      <ClubTeaser />
      <CoreLabel />
      <IdentityBanner />
      <PassportStrip />
      <Journal />
    </>
  );
}
