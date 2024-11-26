import { ContainerDefault } from 'styles/Containers.style';
import { MAKE_A_PAYMENT } from 'utils/constants';
import MailingListIcon from 'components/common/icons/MailingListIcon';
import PaymentIcon from 'components/common/icons/PaymentIcon';
import { AnimatePresence } from 'framer-motion';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {
  HeaderTopLineIcon,
  HeaderTopLineItem,
  HeaderTopLineItems,
  HeaderTopLineLink,
  HeaderTopLineWrapper,
} from '../../../styles/Header.style';
import HeaderSearch from './HeaderSearch';
import { handleSubscriptionModalOpener } from '../../../redux/slices/modals.slice';

const twoButtons = (dispatch) => (
  <Fragment key="two-items">
    <HeaderTopLineItem
      initial={{ opacity: 0, y: '-100%' }}
      animate={{
        opacity: 1,
        y: 0,
        transitionEnd: {
          x: 0,
          y: 0,
        },
      }}
      exit={{ opacity: 0, y: '-100%' }}
    >
      <button
        onClick={() => dispatch(handleSubscriptionModalOpener({ active: true }))}
        className="header-subscription-btn"
      >
        <HeaderTopLineIcon>
          <MailingListIcon />
        </HeaderTopLineIcon>
        Join our mailing list
      </button>
    </HeaderTopLineItem>

    <HeaderTopLineItem
      initial={{ opacity: 0, y: '-100%' }}
      animate={{
        opacity: 1,
        y: 0,
        transitionEnd: {
          x: 0,
          y: 0,
        },
      }}
      exit={{ opacity: 0, y: '-100%' }}
    >
      <HeaderTopLineLink href={MAKE_A_PAYMENT} target="_blank" rel="noreferrer">
        <HeaderTopLineIcon>
          <PaymentIcon />
        </HeaderTopLineIcon>
        Make payment
      </HeaderTopLineLink>
    </HeaderTopLineItem>
  </Fragment>
);

const HeaderTopLine = ({ isOpenSearch, setIsOpenSearch, viewportWidth }) => {
  const dispatch = useDispatch();
  return (
    <HeaderTopLineWrapper>
      <ContainerDefault>
        <AnimatePresence>
          <HeaderTopLineItems>
            {!isOpenSearch && viewportWidth > 768 && twoButtons(dispatch)}
            {viewportWidth <= 768 && twoButtons(dispatch)}
            <HeaderTopLineItem className="mobile-hide" $open={isOpenSearch}>
              <HeaderSearch
                isOpenSearch={isOpenSearch}
                setIsOpenSearch={setIsOpenSearch}
              />
            </HeaderTopLineItem>
          </HeaderTopLineItems>
        </AnimatePresence>
      </ContainerDefault>
    </HeaderTopLineWrapper>
  );
};
export default HeaderTopLine;
