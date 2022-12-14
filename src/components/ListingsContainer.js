import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings, deleteListings }) {

  console.log("this is from lisitng container:", listings)

  const listingsToBeShowed = listings.map((listing) => {
    return <ListingCard listing={listing} deleteListings={deleteListings}/>
  })

  return (
    <main>
      <ul className="cards">
        {listingsToBeShowed}
      </ul>
    </main>
  );
}

export default ListingsContainer;
