import React from 'react'

interface ButtonProps {
  text: string
  onClick: any
}

const Button = ({text, onClick}: ButtonProps) => {
  return (
    <div className='bg-[#81a32b] hover:bg-[#739126] w-48 text-[18px] text-center py-2 px-4 cursor-pointer font-semibold h-fit' onClick={onClick}>{text}</div>
  )
}

export default Button