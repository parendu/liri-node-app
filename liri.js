//set var twitter for twit package
 var twitter = require("twit");

  //set string variabl for twitter keys 
  var keys = require("./keys.js");

  //pass keys to twitter
  
  var twitter = new twitter(keys);
 

 //create argument for my tweet
  
  var option = process.argv[2];

   if (opton == "my-tweets") {
   		myTweets()

   }












  var myTweets = function () {
       
       var param = {
            q: '@mashipa1',  // REQUIRED
      		result_type: 'recent',
      		lang: 'en'  
       }

		twitter.get('search/tweets', params, function(err, data){
            if (err) return console.log(err);
   			var myData = data.statues[0].text;

		          console.log(myData);
		       	}); //read closing







  }   // function closing

