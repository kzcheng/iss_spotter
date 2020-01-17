// index.js
const iss = require('./iss');


// first test, see if you can get an IP
// iss.fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// second test, testing fetchCoordsByIP
iss.fetchCoordsByIP(`162.245.144.188`, (error, data) => {
  console.log('Error: ' , error);
  console.log('Data: ' , data);
});