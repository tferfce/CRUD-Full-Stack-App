<h1> Crud Application </h1>

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Description](#description)



## General Info
This project is full stack crud application implemeneted with Spring Boot and React js. 



## Technologies
Requirements

* OpenJDK 1.8
* Maven 3.x
* Git 2.x
* MySQL 5.x
* Node.js 6.x

## Setup
To run this project first you need to follow some steps

* Step 1
    * Create a database in MySQL named springbootcrud
    * Make changes in application.properties so it matches your SQL information
      * username
      * password

* Step 2
   * Run Application.java located in ./springbootcrud-webapp/src/main/java/gr/publicsoft/springbootcrud. This will enable the back end in http://localhost:8080


* Step 3
```
$cd ../my-app
$npm install
$npm start
```

Connect React js with spring boot running in http://localhost:3000

You have a fully functional project!

## Description

* Implementing the back end with Spring Boot
   * SupplierController : This generates the APIs for function CRUD
   * Supplier : Describes the table that exists in springbootcrud Database. This table is auto created in database the first time you run the Application
   * SupplierRepository : By using JPA repository we have access to usefull methods and also we implement more methods in order to add functions in the appication
   * SupplierService : There we implement all the methods we later use to create the controler (get, post, put, delete)
   
* Implementing the front end with React Js
   * App.js : There we have all the routes that are connected with the components
   * components : We implement every component we need to "translate" back end services in front end. For example the AddSupplierComponent.jsx implements the addSupplier service we generated in Spring Boot
   * SupplierService.js : There we used axios HTTP client to gain access 
