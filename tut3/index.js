/* NPM MODULES */

console.log("testing inside our index.js !")

/* 
npm i nodemon -g
-g ----> installs the package globally

nodemon is a utility that monitors for changes in files within a Node.js application. It automatically restarts your application when it detects any changes, so you don’t have to manually stop and restart your server during development. It saves a lot of time, especially when working on larger projects!

For example, if you're building an API with Node.js and making changes to your code, nodemon will automatically restart your server every time you save a file, keeping everything in sync.

nodemone default looks for index.js , use command in the terminal ---> nodemon
if you want to use a different file , use nodemon followed by filename (eg. server.js) ---> nodemon server


---------------------------------------------------------------------------
npm init -----> initialized package.json  tells npm what packages to install    
------------------------------------------------------------------------------
node_modules contains all the dependencies...
we create a .gitignore file and list node_modules in it to ensure node_modules is not pushed into the repo(push less data)..
whenever we clone a repository use command "npm install" , the npm will read package.json file and install all the dependencies in the package.json file


*/

