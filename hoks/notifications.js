import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { firebaseCloudMessaging } from '../utils/webPush';
import 'react-toastify/dist/ReactToastify.css';
import NotificationMessage from '../components/atoms/NotificationMessage';

function getMessage(handleClickPushNotification) {
  const messaging = firebase.messaging();
  messaging.onMessage((message) => {
    toast(
      <NotificationMessage
        message={{
          title: message?.notification?.title || message?.data?.title || ' ',
          description:
            message?.notification?.body || message?.data?.body || ' ',
          link:
            message?.notification?.url
            || message?.data?.url
            || '/library/category/firm-news',
          image:
            message?.notification?.image
            || message?.data?.image
            || '/images/lettarsLogoblack.png',
          logo:
            message?.notification?.icon
            || message?.data?.icon
            || '/images/sh-mini-diamond-PNG.svg',
          goTo: handleClickPushNotification,
        }}
      />,
      {
        className: 'tostify-custom',
      },
    );
  });
}

const PushNotificationLayout = ({ children }) => {
  const router = useRouter();

  const handleClickPushNotification = (url) => {
    if (!url) return;
    router.push(url);
  };

  useEffect(() => {
    async function setToken() {
      try {
        if ('serviceWorker' in navigator) {
          await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
            scope: '/firebase-cloud-messaging-push-scope',
          });

          const token = await firebaseCloudMessaging.init();
          if (token) {
            getMessage(handleClickPushNotification);
          }
        }
      } catch (error) {
        console.error('Service worker registration failed:', error);
      }
    }

    setToken();
  }, []);

  return <>{children}</>;
};

export default PushNotificationLayout;
