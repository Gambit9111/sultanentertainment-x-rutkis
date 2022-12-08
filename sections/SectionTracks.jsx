import Image from 'next/image'

const SectionTrack = () => {
    return (
        <div className="w-full h-[125px] lg:h-[250px] flex justify-center gap-5 lg:gap-8">
            <Image src="/placeholderbig.svg" width={127} height={125} className="lg:w-[250px] lg:h-[250px]"/>
            <div className='flex flex-col justify-between lg:justify-evenly'>
                <div>
                    <h3 className='text-sm font-semibold pt-1 lg:pb-3'>Puidokas</h3>
                    <h3 className='text-sm font-bold lg:text-2xl'>Blog title heading will go here</h3>
                    <p className='hidden lg:inline-flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, tempore!</p>
                </div>
                <div className='flex items-center gap-3'>
                    <Image src="/placeholdersmall.svg" width={49} height={48} />
                    <div className='w-[127px] lg:w-[210px] h-[10px] bg-[#D9D9D9] rounded-lg'></div>
                </div>
            </div>
        </div>
    )
}

function SectionTracks() {
  return (
    <div className="mt-12 lg:mt-56">
        <h3 className="font-semibold text-center pb-6">Songs</h3>
        <h1 className="text-[56px] leading-[67px] text-center font-bold px-1 pb-6">Newest tracks by our artists</h1>
        <div>
            <div className="grid grid-rows-2 grid-cols-3 pb-10 gap-2 lg:flex lg:justify-center lg:gap-5 lg:pt-8 lg:pb-12">
                <button>Category one</button>
                <button>Category two</button>
                <button>Category three</button>
                <button>Category four</button>
                <button>Category five</button>
                <button className="my-button text-black bg-white border border-black">View all</button>
            </div>
            <div className='flex flex-col gap-5 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-14'>
                <SectionTrack />
                <SectionTrack />
                <SectionTrack />
                <SectionTrack />
            </div>
        </div>
    </div>
  )
}

export default SectionTracks