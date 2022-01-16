const firebaseConfig = {
    apiKey: "AIzaSyAl2X6UvoXbUg2BoHSrBppvWCnTgJFCeRI",
    authDomain: "chat-app-86d36.firebaseapp.com",
    databaseURL: "https://chat-app-86d36-default-rtdb.firebaseio.com",
    projectId: "chat-app-86d36",
    storageBucket: "chat-app-86d36.appspot.com",
    messagingSenderId: "740828201319",
    appId: "1:740828201319:web:4c46170089bc00e5776fc2",
    measurementId: "G-531W7122LR"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data); 
name = message_data('name');
message = message_data('message');
like = message_data('like');
name_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
message_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+ firebase_message_id +" value=" + like +" onclick='update_like(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>like : "+ like +"</span></button><hr>";
row = name_tag + message_tag + like_button + span_tag;
document.getElementById("output").innerHTML += row; 
//End code
    } });  }); }
getData();
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like:0
  });
  document.getElementById("msg").value ="";
  
}
function update_like(message_id)
{
 console.log("clicked on like button-" + message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 update_likes = Number(likes) + 1;
  console.log(update_likes);

  firebase.database().ref(room_name).child(message_id).update({
        like:update_likes
  });
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}