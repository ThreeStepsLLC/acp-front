import React from 'react'

interface ButtonProps {
  text: string
  onClick: any
}

const Button = ({text, onClick}: ButtonProps) => {
  return (
    <button className='bg-[#2E63A9] hover:bg-[#739126] w-40 text-[15px] text-center py-2 px-2 cursor-pointer font-semibold h-fit' onClick={onClick}>{text}</button>
  )
}

export default Button