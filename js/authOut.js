// log out

window.onload = function() {
  const logout = document.querySelector("#log-out");
  logout.addEventListener("click", e => {
    e.preventDefault();
    auth.signOut().then(() => {
      console.log("user signed out");
      window.location = "index.html";
    });
  });
};
