import React from 'react'

const SectionCard = ({ name, title, description, url  }) => {
  return (
    <div className='flex border m-4 gap-2'>
      <div>
        <img src={url} alt={name} />
      </div>
      <div className='flex flex-col justify-evenly'>
        <div>
          <h3>{name}</h3>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className='flex gap-2'>
          <div>Icon</div>
          <div>Icon</div>
          <div>Icon</div>
        </div>
      </div>
    </div>
  )
}

function SectionArtists() {
  return (
    <div className='h-screen pt-20'>
      <div>SectionArtists</div>
      <hr className='bg-red-500' />

      <div className='flex flex-col lg:flex-row h-[80%] justify-evenly items-center mr-4 p-1 lg:mr-0 lg:p-0'>
        <div className='border h-[70%] flex flex-col gap-8'>
            <h1 className='text-2xl'>Our Team</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fuga sint? Ut.</p>
            <div>
              <button className='my-button'>button</button>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
          <SectionCard name={'name'} title={'lorem ipsum shuda'} description={'Nuirnahuixuinurinauhisnxiuniu...'} url={'https://picsum.photos/200'} />
          <SectionCard name={'name'} title={'lorem ipsum shuda'} description={'Nuirnahuixuinurinauhisnxiuniu...'} url={'https://picsum.photos/200'} />
          <SectionCard name={'name'} title={'lorem ipsum shuda'} description={'Nuirnahuixuinurinauhisnxiuniu...'} url={'https://picsum.photos/200'} />
        </div>
      </div>

    </div>
  )
}

export default SectionArtists