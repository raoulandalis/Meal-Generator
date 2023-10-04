'use client'
import React, {useState} from 'react'

// interface User

const GenerateRecipe = () => {
    const [ingredients, setIngredients] = useState('')
    const [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    //API information
    const APP_ID = '0f41090f'
    const APP_KEY = 'c2869ac02b6a4dfa5df6fe3d9ae6559b'

    const recipeAPICall = async () => {
        // const response = await fetch('https://api.edamam.com/search', {
        //     params: {
        //       q: ingredients,
        //       app_id: APP_ID,
        //       app_key: APP_KEY,
        //     }
        // )}

        // const recipes = await response.json();
    }

  return (
    <div>
        <input
          className='enter-ingredients'
          type='text'
          placeholder="Enter Your Ingredients Here!"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button className="generate-btn" onClick={recipeAPICall}>
            Generate Recipe
        </button>

        <div className='tile-container'>
          {recipe.map((rec) => (
            <>
              {console.log(rec)}
                <div key={rec.recipe.uri}>
                <img src={rec.recipe.image}></img>
                <h3>{rec.recipe.label}</h3>
              </div>
            </>
          ))}
        </div>
    </div>
  )
}

export default GenerateRecipe
