import Head from 'next/head';
import { withRouter } from 'next/router';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import { headers } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';


function SingleLocation({ location, router }){

  return (
    <>
      Single location data here...make it like single with the loader
    </>
  )
}

export async function getStaticPaths() {
  const locationsResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers });
  const json = await locationsResponse.json();
  const { offices } = json;

  return  {
    paths: offices.map(office =>  office.slug) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();
  const locationResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/office/${params.slug}`, { headers });
  const location = await locationResponse.json();

  return {
    props: {
      location,
      slides
    },
  }
}

export default withRouter(SingleLocation)
