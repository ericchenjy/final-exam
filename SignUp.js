const firebaseConfig = {
  apiKey: "AIzaSyCp3BIZdAuClH132ZhPWQoIHiMGG3SIR1g",
  authDomain: "auth-development-4238b.firebaseapp.com",
  projectId: "auth-development-4238b",
  storageBucket: "auth-development-4238b.appspot.com",
  messagingSenderId: "1049437055890",
  appId: "1:1049437055890:web:75cca2aa4ff780f2bfaf4b"
};

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const database = firebase.database()

  function signUp () {

    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {

      var user = auth.currentUser
      var database_ref = database.ref()
  
      //Creating the user data
      var user_data = {
        email : email,
        password, password,
      }
  
      //Store in the databse
      database_ref.child('Current user:' + user.uid).set(user_data)
      alert('Account Created');
    })

    .catch(function(error) {
        
      //get the error messages from the database
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  function validate_password(password) {
    // The code will only take length of 6 because the fireBase only allows mininum 6
    if (password < 6) {
      return false

    } else {
      return true
    }
  }
  
