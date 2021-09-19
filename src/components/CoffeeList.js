import React from "react";
import Coffee from "./Coffee";

const CoffeeList = ({ filteredCoffess }) => {
  const divStyle = {
    marginLeft: "30px",
  };
  const filteredCoffees = filteredCoffess.map((coffee) => (
    <Coffee
      key={coffee.id}
      title={coffee.title}
      description={coffee.description}
      ingredients={coffee.ingredients}
    />
  ));
  return <div style={divStyle}>{filteredCoffees}</div>;
};

export default CoffeeList;
