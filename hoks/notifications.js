'use client';

import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { firebaseCloudMessaging } from '../utils/firebaseCloudMessaging';

// Get the push notification message and triggers a toast to display it
function getMessage(handleClickPushNotificationArg) {
  const messaging = firebase.messaging();
  messaging.onMessage((message) => {
    toast(
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div onClick={() => handleClickPushNotificationArg(message?.data?.url)}>
        <h5>{message?.notification?.title || message?.data?.title}</h5>
        <p>{message?.notification?.body || message?.data?.body}</p>
      </div>,
      {
        closeOnClick: false,
      },
    );
  });
}
const Notifications = ({ children }) => {
  const router = useRouter();

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url) => {
    if (!url) return;
    router.push(url);
  };

  useEffect(() => {
    (async () => {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          getMessage(handleClickPushNotification);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      {children}
    </>
  );
};

export default Notifications;
