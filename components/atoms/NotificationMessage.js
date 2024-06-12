import React from 'react';
import Image from 'next/image';
import { MessageContainer } from '../../styles/NotificationMessage.style';

const NotificationMessage = ({ message }) => {
  const {
    title, description, link, image, logo, goTo,
  } = message;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <MessageContainer onClick={() => goTo(link)}>
      <Image width={52} height={52} alt={title} src={logo} />
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <Image width={300} height={200} alt={title} src={image} />
    </MessageContainer>
  );
};

export default NotificationMessage;
