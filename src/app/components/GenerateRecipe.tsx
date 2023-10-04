'use client'
import React, {useState} from 'react'

const GenerateRecipe = () => {
    const [ingredients, setIngredients] = useState('')
    const [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //API information
    const APP_ID = '0f41090f'
    const APP_KEY = 'c2869ac02b6a4dfa5df6fe3d9ae6559b'

    const recipeAPICall = async () => {
        
    }

  return (
    <div>
        <button className="generate-btn" onClick={recipeAPICall}>
            Generate Recipe
        </button>
    </div>
  )
}

export default GenerateRecipe
