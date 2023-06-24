import BrowseByCategory from "@/components/Home/BrowseByCategory";
import EssentialProducts from "@/components/Home/EssentialProducts";
import FeaturedBrands from "@/components/Home/FeaturedBrands";
import HealthDaily from "@/components/Home/HealthDaily";
import HeroSlider from "@/components/Home/HeroSlider";
import HomeCategory from "@/components/Home/HomeCategory";

import HomePosters from "@/components/Home/HomePosters";
import OfferZone from "@/components/Home/OfferZone";
import OfferZoneBottom from "@/components/Home/OfferZoneBottom";
import ShopByBrands from "@/components/Home/ShopByBrands";
import TodaysDeals from "@/components/Home/TodaysDeals";
import { setBackgroundImage } from "@/utils/helpers";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TodaysDeals />
      <BrowseByCategory />
      <ShopByBrands />
      {/* <HomeCategory /> */}
      {/* <FeaturedBrands /> */}

      <div
        className="py-5"
        style={setBackgroundImage(
          "https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-content-bg-scaled.jpg",
          {
            backgroundPosition: "bottom center",
            backgroundColor: "#f3f3f3",
            backgroundSize: "cover",
          }
        )}
      >
        <EssentialProducts />
        <HealthDaily />
      </div>
      <OfferZone />
      <HomePosters />
      <OfferZoneBottom />
    </>
  );
}
