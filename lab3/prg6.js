import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Home Page");
    res.end(`
      <a href ="/product">product</a>
      <a href ="/contact">contact us</a>
    `);
  } else if (req.url === "/product") {
    const stream = createReadStream("product.html", { encoding: "utf-8" });
    stream.pipe(res);
  } else if (req.url === "/contact") {
    const stream = createReadStream("contact.html", { encoding: "utf-8" });
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => console.log("prg6 is running..."));
