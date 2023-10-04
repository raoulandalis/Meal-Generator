import Image from 'next/image'
import { useState } from 'react'
import ToggleToInput from './components/ToggleToInput'

export default function Home() {
  const [visible, setVisible] = useState(true)
  return (
    <>

        <div className='title-house'>
            <img src='https://i.imgur.com/9swV3Lz.png' className='bounce'/>
        </div>
        <h3 className='slogan'>Your one stop to finding your next meal!</h3>
        <div className='enter-house'>
            {visible ? (
                <ToggleToInput />
            ) : (
                <div className="input-container">
                    <input
                        className='enter-ingredients'
                        type='text'
                        placeholder="Enter Your Ingredients Here!"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                    <button className="generate-btn" onClick={recipeAPICall}>Generate Recipe</button>

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
        </div>

        </>
  )
}
