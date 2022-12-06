import React from 'react'

function SectionVideo() {
  return (
    <div className='h-screen pt-20'>
      <div>Sectionsponsors</div>
      <hr className='bg-red-500' />
      <div className='flex flex-col items-center h-full'>
        <div className='w-full text-center basis-1/4'>
          <h1 className='text-2xl'>People are writting about us!</h1>
          <div className='w-full h-[72px] bg-red-500/30'>SPONSORS</div>
        </div>
        <div className='basis-2/4 flex flex-col items-center justify-evenly p-10'>
          <h1 className='text-2xl'>Medium lenght heading goes here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo tempore maxime dolores velit expedita sint!</p>
          <div>
            <button className='my-button'>Button</button>
            <button className='my-button'>Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionVideo