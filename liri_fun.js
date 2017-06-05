//create variable for argument

var option = process.argv[2];

//require keys

var keys = require('./keys');

// point var twitter to require twitter pkg
var twitter = require('twitter');

//set twitter keys int to twitter

var Twitter = new twitter(keys.myTwitterKey);

//if argument is 'my-tweets' - run myTweet function
if (option === 'my-tweets') {
	myTweet();
}


function myTweet() {

var param = {
screen_name: 'mashipa1',
count: 10

}

Twitter.get('statuses/user_timeline', param, function(err, tweets, response){
if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
		for (var i = 0 ; i< tweets.length; i++) {
		console.log(tweets[i].text);
		}


}); //closing request







}  //closing function