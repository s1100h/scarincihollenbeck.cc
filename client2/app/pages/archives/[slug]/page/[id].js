import { useRouter } from 'next/router'
import NavBar from '../../../components/navbar'

const ArchivesPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <NavBar />
      <h1>Archives Page: {id}</h1>
    </>
  )
}

export default ArchivesPage
