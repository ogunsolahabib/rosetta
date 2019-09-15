const board = document.querySelector('#display');
const form = document.querySelector('#subscription-form');

// create element & render project
function renderSubscribe(doc){
    let h1 = document.createElement("h1");
    let city = document.createElement("h1");
    let street = document.createElement("p");
    let date = document.createElement("p");
    let time = document.createElement("p");
    let cross = document.createElement("div");

    h1.setAttribute("data-id", doc.id);
    city.textContent = doc.data().city;
    street.textContent = doc.data().street;
    date.textContent = doc.data().date;
    time.textContent = doc.data().time;
    cross.textContent = "x";

    h1.appendChild(city);
    h1.appendChild(street);
    h1.appendChild(date);
    h1.appendChild(time);
    h1.appendChild(cross);

    board.appendChild(h1);
     // deleting data
     cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('subscribe').doc(id).delete();
    });

    
}
// getting data
// db.collection('project').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderProject(doc);
//     })
// });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('subscribe').add({
        city: form.city.value,
        street: form.street.value,
        date: form.date.value,
        time: form.time.value

    });
    form.city.value = '';
    form.street.value = '';
    form.date.value = '';
    form.time.value = '';
});

// real-time listener
db.collection('subscribe').orderBy('name').onSnapshot(snapshot => {
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

