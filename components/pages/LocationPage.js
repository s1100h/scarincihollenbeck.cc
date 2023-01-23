import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import LocationsBody from 'components/organisms/locations/LocationsBody';
import SideBar from 'components/organisms/locations/LocationsSidebar';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  LocalBusinessJsonLd,
  OrganizationJsonLd,
  SocialProfileJsonLd,
} from 'next-seo';

const LocationPage = ({
  seo, currentOffice, posts, linkToPdfMap,
}) => {
  const canonicalUrl = `${CURRENT_DOMAIN}/${seo.canonicalLink}`;

  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'location',
            item: '/location',
          },
          {
            position: 2,
            name: 'attorneys',
            item: '/attorneys',
          },
          {
            position: 3,
            name: 'Lester Aron',
            item: 'attorneys/lester-aron',
          },
        ]}
      />
      <OrganizationJsonLd
        type="Corporation"
        id="https://www.purpule-fox.io/#corporation"
        logo="https://www.example.com/photos/logo.jpg"
        legalName="Purple Fox LLC"
        name="Purple Fox"
        address={{
          streetAddress: '150 Clove Road 9th Floor',
          addressLocality: 'Little Falls, NJ',
          addressRegion: 'NJ',
          postalCode: '07424',
          addressCountry: 'US',
        }}
        contactPoint={[
          {
            telephone: '201-896-4100',
            contactType: 'customer service',
            email: 'customerservice@email.com',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish', 'French'],
          },
          {
            telephone: '+1-877-746-0909',
            contactType: 'customer service',
            email: 'servicecustomer@email.com',
            contactOption: 'TollFree',
            availableLanguage: 'English',
          },
          {
            telephone: '+1-877-453-1304',
            contactType: 'technical support',
            contactOption: 'TollFree',
            areaServed: ['US', 'CA'],
            availableLanguage: ['English', 'French'],
          },
        ]}
        sameAs={['https://www.orange-fox.com']}
        url="https://www.purpule-fox.io/"
      />
      <LocalBusinessJsonLd
        type="Store"
        id="http://davesdeptstore.example.com"
        name="Dave's Department Store"
        description="Dave's latest department store in San Jose, now open"
        url="http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427"
        telephone="+14088717984"
        address={{
          streetAddress: '1600 Saratoga Ave',
          addressLocality: 'San Jose',
          addressRegion: 'CA',
          postalCode: '95129',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '37.293058',
          longitude: '-121.988331',
        }}
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ]}
        sameAs={[
          'www.company-website-url1.dev',
          'www.company-website-url2.dev',
          'www.company-website-url3.dev',
        ]}
        openingHours={[
          {
            opens: '08:00',
            closes: '23:59',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            validFrom: '2019-12-23',
            validThrough: '2020-04-02',
          },
          {
            opens: '14:00',
            closes: '20:00',
            dayOfWeek: 'Sunday',
            validFrom: '2019-12-23',
            validThrough: '2020-04-02',
          },
        ]}
        rating={{
          ratingValue: '4.5',
          ratingCount: '2',
        }}
        review={[
          {
            author: 'John Doe',
            datePublished: '2006-05-04',
            name: 'A masterpiece of literature',
            reviewBody:
              'I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.',
            reviewRating: {
              bestRating: '5',
              worstRating: '1',
              reviewAspect: 'Ambiance',
              ratingValue: '4',
            },
          },
          {
            author: 'Bob Smith',
            datePublished: '2006-06-15',
            name: 'A good read.',
            reviewBody: "Catcher in the Rye is a fun book. It's a good book to read.",
            reviewRating: {
              ratingValue: '4',
            },
          },
        ]}
        makesOffer={[
          {
            priceSpecification: {
              type: 'UnitPriceSpecification',
              priceCurrency: 'EUR',
              price: '1000-10000',
            },
            itemOffered: {
              name: 'Motion Design Services',
              description: 'We are the expert of animation and motion design productions.',
            },
          },
          {
            priceSpecification: {
              type: 'UnitPriceSpecification',
              priceCurrency: 'EUR',
              price: '2000-10000',
            },
            itemOffered: {
              name: 'Branding Services',
              description:
                'Real footage is a powerful tool when it comes to show what the business is about. Can be used to present your company, show your factory, promote a product packshot, or just tell any story. It can help create emotional links with your audience by showing punchy images.',
            },
          },
        ]}
        areaServed={[
          {
            geoMidpoint: {
              latitude: '41.108237',
              longitude: '-80.642982',
            },
            geoRadius: '1000',
          },
          {
            geoMidpoint: {
              latitude: '51.108237',
              longitude: '-80.642982',
            },
            geoRadius: '1000',
          },
        ]}
        action={{
          actionName: 'potentialAction',
          actionType: 'ReviewAction',
          target: 'https://www.example.com/review/this/business',
        }}
      />

      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'How long is the delivery time?',
            acceptedAnswerText: '3-5 business days.',
          },
          {
            questionName: 'Where can I find information about product recalls?',
            acceptedAnswerText: 'Read more on under information.',
          },
        ]}
      />
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />

      <SingleSubHeader
        title={currentOffice.name}
        subtitle={seo.metaDescription}
        offset={0}
        span={8}
      />
      <Container>
        <Row>
          <Col sm={12} lg={9}>
            <LocationsBody
              locationId={currentOffice.id}
              attorneys={currentOffice.attorneys}
              practices={currentOffice.practices}
              map={currentOffice.mapLink}
              title={currentOffice.name}
              linkToPdfMap={linkToPdfMap}
            />
          </Col>
          <Col sm={12} md={3}>
            <SideBar title={currentOffice.name} posts={posts} startingKey={currentOffice.name} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LocationPage;
