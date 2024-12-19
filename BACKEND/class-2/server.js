// import modules
const http = require("http");
const fs = require("fs");
const os = require ("os");
const path = require ("path");

//Create Server
const servers = http.createServer((req, res) => {
    if((req.url = "/")){
        res.writeHead(200);
        res.end("Home page");
       }else if(req.url==="/contact"){
            res.writeHead(200);
            res.end("Contact page");
        }
    });

//Server listening
servers.listen(4000,()=>{
    console.log("server is running on 4000")
});