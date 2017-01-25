/**
 * Created by devon on 2017-01-25.
 */
// link to connect
let connect = require('connect');

// create a new connect object
let app = connect();

// start the connect http server
app.listen(3000);
console.log('Connect server running on port 3000');