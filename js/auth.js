const signupForm = document.querySelector('#signup-data');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    // get user info
    const fname = signupForm['first_name'].value;
    const lname = signupForm['last_name'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    const phone = signupForm['telephone'].value;
    console.log(email, password, fname, lname, phone);
    // sign up user
    
    auth.createUserWithEmailAndPassword(email , password).then(cred =>{
      console.log(cred);
    
        signupForm.reset();
    });
});



// login
window.onload=function(){
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
      
      if (cred.user==='auth/wrong-password') {
        alert("error");
      } else {
          window.location='schedules.html';
      }
      loginForm.reset();
    
    
  });

});
}