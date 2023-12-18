const firebaseConfig = {
    apiKey: "AIzaSyDlmkW0HtzuUZQR5YCsCf9uaJ1Ijom5PUY",
    authDomain: "twiter-da-shoppe.firebaseapp.com",
    databaseURL: "https://twiter-da-shoppe-default-rtdb.firebaseio.com",
    projectId: "twiter-da-shoppe",
    storageBucket: "twiter-da-shoppe.appspot.com",
    messagingSenderId: "213700606823",
    appId: "1:213700606823:web:27ee7368a74bd04d788dc2"
  };

  firebase.initializeApp(firebaseConfig);
//ADICIONE SEUS LINKS FIREBASE

function addUser()
{
    userName = document.getElementById("userName").ariaValueMax;
    firebase.database().ref("/").child(userName).update({
        purpose : "adicionar usuário"
    });
}