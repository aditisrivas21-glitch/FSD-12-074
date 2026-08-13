import { writeFile, appendFile,readFile} from "fs/promises";

//await writeFile("hello.txt", "Aditi Srivastava");

await appendFile("hello.txt", "\nFS is much easy than others😊");

const content=await readFile("hello.txt", "utf-8");
console.log(content);