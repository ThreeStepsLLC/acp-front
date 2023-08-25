import React from 'react'
import Image from "next/image";

interface PageHeaderProps {
    title: string
    subTitle?: string
}

const PageHeader = ({title, subTitle}: PageHeaderProps) => {
  return (
    <div className='bg-[#00517b] w-5/5 pt-5 pb-10'>
        <div className="container mx-auto grid gap-4 px-16 py-10">
          {
            subTitle && <p className="text-[#ffffff] text-[18px] font-semibold flex gap-4">
            <Image
              src={"yellowLine.svg"}
              alt={"whatwedo"}
              height={1}
              width={40}
            />
            {subTitle}
          </p>
          }
        
          <p className="text-[#ffffff] text-[50px] font-bold">
            {title}
          </p>
        </div>
    </div>
  )
}

export default PageHeader