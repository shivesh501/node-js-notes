/* Node Js is a javascript runtime that helps in running code outside the browser typically on the sever side
Difference between NOde js and vanilla js --> node runs on server(backend) not in the browser(front end)
thus the console is the terminal window (since the code is no longer running in the browser)

it is a global object instead of a window object --> console.log(global) to see the global object
it has some common core modules(for the filesystem and operating system)
it has something called as CommonJS modules(we use the require statement instead of import(different syntax)) instead of ES6 modules
*/

// console.log(global);

/*//\\//\\///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\ */

/*
const os = require('os'); // this is how we import the core modules..
const path = require('path');
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename));//gives the same output as console.log(__dirname), it basically gives the path(directory in which __filename is located)
console.log(path.basename(__filename));//only give the filename as the output(in this case server.js)
console.log(path.extname(__filename));//just gives the extension of the filename(in this case .js )
console.log(path.parse(__filename));//gives an object containing the above information

*/

const {add,subtract,multiply,divide} = require('./math'); //to import other files.. i.e. which are non core modules
//instead of destructuring we can also do math.add(2,3)....--> const math = require('./math')
console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));






