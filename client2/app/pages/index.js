import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'


const Home = () => (
  <>
   <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <NavBar />
    <h1>Hello World!</h1>
    <Footer />
  </>
)

export default Home
