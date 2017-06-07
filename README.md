# liri-node-app
liri - Language Interpretation and Recognition Interface

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

To run this application you will need Node.JS and NPM installed on your system.
npm install twitter
npm install fs
npm install request
npm install OMDBapi
npm install node-spotify-api

Installing

First, clone the project:

git clone https://github.com/FalseFlash/liri-node-app.git
Inside of the folder in which you've cloned the files to, run the following command:

npm install
Running the application

Grab tweets from Twitter: node liri my-tweets

Search a song on Spotify: node liri spotify-this-song [song]

Get information about a movie: node liri movie-this [movie]

Get input from random.txt file : node liri do-what-it-says

All commands and output are logged to the log.txt file.


Built With

Node.JS - The backend this application is built on
Twitter - Cannot have tweets without twitter 😄
Spotify - Used to get song information
OMDb API - Used to get movie information
