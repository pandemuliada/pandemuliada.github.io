import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pande Muliada Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
