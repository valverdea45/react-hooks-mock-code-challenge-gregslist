import React, { useState } from "react";

function ListingCard({ listing, deleteListings }) {

  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavoriteClick(){
    setIsFavorite((isFavorite) => !isFavorite)
  }

  function handleClickDelete(){
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    .then((data) => data.json())
    .then(() => deleteListings(listing))
   }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.desciption}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleClickDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
