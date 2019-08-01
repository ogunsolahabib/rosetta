const signupForm = document.querySelector('#signup-data');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    // get user info
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    
    // sign up user
    
    auth.createUserWithEmailAndPassword(email , password).then(cred =>{
        
        // const modal = document.querySelector('#signup_personal-data');
        // M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});


// log out


const logout = document.querySelector('#log-out');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
  })
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    // const modal = document.querySelector('#modal-login');
    // M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});