// a function that i pass as an argument to another func which is then called later inside the func. it's callback func.

const mainFunc = (callBackFUnc) => {
    callBackFUnc("kiri");
}

const callBackFunc = data => {
    console.log(`i am calling this (${data}) from callback func`);
}

mainFunc(callBackFunc); //pass the callBackFunc as argument of mainFunc. and it's accept by the name callBackFunc. passed value is "kiri".