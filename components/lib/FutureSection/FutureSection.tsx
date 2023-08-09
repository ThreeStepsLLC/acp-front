import React from 'react'
import Image from 'next/image'
import Card from '../Card'

const FutureSection = () => {
  return (
    <div className='bg-[#00517b]'>
        <div className="container mx-auto px-16 py-16">
        <div className="grid gap-2">
            <p className='text-[#ffffff] text-[18px] font-semibold flex gap-4 items-center'><Image src={'yellowLine.svg'} alt={'whatwedo'} height={1} width={40} /> WHY CHOOSE US</p>
            <p className='text-[#ffffff] text-[45px] font-bold mb-8'>Our <span className='text-[#81a32b] text-[45px] font-bold'>Services</span></p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
            <Card details={false} icon={'share-icon.svg'} caption={'Lorem Ipsum'} content={'Purus in massa tempor nec feugiat. Euismod lacinia at quis risus sed vulputate odio'} />
            <Card details={false} icon={'share-icon.svg'} caption={'Lorem Ipsum'} content={'Purus in massa tempor nec feugiat. Euismod lacinia at quis risus sed vulputate odio'} />
            <Card details={false} icon={'share-icon.svg'} caption={'Lorem Ipsum'} content={'Purus in massa tempor nec feugiat. Euismod lacinia at quis risus sed vulputate odio'} />
            <Card details={false} icon={'share-icon.svg'} caption={'Lorem Ipsum'} content={'Purus in massa tempor nec feugiat. Euismod lacinia at quis risus sed vulputate odio'} />
            <Card details={false} icon={'share-icon.svg'} caption={'Lorem Ipsum'} content={'Purus in massa tempor nec feugiat. Euismod lacinia at quis risus sed vulputate odio'} />
            <Card details={false} icon={'layer-icon.svg'} caption={'Lorem Ipsum'} content={'Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin'} />
            <Card details={false} icon={'settings-icon.svg'} caption={'Lorem Ipsum'} content={'Magnis dis partuient montes nascetur ridiculus mus mauris vitae ultricies'} />
            <Card details={false} icon={'analytic-icon.svg'} caption={'Lorem Ipsum'} content={'Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim diam vulputate ut pharetra'} />
            <Card details={false} icon={'lamp-icon.svg'} caption={'Lorem Ipsum'} content={'Consectetur adipiscing elit pellentesque habitant. Arcu felis bibendum ut tristique '} />
            <Card details={false} icon={'share-icon.svg'} caption={'Lorem Ipsum'} content={'Purus in massa tempor nec feugiat. Euismod lacinia at quis risus sed vulputate odio'} />
        </div>
        </div>
    </div>
  )
}

export default FutureSection