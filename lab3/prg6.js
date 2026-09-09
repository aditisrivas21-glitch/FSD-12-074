import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("<h1>Home Page");
  else if (req.url === "/product") {
    const stream = createReadStream("product.html", { encoding: "utf-8" });
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => console.log("prg6 is running..."));
