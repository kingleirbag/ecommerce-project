const firebase = require('firebase');
const config = require('./c');

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;