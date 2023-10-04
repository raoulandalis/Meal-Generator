import Image from 'next/image'
import { useState } from 'react'
import RecipeDisplay from './components/RecipeDisplay'

export default function Home() {
  return (
    <>

        <div className='title-house'>
            <img src='https://i.imgur.com/9swV3Lz.png' className='bounce'/>
        </div>
        <h3 className='slogan'>Your one stop to finding your next meal!</h3>
        <div className='enter-house'>
          <RecipeDisplay />
        </div>
    </>
  )
}
