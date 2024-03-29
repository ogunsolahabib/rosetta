const signupForm = document.querySelector("#signup-data");
const signupBtn = document.querySelector("#sign-up");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  // const fname = signupForm['first_name'].value;
  // const lname = signupForm['last_name'].value;
  const email = signupForm["email"].value;
  const password = signupForm["password"].value;
  // console.log(email, password, fname, lname, phone);
  function isEmpty() {
    if (email == "" || password == "") {
      // signupBtn.classList.remove("modal-close");
      return false;
    }
  }

  console.log(email, password);
  // sign up user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
    signupForm.reset();
  });
});

// login
window.onload = function() {
  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    // get user info
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    // log the user in
    auth
      .signInWithEmailAndPassword(email, password)
      .then(cred => {
        console.log(cred.user);
        // signinForm.reset();
        if (cred.user) {
          window.location = "schedules.html";
          loginForm.querySelector(".error").innerHTML = "";
        }
      })
      .catch(err => {
        loginForm.querySelector(".error").innerHTML = err.message;
      });
  });
};
