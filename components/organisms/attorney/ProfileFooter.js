import dynamic from 'next/dynamic';
import lineStyles from 'styles/LineHeader.module.css';

const ClientSlider = dynamic(() => import('components/molecules/attorney/ClientSlider'));
const FooterArticles = dynamic(() => import('components/molecules/attorney/FooterArticles'));

const ProfileFooter = ({ clients, attorneyFooterBlogArticles, attorneyFooterNewsArticles }) => (
  <>
    {clients && clients.length > 0 && (
      <>
        <div className={`${lineStyles.lineHeader} mb-5`}>
          <h3>Clients</h3>
        </div>
        <ClientSlider clients={clients} />
      </>
    )}
    {attorneyFooterNewsArticles && attorneyFooterNewsArticles.length > 0 && (
      <>
        <div className={lineStyles.lineHeader}>
          <h3>News & Press Releases</h3>
        </div>
        <FooterArticles articles={attorneyFooterNewsArticles} />
      </>
    )}
    {attorneyFooterBlogArticles && attorneyFooterBlogArticles.length > 0 && (
      <>
        <div className={lineStyles.lineHeader}>
          <h3>Blogs & Client Alerts</h3>
        </div>
        <FooterArticles articles={attorneyFooterBlogArticles} />
      </>
    )}
  </>
);

export default ProfileFooter;
