var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

url = 'https://translate.google.com/#en/fr/Welcome';
phrase = 'Welcome to the internet'

fullUrl = url + phrase;

request(url, function(error, response, html) {
  var $ = cheerio.load(html);
  var translate = $('#result_box' +);
  console.log(translate.innerHTML);
})

app.listen('5000');
console.log('Magic happens on port 5000');
