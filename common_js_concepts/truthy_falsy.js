//truthy values is equal to 1. values are--
/*
1. true = it's boolean value true.
2. any numbers without 0 (zero) = 3,4,5,6,6,7.......
3. any string without empty string = { } // have white space, "string/ejjgjk"
4. empty object = {}
5. empty array = []
6. function is truthy.
*/



/*

//falsy value is equal to 0. values are--
1. false = it's boolean value false.
2. 0 = it's 0 but falsy.
3. -0 (negative zero) = falsy
3. empty string = ""
4. null
5. undefined
6. NaN =  not a number-> also it's falsy.
*/


const getTruthyOrFalsy = value => {
    // console.log(`value is ${value} and it's a ${Boolean(value)}y value.`); //output generate like this
    if (Boolean(value) === true) {
        console.log(`value is ${value} and it's a truthy value.`);
    } else {
        console.log(`value is ${value} and it's a falsy value.`);
    }
}


//truthy
getTruthyOrFalsy(true);
getTruthyOrFalsy(5);
getTruthyOrFalsy(" ");
getTruthyOrFalsy("iri");
getTruthyOrFalsy({});
getTruthyOrFalsy([]);
getTruthyOrFalsy(function () { });

//falsy
getTruthyOrFalsy(false)
getTruthyOrFalsy(0)
getTruthyOrFalsy(-0)
getTruthyOrFalsy("")
getTruthyOrFalsy(null)
getTruthyOrFalsy(undefined)
getTruthyOrFalsy(NaN)
