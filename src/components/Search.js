import React, { useState } from "react";
import CoffeeList from "./CoffeeList";

const Search = ({ coffees }) => {
  const [searchField, setSearchField] = useState("");

  const inputStyle = {
    borderRadius: "3px",
    border: "1px solid gray",
    height: "30px",
    margin: "10px",
  };

  const filteredCoffess = coffees.filter((coffee) => {
    return coffee.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        style={inputStyle}
        placeholder="Search"
        onChange={handleChange}
      />
      {searchField === "" ? null : (
        <CoffeeList filteredCoffess={filteredCoffess} />
      )}
    </div>
  );
};

export default Search;
