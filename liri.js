//create variable for argument

var option = process.argv[2];
var option1 = process.argv[3];

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

  switch (option) {
  	  case "my-tweets":
		      myTweet();
           break;
      case "movie-this":
		      movieThis();
           break;
       case "withraw":
       		 withraw();
              
             break;
         default:
         
        console.log("missing amount");
  } //swith closing





// myTweet function to display screen name mashipa1
function myTweet() {

// point var twitter to require twitter pkg
var twitter = require('twitter');

//set twitter keys int to twitter

var Twitter = new twitter(keys.myTwitterKey);

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

}  //closing myTweet function
//--------------------------
//function to list movie information 
//use omdbapi pkg

function movieThis(){

var request = require('request');

console.log(movieName);

//omdbapi api 

 var movieName = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + keys.OMDBKey.apikey + '&t=' + option1;

request (movieName, function(err, res, body) {
		if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
    	}
//turn JSON data into string
		var myData = JSON.parse(body);
		console.log("=======Movie info=========");
		console.log(" ");
		console.log("Title: " + myData.Title);
		console.log("Year: " + myData.Year);
		console.log("imdbRating: " + myData.imdbRating);
		console.log("Country: " + myData.Country);
		console.log("Language: " + myData.Language);
		console.log("Plot: " + myData.Plot);
		console.log("Actors: " + myData.Actors);
		//console.log("Rotten: " + myData.Rotten);
		console.log(" ");
		console.log("==========================");

	});

}


      