import { EventEmitter } from 'events';

const form = new EventEmitter();
form.on("submit",(uname,password)=>{
    console.log('form Submitted')
}