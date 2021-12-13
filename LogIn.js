function login () {

    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {

      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()

      database_ref.child('users/' + user.uid)
  
      window.location.href = '/dictionary.html';
  
    })
    
    .catch(function(error) {

      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
 