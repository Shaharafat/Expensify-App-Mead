import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain:process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database();
let googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider, database as default};

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//       expenses.push({
//         id: child.key,
//         ...child.val(),
//       });
//     });

//     console.log(expenses);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// database.ref("expenses").on(
//   "value",
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//       expenses.push({
//         id: child.key,
//         ...child.val(),
//       });
//     });

//     console.log(expenses);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// database.ref('expenses').push({
//   description: 'Office Rent',
//   note:'new note',
//   amount: 7500,
//   createdAt: 2567089323
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses/-MNyRFxYHl6c1sGhWqHj').update({
//   // description: 'Gas Bill'
//   amount: 234
// })

// // database.ref('expenses').push({
// //   description: 'Current Bill',
// //   note:'new note',
// //   amount: 400,
// //   createdAt: 4234564234562323
// // })

// // database.ref('expenses').push({
// //   description: 'Coffee Bill',
// //   note:'new note',
// //   amount: 500,
// //   createdAt: 27689323
// // })

// // database.ref().set({
// //   name: "Shah Arafat",
// //   job: {
// //     title: "Software Developer",
// //   },
// //   age: 24,
// //   isSingle: false,
// //   location: {
// //     city: "Chittagong",
// //     country: "Bangladesh",
// //   },
// // });

// // database.ref("age").set(27);
// // database.ref("location/city").set("Dhaka");
// // database
// //   .ref("attribute")
// //   .set({
// //     height: 30,
// //     width: 23,
// //   })
// //   .then(() => {
// //     console.log("second set call worked");
// //   })
// //   .catch((err) => console.log("Things did not for the second error"));

// // remove from database
// // database.ref('isSingle').remove().then(() => {console.log('data removed..');})
// // database.ref('location/city').set(null)

// // update database
// // database.ref().update({
// //   name:'Imtiaz',
// //   'location/city': "Khulna"
// // })

// // database.ref().update({
// //   stressLevel: 6,
// //   "job/company": "Amazon",
// //   "location/city": "Seattle",
// // });

// // get data
// // there are 2 methods. both work
// // database.ref("age").once("value", (snapshot) => {
// //   console.log(snapshot.val());
// // });

// // database
// //   .ref("age")
// //   .once("value")
// //   .then((snapshot) => {
// //     console.log(snapshot.val());
// //   });

// // const valueOnChange = database.ref("location/city").on("value", (snapshot) => {
// //   console.log(snapshot.val());
// // }, () => {
// //     console.log('Error with data fetching...');
// // });

// // setTimeout(() => {
// //   database.ref("location/city").set("Sylhet");
// // }, 3500);

// // setTimeout(() => {
// //   database.ref("location/city").set("Rangpur");
// // }, 7000);

// // database.ref("location/city").off(valueOnChange);

// // setTimeout(() => {
// //   database.ref("location/city").set("Barishal");
// // }, 10000);

// // database.ref().on('value', (snapshot) => {
// //   const data = snapshot.val()
// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// // }, (err) => {
// //     console.log(err);
// // })

// // database.ref().update({
// //   'job/company': 'Google',
// //   'job/title': 'Front-end Developer'
// // })
