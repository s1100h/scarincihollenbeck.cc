import { useRouter } from 'next/router'
import Link from 'next/link'
import NavBar from '../../components/navbar'
import Head from 'next/head'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
              <Head>
        <title>Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Post
