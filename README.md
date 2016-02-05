# MongooseConnectionWrapper
```Mongoose``` wrapper for creating database connection to MongoDB via Mongoose with ability to automatically disconnect from MongoDB when Node.js process is terminated.
This module exposes frequently used mongoose's interfaces such as ```Mongoose#createConnection``` and ```Mongoose#Schema```.

## Installation
```npm install git://github.com/makemek/MongooseWrapper.git#dev```

## Usage
```javascript
var wrapper = require(mongooseConnectionWrapper); 
var connection = new wrapper.connection(host, database, port, username, password);
var db = connection.open(); // 'db' is the returned value from Mongoose#createConnection
/*
Do some stuff
...
*/
connection.close();
```

## Extra Utilities
MongooseConnectionWrapper exposes some utility so that It can be used without having to ```require('mongoose')```  

**Interface**                         | **Output**      |  
MongooseConnectionWrapper#Schema      | Mongoose#Schema |  
