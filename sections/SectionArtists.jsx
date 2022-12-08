import React from 'react'
import Image from 'next/image'

const SectionCard = () => {
  return (
    <div className='h-[125px] lg:h-[250px] flex gap-6 md:w-8/12 lg:w-full md:mx-auto'>
      <Image src='/placeholderbig.svg' width={127} height={125} className="lg:w-[250px] lg:h-[250px]"/>

      <div>
        <h3 className='font-semibold lg:text-xl'>Full name</h3>
        <h3 className='pb-3 lg:text-lg'>Job title</h3>
        <p className='text-sm lg:text-base pr-4 pb-2 lg:pb-4 lg:pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repudiandae alias distinctio quod architecto.</p>
        <div className='flex gap-4'>
          <Image src='/icon1.svg' width={18} height={18}/>
          <Image src='/icon2.svg' width={18} height={16}/>
          <Image src='/icon3.svg' width={18} height={18}/>
        </div>
      </div>
  </div>
  )
}

function SectionArtists() {
  return (
    <div className='mt-16 lg:flex lg:mt-32 lg:gap-20'>
      <div className='lg:w-9/12'>
        <h3 className='font-semibold pb-4 px-2'>Artists</h3>
        <h1 className='text-[48px] leading-[58px] font-bold pb-6 px-2'>Our team</h1>
        <p className='pb-8 pr-10 px-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, voluptate. Perferendis veritatis minus sunt eum.</p>
        <button className='my-button bg-white border border-black text-black w-[140px] mx-2 mb-8'>Find out more!</button>
      </div>
      <div className='flex flex-col gap-24 md:mt-6 lg:gap-12'>
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </div>
    </div>
  )
}

export default SectionArtists