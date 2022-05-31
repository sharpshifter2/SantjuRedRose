src = "https://www.gstatic.com/firebasejs/3.7.4/firebase.js"


var firebaseConfig = {
 
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database()
  .ref('Collected Data');

document.getElementById('contactForm')
  .addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('nom');
  var email = getInputVal('text');

  saveMessage(nom, text);
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
  });
}