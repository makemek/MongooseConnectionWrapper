# monnoob
Facade class for creating a safer database connection to ```MongoDB``` via ```Mongoose``` with simpler interfaces.
It can also automatically disconnect from MongoDB when Node.js process is terminated.
This module exposes frequently used mongoose's interfaces such as ```Mongoose#createConnection``` and ```Mongoose#Schema```.

## Installation
Stable release ```npm install git://github.com/makemek/monnoob.git```  
Latest build ```npm install git://github.com/makemek/monnoob.git#dev```  

## Usage
```javascript
var wrapper = require('monnoob'); 
var connection = new wrapper.connection(host, database, port, username, password);
connection.open(); // Establish a connection to the database
/*
Do some stuff
...
*/

// To compile a schema, you can do so just like mongoose
var model = connection.model(schemaName, schema);

connection.close(); // Terminate a connection
```

## Extra Utilities
monnoob exposes some utility so that It can be used without having to ```require('mongoose')```  

**Interface**       | **Output**      |  
monnoob#Schema      | Mongoose#Schema |  
