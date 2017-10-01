var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var APIkeys = require('./key.js');
var fs = require('fs');

var command = process.argv[2];

var commandArg = process.argv[3];

function switchCommand () {
	switch (command) {
		case 'my-tweets':
			myTweets();
		break;

		case 'spotify-this-song';
			spotifySong();
		break;

		case 'movie-this';
			movies();
		break; 

		case 'whatItSay';
			whatItSay();
		break;

		default:
			console.log("Invalid input try again"); 
	};
};

var myTweets = function() {
	var client = new Twitter (keys.twitterKeys);
	var params = {screen_name: 'Acheaac', count 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) {
      console.log('Twitter error' + error);
    } 
    else {
		for (var i = 0; i < tweets.length; i++) {
		console.log('Tweet: ' + tweets[i].text + '\n' + 'Created on: ' + tweets[i].created_at + '\n');}
		}

});

var spotifySong = function() {
	var spotify = new Spotify (keys.spoifiyKeys);
	if (process.argv.length <3) {
		spotify.search({type: 'track', query: 'The Sign Ace of Base'}, function (error, data) {
			if (error) {
				console.log(error);
			}
			else {
				console.log (
					"\nArtist: " + data.tracks.items[0].artist[0].name +
					"\nTitle: " + data.tracks.items[0].name +
					"\nPreview Link: " + data.tracks.items[0].preview_url +
					"\nAlbum: " + data.tracks.items[0].album.name;
					)
			}
		});
	}
};

var movies = function() {
	if (process.argv.length <3) {
		var queryURL = "http://www.omdbapi.com/?apikey=40e9cece&t=mr+nobody";
		request(queryURL, function(error, response, body) {
			if (error) {
				console.log(error);
			}
			else {
				console.log(

					)
			}
		})
	}

}

var whatItSay = function() {

}

