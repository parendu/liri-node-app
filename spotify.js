



//var keys = require("./keys");

/*
 * This example shows how to search for a track. The endpoint is documented here:
 * https://developer.spotify.com/web-api/search-item/
 * Please note that this endpoint does not require authentication. However, using an access token
 * when making requests will give your application a higher rate limit.
 */

  var SpotifyWebApi = require('spotify-web-api-node');

// var spotifyApi = new spotifyWebApi(keys.SpotifyKey);


var spotifyApi = new SpotifyWebApi({
  clientId : 'feceb5fb62fa4092a6373109c8231671',
  clientSecret : '0b0b9f3028344978a0c312317f4bc49e'
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err.message);
  });




spotifyApi.searchTracks('Love', function(err, data) {
  if (err) {
    console.error('Something went wrong', err.message);
    return;
  }

  // Print some information about the results
  console.log('I got ' + data.body.tracks.total + ' results!');

  // Go through the first page of results
  var firstPage = data.body.tracks.items;
  console.log('The tracks in the first page are.. (popularity in parentheses)');

  /*
   * 0: All of Me (97)
   * 1: My Love (91)
   * 2: I Love This Life (78)
   * ...
   */
  firstPage.forEach(function(track, index) {
    console.log(index + ': ' + track.name + ' (' + track.popularity + ')');
  });
});