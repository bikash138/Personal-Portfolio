import React from 'react'

const HighlitedText = ({text}) => {
  return (
    <span className='font-bold bg-neon bg-clip-text text-transparent'>
        {""}
        {text}
    </span>
  )
}

export default HighlitedText