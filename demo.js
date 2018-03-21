#!/usr/bin/env node
var fs = require('fs')

 var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

if (fs.existsSync('./'+dirName)){
	console.log(dirName+" is existed")
	process.exit(1)
     }
     else{
 fs.mkdirSync("./" + dirName) // mkdir $1
 fs.mkdirSync('./'+dirName+'/css') // mkdir css
 fs.mkdirSync('./'+dirName+'/js') // mkdir js

 fs.writeFileSync("./"+dirName+"/index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
 fs.writeFileSync("./"+dirName+"/css/style.css", "h1{color: red;}")
 fs.writeFileSync("./"+dirName+"/js/main.js", "var string = 'Hello World'\nalert(string)")

 process.exit(0)
     }
