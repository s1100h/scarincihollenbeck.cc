import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { firebaseCloudMessaging } from '../utils/webPush';
import 'react-toastify/dist/ReactToastify.css';

function getMessage(handleClickPushNotification) {
  const messaging = firebase.messaging();
  messaging.onMessage((message) => {
    toast(
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div onClick={() => handleClickPushNotification(message?.data?.url)}>
        <h5>{message?.notification?.title || message?.data?.title}</h5>
        <p>{message?.notification?.body || message?.data?.body}</p>
      </div>,
      {
        closeOnClick: false,
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
