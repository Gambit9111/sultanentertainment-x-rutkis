import Header from '../Header'
import Grid from '../Grid'
import Image from 'next/image'

function LayoutMain({ children }) {
  return (
    <div>
        <Header />
        <div>
          {children}
        </div>
    </div>
  )
}

export default LayoutMain