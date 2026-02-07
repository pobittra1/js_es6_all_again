/* 
--------
line's 1-44 from pobittra
--------- */


//global scope = any variable declared outside all functions or blocks.

const globalScopeData = "i am the data of global scope. any one can access me."

//hoisting
hoistingFunc("i am the func from 22 line. i am accessible from bottom line cause i hoisting method.");

//hoisting let and const data
// console.log(hoistingLetData); // get error cause hoisting isn't work for temporal dead zone.
// console.log(hoistingConstData); // get error cause hoisting isn't work for temporal dead zone.
// hoistingArrowFunc("i am not accessible from this line cause hoisting method is not work with arrow func");

//function can access
const printData = () => {
    console.log(globalScopeData);// calling the outside/global globalScopeData from this block scope func.

    const blockScopeData = "me block scope data. anyone can't access me, cause i am in a block area."
    console.log(blockScopeData);// print it from here but we can't access this data outside of this func.
}
printData();
// console.log(blockScopeData);// can't access blockScopeData. get error here


//-------hoisting--------
//hoisting = accessing functions declarations before initialization.

function hoistingFunc(x) {
    console.log(x);
}//try to access it in upper area . line number 6. but it.s not possible when it arrow func, let and const declearation.

let hoistingLetData = "have something"; //try to access it in upper area but can't
const hoistingConstData = "also have something here"; //try to access it in upper area but can't


// this func is not accessible in upper area cause it's won't work with hoisting method cause it's a arrow func.
const hoistingArrowFunc = x => {
    console.log(x);
}






/*
-----------------------
Readable version for reference
Refactored with AI assistance (ChatGPT)
-----------------------

// global scope = any variable declared outside all functions or blocks

const globalScopeData =
  "i am the data of global scope. anyone can access me.";

// -------- hoisting (function declaration) --------
hoistingFunc(
  "i am the func from below. i am accessible because function declaration supports hoisting."
);

// -------- block scope & global scope --------
const printData = () => {
  // accessing global scope data inside function
  console.log(globalScopeData);

  // block scoped data
  const blockScopeData =
    "i am block scope data. cannot be accessed outside this function.";
  console.log(blockScopeData);
};

printData();

// console.log(blockScopeData); // error: blockScopeData is not defined

// -------- hoisting explanation --------
// hoisting = JavaScript moves declarations to the top of the scope
// only function declarations are fully hoisted

function hoistingFunc(x) {
  console.log(x);
}

// let and const are not accessible before initialization
// console.log(hoistingLetData);   // error (temporal dead zone)
// console.log(hoistingConstData); // error

let hoistingLetData = "have something";
const hoistingConstData = "also have something here";

// arrow functions are NOT hoisted
// hoistingArrowFunc("will give error");

const hoistingArrowFunc = (x) => {
  console.log(x);
};


*/
