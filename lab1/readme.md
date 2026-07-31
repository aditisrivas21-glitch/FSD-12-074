#EventLoop 
JS is synchronous and single threaded bydefault


## There can be asyn behaviour

-with BrowerAPI-setTimeout,SetInterval,setImmediate,nextTick

-with promises

-with event handlers

-(promises)a function not executed immedieately but it must be executed after a while it has some status during the execution at final it may resolve(succesful) or reject(unsuccesful)

## call back function

=> that pass an argument or the parameter to another function

## Modern JS
Modern Javascript is div into 2 cateogries:-

1) common js (.cjs)----> supports OOPS -->require 
- priority (nextTick,Promise,setImmediate/setTimeout)
2) module js (.mjs)----> follow modular approach-->import 
- priority (Promise, nextTick, setImmediate/setTimeout)


