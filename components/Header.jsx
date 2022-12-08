import Image from 'next/image'

function Header() {
  return (
    <header className="w-full h-[4.5rem] border-b border-black p-6 md:px-16 flex items-center justify-between">
          <Image src="/menu.svg" width={24} height={24} className="md:hidden" />
          <div className='hidden md:flex'>
            <h3>Home</h3>
            <h3>Contact</h3>
            <h3>Merch</h3>
            <h3>Artists</h3>
          </div>
          <Image src="/logo.svg" width={63} height={28} />
    </header>
  )
}

export default Header