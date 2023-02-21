Testing Playground Repo

This repo exists as a simple web app with a react front end and a python flask back end. The code for both are contained in this repo and held in the coresponding front-end and back-end folders. The purpose of this repo is to provide a tangiable and ready to go app that coders can test writing unit, integration and end to end tests. 

Installation

front end: 
1. navigate to the front end folder through the terminal ('cd front-end' command) 
2. enter the 'npm install' command which will install the packages used in this repo to your local environment, you can see a list of all these packages in the package.json file in the front-end folder as well as the scripts that can be ran against the repo.

back end: 
1. navigate to the back end folder ('cd back-end' command). 
2. when operating within this repo you will want to be in the virtual environment for it (venv) which gives your local environment access to the resources and packages that the back end requires. Activate the venv with the 'source ./venv/bin/activate' command. To confirm that you have entered the venv check that your command line intereface looks like this: '(venv) ➜  back-end git:(main)'

Running the app

The app requires you go into the front end folder and run 'npm run start' to boot up the front end your localhost at port 3000 and for the back end you must run, while in the virtual environment, 'python3 app.y'