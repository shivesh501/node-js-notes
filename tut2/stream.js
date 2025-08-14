const fs = require('fs');

//instead of reading the entire data at once we can create a stream, more suitable for larger files
const rs = fs.createReadStream('./files/lorem.txt',{encoding: 'utf8'});
const ws = fs.createWriteStream('./files/new-lorem.txt');
/*
//one way to write data
rs.on('data',(dataChunk) => {
    ws.write(dataChunk);
}) */

// we can do what is done above or use rs.pipe() to write on the file
rs.pipe(ws);


