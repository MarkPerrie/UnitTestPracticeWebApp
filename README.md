# Testing Playground Repo

This repo exists as a simple web app with a react front end and a python flask back end. The code for both are contained in this repo and held in the coresponding front-end and back-end folders. The purpose of this repo is to provide a tangiable and ready to go app that coders can test writing unit, integration and end to end tests. A good way to keep this reusable is to create a branch off of main to use the app and keep the main branch in this default state so others can make use of the testing challenges.

## Installation

### front end: 
1. navigate to the front end folder through the terminal (`cd front-end` command) 
2. enter the `npm install` command which will install the packages used in this repo to your local environment, you can see a list of all these packages in the package.json file in the front-end folder as well as the scripts that can be ran against the repo.

### back end: 
1. navigate to the back end folder (`cd back-end` command). 
2. when operating within this repo you will want to be in the virtual environment for it (venv) which gives your local environment access to the resources and packages that the back end requires. Activate the venv with the `source ./venv/bin/activate` command. To confirm that you have entered the venv check that your command line intereface looks like this: `(venv) ➜  back-end git:(main)`

## Running the app

The app requires you go into the front end folder and run `npm run start` to boot up the front end your localhost at port **3000** and for the back end you must run, while in the virtual environment, `python3 app.y` which will run the back end server on port **5000** of localhost

## Running the tests

### front end:
- in the terminal type `npm run test` which will run all `xxxxx.test.js` unit test files. To run an individual test file type `npm test "file name"` into the terminal (`npm test src/components/Checklist/Checklist.test.js` will run the Checklist test file on its own. Handy when test suites start to get large!)

### back end:
- in the terminal (and in the virtual environment, venv, using the `source ./venv/bin/activate` command) type `pytest` to run all unit tests. To run specific tests then just type into the terminal `py.test tests_directory/foo.py tests_directory/bar.py -k`

## Challenges

### ********** CHALLENGE 1 **********
In both repos you will see I have partially written some unit test files. Complete both these unit test files so that they have 100% test coverage (`npm run test --coverage` for the front end andwrewrwerefdwerEWRWREW ). A very important habit to not get into here is chase getting 100% coverage above all else when unit testing. [This article on the subject explains why better than I will](https://methodpoet.com/100-code-coverage/#:~:text=For%20example%2C%20100%25%20code%20coverage).
### *********************************

### ********** CHALLENGE 2 **********
Naturally with the two files above finished it only makes sense to create unit test files for the full front end folder. You should have a test file for all the component javascript files as well as for the main homepage file and helper function file. (The back end will only need a single test file `test_app.py` as there is only one app file)
### *********************************

## ********** CHALLENGE 3 **********
Notice I have only told you how to run tests from the front or back end folders individually. A challenge will be to write a script that will allow you to rull ALL tests for both the front and back ends from the root folder of this repo, `UnitTestExample git:(main)`, rather than having to navigate into these folders using the `cd` command to run the tests here
## *********************************

# What Next?

At this point this repo will be well and truely unit testing so what is there to do next? You can build out the web app itself with more features to write more tests for, you can also use this as a place to practice integration tests and end-to-end (e2e) tests. This app importantly functions as a simple application with enough breadth of functionality to get you started so you can expermint with a familar environment (also will give experience with two different popular languages: Javascript and Python)
