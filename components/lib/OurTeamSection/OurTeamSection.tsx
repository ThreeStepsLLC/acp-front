import React from "react";
import Image from 'next/image'

const OurTeamSection = () => {
  return (
    <div className="bg-[#2C308B]">
      <div className="container mx-auto px-12 py-20">
        <p className='text-[#ffffff] text-[18px] font-semibold flex gap-4'><Image src={'yellowLine.svg'} alt={'whatwedo'} height={1} width={40} /> Truth in engineering</p>
        <p className='text-[#ffffff] text-[45px] font-bold mb-6'><span className='text-[#81a32b] text-[45px] font-bold'>Our Team</span> is Responsible <br /> for The Best Construction</p>
        <div className='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
          <iframe width="100%" height="600" src="https://www.youtube.com/embed/wEj2Etd9_CA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-10'>
            <div className="grid gap-4">
                <p className="text-[#ffffff] text-[18px] font-normal">Leo in vitae turpis massa sed elementum tempus egestas sed. Sed sed risus pretium quam vulputate dignissim suspendisse in. Placerat orci nulla pellentesque dignissim enim. Tortor pretium viverra suspendisse potenti nullam augue. Vestibulum lorem sed risus ultricies tristique nulla. Erat velit scelerisque in dictum non consectetur</p>
                <ul className='list-none grid gap-2'>
                    <li className='flex gap-4 items-center'><Image src={'checkYellow.svg'} alt={'check'} width={18} height={18} /> <span className="text-[#ffffff]">Ingenuity for life</span></li>
                    <li className='flex gap-4 items-center'><Image src={'checkYellow.svg'} alt={'check'} width={18} height={18} /> <span className="text-[#ffffff]">Lets you shine with skill</span></li>
                    <li className='flex gap-4 items-center'><Image src={'checkYellow.svg'} alt={'check'} width={18} height={18} /> <span className="text-[#ffffff]">Make science your obedient servant</span></li>
                    <li className='flex gap-4 items-center'><Image src={'checkYellow.svg'} alt={'check'} width={18} height={18} /> <span className="text-[#ffffff]">Development of Electrical Schematics</span></li>
                </ul>
            </div>

        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
