<h1 style="font-weight:normal">
  <a href="https://www.jalcantara.pro">
    <img src=https://avatars1.githubusercontent.com/u/33139172?s=40&amp;v=4 alt="Jalcantara" width=35>
  </a>
  &nbsp;GoingApp&nbsp;
  <a href="https://www.jalcantara.pro"><img src=https://img.shields.io/badge/purpose-fun-brightgreen.svg></a>
  <a href="https://www.jalcantara.pro/start"><img src=https://img.shields.io/badge/Try%20it-live-green.svg></a>
  <a href="https://github.com/sourcerer-io/sourcerer-app/blob/master/LICENSE.md"><img src=https://img.shields.io/badge/license-MIT-green.svg?colorB=ff0000></a>
</h1>

A profile & contact API for anyone.

[//]: # (SHOWCASE)

Features
========
* Profile creation filling up a form
* Retrieve & update your information through the available endpoints
* Connect your number with Twilio to enable the contact-me endpoint 
* Make it easier to start with a website using your up-to-date information, mass-job-application, or to share facts about yourself

Creating your profile is just the first step. Some of the things on our roadmap include:
* Connect your LinkedIn, Glassdoor, git,...
* Front-end library to add a chat window to contact through sms

[//]: # (Get started)


Requirements
============
* Node.js & MongoDB installed. If not. Check these => [Node](https://nodejs.org/en/download/package-manager/), [MongoDB](https://docs.mongodb.com/manual/installation/).
* Twilio Web Server Library 
* Bash for Windows (`git bash` should suffice)

[//]: # (Usage)

[//]: # (Internals)

Building a quick API From scratch
=======
# Clone or Download the [API Template](#) repository to have the folders & files created 
# Install Node.js & MongoDB
# init the npm environment to create a package.json file. (Optional) Input the values that you want to fill out
```
npm init
```
# Add the necessary packages: 
```
npm install --save-dev nodemon
```
```
npm install express --save
```
# Open the package.json file and add this task to the script
```
"start": "nodemon server.js"
```
# Start your database. 
On Mac, run 
```
mongod
```  
For Windows, follow the guide below. 

# Start your server. 
Go to the terminal, on your project directory, and run
```
npm run start
``` 
=======
Installing MongoDB on Windows 10
=======
If you, like me, want to first test it all in your machine and are stuck with a Win10, 
* Go to mongodb.com to navigate to or click in [this page](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-4.0.10-signed.msi/download) & download the .msi file for windows 10. 
* Click on the .msi file. 
* Follow the installation wizzard.
* When complete, locate the mongod.exe file, should be in the version folder: 
```
C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe
```
* Create a new directory for your data 
```
C:\data\db\
``` 
* To start the MongoDB server just run mongod.exe

License
=======
GoingApp is under the MIT license. See the [LICENSE](https://github.com/jalcantarab/GoingApp/blob/master/LICENSE) for more information.

Links
=====
* [Personal Site, using the API](https://jalcantara.pro/)