const Twitter = require('twitter-node-client').Twitter;

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

const keys = require('./data/twitter_config')

  var twitter = new Twitter(keys);

twitter.getUserTimeline({ screen_name: 'JeffTweedy', count: '2'}, error, success);
///
