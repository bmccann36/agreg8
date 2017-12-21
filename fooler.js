
	//Callback functions
	var error = function (err, response, body) {
    console.log('banana')
    console.log( err);
};
var success = function (data) {
    const result = JSON.parse(data)
    // console.log('Data [%s]', typeof data);
    console.log(result.length, 'length' )
    console.log(result[0].text)
};

var Twitter = require('twitter-node-client').Twitter;


// make a directory in the root folder of your project called data
// copy the node_modules/twitter-node-client/twitter_config file over into data/twitter_config`
// Open `data/twitter_config` and supply your applications `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' to the appropriate fields in your data/twitter_config file


const keys = require('./data/twitter_config')

  var twitter = new Twitter(keys);

twitter.getUserTimeline({ screen_name: 'JeffTweedy', count: '2'}, error, success);
///
