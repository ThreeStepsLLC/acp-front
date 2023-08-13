import React from 'react'
import Image from "next/image";

interface CardProps {
    number?: number | string,
    icon?: string
    content: string,
    details?: boolean
}

const Card = ({number, content, icon, details = true}: CardProps) => {
  return (
    <div className='px-10 py-10 border border-solid border-[#C8C8C8] grid gap-6 bg-transparent'>
        {icon ? <Image src={icon} alt={'icon'} width={60} height={60} /> : <p className='text-[40px] font-extrabold text-[#E9E6E6]'>{number}</p>}
        <p className={details ? 'text-[19px] font-normal text-[#202C38]' : 'text-[19px] font-normal text-[#ffffff]'}>{content}</p>
        {details && <p className="text-[18px] font-semibold text-[#81a32b] flex gap-2"><p>DETAILS</p> <Image src={"/rightArrowWelcome.svg"} alt="Logo" width={16} height={14} /></p>}
    </div>
  )
}

export default Card