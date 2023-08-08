import React from 'react'

interface ButtonProps {
  text: string
}

const Button = ({text}: ButtonProps) => {
  return (
    <a className='bg-[#81a32b] w-48 text-[18px] text-center py-3 cursor-pointer'>{text}</a>
  )
}

export default Button