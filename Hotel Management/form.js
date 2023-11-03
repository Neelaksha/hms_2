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


  var BOOKINGDB = firebase.database().ref("BOOKING");

  document.getElementById("BOOKING").addEventListener("submit",submitfrom);

  function submitfrom(e){
    e.preventDefault();
    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var email = getElementVal('email');
    var phoneno = getElementVal('phoneno');
    var typeofroom = getElementVal('typeofroom');
    var noofroom = getElementVal('noofroom');
    var adult = getElementVal('adult');
    var child = getElementVal('child');
    var checkin = getElementVal('checkin');
    var checkout = getElementVal('checkout');

    saveMessages(fname,lname,email,phoneno,typeofroom,noofroom,adult,child,checkin,checkout);

    document.querySelector('.alert').style.display = "block";

    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
  }, 3000);

  document.getElementById("BOOKING").reset();
  }

  const saveMessages = (fname,lname,email,phoneno,typeofroom,noofroom,adult,child,checkin,checkout) =>{
    var newbookingform = BOOKINGDB.push();
     newbookingform.set({
      fname : fname,
      lname : lname,
      email : email,
      phoneno : phoneno,
      typeofroom : typeofroom,
      noofroom : noofroom,
      adult : adult,
      child : child,
      checkin : checkin,
      checkout : checkout,
   })
  }

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}


/*To show in console
// Assuming you've already initialized Firebase as you've shown in your code

// Reference to the "BOOKING" node in the Firebase Realtime Database
var BOOKINGDB = firebase.database().ref("BOOKING");

// Use the once() method to read data once
BOOKINGDB.once("value").then(function(snapshot) {
    // Get the data from the snapshot
    var data = snapshot.val();

    // Do something with the data, for example, log it to the console
    console.log(data);
}).catch(function(error) {
    // Handle any errors that may occur during the retrieval
    console.error("Error retrieving data: " + error);
});

// Alternatively, you can set up a listener to receive real-time updates
BOOKINGDB.on("value", function(snapshot) {
    // This will be triggered whenever the data at "BOOKING" changes
    var data = snapshot.val();

    // Do something with the updated data
    console.log("Data has changed:", data);
});

// To stop listening for updates, you can use BOOKINGDB.off("value");
*/