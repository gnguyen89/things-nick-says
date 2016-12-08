import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBijYCYGpZ9iTUjUozNjHtfmxA68hK_YaI',
  authDomain: 'shit-nick-says.firebaseapp.com',
  databaseURL: 'https://shit-nick-says.firebaseio.com/',
};

firebase.initializeApp(config);

export default function (path, callback) {
  return firebase.database().ref(path)
    .on('value', (snapshot) => {
      callback(snapshot.val());
    });
}