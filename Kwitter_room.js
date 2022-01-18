const firebaseConfig = {
    apiKey: "AIzaSyCqb-go3Na34EEdS6LwVVlCaReOiouAEkY",
    authDomain: "letschat-ebd59.firebaseapp.com",
    databaseURL: "https://letschat-ebd59-default-rtdb.firebaseio.com",
    projectId: "letschat-ebd59",
    storageBucket: "letschat-ebd59.appspot.com",
    messagingSenderId: "571077459342",
    appId: "1:571077459342:web:ffbf52afda082e118a38df"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose: "Adding User"
    });;
  }

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_username").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
        localStorage.setItem("Roomname",room_name);
        window.location = "Kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
        console.log("room_name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "Kwitter_page.html";
}

  