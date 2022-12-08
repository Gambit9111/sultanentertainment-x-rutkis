import React from 'react'

function SectionVideo() {
  return (
    <div className='h-full'>

      <div className='md:flex md:flex-row md:pt-12'>

        <h1 className='font-bold text-[40px] leading-[48px] pb-7 px-6 md:px-0 md:pb-0 text-center md:text-left md:w-6/12'>Medium lenght hero headline goes here</h1>

        <div className='md:flex md:flex-col md:w-6/12'>
          <p className='pb-10 text-left px-5 md:px-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat
          </p>
          <nav className='px-5 pb-8 md:px-0'>
            <button className='my-button'>Button</button>
            <button className='my-button text-black bg-white border border-black'>Button</button>
          </nav>
        </div>

      </div>

      <iframe className='w-full h-[250px] sm:h-[450px] p-3 md:pt-12 md:px-0 md:pb-0' src="https://www.youtube.com/embed/HLQ1cK9Edhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  )
}

export default SectionVideo