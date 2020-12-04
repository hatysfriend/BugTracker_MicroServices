General Information
The Bugtrace application is a bug tracking software that allows users to easily manage bug reports.  It is designed as a simplified Kanban board taking inspiration from tools such as trello and other bug tracking tools.  The simple drag and drop interface makes changing the status of bugs simple and allows users a fun and modern interface to interact with.  The software is currently in an alpha development phase and as such it is missing some features (editing of tags, management of archived bugs, user management, personalization etc).  
The Github link for the project can be found below
https://github.com/hatysfriend/BugTracker_MicroServices

Running App
To run the application, you will need docker installed
https://www.docker.com/get-started
1.	Clone the repository to your local machine
2.	cd into the BugTracker_MicroServices folder
3.	Run the API (run the following commands)
a.	cd bug-tracker-api
b.	docker-compose up
c.	API and Database should now be running
4.	Run the Angular client app
a.	Open a second console and run these commands
b.	cd bug-tracker-ng
c.	npm i
d.	ng serve
e.	Client app should be running, click on link or navigate to http://localhost:4200/

To view swagger UI please navigate to http://localhost:3002/api-docs/ in your browser
Please contact me if you have any issues getting it to run.  I have tested the process however there may be issues!

Technology Stack
The technology stack is as follows
CLIENT
•	Angular
•	Libraries
o	Dragula – drag and drop support
o	Rxjs – observable library
o	Bulma – scss framework
o	Jasmine – testing library
o	Karma – test runner
A.P.I
•	Node.js express
•	Mongo db
•	Libraries
o	Bcrypt.js – encryption
o	Mongoose – O.R.M
o	Jsonwebtoken – J.W.T verification library
o	Swagger-ui-express – open api documentation tool
o	nodemon – Realtime change compiler
o	mocha – testing library
o	chai – assertion library
o	eslint – linting support
