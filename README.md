# Udacity Frontend Nanodegree program

# Natural Language Process Web Page Project

## Table of Contents

* [About](#about)
* [Functions](#functions)
* [Project Goals](#project_goals)
* [Instructions](#instructions)
* [Technologies](#technologies)

## About

This is a project where it uses help of a wep api called MeaningCloud to determine various attributes of an article or blog post.

As a user, he can enter the text where user want to determine the attaributes in the web field available. Once user enter the text value, system will send a requests back and forth to server and web api and come up with the response, where user can see the attributes on the web page.

Natural language processing (NLP)

  Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

## Project Goals

The goal of this project is to practice with:

* Setting up Webpack
* Sass styles
* Webpack Loaders and Plugins
* Creating layouts and page design
* Service workers
* Using APIs and creating requests to external urls
* Natural language processing (NLP) using externel API

## Instructions

### _Setting up locally_

To set up the application on your local server follow the instrunctions below.

### _Get the code from remote repo_ 

1. git clone https://github.com/nadeesani-navaratne/Natural-Language-Processing---Udacity.git
2. Open the downloaded folder in your favourite IDE - VS code ,Atom etc
3. Install the dependencies using the command npm install

### Setting up the API

### Step 1: Signup for an API key

For the MeaningCloud API: You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis) Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK.

### Step 2: Environment Variables

Next we need to declare our API keys.
Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

* [ ] Create a new ` `  ` .env `  ` ` file in the root of your project
* [ ] Go to your .gitignore file and add ` `  ` .env `  ` ` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
* [ ] Fill the .env file with your API keys like this:

``` 
API_ID=**************************
API_KEY=**************************

```
### _Development Enviroment Setup_

1. Start the server in the terminal 
    - npm run build-dev
2. Open the browser 
    - http://localhost:8080/ (Usually will open automatically,Otheriwise try manually)

### _Production Enviroment Setup_

1. Build the project 
    - npm run build-prod
2. Start the server
    - npm start  
3. Open the browser 
    - http://localhost:8081/ (Usually will open automatically,Otheriwise try manually)

### _How to use_    
1. Open the url 
2. Enter text you want to determine the attributes.
3. Open the Developer tool and check for the console tab and check for the network tab for responses and data.
4. Check for the webpage for the output data


### _Test_

Here in this project unit test cases are written using jest framework.
To run the test cases 
 - npm test
It will display the test results.

## _Deploying_

Project has  deployed on  [Heroku](https://www.heroku.com/) 

### User
1.Browse the url
2.Enter text you want to determine the attributes.

## Technologies

* HTML
* CSS
* Javascript 
* Express web application framework
* HTTP access control CORS
* Body -parser
* Webpack
* Jest 
