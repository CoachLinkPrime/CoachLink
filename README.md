![License](https://img.shields.io/github/license/CoachLinkPrime/CoachLink.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/CoachLinkPrime/CoachLink.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/CoachLinkPrime/CoachLink.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/CoachLinkPrime/CoachLink.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/CoachLinkPrime/CoachLink.svg?style=for-the-badge)
    
# CoachLink

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

CoachLink is an application that connects ski and snowboard instructors with opportunities to teach at different clubs. Any user can create a gig (teaching opportunity) which is then hosted on the application, and any user can apply to a gig by browsing through possible opportunities. 

The ski and snowboard community is fairly spread-out, so discoverability of teaching opportunities is what this app aims to provide. Additionally this app addresses the goal of reducing barriers to beginners from all backgrounds so more people can access the ski and snowboard community with expert instruction from passionate professionals already part of the community. 

## Screenshots

<img src="./public/images/logo.png" />

## Built With

<a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

After cloning this Github repository to your computer, run npm install for all necessary dependencies. 


### Prerequisites

You will need all required dependencies listed in the json.package file; to do this, run npm install command in your terminal. 

### Installation

1-Fork the repository

2-Copy the SSH key in your new repository

3-In your terminal type... `git clone {paste SSH link}`

4-Navigate into the repository's folder in your terminal

5-Open VS Code (or editor of your choice) and open the folder

6-In the terminal of VS Code run  `npm install`  and `npm install @mui/material @emotion/react @emotion/styled` to install all dependencies

7-Create a `.env` file at the root of the project and paste this line into the file:
SERVER_SESSION_SECRET=superDuperSecret

8-Create a database named `coach_link` in PostgresSQL If you would like to name your database something else, you will need to change `coach_link` to the name of your new database name in server/modules/pool.js

9-The queries in the database.sql file are set up to create all the necessary tables that you need, as well as a dummy data table to test the app. Copy and paste those queries in the SQL query of the database. If this is going to production, leave out the dummy data.

To run the application locally:

10-Run `npm run server` in your VS Code terminal

11-Open a second terminal and run `npm run client`
## Usage
Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:3000/
<br>
Video walkthrough of application usage: https://we.tl/t-iOa0ENdzUY
## License

At this time, there is no license on this project. We created this during our time at Prime Digital Academy as students.

## Acknowledgements

Thank you to Prime Digital Academy for coordinating this opportunity and teaching our team the necessary skills to make this project awesome! Our team is comprised of: Bryce Morries, Max Simmons, Mandi Andrade, Keegan Odell, and Leila Sadr. We also want to thank our friends & families for the emotional support and encouragement throughout this process. Special thanks to Zach Lulavy for trusting us with his vision and sharing his UX/UI expertise and passion for snowboarding with us! We learned so much working with Zach and making CoachLink. 

## Contacts

<a href="https://www.linkedin.com/in/https://www.linkedin.com/in/zachary-lulavy/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:CoachLinkPrime@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>

-- OLD README BELOW
# Prime Solo Project Starting Repo
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.

## Use the Template for This Repository (Don't Clone)

- Don't Fork or Clone. Instead, click the `Use this Template` button, and make a copy to your personal account. Make the project `PUBLIC`!


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
