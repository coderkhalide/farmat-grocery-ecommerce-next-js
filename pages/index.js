import FeaturedBrands from "../app/components/Home/FeaturedBrands";
import HomeCategory from "../app/components/Home/HomeCategory";
import HomeHero from "../app/components/Home/HomeHero";
import TodaysDeals from "../app/components/Home/TodaysDeals";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCategory />
      <FeaturedBrands />
      <TodaysDeals />
    </>
  )
}
