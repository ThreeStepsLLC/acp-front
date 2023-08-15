import React from 'react'
import Image from 'next/image'
import Card from '../Card'

const FutureSection = () => {
  return (
    <div className='bg-[#00517b]'>
        <div className="container mx-auto px-12 py-16">
        <div className="grid gap-2">
            <p className='text-[#ffffff] text-[18px] font-semibold flex gap-4 items-center'><Image src={'yellowLine.svg'} alt={'whatwedo'} height={1} width={40} /> WHY CHOOSE US</p>
            <p className='text-[#ffffff] text-[45px] font-bold mb-8'>Our <span className='text-[#81a32b] text-[45px] font-bold'>Services</span></p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
            <Card details={false} icon={'share-icon.svg'} content={`Evaluate the Contractors performance`} />
            <Card details={false} icon={'layer-icon.svg'} content={'Supervise the Contractor to ensure they are following project requirements'} />
            <Card details={false} icon={'settings-icon.svg'} content={'Monitor the quality of site activities performed by the Contractor'} />
            <Card details={false} icon={'analytic-icon.svg'} content={'Secure the local and international staff training, equipment, and services'} />
            <Card details={false} icon={'lamp-icon.svg'} content={'Resolve the issues among the Contractor, Client, Government, and locals'} />
            <Card details={false} icon={'layer-icon.svg'} content={'Monitoring the Contractor to perform under FIDIC standards'} />
            <Card details={false} icon={'settings-icon.svg'} content={'Reporting and record-keeping of relevant project details'} />
            <Card details={false} icon={'analytic-icon.svg'} content={'Technical support'} />
            <Card details={false} icon={'lamp-icon.svg'} content={'Laboratory tests'} />
            <Card details={false} icon={'share-icon.svg'} content={'Land surveying'} />
        </div>
        </div>
    </div>
  )
}

export default FutureSection