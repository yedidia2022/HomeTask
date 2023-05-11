# Node.js + express + mongodb + mongoose REST API Example



Install

```sh

npm i mongoose
npm i dotenv
npm i exppres
npm i fs

 

## Structure

<pre> 
/src/
|-- api
|   |-- routers
|   |-- controllers
|   |-- functions
|   `-- models
|

|-- config
|-- lib
|   |-- express
|   |-- mongoose
|   |-- dotenv
|   |-- fs
|   |-- body-parser

`-- server.js
</pre> 

## Requirements

- [Nodejs](https://nodejs.org) 
- [MongoDB](https://www.mongodb.com) 



## Installation

**Npm**

## Development

### Start
## Add .env file should contain URL & PORT
    PORT=4342
    URL='mongodb://localhost:27017/HMoDB",

**terminal:** `node server.js ` 

**Description:** Start the project in development mode
## Routes:
    1. `/members`   // Creates member and show member .
        Request Method: POST,GET

    2. `/vaccinations`   // Creates vaccination and show member.
        Request Method: POST,GET
        

    3. `/vaccinationsToMember`   // Add vaccination to exist member.
        Request Method: POST,GET
       
    4. `/coronaVirusDates`   // update the illness date of member.
        Request Method: POST,GET

    5. `/memberDetailes`   // Show all the members datailes.
        Request Method: POST,GET
            

### Stop

**terminl:** `ctrl+c`
