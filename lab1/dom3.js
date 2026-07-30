import{EventEmitter} from "events";
const button = new EventEmitter();
button.on("click",(uname)=>{
    console.log(`Button Clicked by  ${uname}`);
});
button.emit("click", "Aditi");
button.emit("click", "Ananya");
button.emit("click", "Anjali");
button.emit("click", "Ankita");
button.emit("click");