export const environment = {
  firebase: {
    projectId: 'blz-one-9e383',
    appId: '1:817319905653:web:94174c7e723ee8d08bab3c',
    databaseURL: 'https://blz-one-9e383-default-rtdb.firebaseio.com',
    storageBucket: 'blz-one-9e383.appspot.com',
    locationId: 'us-east4',
    apiKey: 'AIzaSyDJNpSgZqhn1_ipvk54wsU11UIE1BoYIfc',
    authDomain: 'blz-one-9e383.firebaseapp.com',
    messagingSenderId: '817319905653',
    measurementId: 'G-Y5ZW5STMX1',
  },
  sendinblue: {
    apiKey: process.env["SIB_API_KEY"],
    mailingListId: 2
  },
  production: true
};
