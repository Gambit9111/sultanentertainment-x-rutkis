import '../styles/globals.css'
import App from 'next/app'
import LayoutMain from '../components/layouts/LayoutMain'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    )
  }
}

export default MyApp