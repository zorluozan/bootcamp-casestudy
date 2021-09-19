import React, { useState } from "react";
import CoffeeList from "./CoffeeList";

const Category = ({ coffees }) => {
  const [filterBy, setFilterBy] = useState("All Coffees");

  const optionStyle = {
    margin: "10px",
  };

  const filteredCoffess =
    filterBy === "All Coffees"
      ? coffees
      : coffees.filter((coffee) => coffee.category === filterBy);

  const handleChange = (e) => {
    setFilterBy(e.target.value);
  };

  return (
    <div>
      <select value={filterBy} onChange={handleChange} style={optionStyle}>
        <option value="All Coffees">All Coffees</option>
        <option value="hot">Hot</option>
        <option value="iced">Iced</option>
      </select>
      <CoffeeList filteredCoffess={filteredCoffess} />
    </div>
  );
};

export default Category;
