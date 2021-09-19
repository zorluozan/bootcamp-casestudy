import React from "react";

const Coffee = ({ title, description, ingredients }) => {
  return (
    <div>
      <h2>{title} </h2>
      <p style={{ width: "280px" }}> {description} </p>
      <p> Ingredients: {ingredients.join(", ")} </p>
    </div>
  );
};

export default Coffee;
