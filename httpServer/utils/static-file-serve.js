
const fs = require('fs'); // require same like import
// require - it is coming from common js module system
const path = require('path');
function serveStaticFile(request, response){
    let currentUrl = request.url;
    //console.log('Current URL is ', currentUrl);
    if(request.url === '/'){
        currentUrl = '/index.html';
    }
    const parentDir = path.normalize(__dirname+"/..");
    console.log('parent dir ', parentDir);
    console.log(currentUrl);
    const filePath = path.join(parentDir, 'public', currentUrl); // current directory path
    console.log('Full Path ', filePath);
    //const filePath = "d:\\abcd\\xyz\\public\\index.html";
//const filePath = '/Users/amitsrivastava/Documents/notes_project/http-server/public/index.html';
// readFile read the file from the Disk
fs.readFile(filePath, (err, content)=>{
    if(err){
        console.log('File Not Found..', err);
    }
    else{
        response.write(content); // Write content to the browser
        response.end(); // flush (response is end now)
        // send the content as a response
    }
})
}
module.exports = serveStaticFile; // here we export the function