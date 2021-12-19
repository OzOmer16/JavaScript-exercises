const fs = require("fs")

const data = [
    {name:"John", age:30},
    {name:"David", age:54},
    {name:"Selim", age:32},
    {name:"Ömer", age:21},
]

// Remove the folder
fs.rmdir(__dirname + "/deleteDirectory",{recursive: true},(err)=>{
    if(err) throw Error(err)
    console.log("Directory has been deleted")
})


//Create a new folder
fs.mkdir("newDirectory",(err)=>{
    if(err) throw Error(err)
    console.log("a new directory has been created")
})

// We can check the file
fs.stat(__dirname + "/readFile.json",(err,stats)=>{
    if(err) throw Error(err)
    console.log("path exists")
    console.log("is it file ?" + " " + stats.isFile())
})


// Read files

fs.readFile(__dirname + "/readFile.json",(err,data)=>{
    if(err) throw Error(err)
    console.log("read file operation successful")
    console.log(JSON.parse(data))
})

//Write files
//It creates a new file if does not exist

fs.writeFile(__dirname + "/writeFile.json", JSON.stringify(data,null,2),(err)=>{
    if(err) throw Error(err)
    console.log("write file operation successful")
})


//Append data to the file 
//It creates a new file if does not exist
fs.appendFile(__dirname + "/appendFile.txt","CSS",(err)=>{
      if(err) throw Error(err)
      console.log("append file operation successful")
})


// Deletes the file
fs.unlink(__dirname + "/unlinkFile.txt",(err)=>{
    if(err) throw Error(err)
    console.log("Delete file operation successfull")
})

//Rename the file
fs.rename("renameIt.txt","newName.txt",(err)=>{
    if(err) throw Error(err)
    console.log("Rename file operation successful")
})