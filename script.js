const firebaseConfig = {
    apiKey: "AIzaSyBOOprPhK5Gg2CBv6KlGgqqVyfVgB--rXY",
    authDomain: "webs-database.firebaseapp.com",
    databaseURL: "https://webs-database-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "webs-database",
    storageBucket: "webs-database.appspot.com",
    messagingSenderId: "272279277711",
    appId: "1:272279277711:web:bb19cb89d880c292ca60fa",
    measurementId: "G-BT2WT1H622"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e) {
      e.preventDefault();

      var nom = getElementVal("nom");
      var text = getElementVal("text");

      console.log(nom, text);
  }

  const getElementVal = (id) => {
      return document.getElementById(id).value;
  };