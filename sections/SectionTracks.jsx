import React from 'react'

const SectionCard = ({ artist, title, description, url  }) => {
    return (
    <div className='flex border m-4'>
        <div>
            <img src={url} alt={artist} />
        </div>
        <div className='flex flex-col justify-between'>
            <div>
                <h3>{artist}</h3>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div>
                <button>button</button>
                <div className='w-[250px] h-[10px] bg-yellow-500'></div>
            </div>
        </div>
    </div>
    )
}


function SectionTracks() {
  return (
    <div className='h-screen pt-20'>
        <h1>SectionTracks</h1>
        <hr className='bg-red-500' />
        <div className='flex flex-col items-center gap-6 h-full'>
            <div>
                <h2>Songs</h2>
                <h2>Newest tracks by our artists</h2>
            </div>
            <div className='flex flex-col items-center gap-0 lg:gap-6'>
                <nav className='grid grid-cols-3 lg:grid-cols-5'>
                    <button className='my-button'>button</button>
                    <button className='my-button'>button</button>
                    <button className='my-button'>button</button>
                    <button className='my-button'>button</button>
                    <button className='my-button'>button</button>
                </nav>
                <div className='grid lg:grid-rows-2 lg:grid-cols-2 gap-0 lg:gap-6 px-10 mr-4 lg:p-0'>
                    <SectionCard artist={'artist'} title={'lorem ipsum shuda'} description={'AAAAAAAAAAAAAA...'} url={'https://picsum.photos/200'} />
                    <SectionCard artist={'artist'} title={'lorem ipsum shuda'} description={'bbbbbbbbbbbbbbbbbb...'} url={'https://picsum.photos/200'} />
                    <SectionCard artist={'artist'} title={'lorem ipsum shuda'} description={'cccccccccccccccccccc...'} url={'https://picsum.photos/200'} />
                    <SectionCard artist={'artist'} title={'lorem ipsum shuda'} description={'dddddddddddddddddddd...'} url={'https://picsum.photos/200'} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTracks