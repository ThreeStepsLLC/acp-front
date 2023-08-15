import React from 'react'
import Card from '../Card'
import Image from 'next/image'

const WhatWeDoSection = () => {
  return (
    <div className='container mx-auto px-12 py-20'>
        <p className='text-[#000000] text-[18px] font-semibold flex gap-4'><Image src={'yellowLine.svg'} alt={'whatwedo'} height={1} width={40} /> WHAT WE DO</p>
        <p className='text-[#000000] text-[45px] font-bold mb-8'><span className='text-[#81a32b] text-[45px] font-bold'>Our Project</span> in the World </p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
            <Card number={'01'} content={'Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin'} />
            <Card number={'02'} content={'Donec adipiscing tristique risus nec feugiat in. Porttitor massa id neque aliquam vestibulum morbi '} />
            <Card number={'03'} content={'Morbi tincidunt ornare massa eget egestas purus viverra blandit elementum cursus risus.'} />
            <Card number={'04'} content={'Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nam aliquam sem et tortor '} />
            <Card number={'05'} content={'Mollis nunc sed id semper. Sodales ut etiam sit amet nisl purus. Sed odio morbi quis commodo odio '} />
            <Card number={'06'} content={'Tellus elementum sagittis vitae et. Amet justo donec enim diam vulputate ut consequat id porta nibh venenatis'} />
        </div>
    </div>
  )
}

export default WhatWeDoSection