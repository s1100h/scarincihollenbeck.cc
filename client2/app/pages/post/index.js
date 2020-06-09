import Link from 'next/link'
import NavBar from '../../components/navbar'
import Head from 'next/head'

const Post = () => {


  return (
    <>
              <Head>
        <title>All Posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <h1>All Posts</h1>
      
    </>
  )
}

export default Post
