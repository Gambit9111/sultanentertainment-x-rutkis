import React from 'react'

function SectionFooter() {
  return (
    <div className='h-screen pt-20'>
      <div>SectionFooter</div>
      <hr className='bg-red-500' />
        <div className='flex flex-col h-[85%] justify-end gap-6'>
            <div className='flex flex-col lg:flex-row w-10/12 border mx-auto h-[40%]'>
                <div className='border basis-3/6 flex flex-col gap-3 pl-10'>
                    <h1 className='text-2xl'>Logo</h1>
                    <p>Join our newsletter</p>
                    <div>
                        <input type="email" placeholder='email' className='border bg-primary-black' />
                        <button className='my-button'>submit</button>
                    </div>
                    <p>by subscribing Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className='border basis-1/6 flex flex-col gap-4'>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                </div>
                <div className='border basis-1/6 flex flex-col gap-4'>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                </div>
                <div className='border basis-1/6 flex flex-col gap-4'>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                    <p>column one</p>
                </div>
            </div>
            <div className='flex w-11/12 mx-auto border-t-2 justify-between'>
                <h1>Gucci gang</h1>
                <div className='flex gap-6'>
                    <p>privacy police</p>
                    <p>terms of service</p>
                    <p>cookies settings</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFooter