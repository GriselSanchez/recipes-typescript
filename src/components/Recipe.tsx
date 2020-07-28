import React from 'react';

const Recipe = (props: { recipe: any }) => {
  const { label, category, image } = props.recipe.food;

  return (
    <div>
      <h1>{label}</h1>
      <h3>{category}</h3>
      <img src={image} alt={label} />
    </div>
  );
};

export default Recipe;
