var express = require('express');
var app = express();
var translate = require('google-translate-api');
 
	translate('I don\'t like to think about stuff like that', {from: 'en', to: 'fr'}).then(res => {
    console.log(res.text);
	}).catch(err => {
    console.error(err);
	});

app.listen('5000');
console.log('Magic happens on port 5000');
