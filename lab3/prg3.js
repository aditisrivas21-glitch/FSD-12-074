import http from "http";

const server = http.createServer((req, res) => {
  console.log("Server hit by client");
  res.write("<h1>Hello Client </h1>");
  res.end();
});

server.listen(4444, () => {
  console.log("Server is running...");
});
