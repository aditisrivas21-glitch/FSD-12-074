import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
 
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify({ msg: "all users" }));
  } else if (req.url === "/api/users" && req.method === "POST") {
    res.end(JSON.stringify({ msg: "add user" }));
  } else if (req.url === "/api/users/1" && req.method === "GET") {
    res.end(JSON.stringify(getUsers()));
  } else if (req.url === "/api/users/1" && req.method === "PUT") {
    res.end(JSON.stringify({ msg: "update user 1" }));
  } else if (req.url === "/api/users/1" && req.method === "DELETE") {
    res.end(JSON.stringify({ msg: "remove 1" }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ msg: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("prg7 is running...");
});
