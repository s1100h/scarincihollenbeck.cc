import SingleSubHeader from '../layouts/SingleSubHeader';
import LargeSidebar from '../layouts/LargeSidebar';
import BodyContent from '../components/locations/body-content';
import SideBar from '../components/locations/sidebar';
import { headers, urlify } from 'utils/helpers';


export default function Location() {
  const [offices, setOffices ] = useState([]);
  const [currentOffice, setCurrentOffice ] = useState([]);
  const [posts, setPosts ] = useState([]);
  
  useEffect(async () => {
    const [locations, currentOffice, currentOfficePosts] = await Promise.all([
      fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/location-portal/offices`, { headers }).then((data) => data.json()),
      fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/office/${params.slug}`, { headers }).then((data) => data.json()),
      fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-location/posts/${params.slug}`, { headers }).then((data) => data.json())
    ]);

    setOffices(locations.offices);
    setCurrentOffice(currentOffice);
    setPosts(currentOfficePosts);
  });
  return (
     <div id="location">
        <SingleSubHeader
          title="Office Locations"
          subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C., with our head quarters in Lyndhurst, NJ.`}
          image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg"
        />
        <LargeSidebar
          body={(
            <BodyContent
              attorneys={currentOffice.attorneys}
              practices={currentOffice.practices}
              map={currentOffice.mapLink}
              title={currentOffice.name}
            />
        )}
          sidebar={(
            <SideBar
              title={currentOffice.name}
              posts={posts}
              offices={offices}
              startingKey={urlify(currentOffice.name)}
            />
        )}
        />  
    </div>
  );
}
