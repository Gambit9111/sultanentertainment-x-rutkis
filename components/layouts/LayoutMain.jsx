import Header from '../Header'

function LayoutMain({ children }) {
  return (
    <div className='flex flex-col'>
        <Header />
        {children}
    </div>
  )
}

export default LayoutMain