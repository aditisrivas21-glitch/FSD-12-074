import { EventEmitter } from "events";

const form = new EventEmitter();

form.on("submit", (uname, password) => {
  console.log("Form Submitted");
  console.log(`User name: ${uname}`);
  console.log(`User password: ${password}`);
});

form.emit("submit", "abc@abc.com", "123344");
