import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>Home Page</h1>");
    res.end(`
      <a href='/product >Product Page</a>
      <a href='/contact>Contact Us</a>
      `);
  } else if (req.url === "/product") {
    res.write(`
            <h1>Iphone XL</h1>
            <h2> Price: 90000</h2>
            <h3> Discount: 30%</h3>
    `);
    res.end();
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Us");
  } else {
    res.statusCode = 404;
    res.end(`
            <h1> Page not found</h1>
            <a href="/">Home</a>
            `);
  }
});

server.listen(3000, () => console.log("prg5  runs in 3000..."));
