# Robotstore
This is a web application for an online Robot shop store.

Here are the prerequisites for the application:
+ MongoDB v3.4.9
+ SpringBoot v1.5.8
+ AngularJs v1.6.6
+ Node.js v6.11.3
+ Karma v1.7.1
+ Jasmine v2.8.0

## Start the application
You need to:
+ Start MongoDB: `sudo service mongod start`
+ Start SpringBoot with Gradle: `gradle bootRun`
+ Start Node.js: `node server.js`
+ Open the following URL with your favorite browser: **http://localhost:9090**

## Backend
The backend exposes a REST web service. Here are the APIs:
+ **POST**    /robot            Add a new robot
+ **GET**     /robot/{robotId}  Finds robot by ID
+ **DELETE**  /robot/{robotId}  Deletes a robot

## Frontend
The AngularJs app uses **UI-Router** and **NgAnimate**
The following routes are defined:
+ **/**: Homepage
  * StoreController: loads all robots through the **productService**
+ **/product/:id**: Show robot details
  * ProductController: finds the robot based on the ID, and also has the function **delete(id)**, used to delete a robot. This controller uses the **productService**
+ **/product/add**: Add a new robot
  * AddProductController: adds a new robot through the **productService**

There is service **titleService** for setting the title of the page.

There is a **galleryController** to show a gallery of images.

## Unit test with Karma and Jasmine
Start the unit tests with the command: `karma start`
### Source
https://www.callicoder.com/spring-boot-mongodb-angular-js-rest-api-tutorial/

