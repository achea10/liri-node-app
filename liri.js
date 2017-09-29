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
	}
} 

var myTweets = function() {
	var client = new Twitter (keys.twitterKeys);
	var params = {}

}

var spotifySong = function() {

}

var movies = function() {

}

var whatItSay = function() {

}