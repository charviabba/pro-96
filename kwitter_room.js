 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAFxavKSFQnSxwo1MYe6mNnH70R8IJyptc",
    authDomain: "chattest-52e76.firebaseapp.com",
    projectId: "chattest-52e76",
    storageBucket: "chattest-52e76.appspot.com",
    messagingSenderId: "761568205044",
    appId: "1:761568205044:web:c3c9b2462edd1c462aa6a1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome" +user_name+" !";
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
//Start code
console.log("room name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
function redirectToRoomName(name) 
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}