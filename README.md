# timestamp-microservice-api  
Get the UTC and unix timestamp for a particular date in JSON format.

The timestamp can be obtained by the following request:-
GET [project URL]/api/timestamp/:date_string

### Examples   
Request:- GET localhost:3000/api/timestamp/2015-12-25  
Response:- {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

Request:- GET localhost:3000/api/timestamp/randomString  
Response:- {"error":"Invalid Date"}

### Installation steps  
1. git clone https://github.com/iamtanay7/timestamp-microservice-api.git  
2. cd timestamp-microservice-api  
3. npm install  
4. node index.js  

The server will start listening for connections on port 3000. 
