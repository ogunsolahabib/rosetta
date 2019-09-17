const board = document.querySelector('#display');

// listen for auth status changes
auth.onAuthStateChanged(user => {
  console.log(user)
  if (user) {
    db.collection('subscribe').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
          console.log(change.doc.data());
          if(change.type == 'added'){
              renderSubscribe(change.doc);
          } else if (change.type == 'removed'){
              let h1 = board.querySelector('[data-id=' + change.doc.id + ']');
              board.removeChild(h1);
          }
      });
  });
    setupUI(user);
  } else {
    setupUI();
  }
})


const form = document.querySelector('#signup-data');

// create element & render project
function renderSubscribe(doc){
    let h1 = document.createElement("h1");
    let fname = document.createElement("h3");
    let lname = document.createElement("h3");
    let street = document.createElement("h5");
    let city = document.createElement("h5");
    let date = document.createElement("h5");
    let time = document.createElement("h5");
    // let cross = document.createElement("div");

    h1.setAttribute("data-id", doc.id);
    fname.textContent = doc.data().fname;
    lname.textContent = doc.data().lname;
    city.textContent = doc.data().city;
    street.textContent = doc.data().street;
    date.textContent = doc.data().date;
    time.textContent = doc.data().time;
    // cross.textContent = "x";

    h1.appendChild(fname);
    h1.appendChild(lname);
    h1.appendChild(city);
    h1.appendChild(street);
    h1.appendChild(date);
    h1.appendChild(time);
    // h1.appendChild(cross);

   board.appendChild(h1);
    
     // deleting data
    //  cross.addEventListener('click', (e) => {
    //     e.stopPropagation();
    //     let id = e.target.parentElement.getAttribute('data-id');
    //     db.collection('subscribe').doc(id).delete();
    // });

    
}
// getting data
// db.collection('project').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderProject(doc);
//     })
//  });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('subscribe').add({
        fname: form.fname.value,
        lname: form.lname.value,
        city: form.city.value,
        street: form.street.value,
        date: form.date.value,
        time: form.time.value

    });
    form.fname.value = '';
    form.lname.value = '';
    form.city.value = '';
    form.street.value = '';
    form.date.value = '';
    form.time.value = '';
});

// const signupForm = document.querySelector("#signup-data");
// // const signupBtn = document.querySelector("#sign-up");
// signupForm.addEventListener("submit", e => {
//   e.preventDefault();

  // get user info
  // const fname = signupForm['first_name'].value;
  // const lname = signupForm['last_name'].value;
  // const email = signupForm["email"].value;
  // const password = signupForm["password"].value;
  // console.log(email, password, fname, lname, phone);
  // function isEmpty() {
  //   if (email == "" || password == "") {
  //     signupBtn.classList.remove("modal-close");
  //     return false;
  //   }
  // }

  // console.log(email, password);
  // sign up user
//   auth.createUserWithEmailAndPassword(email, password).then(cred => {
//     console.log(cred);
//     signupForm.reset();
//   });
// });

// login
// window.onload = function() {
  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    // get user info
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        signinForm.reset();
        if (cred.user) {
          // window.location = "schedules.html";
          loginForm.querySelector(".error").innerHTML = "";
        }
      }).catch(err => {
        loginForm.querySelector(".error").innerHTML = err.message;
       });
  });

