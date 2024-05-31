import localforage from 'localforage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';
import { firebaseConfig } from './constants';

// enables messaging
const firebaseCloudMessaging = {
  tokenInlocalforage: async () => localforage.getItem('fcm_token'),

  async init() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);

      try {
        if ('serviceWorker' in navigator) {
          const messaging = firebase.messaging();
          const tokenInLocalForage = await this.tokenInlocalforage();
          const status = await Notification.requestPermission();

          if (status && status === 'granted') {
            const token = await messaging.getToken({
              vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
            });
            if (token && tokenInLocalForage !== token) {
              await localforage.setItem('fcm_token', token);
              await fetch('/api/fcm', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
              });
              return token;
            }
            return tokenInLocalForage;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};

export { firebaseCloudMessaging };
