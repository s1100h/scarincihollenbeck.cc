import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import OfficeList from 'components/organisms/contact-us/OfficeList';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import React, { useEffect, useRef, useState } from 'react';
import { SidebarTile } from '../../styles/attorney-page/ProfileSidebar.style';
import Surface from '../atoms/micro-templates/surface';
import SingleSubHeader from '../../layouts/SingleSubHeader';

const TilePuzzle = dynamic(() => import('../organisms/contact-us/TilePuzzle'));
const FormPageContent = ({
  canonicalUrl, seo, site, offices,
}) => {
  const formWrapper = useRef();
  const [formHeight, setFormHeight] = useState();

  useEffect(() => {
    setFormHeight(formWrapper.current.clientHeight);
  }, [formWrapper]);

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader title={site.title} subtitle={site.description} />
      <Container>
        <Row>
          <Col sm={12} lg={6} xl={4} ref={formWrapper}>
            <Surface unscrollable="unscrollable">
              <SidebarTile indent="true" red="true">
                {site.formLabel}
              </SidebarTile>
              <ContactForm />
            </Surface>
          </Col>
          <Col sm={12} lg={6} xl={8}>
            <OfficeList officesArr={offices} formHeight={formHeight} />
          </Col>
        </Row>
        <TilePuzzle />
      </Container>
    </>
  );
};

export default FormPageContent;
