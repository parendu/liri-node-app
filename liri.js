
var command = process.argv[2];
var command2 = process.argv[3];


//require keys file
var keys = require('./keys');
var fs = require('fs');


if ( command === 'my-tweets') {
	// npm install twitter first
	var twitter = require('twitter');

	//put my keys into twitter
	var myTwitter = new twitter(keys.myTwitKey);

	// search key word is my screen name and only display 20 tweets
	var param = {
	screen_name: 'mashipa1',
	count: 20
	}

	myTwitter.get('statuses/user_timeline', param, showIt);

	function showIt (err, tweets, response) {
		if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
		for (var i = 0 ; i< tweets.length; i++) {
		console.log(tweets[i].text);
		}
	}
} 

else if ( command === 'spotify-this-song' ) {

	var http = require("http");
	
	http.createServer(function(request, response) {
  		response.writeHead(200, {"Content-Type": "text/plain"});
  		response.write("/index", indext.html);
  		response.end();
	}).listen(8888);

	var SpotifyWebApi = require('spotify-web-api-node');
	
	var spotifyApi = new SpotifyWebApi(keys.mySpotifyKey);

	var scopes = ['playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-public', 'user-library-read', 'user-read-private']

	var state = 'NJ';

	var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

	console.log(authorizeURL);

	spotifyApi.searchTracks('Love').then(function(data) {
    	console.log('Search by "Love"', data.body);
  	}, function(err) {
    console.error(err);
  	});

	console.log ("------------------------------------");

	console.log("Spotify asks redirect URL to provide the authorization URL, and I dont have a redirect URL ... ");

}

else if (command === "movie-this") {

	var request = require("request");

	//substract "< >" from the search
	var command2 = command2.substring(1, command2.length-1);

	//repalce space with '+'
	var movieKeyWords = command2.split(' ').join('+');
	
	var myMovie = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + keys.myOMDBKey.apikey + '&t=' + movieKeyWords;

	request (myMovie, function(err, res, body) {
		if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
		//turn JSON data into string
		var myData = JSON.parse(body);
		console.log (myData);

	})	
}

else if (command === "do-what-it-says") {
	fs.readFile ('./random.txt', 'utf-8', function(err, data){
		if (err) throw err;

		// turn data into an array
		var myArr = data.split("\n");

		command = myArr[0];
		command2 = "<" + myArr[1] + ">";

		console.log (command);
		console.log (command2);

		if ( command === 'my-tweets') {
	// npm install twitter first
	var twitter = require('twitter');

	//put my keys into twitter
	var myTwitter = new twitter(keys.myTwitKey);

	// search key word is my screen name and only display 20 tweets
	var param = {
	screen_name: 'TEST_NODE_YX',
	count: 20
	}

	myTwitter.get('statuses/user_timeline', param, showIt);

	function showIt (err, tweets, response) {
		if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
		for (var i = 0 ; i< tweets.length; i++) {
		console.log(tweets[i].text);
		}
	}
} 

else if ( command === 'spotify-this-song' ) {

	var http = require("http");
	
	http.createServer(function(request, response) {
  		response.writeHead(200, {"Content-Type": "text/plain"});
  		response.write("/index", indext.html);
  		response.end();
	}).listen(8888);

	var SpotifyWebApi = require('spotify-web-api-node');
	
	var spotifyApi = new SpotifyWebApi(keys.mySpotifyKey);

	var scopes = ['playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-public', 'user-library-read', 'user-read-private']

	var state = 'NJ';

	var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

	console.log(authorizeURL);

	spotifyApi.searchTracks('Love').then(function(data) {
    	console.log('Search by "Love"', data.body);
  	}, function(err) {
    console.error(err);
  	});

	console.log ("------------------------------------");

	console.log("Spotify asks redirect URL to provide the authorization URL, and I dont have a redirect URL ... ");

}

else if (command === "movie-this") {

	var request = require("request");

	//substract "< >" from the search
	var command2 = command2.substring(1, command2.length-1);

	//repalce space with '+'
	var movieKeyWords = command2.split(' ').join('+');
	
	var myMovie = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + keys.myOMDBKey.apikey + '&t=' + movieKeyWords;

	request (myMovie, function(err, res, body) {
		if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
		//turn JSON data into string
		var myData = JSON.parse(body);
		console.log (myData);

	})	
}


	})

	//console.log(inRandomFile);

}

