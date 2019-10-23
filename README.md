# nodejs-fabric-example
The purpose of this project is to provide a sample of how a Node.js application could be used to interact with Hyperledger Fabric.

## PART 1: A Web Application

Taking a sample web application layout:

```
 -----------                     ---------------                     _------_
|           |                   |               |                   (.______.)
|  Browser  |                   |      Web      |                   |        |
|           |                   |  Application  |                   |  Data  |
|           |                   |               |                   |        |
 -----------                     ---------------                    `.______.'       

```

JavaScript can run in both the Browser and can execute the backend web Application. JavaScript in the browser handles how to render data and retrieve data from the application.

[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) is an acronym for interacting with persistent data (create, read, update, delete). A popular technique to implement CRUD operations as [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) APIs. The [HTTP verbs](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) map to each operation. 

| Operation | HTTP         |
|-----------|--------------|
| Create    | POST         |
| Read      | GET          |
| Update    | PUT or PATCH |
| Delete    | DELETE       |

In this example, the `index.js` file uses the Express Node.js package to create functions for each operator. 
> There are 2 GET operators, one that gets all cars and one that gets an individual car.

A simplified [Data Access Layer](https://en.wikipedia.org/wiki/Data_access_layer) helper class `in_memory_database.js` has been written, initially backed by a simple in-memory JSON object array. This allows for the example to expand to implement a Hyperledger Fabric DAL in the future. 

All of the browser rendering code was written directly into the `index.html` file. 

### Prequisites

You need a Node.js environment to experiment with the Node.js webapp.

Installing [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) allows you to manage multiple different Node.js runtime environments on your laptop. 

During the development phase its best to have the `nodemon` tool available. 

```
nvm use lts/dubnium
npm install -g nodemon
```

The [Postman](https://www.getpostman.com/) application is a great tool for exercising the REST APIs directly. 

### Up and running

Make sure the packages are installed and start up the backend web application.

```
nvm use lts/dubnium
cd ~/src/nodejs-fabric-example/webapp
npm install
nodemon index.js
```

Open a web browser to [http://localhost:3000](http://locahost:3000)


## PART 2: Chaincode development

The chaincode is a fork of the original [Fabcar chancode](https://github.com/hyperledger/fabric-samples/tree/release-1.4/chaincode/fabcar/typescript/) sample.

### Prerequisites 

The IBM Blockchain Platform VS Code extension is a easy way to setup your chaincode development environment for learning purposes. 

[https://cloud.ibm.com/docs/services/blockchain?topic=blockchain-develop-vscode](https://cloud.ibm.com/docs/services/blockchain?topic=blockchain-develop-vscode)

### Up and running

1. Load the chaincode directory into a VS Code project
2. Switch to the IBM Blockchain Platform extension tab
3. Start a Local Fabric environment
4. Package the Open Project
5. Install the package into the Local Fabric environment
6. Instantiate the package in the Local Fabric environment
7. Under the Fabric Gateways -> Channels -> mychannel -> fabcar@1.0.0 you will see the methods from your chaincode. Make sure you call `initLedger` if you did not do so during step 6.
8. Run `queryAllCars` to see the current list of assets in the world state database.

## Repository information

This repository contains some example best practices for open source repositories, including [LICENSE](LICENSE) file, boilerplate [README.md](README.md),  [CONTRIBUTING.md](CONTRIBUTING.md), and [MAINTAINERS.md](MAINTAINERS.md) files. These may be copied into a new or existing project to make it easier for developers not on a project team to collaborate.

**NOTE: While this boilerplate project uses the Apache 2.0 license, when
establishing a new repo using this template, please use the
license that was approved for your project.**

**NOTE: This repository has been configured with the [DCO bot](https://github.com/probot/dco).
When you set up a new repository that uses the Apache license, you should
use the DCO to manage contributions. The DCO bot will help enforce that.
Please contact one of the IBM GH Org stewards.**
