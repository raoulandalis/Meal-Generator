'use client'
import React, { useState } from 'react';
import MealFetch from './MealFetch';

function GenerateRecipe() {
  const [ingredients, setIngredients] = useState<string>('');
  const [showMealFetch, setShowMealFetch] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowMealFetch(true);
  };

  return (
    <div>
      <input
        className='enter-ingredients'
        type='text'
        placeholder="Enter Your Ingredients Here!"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleButtonClick}>Show Recipe</button>

      {showMealFetch && <MealFetch ingredients={ingredients} />}
    </div>
  );
}

export default GenerateRecipe;

