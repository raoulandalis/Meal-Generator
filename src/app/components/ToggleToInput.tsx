'use client'
import React, { useState } from 'react'
import GenerateRecipe from './GenerateRecipe'

const ToggleToInput = () => {
    const [visible, setVisible] = useState(true)

    const toggleInput = () => {
        setVisible(!visible);
    }
  return (
    <div>
        {visible ? (
          <button className='enter-btn' onClick={toggleInput}>
              Start
          </button>
        ) : (
          <GenerateRecipe />
        )}
    </div>
  )
}

export default ToggleToInput
