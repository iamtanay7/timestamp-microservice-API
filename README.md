# timestamp-microservice-api

Get the UTC and unix timestamp for a particular date in JSON format.

The timestamp can be obtained by the following request:-
GET [project URL]/api/timestamp/:date_string

Examples:-

Request:- GET localhost:3000/api/timestamp/2015-12-25  
Output:- {"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}

Request:- GET localhost:3000/api/timestamp/randomString  
Output:- {"error":"Invalid Date"}
