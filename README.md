# Module_07_LAB_HTTP_STATUS
Repository holding IFT458 Module 7 Lab 1 for Wenglarz_1215776016

In this project, I have created two server files that run on different ports, server.js is on port 3000 and server2.js is on port 4000. 

To start this project, you will need to restore project dependencies.

In server.js, I have set up the routes to return status codes 200, 201, 400, 404, and 500. They all have a brief message regarding the status code. See screenshots folder Images 1-5 for demonstration of these routes in the browser.

In server2.js, I have created middleware functions that log incoming requests, handles 404 errors and other errors too. There is also a try-catch statement that simulates asynchronous action and returns a 500 status code if there is an error. This is set up to have an error about 50% of the time. When there is an error, it throws a 500 status code and a message that goes with that. See screenshots folder Images 6-14 for demonstration of the routes and status codes. 