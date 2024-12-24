import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { BackArrowWrapper } from 'styles/BackArrow.style';

const BackArrow = ({ href = '#' }) => (
  <BackArrowWrapper href={href}>
    <HiArrowLongLeft size={24} />
    Back
  </BackArrowWrapper>
);

export default BackArrow;
