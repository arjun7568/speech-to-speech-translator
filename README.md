# Translate App


## Overview
This application takes voice inputs and outputs translated text-to-speech. It's written in React and Node.js.


## Requirements
* Google Chrome
* Node.js


## How to Run

### NodeJS
This project runs on NodeJS so it's needed to run the project. Go to "http://nodejs.org/en/download", download and install.

### React App
To run the react application that implements the text-to-speech and speech-to-text APIs, open a terminal window, go to the project directory and input ```npm install``` into the console.

This installs all of the dependencies needed to run the application.

To run the application, type ```npm start``` into the console.

This opens a browser window with the the application, however the translation functionality doesn't work unless the Translation API is running.

### Translation API
Open a new terminal window, "cd" into the "translate_scrape" folder and once again type ```npm install``` into the console to install the necessary dependences.

To run the application, type ```node translate.js``` into the console.


### CORS Bypass
The project still doesn't work because there is a Cross Origin Resource Sharing limitation set by Chrome. To bypass this, a chrome extension is needed.

Install the Chrome extension "Moesif Origin & CORS Changer".

Once installed, turn it on. The application should function properly.
