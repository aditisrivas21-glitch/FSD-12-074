import {stat} from "fs/promises";

const fstat=await stat("file1.js");
console.log("file size",fstat.size,"bytes");
console.log(`is file: ${fstat.isFile()}`);
console.log(`is folder: ${fstat.isDirectory()}`);
console.log(`is syslink: ${fstat.isSymbolicLink()}`);
console.log(`Created on: ${fstat.birthtime}`);
console.log(`Last Used: ${fstat.atime}`);


