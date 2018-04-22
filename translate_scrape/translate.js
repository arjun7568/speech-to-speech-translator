var express = require('express');
var app = express();
var translate = require('google-translate-api');

app.listen('5000');

app.get('/:lang1/:lang2/:textToTranslate', returnTranslation);

function returnTranslation(request, response) {
  let data = request.params;
  let language1 = data.lang1.substring(0,2);
  let language2 = data.lang2.substring(0,2);
  let textToBeTranslated = data.textToTranslate;
  let translation = {
    text: ""
  };

	translate(textToBeTranslated, {from: language1, to: language2}).then(res => {
    console.log(res.text);
    translation.text = res.text;
	}).catch(err => {
    console.error(err);
	});

  setTimeout(() => response.send(translation), 2000);
}
