import React from 'react'

function SectionVideo() {

  return (
    <div className='h-full'>

      <div className='md:flex md:flex-row md:pt-12 lg:gap-20'>

        <h1 className='font-bold text-[40px] leading-[48px] lg:text-[56px] lg:leading-[67px] pt-4 pb-6 px-6 md:px-0 md:pb-0 text-center md:text-left md:w-6/12 lg:mr-10'>Medium lenght hero headline goes here</h1>

        <div className='md:flex md:flex-col md:w-6/12'>
          <p className='pb-6 text-left px-5 md:px-0 lg:pl-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat
          </p>
          <nav className='px-5 pb-6 md:px-0 lg:pl-10'>
            <button className='my-button'>Button</button>
            <button className='my-button text-black bg-white border border-black'>Button</button>
          </nav>
        </div>

      </div>

      <iframe loading="lazy" className='w-full h-[250px] md:h-[450px] lg:h-[700px] lg:mx-auto p-3 md:pt-12 md:px-0 md:pb-0' src="https://www.youtube.com/embed/HLQ1cK9Edhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  )
}

export default SectionVideo