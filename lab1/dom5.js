import { EventEmitter } from 'events';

class DomClass extends EventEmitter{
    addEventListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removEventListner(eventName, callback){
        this.off(eventName, callback);
    }
dispatchEvent(eventName,eventData={}){
    const event = { 
        type: eventName,
        timestamp: new Date(),
        ...eventData,
    };
    this.emit(eventName, event)
}
}
const button = new DomClass();
const hanleClick = (event) => {
    console.log(`Button clicked type: ${event.type} at ${event.timestamp}`);
};
button.addEventListener("click", handleClick);
button.dispatchEvent("click",{
  target:"resetBtn",
});



