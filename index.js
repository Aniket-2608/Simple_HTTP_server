const fs = require("fs")

fs.writeFile("index.html", "<h1>Hello World</h1>", (err)=>{
    console.log("new file Saved!")
})

fs.appendFile("index.html", "\n<p>This is Aniket Dayal</p>", ()=>{
    console.log("element Added")
})

const http = require("http");

const server = http.createServer((req, res)=>{
   
    fs.readFile("index.html", (err, data)=>{
        res.writeHead(200, {"Content-type" : "text/html"})
        res.write(data)
        return res.end();
    })
})

server.listen(5000, ()=>{
    console.log("the server is running in port 5000")
})