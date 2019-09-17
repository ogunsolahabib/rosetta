// window.onload = function() {
const signupForm = document.querySelector("#signup-data");
// const signupBtn = document.querySelector("#sign-up");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  // const fname = signupForm['first_name'].value;
  // const lname = signupForm['last_name'].value;
  const email = signupForm["email"].value;
  const password = signupForm["password"].value;
  // console.log(email, password, fname, lname, phone);
  // function isEmpty() {
  //   if (email == "" || password == "") {
  //     signupBtn.classList.remove("modal-close");
  //     return false;
  //   }
  // }

  console.log(email, password);
  // sign up user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
    return db.collection('users').doc(cred.user.uid).set({
        bio: signupForm['signup-bio'].value,
        fname: signupForm.fname.value,
        lname: signupForm.lname.value,
        city: signupForm.city.value,
        street: signupForm.street.value,
        date: signupForm.date.value,
        time: signupForm.time.value
        
      });
    
    
    // if (cred.user) {
    //     window.location = "schedules.html";
    //     signupForm.querySelector(".error").innerHTML = "";
    //   }
    // }).catch(err => {
    //     signupForm.querySelector(".error").innerHTML = err.message;
    
  });
});
// }
