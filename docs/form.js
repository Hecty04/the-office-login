  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBXOYyhgzt03juYpibUtU2YLerAcavw07I",
    authDomain: "form-2ffde.firebaseapp.com",
    projectId: "form-2ffde",
    storageBucket: "form-2ffde.appspot.com",
    messagingSenderId: "510942279460",
    appId: "1:510942279460:web:6ff2bd23e590e3d33065b1",
    measurementId: "G-ZYNEY2TJFJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    const auth = firebase.auth();

    function signUp(){

        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

        alert("Signed Up");
        document.getElementById("formContainer").style.display = "block";
    }


    function signIn(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

        alert("Signed In " + email.value);

        document.getElementById("formContainer").style.display = "block";

        //Take user to a different or home page

    }

    function signOut(){

        auth.signOut();
        alert("Signed Out")

    }


    auth.onAuthStateChanged(function(user){

        if(user){

            var email = user.email;
            alert("Active User " + email)
            //is signed in

        }else{

            alert("No Active User");

            //no user is signed in
        }



    });
