
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome" + user_name +"!";

function addRoom()
{
      room_name=document.getElementById("room_name").ariaValueMax;
      firebase.database().ref("/").child("room_name").update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name , room-name");

      window.location="kwitter_page.html";
}




const firebaseConfig = {
      apiKey: "AIzaSyA0gQ5eU8PC-g4xkiw38TjscNzLRqdCV1I",
      authDomain: "kwitter-e5921.firebaseapp.com",
      databaseURL: "https://kwitter-e5921-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5921",
      storageBucket: "kwitter-e5921.appspot.com",
      messagingSenderId: "578734865226",
      appId: "1:578734865226:web:3064d4de87722db8a1dfb3",
      measurementId: "G-778N1T6F5T"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function logout(){
      console.log(name);
      localStorage.setItem("room_name" , name)
;} window.location="kwitter_page.html";

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="kwitter.html";
}
