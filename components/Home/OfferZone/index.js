import ProductCard from "@/components/Product/ProductCard";
import { OFFERPRODUCTS } from "@/data/products";
import React from "react";

function OfferZone() {
  return (
    <section className="offerZone pt-10 pb-5">
      <div className="container">
        <h1 className="section-title underline">OFFER ZONE</h1>
        <div className="w-full offer_zone grid xl:grid-cols-5 gap-4 mt-5 pt-5 pl-2 -ml-2 !mx-auto">
          {OFFERPRODUCTS.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferZone;
