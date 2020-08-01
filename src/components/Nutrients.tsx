import React from 'react';

const Nutrients = (props: { nutrients: any }) => {
  const cleanNutrients = (nutrients: any) => {
    let clean: any = {};
    const keys = Object.keys(nutrients);
    for (let k of keys) clean[k] = nutrients[k].toFixed(2);
    return clean;
  };

  const { ENERC_KCAL, PROCNT, FAT, CHOCDF, FIBTG } = cleanNutrients(props.nutrients);

  return (
    <div>
      <p>Calories: {ENERC_KCAL}</p>
      <p>Proteins: {PROCNT}</p>
      <p>Fat: {FAT}</p>
      <p>Carbs: {CHOCDF}</p>
      <p>Fiber: {FIBTG}</p>
    </div>
  );
};

export default Nutrients;
