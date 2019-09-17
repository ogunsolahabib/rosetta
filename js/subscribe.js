const board = document.querySelector('#display');

// console.log(board);

// // real-time listener
// db.collection('subscribe').onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         console.log(change.doc.data());
//         if(change.type == 'added'){
//             renderSubscribe(change.doc);
//         } else if (change.type == 'removed'){
//             let h1 = board.querySelector('[data-id=' + change.doc.id + ']');
//             board.removeChild(h1);
//         }
//     });
// });

