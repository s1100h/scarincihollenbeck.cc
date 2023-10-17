import dynamic from 'next/dynamic';
import Image from 'next/legacy/image';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/SingleSubHeader';
import { categoryPostsByIdQuery } from 'utils/graphql-queries';
import useApolloQuery from 'hooks/useApolloQuery';
import ContentTitle from 'components/atoms/ContentTitle';
import {
  FirstColumn,
  SecondColumn,
  TwoColumnsContainer,
} from 'styles/Containers.style';
import { ContentContainer } from 'styles/PageContant.style';
import { JSXWithDynamicLinks } from '../atoms/micro-templates/JSXWithDynamicLinks';

const PostList = dynamic(import('components/molecules/PostList'));
const Sidebar = dynamic(import('components/organisms/covid/Sidebar'));

const CovidPage = ({
  title,
  seo,
  bodyContent,
  canonicalUrl,
  subTitle,
  contentId,
}) => {
  /** Handle Article Archive Query */
  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = useApolloQuery(categoryPostsByIdQuery, {
    first: 6,
    last: null,
    after: null,
    before: null,
    id: contentId,
  });

  const crisisManagementTemplate = (bodyContentArgs) => {
    const { article, banner, listLinks } = bodyContentArgs;
    return (
      <>
        <Image src={banner.link} width={900} height={450} layout="intrinsic" />
        <ContentContainer>
          <JSXWithDynamicLinks HTML={article} />
          <JSXWithDynamicLinks HTML={listLinks} />
        </ContentContainer>
      </>
    );
  };

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader title={title} subtitle={subTitle} span={8} offset={0} />
      <TwoColumnsContainer>
        <FirstColumn>
          {typeof bodyContent !== 'string' ? (
            crisisManagementTemplate(bodyContent)
          ) : (
            <ContentContainer>
              <JSXWithDynamicLinks
                HTML={formatPageImageToCloudinaryUrl(bodyContent)}
              />
            </ContentContainer>
          )}
          <div className="border-top border-top pt-4 px-2">
            <h4 className="mb-5">
              <strong className="text-capitalize">COVID-19 Articles</strong>
            </h4>
            <PostList
              content={{
                handleNextPagination,
                handlePrevPagination,
                data,
                loading,
                error,
              }}
            />
          </div>
          <ContentTitle title="Contact A Firm Representative" />
          <ContactForm />
        </FirstColumn>
        <SecondColumn>
          <Sidebar />
        </SecondColumn>
      </TwoColumnsContainer>
    </>
  );
};

export default CovidPage;
