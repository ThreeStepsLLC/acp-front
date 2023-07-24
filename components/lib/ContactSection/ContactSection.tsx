import React from 'react'
import Image from 'next/image'

const ContactSection = () => {
  return (
    <div className='container mx-auto px-16 py-20'>
      <p className='text-[#000000] text-[18px] font-semibold flex gap-4'><Image src={'yellowLine.svg'} alt={'whatwedo'} height={1} width={40} /> CONTACT US</p>
      <p className='text-[#000000] text-[45px] font-bold mb-8'>Are You Going to Implement <span className='text-[#0DA574] text-[45px] font-bold'>Project?</span></p>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8'>
        <div className="grid gap-2">
          <p className='text-[#A9A9A9] text-[14px] font-medium uppercase'>Address</p>
          <p className='text-[#000000] text-[18px] font-semibold'>2047 Cyrus Viaduct East <br /> Jadynchester</p>
        </div>

        <div className="grid gap-2">
          <p className='text-[#A9A9A9] text-[14px] font-medium uppercase'>Email</p>
          <p className='text-[#000000] text-[18px] font-semibold'>info@construct.com <br /> support@construct.com</p>
        </div>

        <div className="grid gap-2">
          <p className='text-[#A9A9A9] text-[14px] font-medium uppercase'>Phone</p>
          <p className='text-[#000000] text-[18px] font-semibold'>1 - 313 - 645 - 3395 <br /> 1 - 469 - 970 - 2609</p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection