import ProfileImage from '../components/singleattorney/profile-image';
import InfoCard from '../components/singleattorney/info-card';
import MultiSubHeader from '../layouts/MultiSubHeader';
import FullWidth from '../layouts/FullWidth';
import { headers, createMarkup } from 'utils/helpers';

export default function SingleAdmin() {
  const [admin, setAdmin ] = useState([]);
  useEffect(async () => {
    const [admin] = await Promise.all([
      fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-admin/admin/${params.slug}`, { headers }).then((data) => data.json())
    ]);

    setAdmin(admin);
  });

  return (
    <>
      <div id="single-admin">
        <MultiSubHeader
          image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-JPG.jpg"
          height="450px"
          profile={(<ProfileImage image={admin.image.url} name={admin.name} />)}
          infoCard={(
            <InfoCard
              email={admin.email}
              social_media_links={admin.social_media_links}
              vizibility={admin.vizibility}
              fullName={admin.name}
              designation={admin.Title}
              phoneNumber={`201-896-4100 ${admin.phone_extension}`}
              socialMediaLinks={admin.social_media_links}
            />
        )}
        />
        <FullWidth>
          <div>
            <div className="line-header">
              <h3>Biography</h3>
            </div>
            <div className="w-100 mt-5">
              <div dangerouslySetInnerHTML={createMarkup(admin.biography)} />
            </div>
          </div>
        </FullWidth>
      </div>              
    </>
  );
}