import React, { useState } from 'react';
import {
  GetInTouchFormWrapper,
  GetInTouchMobileBtn,
} from 'styles/practices/GetInTouchForm.style';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import useStateScreen from 'hooks/useStateScreen';
import { MdTouchApp } from 'react-icons/md';
import ModalWindow from 'components/common/ModalWindow';
import { FormBox } from 'styles/AboutAuthorFormCard.style';
import SocialShare from '../post/SocialShare';

const GetInTouchForm = ({ isMobileBtn = true, isSticky = true }) => {
  const { isBigTabletScreen } = useStateScreen();
  const [show, setShow] = useState(false);

  if (isBigTabletScreen && isMobileBtn) {
    return (
      <>
        <GetInTouchMobileBtn onClick={() => setShow(true)}>
          <span>Click here to contact</span>
          <MdTouchApp />
        </GetInTouchMobileBtn>
        <ModalWindow isOpen={show} setOpenModal={setShow}>
          <FormBox>
            <h4>Let`s get in touch!</h4>
            <ContactForm blockName="sidebarmobile" />
          </FormBox>
        </ModalWindow>
      </>
    );
  }

  return (
    <GetInTouchFormWrapper isMobileBtn={isMobileBtn} isSticky={isSticky}>
      <SocialShare isPractice />
      <h3>Let&apos;s get in touch</h3>
      <p>
        Form instructions (Please feel free to contact us with any question.)
      </p>
      <ContactForm isPositionRelativeProp blockName="sidebar" />
    </GetInTouchFormWrapper>
  );
};
export default GetInTouchForm;
