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
// iss.fetchCoordsByIP(`162.245.144.188`, (error, data) => {
//   console.log('Error: ' , error);
//   console.log('Data: ' , data);
// });

// small test, make them work together
// iss.fetchMyIP((error, ip) => {
//   iss.fetchCoordsByIP(ip, (error, data) => {
//     console.log('Error: ' , error);
//     console.log('Data: ' , data);
//   });
// });

iss.fetchISSFlyOverTimes({ latitude: '49.26200', longitude: '-123.09230' }, (error, data)=>{
  console.log('Error: ' , error);
  console.log('Data: ' , data);
});