//create variable for argument

var option = process.argv[2];
var option1 = process.argv[3];

//require keys

var keys = require('./keys.js');
var fs = require('fs');

// point var twitter to require twitter pkg
var twitter = require('twitter');

//set twitter keys int to twitter

var Twitter = new twitter(keys.TwitterKey);

//require request
var request = require('request');

//set spotify keys
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify(keys.SpotifyKey);

//if argument is 'my-tweets' - run myTweet function


switch (option) {
    case "my-tweets":
        myTweet()
        break;
    case "movie-this":
            console.log(process.argv);
        if (option1) {
            movieThis(option1);
        } else {
            movieThis("Mr. Nobody")
        }
        break;
    case "spotify-this-song":
            console.log(process.argv);
        if (option1) {
            spotifyThisSong(option1)
        } else {
            spotifyThisSong("The Sign")
        }
        break;
    case "do-what-it-says":
        console.log(process.argv);
        doWhatItSays()
        break;

    default:

        console.log("Please enter valid arguments - my-tweets, movie-this, spotify-this-song");

} //swith closing



//-----------------MyTweet-------function

// myTweet function to display screen name mashipa1
function myTweet() {

    // point var twitter to require twitter pkg
    //var twitter = require('twitter');

    //set twitter keys int to twitter

    //var Twitter = new twitter(keys.TwitterKey);

    var param = {
        screen_name: 'mashipa1',
        count: 10

    }

    Twitter.get('statuses/user_timeline', param, function(err, tweets, response) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        for (var i = 0; i < tweets.length; i++) {


            console.log(tweets[i].created_at + ": " + tweets[i].text);
        }


    }); //closing request

} //closing myTweet function
//--------------------------
//function to list movie information 
//use omdbapi pkg

function movieThis(option1) {

    //var request = require('request');

    //omdbapi api 

    var movieName = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + keys.OMDBKey.apikey + '&t=' + option1;

    request(movieName, function(err, res, body) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        //turn JSON data into string
        var myData = JSON.parse(body);
        console.log("=======Movie info=========");
        console.log(" ");
       // console.log("command line request: " + process.argv);
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

        // append output to log.txt
        fs.appendFile('log.txt', "command line request: " + process.argv);
        fs.appendFile('log.txt', "----------" + myData.Title + "---------");
        fs.appendFile('log.txt', myData.Title);
        fs.appendFile('log.txt', myData.Year);
        fs.appendFile('log.txt', myData.imdbRating);
        fs.appendFile('log.txt', myData.Country);
        fs.appendFile('log.txt', myData.Language);
        fs.appendFile('log.txt', myData.Plot);
        fs.appendFile('log.txt', myData.Actors);
        fs.appendFile('log.txt', "-----------------------------");

    });

}

//------------------movie-this--------------ends--
//--------------spotify-this-song-------------start--


function spotifyThisSong(option1) {


    //console.log("input song: " + option1);
 
    spotify.search({ type: 'track', query: option1 }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // //---------------Song artist, name, URL and Album-----
        console.log("====Song information - Artist, Name, Preview URL and Album====");
        //console.log(process.argv);
        console.log(" ");
        console.log('The Artist: ' + data.tracks.items[0].album.artists[0].name);
        console.log('Song Title: ' + data.tracks.items[0].name);
        console.log('Preview the Song: ' + data.tracks.items[0].preview_url);
        console.log('The Album: ' + data.tracks.items[0].album.name);
        console.log(" ");
        console.log("=====================================================");

        // append output to log.txt
        fs.appendFile('log.txt', "----------" + option1 + "---------")
        fs.appendFile('log.txt', "command line request: " + process.argv);
        fs.appendFile('log.txt', data.tracks.items[0].album.artists[0].name);
        fs.appendFile('log.txt', data.tracks.items[0].name);
        fs.appendFile('log.txt', data.tracks.items[0].preview_url);
        fs.appendFile('log.txt', data.tracks.items[0].album.name);
        fs.appendFile('log.txt', "-----------------------------");
    });

}


//--------------spotify-this-song-------------Ends--
//---------------do-what-it-says---------------

function doWhatItSays() {
    fs.readFile('./random.txt', 'utf-8', function(err, data) {
        if (err) throw err;

        // turn data into an array
        var myArr = data.split("\n");

        option = myArr[0];
        option1 = myArr[1];

        if (option === "movie-this\r") {

            movieThis(option1)

        } else {
            console.log(option + " and " + option1);
        }


    });

} //function closing
