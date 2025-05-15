import fs from "fs";
// CREATE - Write data to a file 
const fileName = "example.txt";
fs.writeFile(fileName, "Hello, this is a CRUD example in Node.js", (err) => { 
    if (err) throw err; 
    console.log("File created and data written!"); 
 
    // READ - Read the file content 
    fs.readFile(fileName, "utf8", (err, data) => { 
        if (err) throw err; 
        console.log("File content:", data); 
 
        // UPDATE - Append new data 
        fs.appendFile(fileName, "\nNew data appended!", (err) => { 
            if (err) throw err; 
            console.log("Data appended!"); 
 
            // DELETE - Delete the file 
            fs.unlink(fileName, (err) => { 
                if (err) throw err; 
                console.log("File deleted!"); 
            }); 
        }); 
    }); 
}); 
