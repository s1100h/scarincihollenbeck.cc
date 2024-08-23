import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import OfficeList from 'components/organisms/contact-us/OfficeList';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Surface from '../atoms/micro-templates/surface';
import SubHeader from '../../layouts/SubHeader/SubHeader';
import { handleCheckDisclaimer } from '../../redux/slices/forms.slice';

const TilePuzzle = dynamic(() => import('../organisms/contact-us/TilePuzzle'));
const FormPageContent = ({
  canonicalUrl, seo, site, offices,
}) => {
  const dispatch = useDispatch();
  const formWrapper = useRef();
  const [formHeight, setFormHeight] = useState();

  useEffect(() => {
    setFormHeight(formWrapper.current.clientHeight);
  }, [formWrapper]);

  useEffect(() => () => dispatch(handleCheckDisclaimer(false)), []);

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SubHeader title={site.title} subtitle={site.description} />
      <Container>
        <Row>
          <Col sm={12} lg={6} xl={4} ref={formWrapper}>
            <Surface unscrollable="unscrollable">
              <h3 className="red-title">{site.formLabel}</h3>
              <ContactForm isPositionRelativeProp />
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
