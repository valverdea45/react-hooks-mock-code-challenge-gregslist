import React from "react";
import Search from "./Search";

function Header({ listings, setListings, currentInput, setCurrentInput }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} setListings={setListings} currentInput={currentInput} setCurrentInput={setCurrentInput} />
    </header>
  );
}

export default Header;
