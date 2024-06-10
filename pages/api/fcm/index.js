import * as admin from 'firebase-admin';
import { initialAdminFCM } from '../../../utils/constants';

export default function handler(req, res) {
  try {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(initialAdminFCM),
      });
    }

    const token = req.query.token;

    admin
      .messaging()
      .subscribeToTopic(token, 'users')
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
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}
