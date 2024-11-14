import React from 'react';

const SwiperSlide = ({ children }) => (
  <swiper-slide class="slide" suppressHydrationWarning>
    {children}
  </swiper-slide>
);

export default SwiperSlide;
