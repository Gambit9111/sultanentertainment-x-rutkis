import React from 'react'

function SectionVideo() {
  return (
    <div className='h-screen'>
      <div>Sectionvideo</div>
      <hr className='bg-red-500' />

      <div className='h-full flex flex-col items-center p-6 mr-4 lg:mr-0'>
        <div className='basis-1/6 mb-20 flex items-center w-full justify-evenly'>
          <div className='pt-10'><h1 className='text-4xl'>Medium lenght headline goes here</h1></div>
          <div className='flex flex-col h-full justify-evenly'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum vero excepturi, ducimus harum eos!</h1>
            <div className='flex gap-2'>
              <button className='my-button'>button</button>
              <button className='my-button'>button</button>
            </div>
          </div>
        </div>

        <div className='bg-gray-400 basis-3/6 w-full lg:w-9/12'>
          VIDEO
        </div>
      </div>

    </div>
  )
}

export default SectionVideo