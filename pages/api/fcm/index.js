import * as admin from 'firebase-admin';
import { initialAdminFCM } from '../../../utils/constants';

export default async function handler(req, res) {
  try {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(initialAdminFCM),
      });
    }

    const token = req.query.token;

    const response = await admin.messaging().subscribeToTopic(token, 'users');
    // eslint-disable-next-line no-console
    console.info('Successfully subscribed to topic:', response);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}
