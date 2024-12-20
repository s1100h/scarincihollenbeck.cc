import React from 'react';
import { useDispatch } from 'react-redux';
import { StandardBlueButton } from 'styles/Buttons.style';
import { globalColor } from 'styles/global_styles/Global.styles';
import {
  SubHeaderInteractive,
  SubHeaderSubscriptionContent,
  SubHeaderSubscriptionHolder,
  SubHeaderSubscriptionTitle,
} from 'styles/practices/SubHeader.style';
import { handleSubscriptionModalOpener } from '../../redux/slices/modals.slice';

const SubHeaderSubscription = () => {
  const dispatch = useDispatch();
  return (
    <SubHeaderInteractive $bg={globalColor.blue.blue6002}>
      <SubHeaderSubscriptionHolder>
        <SubHeaderSubscriptionContent>
          <SubHeaderSubscriptionTitle>
            Sign up to get the latest from our attorneys!
          </SubHeaderSubscriptionTitle>
          <p>
            Consider subscribing to our Firm Insights mailing list by clicking
            the button below so you can keep up to date with the firm`s latest
            articles covering various legal topics.
          </p>
        </SubHeaderSubscriptionContent>
        <StandardBlueButton
          onClick={() => dispatch(handleSubscriptionModalOpener({ active: true }))}
        >
          Subscribe now
        </StandardBlueButton>
      </SubHeaderSubscriptionHolder>
    </SubHeaderInteractive>
  );
};

export default SubHeaderSubscription;
