import { OfferZonesBottom } from "@/data/products";
import React from "react";
import OfferZoneCart from "../Product/OfferZoneCart";

function OfferZoneBottom() {
  return (
    <section>
      <div className="w-full offer_zone grid xl:grid-cols-4 gap-4 mt-5 pt-5 pl-2 -ml-2 pb-14 !mx-auto">
        {OfferZonesBottom.map((product, index) => (
          <OfferZoneCart product={product} key={index} />
        ))}
      </div>
    </section>
  );
}

export default OfferZoneBottom;
