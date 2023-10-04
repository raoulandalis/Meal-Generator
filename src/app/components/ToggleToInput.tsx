'use client'
import React, { useState } from 'react'

const ToggleToInput = () => {
    const [visible, setVisible] = useState(true)

    const toggleInput = () => {
        setVisible(!visible);
    }
  return (
    <div>
        <button className='enter-btn' onClick={toggleInput}>
            Start
        </button>
    </div>
  )
}

export default ToggleToInput
