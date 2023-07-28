const http = require('http'); // import
const serveStatic = require('./utils/static-file-serve'); // import 
function handleRequestAndResponse(request, response){x
    console.log('Request and Response... ',request.url);
    // Write on Client Side
    // response write on client (view source)
    serveStatic(request, response); // call the function and pass response object
    // response.write('<h1>Hello Client I am Server </h1>');
    // response.write('<h2>Hi Client I am Server </h2>');
    // response.write('<h3>Ok Client I am Server </h3>');
    // response.end(); // Flush + Response End
}
const server = http.createServer(handleRequestAndResponse);
server.listen(7777, (err)=>{
    if(err){
        console.log('Server Crash ', err);
    }
    else{
        console.log('Server Start');
    }
})