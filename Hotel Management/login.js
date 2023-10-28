const firebaseConfig = {
  apiKey: "AIzaSyCsnohWy0mCYS3e8I7m-tHsaq1CCFNOx4M",
  authDomain: "booking-7ac07.firebaseapp.com",
  projectId: "booking-7ac07",
  storageBucket: "booking-7ac07.appspot.com",
  messagingSenderId: "957616194135",
  appId: "1:957616194135:web:ae30d752afec3a0d00d912",
  measurementId: "G-V2HVE3JNFK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Sign-in function
function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Sign-in successful, redirect to main.html
          window.location.href = "fetch.html";
      })
      .catch((error) => {
          // Handle sign-in error
          console.error(error.message);
      });
}

// Active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        var activeUserAlert = alert("Active user " + email);
        
        // Close the alert automatically after 3 seconds (3000 milliseconds)
        setTimeout(function() {
            activeUserAlert.close();
        }, 3000);
    } else {
        alert("No Active user Found");
    }
});
