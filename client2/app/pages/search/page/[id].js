import { useRouter } from 'next/router'
import NavBar from '../../../components/navbar'

const ResultsPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <NavBar />
      <h1>Search Page: {id}</h1>
    </>
  )
}

export default ResultsPage
