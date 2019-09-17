// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
  } else {
    console.log('user logged out');
  }
})

// log out

window.onload=function(){
const logout = document.querySelector('#log-out');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut()
    window.location='index.html';
  
});
}
