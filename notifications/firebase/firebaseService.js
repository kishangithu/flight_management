// firebaseService.js
import admin from 'firebase-admin';
import serviceAccount from './path/to/serviceAccountKey.json';

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Function to send a notification
export const sendNotification = (token, payload) => {
  return admin.messaging().sendToDevice(token, payload)
    .then(response => console.log('Notification sent successfully:', response))
    .catch(error => console.error('Error sending notification:', error));
};
