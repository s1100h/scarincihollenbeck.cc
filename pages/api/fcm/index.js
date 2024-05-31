import * as admin from 'firebase-admin';
import { initialAdminFCM } from '../../../utils/constants';

export default function handler(req, res) {
  if (req.method === 'POST') {
    if (!admin.apps.length) {
      try {
        admin.initializeApp({
          credential: admin.credential.cert(initialAdminFCM),
        });
      } catch (e) {
        console.error(`Failed to initialize App: ${e}`);
      }
    }
    const body = req.body;

    admin
      .messaging()
      .subscribeToTopic(body?.token, 'users')
      .then((response) => {
        // See the MessagingTopicManagementResponse reference documentation
        // for the contents of response.
        // eslint-disable-next-line no-console
        console.info('Successfully subscribed to topic:', response);
      })
      .catch((error) => {
        console.error('Error subscribing to topic:', error);
      });

    return res.status(200).json({ success: true });
  }
  return res.status(500).json({ message: 'The wrong request method.' });
}
