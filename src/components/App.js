import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [currentInput, setCurrentInput] = useState("")

  console.log(listings)

  function deleteListings(deletedListing) {
    const updatedListings = listings.filter((listing) => {
      return listing.id !== deletedListing.id
    })
    setListings(updatedListings)
  }

  const newArrayOfListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(currentInput.toLowerCase())
  })

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((data) => data.json())
      .then((allListings) => setListings(allListings))
  }, [])

  return (
    <div className="app">
      <Header listings={newArrayOfListings} setListings={setListings} currentInput={currentInput} setCurrentInput={setCurrentInput} />
      <ListingsContainer listings={newArrayOfListings} setListings={setListings} deleteListings={deleteListings} />
    </div>
  );
}

export default App;
