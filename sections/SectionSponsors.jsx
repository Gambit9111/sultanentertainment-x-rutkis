import React from 'react'
import Image from 'next/image'

function SectionVideo() {
  return (
    <div className='relative h-[800px] pt-10 lg:mt-20'>
      <h2 className='text-lg font-bold text-center pb-32 lg:pb-64'>People are writting about us!</h2>
      <Image src='/strip.svg' width={1544} height={56} className="max-w-none absolute right left-[-160px] top-[100px]"/>
      <h1 className='font-bold text-[40px] leading-[48px] pb-6 text-center'>Medium lenght heading goes here</h1>
      <p className='pb-10 text-center px-5 lg:text-lg lg:w-[700px] lg:mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      <nav className='flex gap-4 justify-center'>
        <button className='my-button'>Button</button>
        <button className='my-button text-black bg-white border border-black'>Button</button>
      </nav>
    </div>
  )
}

export default SectionVideo