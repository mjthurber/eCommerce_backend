# eCommerce_backend

## eCommerce backend
This is a simple backend repo that uses mySQL, express, and sequelize. It is designed to work with insomnia

## Setup
Install dependencies:

npm install 

## Run the application:

node server.js

## Usage
The system allows you to perform the following actions as seen in this video, specifically CRUD operations.

## Video Walkthrough
[https://drive.google.com/file/d/1Ql68eQQ3Ih0bDHEhVkVfLXbS9l2mGTHi](https://drive.google.com/file/d/16gBP_WSzXTXPgX5xTwnSNRQ-cHu1hNQT/view)

## Code Overview
server.js: Entry point of the application, prompts the user for actions and invokes corresponding functions. ./config/connection.js: Configuration for Sequelize database connection. ./models: Contains users, thoughts, and a reaction schema, which corresponds to the user model. The different actions are within the controller folder, and they are imported into the api routes folder.

