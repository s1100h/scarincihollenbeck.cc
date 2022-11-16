import dynamic from 'next/dynamic';

const ClientSlider = dynamic(() => import('components/molecules/attorney/ClientSlider'));
const FooterArticles = dynamic(() => import('components/molecules/attorney/FooterArticles'));

const ProfileFooter = ({ clients, attorneyFooterBlogArticles, attorneyFooterNewsArticles }) => (
  <>
    {clients && clients.length > 0 && (
      <>
        <h3 className="mb-5">Clients</h3>
        <ClientSlider clients={clients} />
      </>
    )}
    {attorneyFooterNewsArticles && attorneyFooterNewsArticles.length > 0 && (
      <>
        <h3>News & Press Releases</h3>
        <FooterArticles articles={attorneyFooterNewsArticles} />
      </>
    )}
    {attorneyFooterBlogArticles && attorneyFooterBlogArticles.length > 0 && (
      <>
        <h3>Blogs & Client Alerts</h3>
        <FooterArticles articles={attorneyFooterBlogArticles} />
      </>
    )}
  </>
);

export default ProfileFooter;
