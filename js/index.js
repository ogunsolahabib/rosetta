const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    db.collection('users').doc(user.uid).get().then(doc => {
        const html = `
          Logged in as ${user.email} 
        
        `;
        accountDetails.innerHTML = html;
      });
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
       // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};  
//  <div>${doc.data().bio}</div>
//   <div>${doc.data().fname}</div>
//   <div>${doc.data().lname}</div>
//   <div>${doc.data().city}</div>