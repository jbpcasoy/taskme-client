import React from "react";
import Offer from "./Offer";

export default function OfferList({ offers, setOffers }) {
  function renderList() {
    console.log(offers);
    return offers.map((offer) => {
      return (
        <span key={offer._id}>
          <Offer offer={offer} setOffers={setOffers} />
          <br />
        </span>
      );
    });
  }

  if (!offers) return <h2>Loading....</h2>;
  if (offers.length < 1) return <h2>No Offers Yet...</h2>;

  return (
    <div>
      <h2>Offer List</h2>
      {renderList()}
    </div>
  );
}
