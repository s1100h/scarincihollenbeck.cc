import React from 'react';
import {
  GetInTouchFormWrapper,
  GetInTouchMobileBtn,
} from 'styles/practices/GetInTouchForm.style';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import useStateScreen from 'hooks/useStateScreen';
import { MdTouchApp } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import SocialShare from '../post/SocialShare';
import { handleModalOpener } from '../../../redux/slices/modals.slice';

const GetInTouchForm = ({ isMobileBtn = true, isSticky = true }) => {
  const { isBigTabletScreen } = useStateScreen();
  const dispatch = useDispatch();

  if (isBigTabletScreen && isMobileBtn) {
    return (
      <>
        <GetInTouchMobileBtn
          onClick={() => dispatch(handleModalOpener({ active: true }))}
        >
          <span>Click here to contact</span>
          <MdTouchApp />
        </GetInTouchMobileBtn>
      </>
    );
  }

  return (
    <GetInTouchFormWrapper
      isMobileBtn={isMobileBtn}
      isSticky={isSticky}
      data-testid="get-in-touch-form"
    >
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
