const router = require('express').Router()
module.exports = router
const Twitter = require('twitter-node-client').Twitter;
const keys = require('../../data/twitter_config')
var twitter = new Twitter(keys);

let tweets;

//Callback functions
// var error = function (err, response, body) {
//   console.log(err);
// };
// var success = function (data) {
//   return JSON.parse(data)
// };


// twitter.getUserTimeline({ screen_name: 'JeffTweedy', count: '2' }, error, success);



router.get('/', (req, res, next) => {
  twitter.getUserTimeline({ screen_name: 'JeffTweedy', count: '2'}, error, success)

  function error(){

  }
  function success(data){
    res.send(data)
  }
  // .catch(next)
})

// function getTweetsAsync() {
//   return new Promise(function (resolve, reject) {
//     twitter.getUserTimeline({ screen_name: 'JeffTweedy', count: '2' },error, success)

// }

// function readFileAsync (file, encoding) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(file, encoding, function (err, data) {
//       if (err) return reject(err) // rejects the promise with `err` as the reason
//       resolve(data)               // fulfills the promise with `data` as the value
//     })
//   })
// }
// readFileAsync('myfile.txt').then(console.log, console.error)
