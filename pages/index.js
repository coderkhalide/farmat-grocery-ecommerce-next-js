import EssentialProducts from "../app/components/Home/EssentialProducts";
import FeaturedBrands from "../app/components/Home/FeaturedBrands";
import HealthDaily from "../app/components/Home/HealthDaily";
import HomeCategory from "../app/components/Home/HomeCategory";
import HomeHero from "../app/components/Home/HomeHero";
import HomePosters from "../app/components/Home/HomePosters";
import TodaysDeals from "../app/components/Home/TodaysDeals";
import { setBackgroundImage } from "../app/utils/helpers";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCategory />
      <FeaturedBrands />
      <TodaysDeals />
      <HomePosters />
      <div className="py-5" style={setBackgroundImage('https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-content-bg-scaled.jpg', { backgroundPosition: 'bottom center', backgroundColor: '#f3f3f3', backgroundSize: 'cover' })}>
        <EssentialProducts />
        <HealthDaily />
      </div>
    </>
  )
}
