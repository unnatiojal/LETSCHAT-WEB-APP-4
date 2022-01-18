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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
      });
      document.getElementById("msg").value = "";
  }

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}