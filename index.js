var express = require('express');
app = express();
const firebase = require('firebase')
port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));
app.listen(port);



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdWLtBoFdlno9ZMABmF9CjqHwDN23qpJo",
    authDomain: "homate-aacb0.firebaseapp.com",
    databaseURL: "https://homate-aacb0.firebaseio.com",
    projectId: "homate-aacb0",
    storageBucket: "homate-aacb0.appspot.com",
    messagingSenderId: "24651950498"
  };
  firebase.initializeApp(config);

  var db = firebase.firestore();